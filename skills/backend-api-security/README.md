# 🔐 backend-api-security — รีวิว Skill (ภาษาไทย)

> **อุดช่องโหว่ Backend API ระดับ Production (OWASP Top 10, สิทธิ์การเข้าถึง RBAC, Rate Limit และห้ามหลุด Secret)**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill backend-api-security
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- น้องฝึกงานสาย **Backend / Full-Stack** ที่เขียน REST API ด้วย **Node.js, Express, TypeScript, MongoDB หรือ MySQL/TiDB**
- งานสร้าง API ใหม่สำหรับฟอร์มติดต่อลูกค้า, ระบบล็อกอิน, ระบบหลังบ้าน (Backoffice), การอัปโหลดไฟล์ หรือการตรวจความปลอดภัย API ก่อนขึ้น Production

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **ป้องกัน Broken Access Control (ช่องโหว่ที่เจอบ่อยที่สุดในงานจริง)** — เตือนและบังคับให้ใส่ middleware ตรวจ Token + สิทธิ์ Admin บนทุก `GET` ที่ดึงข้อมูลลูกค้า (`/api/inquiry`, `/api/newsletter`, `/api/user`, `/api/audit-logs`, `/api/trash`) แม้ฝั่ง `POST` จะเปิดให้คนทั่วไปส่งฟอร์มได้ก็ตาม
2. **ล็อก Flag อันตรายใน Production** — ป้องกันลืมปิด `ALLOW_INSECURE_*` หรือ Auth Bypass ตอน deploy จริง โดยบังคับปิดอัตโนมัติเมื่อ `NODE_ENV === "production"`
3. **กันยิง Spam / Brute-force ด้วย Rate Limiting** — บังคับใส่ Rate Limit ให้ endpoint สำคัญอย่าง Login, ฟอร์ม Inquiry และ AI Chat
4. **ป้องกัน SQL/NoSQL Injection & Mass Assignment** — บังคับ Validate ข้อมูลด้วย Schema (Zod) และใช้ Parameterized Query เสมอ
5. **กันเผลอ Commit รหัสผ่าน / `.env` ขึ้น Git** — ตรวจ CORS, ซ่อน Stack Trace ใน Production และตัด `passwordHash` ออกจาก Response

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่น้องสั่ง AI ได้เลย
- *"ใช้ skill `backend-api-security` ตรวจความปลอดภัยทุก route ใน `src/routes/` ให้หน่อยว่ามี endpoint ไหนหลุดสิทธิ์ Auth/Admin หรือขาด Rate Limit บ้าง"*
- *"ใช้ skill `backend-api-security` สร้าง endpoint `POST /api/inquiry` และ `GET /api/inquiry` พร้อม Zod validation และ unit test ตรวจสิทธิ์ 401/403"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| ช่องโหว่ที่น้องฝึกงานมักพลาด | สิ่งที่ `backend-api-security` ป้องกันให้ |
| --- | --- |
| เปิด `GET /api/inquiry` ลอย ๆ ไม่มี Auth ใครก็ยิงดูเบอร์โทรลูกค้าได้ | แยกสิทธิ์ชัดเจน: `POST` เปิดสาธารณะพร้อม Rate Limit แต่ `GET` บังคับ `requireAuth + requireAdmin` |
| ลืมปิด `ALLOW_INSECURE_ADMIN=true` ขึ้น Production | บังคับ `const allowBypass = process.env.NODE_ENV !== "production" && ...` |
| ส่ง `err.stack` หรือ SQL error กลับไปหน้าบ้านตรง ๆ | Log รายละเอียดไว้ฝั่ง Server และตอบข้อความปลอดภัยกลับให้ Client |
| ลืมเช็ก `git diff` เผลอ push API key หรือไฟล์ `.env` | เช็ก secret leak และเขียนเทสยืนยัน 401/403 ก่อนจบงานเสมอ |
