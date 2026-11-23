---
name: debug-root-cause-solver
description: Diagnose and fix bugs systematically through reproduction, log/stack-trace analysis, root-cause isolation, minimal surgical fixes, and regression verification. Use when troubleshooting build errors, runtime crashes, API 500s, React hydration mismatches, or unexpected behavior.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: debugging
---

# Systematic Root-Cause Debugging

Never guess blindly or slap band-aids over symptoms. Find the actual root cause, apply the smallest clean fix, and prove the bug is gone.

## 1. The 5-Step Debugging Loop

1. **Reproduce Reliably**: Capture the exact failing command, HTTP request, browser console error, or stack trace. If you cannot reproduce it yet, add targeted diagnostics or inspect logs first.
2. **Read the Full Error & Context**: Read the **entire** error message (not just the last line), file path, line number, and surrounding caller chain.
3. **Isolate the Root Cause**: Form 1–2 concrete hypotheses and verify which layer actually fails (Frontend state/hydration? Network/CORS/proxy? Auth middleware? Validation? DB query? Environment config?).
4. **Apply a Minimal, Surgical Fix**:
   - Fix the root cause cleanly without rewriting unrelated files.
   - Fix **all** related occurrences of the same root bug in one pass rather than patching one line at a time.
5. **Prove & Prevent Regression**:
   - Re-run the exact failing reproduction command/test to confirm it passes.
   - Run full typecheck/build/test to verify zero regressions.
   - Add a regression test when appropriate.

## 2. Forbidden "Band-Aid" Anti-Patterns

Never do any of the following to silence a failure:
- Wrapping broken code in an empty `try { ... } catch {}` that swallows real errors.
- Adding `as any`, `@ts-ignore`, or `@ts-expect-error` to hide genuine TypeScript type mismatches.
- Disabling ESLint rules, skipping tests (`test.skip`), or hardcoding `return true` to make a check pass.
- Increasing random `setTimeout(..., 3000)` delays to paper over race conditions instead of awaiting real promises/events.
- Modifying unrelated config or deleting existing tests to make CI green.

## 3. Clear Incident Summary

When finishing a bug fix, always report:
1. **Root Cause**: 1–2 sentences explaining *why* it broke.
2. **Fix Applied**: Exact file(s) changed and what changed.
3. **Verification**: Exact command/test run that proved the fix works.
