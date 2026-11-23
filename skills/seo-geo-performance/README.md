# 🚀 seo-geo-performance — รีวิว Skill (ภาษาไทย)

> **ปั้นคะแนน Lighthouse 100/100/100/100 + ดัน SEO หน้า 1 Google + ทำให้ AI Agent (ChatGPT, Claude, Gemini, Perplexity) อ่านและแนะนำเว็บเราได้ครบ**

## คำสั่งติดตั้งเฉพาะ Skill นี้

```bash
npx skills add https://github.com/pratchayawutthansrii/intern-dev-skills --skill seo-geo-performance
```

---

## ตัวนี้เหมาะกับงานอะไร / ใครควรใช้?

- น้องฝึกงานที่ทำ **Landing Page, เว็บไซต์องค์กร, หน้า Service/Product หรือเว็บบทความ** ด้วย React / Vite / Next.js
- งานที่ต้องการให้เว็บโหลดเร็วระดับ **Lighthouse 100**, ติดอันดับคำค้นสำคัญบน Google และถูก AI Search ดึงไปตอบอย่างถูกต้องไม่มั่วข้อมูล

---

## ตัวนี้ช่วยอะไรบ้าง?

1. **ดันคะแนน Performance / Core Web Vitals ให้เต็ม** — แนะนำวิธีทำ Responsive WebP + Preload LCP, แยก Code-split ส่วน Below-the-fold, ทำ SSR Prerender และกันข้อผิดพลาดที่ทำให้ Mobile TBT พุ่ง
2. **วางโครงสร้าง SEO หน้า 1 Google แบบครบระบบ** — ตั้ง Metadata รายหน้าใน Static HTML, เขียนคำตอบแบบ Featured Snippet, วาง Internal Link สองทาง (Topic Cluster) และเชื่อม Schema.org JSON-LD `@graph` (`WebPage`, `DefinedTerm`, `Service`, `Offer`, `FAQPage`)
3. **ทำ GEO / AEO ให้ AI Agent เรียนรู้ทั้งเว็บ** — สร้าง `/llms.txt`, `/llms-full.txt`, `/ai-knowledge.json`, เปิดสิทธิ์ AI Crawlers ใน `robots.txt` และตั้ง Header `charset=utf-8` กันภาษาไทยเพี้ยน
4. **เตือนจุดตกม้าตายของมือใหม่** — เช่น ห้ามวัด Lighthouse บน `vite dev` (ต้องวัดบน `vite preview` ของ `dist/`), ห้ามใส่ `<a>` ที่ไม่มี `href` และห้ามเขียน FAQ ใน Schema ไม่ตรงกับที่โชว์บนหน้าเว็บ

---

## ตัวอย่างการใช้งานจริง

### ตัวอย่าง Prompt ที่น้องสั่ง AI ได้เลย
- *"ใช้ skill `seo-geo-performance` ปรับหน้า `/services/web-design` ให้ได้ Lighthouse 100 พร้อมวาง Schema JSON-LD และเชื่อม Internal Link กับหน้าอื่น"*
- *"ใช้ skill `seo-geo-performance` สร้างไฟล์ `llms.txt`, `llms-full.txt`, `ai-knowledge.json` และอัปเดต `robots.txt` ให้ AI Search เก็บข้อมูลเว็บนี้ได้ครบ"*

### ภาพเปรียบเทียบความต่าง (ก่อนใช้ vs หลังใช้)

| ปัญหาที่เจอบ่อยในเว็บ React SPA | สิ่งที่ `seo-geo-performance` ทำให้ |
| --- | --- |
| เปิด `view-source` เจอแค่ `<div id="root"></div>` และ Title หน้าแรก | ทำ Static SSR Prerender + ใส่ Title/Canonical/OG ตรงหน้าตั้งแต่ก่อนรัน JS |
| รัน Lighthouse แล้วได้ Performance 40–70 เพราะรูปใหญ่และ JS หนัก | บีบอัด WebP หลายขนาด + Preload รูป Hero + Lazy-load ส่วนล่างของหน้า |
| ChatGPT / Perplexity ตอบราคาหรือรายละเอียดบริการผิด | มี `/llms.txt`, `/llms-full.txt`, `/ai-knowledge.json` พร้อม Compliance Notice ชัดเจน |
| ใส่ลิงก์ `<a aria-label="...">` ไม่มี `href` จนตก SEO เหลือ 92 | บังคับเช็ก `crawlable-anchors` และ validate JSON-LD ทุกครั้งหลังแก้ |
