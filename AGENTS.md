# intern-dev-skills — Agent Instructions

This repository distributes production-tested **AI Agent Skills** for full-stack software engineering interns across Antigravity, Claude Code, Cursor, Codex, Gemini CLI, and any `npx skills`-compatible agent.

## Included Skills (`./skills/*`)

1. `skills/clean-editorial-ui` — Build clean, cohesive, non-AI-looking React/Tailwind UI aligned with existing site design systems.
2. `skills/backend-api-security` — Harden Express/Node/TypeScript APIs against OWASP Top 10, Broken Access Control, missing rate limits, and secret leaks.
3. `skills/seo-geo-performance` — Optimize sites for Google Page 1 SEO, AI Search/GEO (`llms.txt`, Schema.org `@graph`), and Lighthouse 100/100/100/100.
4. `skills/intern-git-pr-workflow` — Follow safe branching, commit hygiene, pre-push verification (`tsc`, `build`, `test`), and clear PR/MR reporting.
5. `skills/fullstack-code-review` — Run a senior-level pre-submission self-review covering correctness, security, performance, and regression safety.

## Validation

Run `node scripts/validate-skills.mjs` after any edit to verify all `SKILL.md` frontmatter, Thai `README.md` guides, and plugin JSON manifests.
