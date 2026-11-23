# 🌿 intern-git-pr-workflow — รีวิว Skill (ภาษาไทย)

> **มาตรฐานการใช้ Git, แตก Branch, เช็ก Typecheck/Build/Test ก่อน Push และสรุปงานส่งพี่เลี้ยงแบบมืออาชีพ**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill intern-git-pr-workflow
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- **น้องฝึกงานทุกคน** ที่ทำงานร่วมกับทีมบน **GitHub** หรือ **GitLab** (เช่น ส่งงานเข้า branch ชื่อตัวเอง หรือเปิด Pull Request / Merge Request ให้พี่เลี้ยงตรวจ)
- ป้องกันปัญหาคลาสสิกที่พบบ่อย เช่น Push โค้ดที่ Build ไม่ผ่าน, เผลอ Push ไฟล์ `.env`, หรือส่งข้อความหาพี่เลี้ยงแค่ว่า "push แล้วครับ" โดยไม่บอกว่าแก้อะไรและเทสอะไรไปแล้วบ้าง

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **กันพลาดเรื่อง Branch** — ห้าม push ตรงเข้า `main`, ห้าม `--force` บน branch กลาง และเช็ก `git fetch` / `git status` ก่อนเสมอ
2. **สแกนไฟล์ขยะและไฟล์ลับก่อน Commit** — เช็ก `git diff --stat` ไม่ให้หลุด `.env`, `dist/`, `console.log` หรือไฟล์ที่ไม่ได้ตั้งใจแก้ติดไปใน Commit
3. **ด่านตรวจบังคับก่อน Push (Pre-Push Gate)** — บังคับให้รัน `tsc`, `lint`, `build`, และ `test` ให้ผ่านครบก่อน Push ห้ามแอบใช้ `--no-verify`
4. **เขียน Commit Message และรายงานส่งงานให้พี่เลี้ยงตรวจง่าย** — สรุปสิ่งที่ทำ, ผลรันคำสั่งตรวจ, จุดที่ยังไม่เสร็จ และจุดที่ต้องการให้ช่วยรีวิว

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่น้องสั่ง AI ได้เลย
- *"ใช้ skill `intern-git-pr-workflow` ตรวจเช็กความพร้อมของ branch นี้ก่อน push แล้วร่างข้อความแจ้งพี่เลี้ยงให้หน่อย"*
- *"ใช้ skill `intern-git-pr-workflow` ช่วยเช็ก `git diff` ว่ามีไฟล์ขยะหรือ secret หลุดไหม และรัน typecheck/build/test ก่อน commit"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| พฤติกรรมที่พี่เลี้ยงมักต้องตีกลับ | สิ่งที่ `intern-git-pr-workflow` ช่วยจัดระเบียบ |
| --- | --- |
| `git add .` แล้ว Push เลย พี่ดึงไปรันแล้ว TypeScript พัง | บังคับรัน `tsc`, `build`, `test` ผ่าน 100% ก่อน Push |
| ตั้งชื่อ Commit ว่า `"fix"`, `"update"`, `"aaa"` | เขียนเป็น Conventional Commits เช่น `fix(api): add admin auth to GET /api/inquiry` |
| ทักบอกพี่เลี้ยงแค่ `"push เข้า branch แล้วครับ"` | สร้างสรุปส่งงานครบ: ทำอะไรเสร็จแล้ว, รันเทสอะไรผ่านบ้าง, มีจุดไหนต้องระวัง |
| เผลอ commit ไฟล์ `.env` หรือไฟล์ backup ขึ้น repo | ตรวจ `git status` และ `git diff` คัดเฉพาะไฟล์ที่ตั้งใจแก้ก่อนทุกครั้ง |
