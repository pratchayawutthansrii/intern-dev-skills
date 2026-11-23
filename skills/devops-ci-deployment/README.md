# 🚢 devops-ci-deployment — รีวิว Skill (ภาษาไทย)

> **วางระบบ CI/CD, จัดการ Environment/Secrets, ตั้งค่า Security Headers/Health Check และทำ Pre-Release + Rollback Checklist ก่อนขึ้น Production**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill devops-ci-deployment
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- **DevOps / Release Engineer / Tech Lead / น้องฝึกงาน** ที่ต้องเตรียม Deploy เว็บไซต์ขึ้น **Cloudflare Pages / Vercel** หรือ Deploy Backend API ขึ้น **Server / Docker / Render / Railway**
- งานตั้งค่า `_headers`, `_redirects`, CORS, CSP, GitHub Actions CI/CD, และเช็กความพร้อมก่อนปล่อยขึ้น Production จริง

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **แยก Environment และป้องกัน Secret รั่วหน้าบ้าน** — เตือนชัดห้ามเอา API Secret ใส่ตัวแปร `VITE_*` (เพราะจะโผล่ใน JS ฝั่งเบราว์เซอร์!) และบังคับมี `.env.example` อัปเดตเสมอ
2. **เช็ก Security & Cache Headers ครบชุด** — ตรวจ CSP, HSTS, `X-Frame-Options`, Cache-Control สำหรับ `/assets/*`, และ `charset=utf-8` สำหรับไฟล์ `llms.txt` / `robots.txt` / `sitemap.xml`
3. **มี Go / No-Go Pre-Release Checklist** — เช็กความพร้อมก่อนกด Deploy (build ผ่าน, env ครบ, DB migration ปลอดภัย, smoke-test บน `vite preview` แล้ว)
4. **วางแผน Rollback ล่วงหน้า** — เช็ก `/api/health` หลังปล่อยจริง และจด Commit/Deployment ก่อนหน้าไว้ให้กดย้อนกลับได้ใน 2 นาทีถ้าเกิดเหตุฉุกเฉิน

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่สั่ง AI ได้เลย
- *"ใช้ skill `devops-ci-deployment` ตรวจเช็กความพร้อมก่อน Deploy โปรเจกต์ Frontend + API ขึ้น Production พร้อมเช็ก `_headers`, `_redirects` และรายการ `.env` ที่ต้องตั้งค่า"*
- *"ใช้ skill `devops-ci-deployment` ช่วยสร้าง GitHub Actions workflow สำหรับรัน typecheck, build และ test อัตโนมัติทุกครั้งที่เปิด PR"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| Deploy แบบวัดดวง | Deploy ด้วย `devops-ci-deployment` |
| --- | --- |
| เอา Secret ใส่ `VITE_API_KEY` เผลอหลุดไปหน้าเบราว์เซอร์ | แยกชัดระหว่าง public frontend env กับ server-only secrets |
| Deploy ขึ้นไปแล้วหน้าขาว/API พัง เพราะลืมตั้ง env ใหม่ | เช็ก `.env.example` เทียบกับ Hosting Dashboard ก่อนกดปล่อย |
| พังแล้วลน ไม่รู้จะย้อนกลับเวอร์ชันไหน | จด Commit SHA เดิม + ขั้นตอน Rollback และตรวจ `/api/health` หลังปล่อยทันที |
