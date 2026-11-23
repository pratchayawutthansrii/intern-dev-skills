#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const errors = [];

const jsonFiles = [
  "skills.sh.json",
  ".agents/skills.json",
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  ".cursor-plugin/plugin.json",
  ".codex-plugin/plugin.json",
];

for (const rel of jsonFiles) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    errors.push(`Missing JSON manifest: ${rel}`);
    continue;
  }
  try {
    JSON.parse(fs.readFileSync(abs, "utf8"));
  } catch (err) {
    errors.push(`Invalid JSON in ${rel}: ${err.message}`);
  }
}

if (!fs.existsSync(skillsDir)) {
  errors.push("Missing skills/ directory");
} else {
  const entries = fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  if (entries.length === 0) {
    errors.push("No skill directories found inside skills/");
  }

  for (const dirName of entries) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(dirName)) {
      errors.push(`Skill directory must be kebab-case: ${dirName}`);
    }

    const skillMdPath = path.join(skillsDir, dirName, "SKILL.md");
    const readmePath = path.join(skillsDir, dirName, "README.md");

    if (!fs.existsSync(skillMdPath)) {
      errors.push(`Missing SKILL.md in skills/${dirName}`);
      continue;
    }

    if (!fs.existsSync(readmePath)) {
      errors.push(`Missing Thai review README.md in skills/${dirName}`);
    }

    const raw = fs.readFileSync(skillMdPath, "utf8");
    const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) {
      errors.push(`Missing YAML frontmatter in skills/${dirName}/SKILL.md`);
      continue;
    }

    const fm = fmMatch[1];
    const nameMatch = fm.match(/^name:\s*["']?([^"'\r\n]+)["']?/m);
    const descMatch = fm.match(/^description:\s*["']?([^\r\n]+)/m);

    if (!nameMatch) {
      errors.push(`Missing 'name' in frontmatter of skills/${dirName}/SKILL.md`);
    } else if (nameMatch[1].trim() !== dirName) {
      errors.push(
        `Frontmatter name '${nameMatch[1].trim()}' does not match folder '${dirName}'`,
      );
    }

    if (!descMatch) {
      errors.push(`Missing 'description' in frontmatter of skills/${dirName}/SKILL.md`);
    }

    const body = raw.slice(fmMatch[0].length).trim();
    if (body.length < 300) {
      errors.push(`SKILL.md body in skills/${dirName} is too short (${body.length} chars)`);
    }
  }

  console.log(`Checked ${entries.length} skills: ${entries.join(", ")}`);
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log("All manifests, SKILL.md files, and Thai review READMEs passed validation.");
