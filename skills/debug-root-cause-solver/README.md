# 🐛 debug-root-cause-solver — รีวิว Skill (ภาษาไทย)

> **ไล่แก้บั๊กอย่างเป็นระบบแบบหาต้นตอจริง (Reproduce → Isolate → Minimal Fix → Verify) — ห้ามเดามั่ว ห้ามใส่ `as any` หรือ `catch {}` กลบเกลื่อน**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill debug-root-cause-solver
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- **Dev ทุกคนและน้องฝึกงาน** เวลาเจอ Build พัง, TypeScript แดง, API ตอบ `500`, CORS พัง, React Hydration Error, หรือบั๊กแปลก ๆ ที่แก้ไปแก้มายิ่งเละ
- ป้องกันนิสัยแก้ปัญหาแบบ "แปะพลาสเตอร์" เช่น ใส่ `as any`, ลบ test ทิ้ง, หรือใส่ `setTimeout` มั่ว ๆ เพื่อให้ผ่านไปก่อน

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **บังคับเดินตาม 5 ขั้นตอนหาต้นตอ (Root-Cause Loop)** — จำลองปัญหาให้เห็นก่อน → อ่าน Error ให้ครบ → แยกชั้นที่พัง (UI / Network / Auth / DB / Env) → แก้ให้ตรงจุดที่สุด → รันพิสูจน์ว่าหายจริง
2. **ห้ามใช้วิธีมักง่าย (Anti-Patterns)** — ห้าม `catch {}` กลืน error, ห้าม `@ts-ignore` / `as any` ปิดปาก TypeScript, ห้ามปิด test, และห้ามรื้อแก้ไฟล์ที่ไม่เกี่ยว
3. **สรุปสาเหตุและหลักฐานชัดเจน** — บอกได้ทันทีว่า *พังเพราะอะไร → แก้ตรงไหน → ยืนยันด้วยคำสั่งอะไร* ช่วยให้น้องเรียนรู้และอธิบายพี่เลี้ยงได้

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่สั่ง AI ได้เลย
- *"ใช้ skill `debug-root-cause-solver` ไล่หาต้นตอว่าทำไมหน้า `/expertise/business-legal-advisory` ขึ้น React hydration mismatch แล้วแก้ให้ตรงจุด"*
- *"ใช้ skill `debug-root-cause-solver` ตรวจสอบว่าทำไม `POST /api/inquiry` ตอบ 500 บน staging และช่วยแก้พร้อมเขียนสรุปสาเหตุ"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| การแก้บั๊กแบบเดาสุ่ม | การแก้บั๊กด้วย `debug-root-cause-solver` |
| --- | --- |
| เติม `as any` กับ `try/catch {}` จน error หายไปแต่ข้อมูลพังเงียบ ๆ | เจาะหาสาเหตุจริงที่ต้นทาง แก้ตรงจุดโดยไม่กลืน error |
| แก้ทีละจุดแบบมั่ว ๆ ไปกระทบไฟล์อื่นพังตาม | แก้แบบ Minimal Surgical Fix + รัน build/test ยืนยันว่าไม่กระทบส่วนอื่น |
| อธิบายไม่ได้ว่าแก้แล้วหายเพราะอะไร | สรุปครบ Root Cause + Fix + Verification Proof |
