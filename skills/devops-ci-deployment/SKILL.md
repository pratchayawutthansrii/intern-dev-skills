---
name: devops-ci-deployment
description: Manage CI/CD pipelines, environment configuration, security headers, health checks, production release checklists, and rollback plans for frontend (Cloudflare Pages/Vite) and backend (Node/Express/Docker) deployments. Use when preparing a release, debugging deployment/CORS/header issues, or configuring CI/CD.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: devops
---

# DevOps, CI/CD & Production Release Standard

Make every deployment boring, repeatable, observable, and reversible. Never deploy directly from guesswork without pre-flight checks and a rollback path.

## 1. Environment & Secrets Separation

- Keep a committed `.env.example` documenting every required variable with safe placeholder values—never commit real `.env` files.
- Enforce strict separation between `development`, `staging`, and `production`:
  - Distinct database URIs, JWT secrets, CORS allowlists, and webhook endpoints.
  - Fail fast at boot if a required production secret is missing.
- Never bake backend secrets into Vite frontend `VITE_*` variables (anything prefixed with `VITE_` is publicly visible in the browser bundle).

## 2. Hosting & Security Headers (Frontend + API)

- **Static / Cloudflare Pages (`_headers`, `_redirects`)**:
  - Set security headers: `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Strict-Transport-Security`, and a clean `Content-Security-Policy`.
  - Set long immutable caching (`max-age=31536000, immutable`) on hashed `/assets/*` and images, and short UTF-8 caching (`Content-Type: ...; charset=utf-8`) on `/llms.txt`, `/llms-full.txt`, `/ai-knowledge.json`, and `/sitemap.xml`.
  - Verify 301 redirects never loop and never hijack static files.
- **Backend API**:
  - Expose a lightweight `/api/health` endpoint verifying process and database readiness (without leaking secrets or stack traces).
  - Configure graceful shutdown (`SIGTERM`/`SIGINT`) to close HTTP servers and DB pools cleanly.

## 3. Pre-Release Checklist (Go / No-Go Gate)

Before deploying to production:
1. Clean `git status`, pinned commit SHA, and passing CI (`tsc`, `lint`, `build`, `test`).
2. Confirm all required environment variables exist in the target hosting dashboard.
3. Verify database migrations (if any) are backward-compatible (Expand-Contract).
4. Smoke-test the built production bundle locally (`vite preview` / `NODE_ENV=production`) before pushing.

## 4. Post-Deploy Verification & Rollback Plan

Immediately after deploy:
- Check `/api/health` returns `200 OK` and key frontend routes load with `0` console errors.
- Check critical conversion path (e.g., form submit, login, sitemap/robots/llms.txt).
- **Rollback Ready**: Know the exact previous working deployment/commit SHA so you can roll back in under 2 minutes if error rates spike or a P0 defect appears.
