---
name: database-schema-migrations
description: Design scalable MongoDB and SQL/TiDB database schemas, indexes, safe zero-downtime migrations, and query optimizations while preventing N+1 queries and destructive data loss. Use when creating collections/tables, writing migrations, tuning slow queries, or designing seed scripts.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: database
---

# Database Schema & Safe Migrations Architect

Protect production data integrity above all else. Schema changes must be backward-compatible, indexed for real access patterns, and reversible.

## 1. Schema Design Principles (SQL/TiDB & MongoDB)

- **Design Around Query Patterns**: Before creating a table or collection, list the top 5 read/write queries (filters, sort order, pagination, uniqueness).
- **Explicit Constraints & Types**:
  - Use `UNIQUE` constraints/indexes for slugs, emails, and idempotency keys—never rely solely on application-level "check-then-insert" (race conditions will create duplicates).
  - Store timestamps in UTC (`createdAt`, `updatedAt`) and monetary amounts as integers (satang/cents) or `DECIMAL`, never floating-point `FLOAT`.
  - Use explicit soft-delete columns (`deletedAt` / `isDeleted`) when auditability or trash recovery is required, and include them in composite indexes.
- **MongoDB vs. SQL Boundaries**:
  - In MongoDB, embed bounded 1-to-few subdocuments; reference unbounded 1-to-many growth (logs, orders, comments) so documents never approach the 16 MB limit.
  - In SQL/TiDB, define explicit primary keys, foreign-key semantics, and appropriate `VARCHAR`/text lengths.

## 2. Indexing & Query Performance

- Create composite indexes matching **Equality → Sort → Range (ESR)** order.
- Eliminate **N+1 queries**: batch lookups with `$in` / `WHERE id IN (...)` or `JOIN` instead of querying inside a `for` loop.
- Always paginate list endpoints (`page`/`pageSize` or cursor pagination) with a hard upper limit (e.g. `max 100`) and project only needed fields (never `SELECT *` on tables with huge blobs/embeddings).

## 3. Zero-Downtime Migration Discipline (Expand-Contract)

Never run destructive schema changes (`DROP COLUMN`, `RENAME COLUMN`, narrowing types) in a single deploy while old app code is still running:
1. **Expand**: Add new nullable column/field + backfill script + dual-write if needed.
2. **Migrate Code**: Deploy app version reading/writing the new shape.
3. **Contract**: Only after verifying production stability, remove old column/field in a later release.

## 4. Seed & Backup Safety

- Every seed script must be **idempotent** (safe to run twice without duplicating rows—use `upsert` by unique key).
- Never run destructive reset/drop scripts against production URIs; guard destructive dev scripts with an explicit `NODE_ENV !== "production"` check.
- Document rollback steps for every migration.
