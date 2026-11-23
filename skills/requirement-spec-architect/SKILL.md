---
name: requirement-spec-architect
description: Transform vague business ideas, chat messages, or client screenshots into clear PRDs, user stories, acceptance criteria, API contracts, data models, and task breakdowns before coding starts. Use when scoping a new feature, planning a sprint, or clarifying ambiguous requirements for a software team.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: product-architecture
---

# Requirement & System Spec Architect (PM / SA Role)

Prevent wasted engineering hours by converting ambiguous requests into an unambiguous, testable specification before writing implementation code.

## 1. Clarify Before Designing

When a requirement arrives as a short chat message or screenshot:
- Separate **confirmed facts** from **assumptions** explicitly.
- Identify missing decisions that would cause rework (auth roles, data ownership, pagination, error handling, Thai/EN i18n, mobile behavior, backward compatibility).
- Ask at most 3–5 focused questions when requirements are genuinely ambiguous; otherwise state sensible defaults clearly and proceed.

## 2. Produce a Concise, Actionable Spec

Structure every feature specification into 6 compact sections:

1. **Goal & Non-Goals**: What success looks like in 2 sentences, plus what is explicitly **out of scope** for this release.
2. **User Roles & Permissions Matrix**: Table mapping each role (`Public`, `Authenticated User`, `Staff`, `Admin`) to exact allowed actions (`Create / Read / Update / Delete`).
3. **User Flows & Edge Cases**:
   - Happy path step-by-step
   - Empty state, loading state, validation error, duplicate submit, network timeout, unauthorized access
4. **API Contract (Frontend ↔ Backend Agreement)**:
   - HTTP Method + Path, Auth Requirement, Request Payload (TypeScript/Zod shape), Success Response (`200/201`), Error Codes (`400/401/403/404/409/429`).
5. **Data Model Impact**: New tables/collections, fields, constraints, indexes, and backward-compatibility notes.
6. **Acceptance Criteria (Given / When / Then)** + **Task Breakdown**:
   - Concrete checklist split by Frontend, Backend, DB, and QA so multiple developers/interns can work in parallel without merge conflicts.

## 3. Guardrails

- Never invent backend endpoints or database columns without checking the existing codebase first.
- Keep specs lean and concrete—every line should directly guide implementation or QA verification.
- Highlight security, privacy (PDPA), and performance implications upfront rather than as afterthoughts.
