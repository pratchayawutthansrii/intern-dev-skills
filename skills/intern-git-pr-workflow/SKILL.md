---
name: intern-git-pr-workflow
description: Enforce safe Git branching, clean commits, mandatory pre-push verification (typecheck, lint, build, tests), and clear PR/MR handoff summaries for software engineering interns. Use before committing, pushing, opening a merge/pull request, or syncing branches on GitHub or GitLab.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: workflow
---

# Intern Git, Branching & Pre-Push Workflow

Never push broken, untested, or unreviewed code to a shared repository. Every commit pushed to a remote branch must be clean, scoped, and verified.

## 1. Safe Branching Rules

- **Never commit or push directly to `main` / `master` / `production`** unless explicitly instructed by a senior lead.
- Work on your assigned personal or feature branch (e.g., `feat/<topic>`, `fix/<issue>`, or `<your-name>`).
- Before starting new work, fetch and check divergence from `origin/main`:
  ```bash
  git fetch origin
  git status -sb
  ```
- Never run `git push --force` on shared branches (`main`, `develop`, team feature branches). Use `--force-with-lease` only on your own personal branch when rebasing.

## 2. Clean Diff & Secret Hygiene (Before `git add`)

Run `git status` and `git diff --stat` before staging anything:
- Confirm **zero** unintended files are staged:
  - No `.env`, `.env.local`, credentials, `.pem` keys, or local DB dumps.
  - No build artifacts (`dist/`, `build/`, `.cache/`), `node_modules/`, or temp debug files (`test.txt`, `console.log` spam).
  - No unrelated edits to files outside your task scope.
- Stage intentional changes explicitly (`git add <files>`) rather than blind `git add .` when untracked files exist.

## 3. Mandatory Pre-Push Verification Gate

Do **not** push until every applicable check in the repo passes with exit code `0`:
1. **Typecheck**: `npx tsc --noEmit` (or `npm run typecheck`)
2. **Lint** (if configured): `npm run lint`
3. **Production Build**: `npm run build`
4. **Tests**: `npm test` (and report exact pass/fail counts—never claim tests passed if you didn't run them)

If a check fails, fix all reported errors and re-run before pushing. If an unrelated pre-existing failure blocks you, state the exact failing command and error transparently—never skip checks silently (`--no-verify` is prohibited).

## 4. Commit Message & PR/MR Description Standard

Write concise, descriptive commits using Conventional Commits:
- `feat(legal): add starting 5900 THB advisory package section`
- `fix(api): require admin auth on GET /api/inquiry and /api/newsletter`
- `chore(seo): add llms.txt and AI crawler directives`

When handing off a branch to a mentor/reviewer, always provide a structured summary:
1. **What changed**: Bullet list of completed features/fixes with key files.
2. **Verification run**: Exact commands executed (`typecheck`, `build`, `test`) and results.
3. **Known gaps / Needs review**: Anything incomplete, untested, or needing env vars/DB migration.
4. **Screenshots** (for UI changes): Desktop + mobile view of the affected area.
