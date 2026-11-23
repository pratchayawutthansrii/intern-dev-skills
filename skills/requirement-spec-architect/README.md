# 📋 requirement-spec-architect — รีวิว Skill (ภาษาไทย)

> **แปลงโจทย์สั้น ๆ จากลูกค้า/ผู้บริหาร ให้กลายเป็น Spec, API Contract, สิทธิ์ผู้ใช้ และ Task Breakdown ที่ชัดเจนก่อนลงมือเขียนโค้ด**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill requirement-spec-architect
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- **PM / System Analyst / Tech Lead / น้องฝึกงานที่รับโจทย์ฟีเจอร์ใหม่** จากลูกค้าหรือแชททีม (เช่น *"อยากเพิ่มระบบจองคิว + หลังบ้านอนุมัติ"*)
- ใช้ก่อนเริ่มเขียนโค้ดทุกครั้ง เพื่อป้องกันปัญหา "เขียนเสร็จแล้วไม่ตรงใจ" หรือ Frontend กับ Backend ตกลงชื่อฟิลด์ JSON กันไม่ตรง

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **แยกข้อเท็จจริงออกจากข้อสันนิษฐาน** — ชี้จุดที่โจทย์ยังไม่ชัด (สิทธิ์ใครทำอะไรได้, รองรับภาษาไทย/อังกฤษไหม, มือถือหน้าตายังไง) ให้ตกลงกันก่อนเริ่มทำ
2. **สร้างตารางสิทธิ์ (Roles & Permissions Matrix)** — กำหนดชัดว่าใครดู/เพิ่ม/แก้/ลบอะไรได้ ลดโอกาสหลุดช่องโหว่ตั้งแต่ขั้นออกแบบ
3. **เขียน API Contract กลางให้ Frontend + Backend เดินพร้อมกันได้** — ระบุ Method, Path, Request/Response Type และ Error Codes (`400/401/403/404/429`) ครบ
4. **แตก Task + Acceptance Criteria (Given/When/Then)** — แบ่งงานเป็นชิ้นเล็ก ๆ ให้คนในทีมแบ่งกันทำขนานกันได้ และ QA เอาไปเทสต่อได้ทันที

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่สั่ง AI ได้เลย
- *"ใช้ skill `requirement-spec-architect` แปลงโจทย์ 'ระบบจัดการบทความและแกลเลอรีรูปใน Backoffice' เป็น PRD + API Contract + ตารางสิทธิ์ และแตก Task ให้ทีม Frontend/Backend"*
- *"ใช้ skill `requirement-spec-architect` ช่วยเช็กโจทย์ฟีเจอร์นี้ว่ามี Edge Cases อะไรที่เราอาจลืมคิดบ้าง"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| เริ่มเขียนโค้ดทันทีจากแชทสั้น ๆ | วาง Spec ด้วย `requirement-spec-architect` ก่อน |
| --- | --- |
| Frontend ส่ง `phoneNumber` แต่ Backend รอรับ `tel` ต้องมารื้อแก้ | มี API Contract ตกลงชื่อฟิลด์และ Status Code ชัดตั้งแต่ชั่วโมงแรก |
| ลืมคิดกรณีเน็ตหลุด, กดส่งซ้ำ, หรือสิทธิ์แอดมิน | มีรายการ Edge Cases + Permissions Matrix ครบก่อนลงมือ |
| แบ่งงานให้ทีมไม่ชัด แก้ทับไฟล์กันไปมา | แตก Task แยกฝั่ง Frontend / Backend / DB / QA ชัดเจน |
