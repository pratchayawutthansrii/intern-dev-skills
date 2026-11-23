# intern-dev-skills — Agent Instructions

This repository distributes **11 production-tested AI Agent Skills** covering both full-stack intern fundamentals and full Software Development Team (SDLC) roles across Antigravity, Claude Code, Cursor, Codex, Gemini CLI, and any `npx skills`-compatible agent.

## Core Full-Stack & Intern Skills (`./skills/*`)

1. `skills/clean-editorial-ui` — Build clean, cohesive, non-AI-looking React/Tailwind UI aligned with existing site design systems.
2. `skills/backend-api-security` — Harden Express/Node/TypeScript APIs against OWASP Top 10, Broken Access Control, missing rate limits, and secret leaks.
3. `skills/seo-geo-performance` — Optimize sites for Google Page 1 SEO, AI Search/GEO (`llms.txt`, Schema.org `@graph`), and Lighthouse 100/100/100/100.
4. `skills/intern-git-pr-workflow` — Follow safe branching, commit hygiene, pre-push verification (`tsc`, `build`, `test`), and clear PR/MR reporting.
5. `skills/fullstack-code-review` — Run a senior-level pre-submission self-review covering correctness, security, performance, and regression safety.

## Software Development Team SDLC Skills (`./skills/*`)

6. `skills/requirement-spec-architect` — Convert ambiguous requests into PRDs, permissions matrices, API contracts, acceptance criteria, and task breakdowns.
7. `skills/database-schema-migrations` — Design MongoDB & SQL/TiDB schemas, indexes, safe Expand-Contract migrations, and idempotent seeds.
8. `skills/qa-test-automation` — Plan QA test matrices, write non-flaky unit/integration/E2E tests, and produce reproducible bug reports.
9. `skills/debug-root-cause-solver` — Diagnose and fix bugs systematically from reproduction to verified minimal fix without band-aid hacks.
10. `skills/devops-ci-deployment` — Manage CI/CD, env/secret hygiene, Cloudflare/API security headers, health checks, pre-release gates, and rollback plans.
11. `skills/tech-docs-handover` — Write verified READMEs, Mermaid architecture diagrams, setup runbooks, and team handover documentation.

## Validation

Run `node scripts/validate-skills.mjs` after any edit to verify all `SKILL.md` frontmatter, Thai `README.md` guides, and plugin JSON manifests.
