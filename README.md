# intern-dev-skills

> **ชุด AI Agent Skills มาตรฐานทีมพัฒนาสำหรับน้องฝึกงาน (Full-Stack Intern Pack)** — ติดตั้งได้ในคำสั่งเดียวด้วย `npx skills add` และรองรับทุก AI Coding Agent (Antigravity, Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot)

---

## ติดตั้งด่วน (Quick Install)

### 1. ติดตั้งครบทั้ง 5 Skills ในคำสั่งเดียว (แนะนำสำหรับน้องฝึกงานทุกคน)

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills
```

### 2. หรือเลือกติดตั้งเฉพาะ Skill ที่ต้องใช้

```bash
# 1. ทำ UI เรียบหรู ไม่ติดกลิ่น AI
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill clean-editorial-ui

# 2. อุดช่องโหว่ Backend API (Auth / RBAC / Rate Limit / OWASP)
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill backend-api-security

# 3. SEO หน้า 1 Google + GEO (llms.txt) + Lighthouse 100
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill seo-geo-performance

# 4. มาตรฐาน Git / Branch / เช็ก Build & Test ก่อน Push
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill intern-git-pr-workflow

# 5. ให้ AI ช่วย Self-Review โค้ดแบบ Senior ก่อนส่งพี่เลี้ยง
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill fullstack-code-review
```

---

## รีวิว Skill ทั้ง 5 ตัว (คลิกอ่านคู่มือภาษาไทย + ตัวอย่างแต่ละตัว)

| Skill | เหมาะกับงานอะไร | ช่วยเรื่องอะไรเป็นหลัก | รีวิวภาษาไทย & ตัวอย่าง |
| --- | --- | --- | --- |
| **`clean-editorial-ui`** | Frontend / Landing Page / Pricing / Dashboard (React + Tailwind) | ยึด Design System เดิมของเว็บ, ตัดลูกเล่น AI-Slop ออก, คุม Contrast WCAG AA/AAA | [อ่านรีวิวภาษาไทย](./skills/clean-editorial-ui/README.md) · [`SKILL.md`](./skills/clean-editorial-ui/SKILL.md) |
| **`backend-api-security`** | Backend REST API (Express / TypeScript / MongoDB / TiDB) | ปิด Broken Access Control (RBAC), Rate Limit, Zod Validation, ล็อก Flag Production, กันรั่ว Secret | [อ่านรีวิวภาษาไทย](./skills/backend-api-security/README.md) · [`SKILL.md`](./skills/backend-api-security/SKILL.md) |
| **`seo-geo-performance`** | เว็บองค์กร / หน้าบริการ / บทความที่ต้องการติดหน้า 1 Google & AI Search | Lighthouse 100, SSR Prerender, WebP LCP, JSON-LD `@graph`, `llms.txt` / `llms-full.txt` | [อ่านรีวิวภาษาไทย](./skills/seo-geo-performance/README.md) · [`SKILL.md`](./skills/seo-geo-performance/SKILL.md) |
| **`intern-git-pr-workflow`** | การทำงานร่วมกับทีมบน GitHub / GitLab | กฎแตก Branch, สแกน `git diff` กันหลุด `.env`, บังคับรัน `tsc/build/test` ก่อน Push, สรุปงานส่งพี่เลี้ยง | [อ่านรีวิวภาษาไทย](./skills/intern-git-pr-workflow/README.md) · [`SKILL.md`](./skills/intern-git-pr-workflow/SKILL.md) |
| **`fullstack-code-review`** | Self-Review ก่อนส่งงาน / พี่เลี้ยงตรวจ PR & Branch | ตรวจครบ 4 ด้าน (Logic, Security, Performance, ผลรันจริง) จัดระดับ 🔴 P0 / 🟠 P1 / 🟡 P2 | [อ่านรีวิวภาษาไทย](./skills/fullstack-code-review/README.md) · [`SKILL.md`](./skills/fullstack-code-review/SKILL.md) |

---

## โครงสร้าง Repository (Multi-Agent Ready)

ออกแบบตามมาตรฐานสากล (`skills.sh` + Open Agent Skills + Multi-IDE Plugin) เพื่อให้ใช้ได้ทุกเครื่องมือที่น้องฝึกงานถนัด:

```text
intern-dev-skills/
├── skills/
│   ├── clean-editorial-ui/
│   │   ├── SKILL.md              # คำสั่งสอน AI Agent
│   │   └── README.md             # รีวิวภาษาไทย + ตัวอย่างการใช้งาน
│   ├── backend-api-security/
│   │   ├── SKILL.md
│   │   └── README.md
│   ├── seo-geo-performance/
│   │   ├── SKILL.md
│   │   └── README.md
│   ├── intern-git-pr-workflow/
│   │   ├── SKILL.md
│   │   └── README.md
│   └── fullstack-code-review/
│       ├── SKILL.md
│       └── README.md
├── .agents/skills.json           # Antigravity & .agents discovery
├── .claude-plugin/               # Claude Code plugin & marketplace manifest
├── .cursor-plugin/               # Cursor plugin manifest
├── .codex-plugin/                # Codex plugin manifest
├── skills.sh.json                # skills.sh / npx skills discovery config
├── AGENTS.md                     # Repository-level agent overview
└── scripts/validate-skills.mjs   # Automated manifest & SKILL.md validator
```

---

## วิธีใช้งานหลังติดตั้ง (สำหรับน้องฝึกงาน)

หลังรัน `npx skills add ...` เสร็จแล้ว ในแชท AI Agent (Antigravity / Claude Code / Cursor / Codex) สามารถพิมพ์สั่งตรง ๆ ได้เลย เช่น:

- *"ใช้ skill `clean-editorial-ui` ปรับการ์ดราคาให้เข้ากับสไตล์เดิมของเว็บนี้"*
- *"ใช้ skill `backend-api-security` ตรวจ route ทั้งหมดในโปรเจกต์ว่ามีอันไหนหลุดสิทธิ์ Auth บ้าง"*
- *"ใช้ skill `intern-git-pr-workflow` เช็กความเรียบร้อยก่อน push เข้า branch ของฉัน"*
- *"ใช้ skill `fullstack-code-review` รีวิวโค้ดทั้งหมดที่ฉันแก้เทียบกับ `main` ก่อนส่งพี่เลี้ยง"*

---

## การตรวจสอบความถูกต้อง (For Maintainers)

```bash
node scripts/validate-skills.mjs
```

---

## License

MIT © [pratchayawutthansrii](https://github.com/pratchayawutthansrii)
