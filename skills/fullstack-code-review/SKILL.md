---
name: fullstack-code-review
description: Perform a thorough senior-level full-stack code review covering correctness, security, TypeScript types, build/test verification, React/SSR pitfalls, and actionable mentor feedback. Use when reviewing a branch, auditing a pull/merge request, or self-reviewing code before submitting it to a team lead.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: code-review
---

# Full-Stack Code Review & Self-QA Standard

Review code with evidence, not guesswork. Never approve or report "looks good" without reading the actual diff and running the build, typecheck, and test suite.

## 1. Review Scope & Baseline

1. Identify exact branch, commit SHA, and changed files (`git log -n 5 --oneline`, `git diff --stat origin/main...HEAD`).
2. Read the changed files completely enough to understand callers, types, schemas, and side effects—never judge from isolated 3-line hunks alone.

## 2. Four-Pillar Audit Checklist

### A. Correctness & Edge Cases
- Null/undefined handling, empty arrays, loading/error states, and race conditions in async React `useEffect` calls.
- Form validation: client AND server agree on field names, required flags, and error messages.
- No React hydration mismatches (avoid non-deterministic `Date.now()`, `Math.random()`, or browser-only `window` reads during initial render).
- No dead code, broken imports, hardcoded `localhost` URLs in production paths, or leftover debug logs.

### B. Security (OWASP Quick Audit)
- Every protected route verifies both authentication AND role/ownership authorization.
- Public `POST` endpoints have rate limiting and strict input schema validation.
- No XSS (`dangerouslySetInnerHTML` with unsanitized input, `javascript:` URLs).
- No committed secrets, `.env` files, or insecure production fallbacks.

### C. Performance & Maintainability
- No N+1 database queries inside loops; paginate large list queries.
- No giant unoptimized images or unnecessary heavy dependencies bundled into initial load.
- Clear naming, single responsibility, and shared types/constants instead of copy-pasted duplicates.

### D. Automated Verification (Mandatory Evidence)
Run and record exact results for:
- TypeScript check (`tsc --noEmit` / `npm run typecheck`)
- Production build (`npm run build`)
- Automated tests (`npm test` — include exact pass/fail counts)

## 3. Severity-Tiered Reporting Format

Organize findings clearly so developers know what blocks merging vs. what can wait:

- **🔴 P0 — Blocker (Must fix before merge)**: Security vulnerabilities, broken build/typecheck, data loss bugs, failing tests.
- **🟠 P1 — High Priority (Fix in this PR)**: Logic edge cases, broken UX/mobile layout, missing validation, performance regressions.
- **🟡 P2 — Improvement (Nice to have)**: Refactoring, cleaner naming, extra test coverage.

For every finding, include:
1. Exact file path & line number
2. Why it matters (concrete failure or risk scenario)
3. Minimal concrete fix recommendation

Finish with a clear **Ship / Hold** verdict and a respectful, constructive summary ready to share with the developer or intern.
