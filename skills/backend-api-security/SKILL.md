---
name: backend-api-security
description: Harden Node.js, Express, TypeScript, MongoDB, and SQL/TiDB backend APIs against OWASP Top 10 vulnerabilities, Broken Access Control, missing rate limits, weak validation, and secret leaks. Use when building, modifying, or auditing API endpoints, auth middleware, database queries, or deployment config.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: security
---

# Backend API Security Hardening

Treat every API endpoint as internet-exposed by default. Never rely on frontend hiding, obscurity, or "internal-only" assumptions to protect data.

## 1. Broken Access Control & RBAC (Zero-Trust Routes)

- **Default Deny**: Every route that reads, lists, mutates, or deletes sensitive data **must** attach explicit authentication (`requireAuth`) AND role/ownership authorization (`requireAdmin` / `requireRole`) middleware.
- **High-Risk `GET` Endpoints to Audit Immediately**:
  - Lead/inquiry lists (`/api/inquiry`, `/api/newsletter`, `/api/contact`, `/api/registrations`)
  - User directories (`/api/user`, `/api/members`, `/api/customers`)
  - Audit logs, trash/soft-deleted records, admin configs (`/api/audit-logs`, `/api/trash`, `/api/admin/*`)
- **Public Write vs. Protected Read**: A public `POST /api/inquiry` form endpoint does **not** make `GET /api/inquiry` public. Split middleware explicitly per HTTP method.
- **IDOR Prevention**: When accessing `/:id` resources, verify the authenticated user owns the record or holds an elevated admin role—never trust a `userId` or `role` sent inside `req.body`.

## 2. Production Guardrails & Insecure Feature Flags

- Any local-dev escape hatch (`ALLOW_INSECURE_*`, `SKIP_AUTH`, `DISABLE_CSRF`, mock auth bypasses) **must fail closed when `NODE_ENV === "production"`**:
  ```ts
  const isProd = process.env.NODE_ENV === "production";
  const allowBypass = !isProd && process.env.ALLOW_INSECURE_DEV_AUTH === "true";
  ```
- Fail startup fast if critical secrets (`JWT_SECRET`, database URI) are missing or use weak default literals in production.

## 3. Rate Limiting & Abuse Protection

Apply targeted rate limits (e.g., `express-rate-limit`) to:
- **Auth endpoints**: `POST /api/user/login`, `POST /api/auth/register`, password resets (strict window, e.g. 5–15 requests / 15 min per IP).
- **Public submission endpoints**: `POST /api/inquiry`, `POST /api/newsletter`, file uploads (prevent spam flooding and DB/email exhaustion).
- **AI / Paid external API endpoints**: Strict per-IP or per-user throttling plus prompt-length caps.

## 4. Input Validation, Injection & Safe Output

- Validate `req.body`, `req.query`, and `req.params` at the route boundary using strict schemas (e.g., `zod` or `joi`). Strip unknown fields so mass-assignment cannot set `isAdmin: true` or `role: "admin"`.
- **SQL / TiDB**: Always use parameterized placeholders (`?`). Never interpolate user strings into SQL clauses, table names, or `ORDER BY` (whitelist sort columns explicitly).
- **MongoDB**: Reject `$` operator keys in user inputs where raw objects are passed to queries; explicitly pick allowed fields.
- **Safe Error Responses**: Never return raw stack traces, SQL errors, or internal file paths to HTTP clients in production. Log full context server-side and return a generic error payload.

## 5. Secrets & CORS Hygiene

- Never commit `.env`, API keys, DB connection strings, JWT secrets, or `.pem` private keys to Git. Verify `.gitignore` covers `.env*` (except `.env.example` with placeholder values only).
- Lock CORS to an explicit origin allowlist (`CORS_ALLOWED_ORIGINS`); never use `origin: "*"` together with `credentials: true`.
- Sanitize password hashes (`password`, `salt`, `refreshTokenHash`) out of all API responses.

## 6. Security Verification Checklist

Before finishing any backend change:
1. Run `npm run typecheck` / `tsc --noEmit` and unit/integration tests.
2. Add or update automated tests proving unauthenticated requests to protected routes return `401`/`403` and production rejects insecure flags.
3. Run `git diff` to confirm zero hardcoded secrets, debug bypasses, or accidental `console.log(token)`.
