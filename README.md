# intern-dev-skills

> **ชุด AI Agent Skills ครบทั้งทีมพัฒนา Software & น้องฝึกงาน (11 Skills ครอบคลุมทุกบทบาท SDLC)** — ติดตั้งได้ในคำสั่งเดียวด้วย `npx skills add` และรองรับทุก AI Coding Agent (Antigravity, Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot)

---

## ติดตั้งด่วน (Quick Install)

### 1. ติดตั้งครบทั้ง 11 Skills ในคำสั่งเดียว (แนะนำสำหรับทั้งทีม Dev และน้องฝึกงาน)

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills
```

### 2. หรือเลือกติดตั้งเฉพาะ Skill ตามสายงาน

```bash
# --- กลุ่ม 1: Core Full-Stack & Intern Pack (5 Skills) ---
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill clean-editorial-ui
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill backend-api-security
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill seo-geo-performance
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill intern-git-pr-workflow
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill fullstack-code-review

# --- กลุ่ม 2: Software Development Team SDLC Pack (6 Skills) ---
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill requirement-spec-architect
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill database-schema-migrations
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill qa-test-automation
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill debug-root-cause-solver
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill devops-ci-deployment
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill tech-docs-handover
```

---

## กลุ่มที่ 1: Core Full-Stack & Intern Pack (5 Skills)

| Skill | เหมาะกับงานอะไร | ช่วยเรื่องอะไรเป็นหลัก | รีวิวภาษาไทย & ตัวอย่าง |
| --- | --- | --- | --- |
| **`clean-editorial-ui`** | Frontend / Landing Page / Pricing / Dashboard (React + Tailwind) | ยึด Design System เดิมของเว็บ, ตัดลูกเล่น AI-Slop ออก, คุม Contrast WCAG AA/AAA | [อ่านรีวิวภาษาไทย](./skills/clean-editorial-ui/README.md) · [`SKILL.md`](./skills/clean-editorial-ui/SKILL.md) |
| **`backend-api-security`** | Backend REST API (Express / TypeScript / MongoDB / TiDB) | ปิด Broken Access Control (RBAC), Rate Limit, Zod Validation, ล็อก Flag Production, กันรั่ว Secret | [อ่านรีวิวภาษาไทย](./skills/backend-api-security/README.md) · [`SKILL.md`](./skills/backend-api-security/SKILL.md) |
| **`seo-geo-performance`** | เว็บองค์กร / หน้าบริการ / บทความที่ต้องการติดหน้า 1 Google & AI Search | Lighthouse 100, SSR Prerender, WebP LCP, JSON-LD `@graph`, `llms.txt` / `llms-full.txt` | [อ่านรีวิวภาษาไทย](./skills/seo-geo-performance/README.md) · [`SKILL.md`](./skills/seo-geo-performance/SKILL.md) |
| **`intern-git-pr-workflow`** | การทำงานร่วมกับทีมบน GitHub / GitLab | กฎแตก Branch, สแกน `git diff` กันหลุด `.env`, บังคับรัน `tsc/build/test` ก่อน Push, สรุปงานส่งพี่เลี้ยง | [อ่านรีวิวภาษาไทย](./skills/intern-git-pr-workflow/README.md) · [`SKILL.md`](./skills/intern-git-pr-workflow/SKILL.md) |
| **`fullstack-code-review`** | Self-Review ก่อนส่งงาน / พี่เลี้ยงตรวจ PR & Branch | ตรวจครบ 4 ด้าน (Logic, Security, Performance, ผลรันจริง) จัดระดับ 🔴 P0 / 🟠 P1 / 🟡 P2 | [อ่านรีวิวภาษาไทย](./skills/fullstack-code-review/README.md) · [`SKILL.md`](./skills/fullstack-code-review/SKILL.md) |

---

## กลุ่มที่ 2: Software Development Team SDLC Pack (6 Skills)

ครอบคลุมทุกบทบาทของทีมพัฒนาซอฟต์แวร์ตั้งแต่วาง Spec → ออกแบบ DB → เขียนเทส QA → ไล่แก้บั๊ก → ขึ้น Production → เขียนเอกสารส่งมอบ:

| Skill | บทบาทในทีม | ช่วยเรื่องอะไรเป็นหลัก | รีวิวภาษาไทย & ตัวอย่าง |
| --- | --- | --- | --- |
| **`requirement-spec-architect`** | PM / System Analyst / Tech Lead | แปลงโจทย์ลูกค้า/แชทเป็น PRD, ตารางสิทธิ์ Roles, API Contract, Edge Cases และแตก Task | [อ่านรีวิวภาษาไทย](./skills/requirement-spec-architect/README.md) · [`SKILL.md`](./skills/requirement-spec-architect/SKILL.md) |
| **`database-schema-migrations`** | Database / Backend Architect | ออกแบบ Schema (MongoDB + SQL/TiDB), วาง Index กัน N+1, Zero-Downtime Migration, Idempotent Seed | [อ่านรีวิวภาษาไทย](./skills/database-schema-migrations/README.md) · [`SKILL.md`](./skills/database-schema-migrations/SKILL.md) |
| **`qa-test-automation`** | QA Engineer / Tester | วาง Test Matrix 4 หมวด (Happy/Boundary/Security/Fallback), เขียน Unit/Integration Test ไม่ Flaky, Bug Report | [อ่านรีวิวภาษาไทย](./skills/qa-test-automation/README.md) · [`SKILL.md`](./skills/qa-test-automation/SKILL.md) |
| **`debug-root-cause-solver`** | Bug Fixer / Incident Triage | ไล่หาต้นตอบั๊ก 5 ขั้น (Reproduce → Isolate → Minimal Fix → Verify) ห้าม `as any` หรือ `catch {}` กลบปัญหา | [อ่านรีวิวภาษาไทย](./skills/debug-root-cause-solver/README.md) · [`SKILL.md`](./skills/debug-root-cause-solver/SKILL.md) |
| **`devops-ci-deployment`** | DevOps / Release Engineer | CI/CD, แยก Env/Secrets (กันหลุด `VITE_*`), Security Headers, `/api/health`, Pre-Release Gate & Rollback | [อ่านรีวิวภาษาไทย](./skills/devops-ci-deployment/README.md) · [`SKILL.md`](./skills/devops-ci-deployment/SKILL.md) |
| **`tech-docs-handover`** | Tech Writer / Team Handover | เขียน `README.md` ตรงโค้ดจริง, ผัง Mermaid, Runbook พอร์ต/คำสั่งรัน และเอกสารส่งมอบงาน | [อ่านรีวิวภาษาไทย](./skills/tech-docs-handover/README.md) · [`SKILL.md`](./skills/tech-docs-handover/SKILL.md) |

---

## โครงสร้าง Repository (Multi-Agent Ready)

```text
intern-dev-skills/
├── skills/
│   ├── clean-editorial-ui/            # Frontend UI ไม่ติดกลิ่น AI
│   ├── backend-api-security/          # ความปลอดภัย Backend API
│   ├── seo-geo-performance/           # SEO / GEO (llms.txt) / Lighthouse 100
│   ├── intern-git-pr-workflow/        # มาตรฐาน Git / Branch / Pre-Push
│   ├── fullstack-code-review/         # รีวิวโค้ดระดับ Senior (P0/P1/P2)
│   ├── requirement-spec-architect/    # PM / SA — PRD & API Contract
│   ├── database-schema-migrations/    # DB Architect — Schema, Index & Migration
│   ├── qa-test-automation/            # QA — Test Plan, Unit/Integration & Bug Report
│   ├── debug-root-cause-solver/       # Systematic Root-Cause Debugging
│   ├── devops-ci-deployment/          # DevOps — CI/CD, Headers & Rollback
│   └── tech-docs-handover/            # Documentation, Mermaid & Handover
├── .agents/skills.json                # Antigravity & .agents discovery
├── .claude-plugin/                    # Claude Code plugin & marketplace manifest
├── .cursor-plugin/                    # Cursor plugin manifest
├── .codex-plugin/                     # Codex plugin manifest
├── skills.sh.json                     # skills.sh / npx skills discovery config
├── AGENTS.md                          # Repository-level agent overview
└── scripts/validate-skills.mjs        # Automated manifest & SKILL.md validator
```

---

## วิธีใช้งานในแต่ละเฟสของโปรเจกต์ (SDLC Workflow)

1. **รับโจทย์ใหม่**: สั่งใช้ `requirement-spec-architect` เพื่อวาง PRD + API Contract + แตก Task
2. **ออกแบบฐานข้อมูล & API**: สั่งใช้ `database-schema-migrations` + `backend-api-security`
3. **พัฒนาหน้าบ้าน & SEO**: สั่งใช้ `clean-editorial-ui` + `seo-geo-performance`
4. **เจอ Error / บั๊ก**: สั่งใช้ `debug-root-cause-solver`
5. **ทดสอบ & รีวิวก่อนส่ง**: สั่งใช้ `qa-test-automation` + `fullstack-code-review` + `intern-git-pr-workflow`
6. **ปล่อยขึ้น Production & ส่งมอบ**: สั่งใช้ `devops-ci-deployment` + `tech-docs-handover`

---

## การตรวจสอบความถูกต้อง (For Maintainers)

```bash
node scripts/validate-skills.mjs
```

---

## License

MIT © [pratchayawutthansrii](https://github.com/pratchayawutthansrii)
