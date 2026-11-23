---
name: qa-test-automation
description: Design thorough QA test plans, write reliable unit, integration, and E2E tests (Node test runner, Vitest, Jest, Playwright), and produce reproducible bug reports. Use when verifying a new feature, adding regression tests for a bug fix, or auditing release quality.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: qa-testing
---

# QA & Test Automation Engineer

Verify behavior, not implementation details. Every critical user journey, security boundary, and fixed bug deserves an automated test that fails when the bug returns.

## 1. Test Pyramid & Coverage Strategy

Match test type to the risk:
- **Unit Tests (Fast, Deterministic)**: Pure functions, validators, formatters, URL/slug sanitizers, payload builders, permission helpers.
- **Integration / Contract Tests**: Express route handlers + middleware (auth `401`/`403`, validation `400`, rate limit `429`, happy path `200`/`201`), form delivery fallbacks, sitemap/cache policies.
- **E2E / Browser Smoke Tests**: Critical revenue or conversion paths (page render, navigation, form submission, admin login + CRUD) on realistic desktop and mobile viewports.

## 2. Mandatory Test Case Matrix

For every feature or endpoint, cover all 4 categories:
1. **Happy Path**: Valid inputs produce expected UI/DB/HTTP state.
2. **Validation & Boundary Cases**: Empty strings, missing required fields, malformed dates/emails, Thai/UTF-8 characters, extreme lengths, duplicate submissions.
3. **Auth & Security Cases**: Missing token (`401`), wrong role (`403`), unsafe URLs (`javascript:`, `data:`), XSS payloads, honeypot fields.
4. **Failure & Fallback Cases**: Upstream API timeout, network offline, `500` response—verify clean user messaging and zero silent data corruption.

## 3. Writing Non-Flaky Tests

- Never depend on live production APIs, external networks, or wall-clock `setTimeout` sleeps in unit tests—inject fakes/mocks cleanly.
- Assert behavior and contracts (status codes, returned shapes, DOM accessibility roles/text), not brittle CSS class strings.
- Every bug fix must include a **regression test** that reproduces the exact bug first and passes after the fix.

## 4. Reproducible Bug Report Format

When reporting a defect found during QA, always include:
- **Severity**: `P0 Blocker` / `P1 High` / `P2 Medium` / `P3 Low`
- **Environment**: Branch/commit SHA, URL/port, viewport/browser
- **Steps to Reproduce**: Exact numbered steps
- **Expected vs. Actual Result**: Concrete error message, HTTP status, or console log
- **Evidence**: Exact failing test output or screenshot
