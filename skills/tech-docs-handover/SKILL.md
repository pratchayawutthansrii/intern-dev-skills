---
name: tech-docs-handover
description: Write crisp, maintainable technical documentation including READMEs, system architecture diagrams (Mermaid), API references, setup runbooks, and team handover notes. Use when onboarding interns, documenting a release snapshot, or handing over a completed feature or repository.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: documentation
---

# Technical Documentation & Team Handover Standard

Write documentation for a teammate opening the repository six months from now with zero tribal knowledge. Every command, path, and port in documentation must be verified against the actual codebase.

## 1. Core Principles

- **Source of Truth Over Fluff**: Never paste generic boilerplate. Document the exact ports, scripts (`package.json`), required `.env` keys, branch conventions, and architecture actually present in the repository.
- **Scannable Structure**: Lead with a 3-line summary ("What this repo is, current status/version, how to run it locally"), followed by tables, copy-pasteable commands, and Mermaid diagrams.
- **No Secrets in Docs**: Replace every token, password, and DB connection string with placeholders (`<MONGODB_URI>`).

## 2. Standard Sections for a Project README / Handover Doc

1. **Project Overview & Current Baseline**: Repo purpose, active branch/commit or date snapshot, and live/local URLs.
2. **Architecture Map (Mermaid)**: Simple `flowchart LR` showing Frontend ↔ API ↔ Databases ↔ External Services (keep node labels quoted when they contain parentheses).
3. **Quick Start (Zero-Guesswork Local Setup)**:
   - Prerequisites (Node version, package manager)
   - Copy `.env.example` → `.env`
   - Exact install, dev, preview, build, and test commands
4. **Key Modules & Directory Map**: Short table mapping folders/files to responsibilities.
5. **Verification & Release Notes**: What was recently changed, verified scores/test counts, and known limitations or next steps.

## 3. Keep Docs Synchronized

- When creating a dated snapshot (e.g., `README_2026-11-21.md`), add a pointer at the top of the root `README.md` so readers immediately find the latest baseline instead of following outdated instructions.
- Verify every file path and command mentioned in the doc exists before finishing.
