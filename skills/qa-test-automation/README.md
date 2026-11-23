# 🧪 qa-test-automation — รีวิว Skill (ภาษาไทย)

> **วาง Test Plan ครบทุกมุม (Happy Path, Edge Case, Security, Fallback), เขียน Unit/Integration Test แบบไม่ Flaky และทำ Bug Report ที่ reproduce ได้จริง**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill qa-test-automation
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- **QA Engineer / Tester / Full-Stack Dev / น้องฝึกงาน** ที่ต้องทดสอบฟีเจอร์ก่อนปล่อยขึ้น Production หรือเขียน Automated Test ด้วย `tsx --test`, Vitest, Jest, หรือ Playwright
- งานแก้บั๊กที่อยากเขียน **Regression Test** ดักไว้ไม่ให้บั๊กเดิมกลับมาพังซ้ำในอนาคต

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **คิด Test Case ให้ครบ 4 หมวดอัตโนมัติ** — ไม่ใช่เทสแค่กรณีกรอกถูก (Happy Path) แต่ครอบคลุมทั้ง Boundary/ภาษาไทย, Auth/Security (`401`/`403`/XSS), และกรณีเน็ตหลุด/API ล่ม
2. **เขียนเทสที่เสถียร ไม่มั่ว ไม่พึ่งเน็ตจริง** — ใช้ Mock/Fake อย่างเหมาะสม ไม่ยิงใส่ Production และไม่ใช้ `sleep` มั่ว ๆ จนเทสพังสุ่ม
3. **บังคับเขียน Regression Test ทุกครั้งที่แก้บั๊ก** — ทำให้มั่นใจว่าบั๊กที่แก้ไปแล้วจะไม่โผล่กลับมาอีกตอนเพื่อนร่วมทีมแก้โค้ดอื่น
4. **มาตรฐาน Bug Report แบบมืออาชีพ** — ระบุ Severity (`P0–P3`), Commit SHA, ขั้นตอนการทำซ้ำ (Steps to Reproduce), และผลที่คาดหวังเทียบกับผลจริง

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่สั่ง AI ได้เลย
- *"ใช้ skill `qa-test-automation` วาง Test Plan และเขียน unit/integration tests สำหรับ `src/routes/inquiry.routes.ts` ครอบคลุมทั้งส่งฟอร์มสำเร็จ, ข้อมูลไม่ครบ, และยิง `GET` โดยไม่มีสิทธิ์ admin"*
- *"ใช้ skill `qa-test-automation` เขียน regression test ดักบั๊ก XSS และ malformed URL ในฟังก์ชันแปลงบทความ"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| การเทสแบบเร่งรีบ | การเทสด้วย `qa-test-automation` |
| --- | --- |
| เทสแค่เปิดหน้าเว็บแล้วกดปุ่ม 1 รอบ แล้วบอกว่าผ่าน | เทสครบทั้ง Happy Path, Edge Case, Auth 401/403 และ Error State |
| ยิงเทสตรงเข้า Production API ทำให้ข้อมูลจริงเลอะ | แยก Mock/Test Fixture ชัดเจน รันซ้ำได้ในเครื่องแบบ offline |
| แจ้งบั๊กว่า "หน้านี้พังครับ" แต่ไม่มีรายละเอียด | แจ้งครบ Severity + Steps to Reproduce + Log จริงให้ Dev แก้ได้ทันที |
