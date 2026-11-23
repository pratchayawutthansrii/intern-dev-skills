# 🗄️ database-schema-migrations — รีวิว Skill (ภาษาไทย)

> **ออกแบบ Schema ฐานข้อมูล (MongoDB / SQL / TiDB), วาง Index กันคิวรีช้า, ทำ Migration แบบไม่ทำข้อมูล Production พัง และเขียน Seed ให้ปลอดภัย**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill database-schema-migrations
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- **Backend Developer / Database Architect / น้องฝึกงาน** ที่ต้องออกแบบ Table หรือ Collection ใหม่ใน **MongoDB, MySQL, PostgreSQL, หรือ TiDB**
- งานแก้โครงสร้างตารางบนระบบที่มีลูกค้าใช้งานอยู่แล้ว (Production) หรืองานแก้ปัญหาหน้าเว็บ/API โหลดช้าเพราะ Query ช้า

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **ออกแบบโครงสร้างตามการใช้งานจริง** — บังคับตั้ง `UNIQUE` index กับ slug/email, เก็บเงินด้วย Integer/Decimal (ห้ามใช้ Float) และเก็บเวลาเป็น UTC เสมอ
2. **กันปัญหา N+1 Query และโหลดข้อมูลเกินจำเป็น** — วาง Index ตามหลัก ESR (Equality → Sort → Range), บังคับ Pagination และไม่ดึงฟิลด์ใหญ่ (เช่น Embedding/Content) ในหน้า List
3. **ทำ Migration แบบปลอดภัย (Expand-Contract)** — ห้าม `DROP` หรือ `RENAME` คอลัมน์ทันทีในรอบเดียวขณะที่โค้ดเก่ายังรันอยู่บน Production
4. **เขียน Seed Script แบบ Idempotent** — รันซ้ำกี่รอบข้อมูลก็ไม่เบิ้ล และมี Guard ป้องกันเผลอรันสคริปต์ล้างข้อมูลใส่ Production

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่สั่ง AI ได้เลย
- *"ใช้ skill `database-schema-migrations` ช่วยออกแบบ MongoDB schema และ Index สำหรับระบบบทความ + หมวดหมู่ + ถังขยะ (Trash)"*
- *"ใช้ skill `database-schema-migrations` ตรวจไฟล์ repository/model ในโปรเจกต์นี้ว่ามีจุดไหนเป็น N+1 query หรือขาด Index บ้าง"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| ปัญหาที่มักเจอเมื่อระบบโตขึ้น | สิ่งที่ `database-schema-migrations` ช่วยกันไว้ |
| --- | --- |
| วน `for` แล้วยิง DB ทีละรายการ (N+1) จน API ช้า 5 วินาที | รวบเป็น `$in` / `WHERE IN` หรือ `JOIN` ยิงครั้งเดียวจบ |
| กด Submit พร้อมกัน 2 รอบ ได้ slug หรืออีเมลซ้ำใน DB | ตั้ง `UNIQUE` constraint ระดับ Database ไม่พึ่งแค่ `if` ในโค้ด |
| เผลอรันสคริปต์ seed ซ้ำแล้วได้ข้อมูลซ้ำ 2 เท่า | เขียน seed ด้วย `upsert` ตาม unique key และล็อกไม่ให้ล้างข้อมูล Production |
