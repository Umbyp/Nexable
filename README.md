# Nexable — Next.js + Tailwind project (v1 dark)

Premium tech-company website with **enriched home page** (12 sections including project search, process, tech stack, activity feed, testimonial, and FAQ).

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3
**Theme:** Dark near-black + phosphor-lime accent (`#C5FA5A`)
**Fonts:** Geist · Instrument Serif italic · JetBrains Mono

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

ต้องใช้ Node.js 18.17+ ครับ.

---

## Step การสร้างโปรเจกต์ตั้งแต่ 0

ถ้าคุณอยากเข้าใจที่มาของโปรเจกต์นี้แบบสร้างเองทุกขั้นตอน:

### Step 1 — Scaffold Next.js + Tailwind project

```bash
npx create-next-app@latest nexable-app
```

ตอบคำถาม:
```
✔ TypeScript?            → Yes
✔ ESLint?                → Yes
✔ Tailwind CSS?          → Yes
✔ src/ directory?        → No
✔ App Router?            → Yes
✔ Import alias @/*?      → Yes
```

```bash
cd nexable-app
```

### Step 2 — ตั้ง dark theme + palette ใน `tailwind.config.ts`

แทนที่ `theme.extend` ด้วยของในไฟล์นี้. สีหลัก:

| Token         | Hex       | บทบาท                                                |
|---------------|-----------|------------------------------------------------------|
| `bg`          | `#0A0A0D` | พื้นหลังหลัก (near-black)                              |
| `surface`     | `#111114` | card / surface หลัก                                   |
| `surface-2`   | `#1A1A1F` | hover state / nested                                  |
| `surface-3`   | `#22232A` | tertiary surface                                      |
| `line`        | `#22232A` | borders / dividers                                    |
| `line-2`      | `#2C2D35` | borders แก่กว่า                                       |
| `accent`      | `#C5FA5A` | **Phosphor lime** — CTAs, highlights, dot accents     |
| `accent2`     | `#9B7BFF` | **Violet** — gradient pairings, accent italic         |
| `text-1`      | `#E8E8EC` | text หลัก                                             |
| `text-2`      | `#9CA0A8` | text รอง                                              |
| `text-3`      | `#5C5F68` | text เสริม / metadata                                 |

### Step 3 — โหลดฟอนต์ใน `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4 — วาง utility classes ใน `globals.css`

ดูเต็มๆ ในไฟล์ — `.container-x`, `.eyebrow`, `.btn`, `.surface`, `.tag`, `.reveal`, `.gradient-mesh`, `.glass-nav`, scroll-reveal hooks ฯลฯ.

### Step 5 — สร้างโครงสร้างโฟลเดอร์

```bash
mkdir -p app/{about,products,showcase,blog,contact}
mkdir -p components/{ui,cards,sections,mockups}
mkdir -p data
```

### Step 6 — คัดลอกไฟล์จากโปรเจกต์นี้ตามโครงด้านล่าง

### Step 7 — รัน + build

```bash
npm install
npm run dev          # dev mode
npm run build && npm start   # production
```

---

## โครงสร้างโปรเจกต์

```
nexable-app/
├── app/
│   ├── layout.tsx              # Root layout (Nav + Footer + RevealOnScroll)
│   ├── globals.css             # Tailwind + design tokens + utility classes
│   ├── page.tsx                # ⭐ Home (12 sections composed)
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── showcase/page.tsx
│   ├── blog/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── StatCounter.tsx
│   ├── RevealOnScroll.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   └── Eyebrow.tsx
│   │
│   ├── cards/                  # 6 card variants — each its own file
│   │   ├── ServiceCard.tsx
│   │   ├── FeaturedProjectCard.tsx
│   │   ├── ShowcaseCard.tsx
│   │   ├── ProductCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── TeamCard.tsx
│   │
│   ├── sections/               # ⭐ Large section blocks
│   │   ├── Hero.tsx                  # home hero (floating cards + dual glow)
│   │   ├── PageHero.tsx              # inner-page hero
│   │   ├── TrustBar.tsx              # marquee partner logos
│   │   ├── ProjectSearch.tsx         # ⭐ NEW — live search w/ ⌘K, filters
│   │   ├── Process.tsx               # ⭐ NEW — improved 5-step editorial layout
│   │   ├── TechStack.tsx             # ⭐ NEW — 6 tech categories
│   │   ├── RecentActivity.tsx        # ⭐ NEW — live deploy feed + stats
│   │   ├── Testimonial.tsx           # ⭐ NEW — editorial pull quote
│   │   ├── FAQ.tsx                   # ⭐ NEW — accordion
│   │   ├── CtaCard.tsx               # navy/lime CTA card
│   │   ├── NewsletterCta.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ShowcaseFilter.tsx
│   │   └── BlogFilter.tsx
│   │
│   └── mockups/                # custom CSS/SVG mockups for showcase cards
│       ├── ChatMockup.tsx
│       ├── LineMockup.tsx
│       ├── FlexMockup.tsx
│       ├── BracketMockup.tsx
│       ├── ScoreMockup.tsx
│       ├── CourtMockup.tsx
│       └── FlowMockup.tsx
│
├── data/                       # ⭐ content layer — แก้ที่นี่ที่เดียว
│   ├── services.ts             # capabilities บนหน้า home
│   ├── projects.ts             # showcase ทั้ง 7 projects
│   ├── products.ts             # 4 products
│   ├── blog.ts                 # blog posts
│   ├── team.ts                 # ทีม
│   ├── searchProjects.ts       # ⭐ search index
│   ├── process.ts              # ⭐ 5 process steps + deliverables
│   ├── tech.ts                 # ⭐ 6 tech categories
│   ├── activity.ts             # ⭐ deploy feed + stats
│   └── faq.ts                  # ⭐ FAQ items
│
├── tailwind.config.ts          # palette + fonts + animations
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json               # path alias `@/*`
└── package.json
```

---

## Home page — 12 sections in order

ทั้ง 12 section ใน `app/page.tsx` แต่ละอันแยกเป็นไฟล์ของตัวเอง — copy paste / reorder ได้ง่าย:

| # | Section            | ไฟล์                                       |
|---|--------------------|--------------------------------------------|
| 1 | Hero               | `components/sections/Hero.tsx`             |
| 2 | Trust bar marquee  | `components/sections/TrustBar.tsx`         |
| 3 | **🔍 Search**       | `components/sections/ProjectSearch.tsx`    |
| 4 | Capabilities/Services | composed inline (uses `ServiceCard`)    |
| 5 | **Process (5 steps)** | `components/sections/Process.tsx`       |
| 6 | Stats counters     | composed inline (uses `StatCounter`)       |
| 7 | **Tech stack**     | `components/sections/TechStack.tsx`        |
| 8 | Featured projects  | composed inline (uses `FeaturedProjectCard`) |
| 9 | **Recent activity** | `components/sections/RecentActivity.tsx`  |
| 10| **Testimonial**    | `components/sections/Testimonial.tsx`      |
| 11| **FAQ accordion**  | `components/sections/FAQ.tsx`              |
| 12| CTA card           | `components/sections/CtaCard.tsx`          |

**ลบหรือสลับลำดับ** — แค่ลบ / move JSX line ใน `app/page.tsx` — ไม่กระทบ component อื่น.

---

## วิธีแก้ไข — common tasks

### เพิ่ม project ใน search + showcase
1. แก้ `data/projects.ts` — เพิ่ม object ใหม่
2. แก้ `data/searchProjects.ts` — เพิ่ม entry คู่กัน (with searchText keywords)

### แก้ process step
แก้ `data/process.ts` — title / duration / description / deliverables. `Process.tsx` ไม่ต้องแตะ.

### เพิ่ม tech ใน toolbox
แก้ `data/tech.ts` — เติม chip ใน category ที่ต้องการ, หรือสร้าง category ใหม่.

### แก้ FAQ
แก้ `data/faq.ts` — `q` กับ `a`. accordion behavior อยู่ใน component.

### เปลี่ยน palette
แก้ `tailwind.config.ts` → `colors:` block. ทุกหน้าทุก component อัปเดตตาม.

### เปลี่ยนฟอนต์
1. แก้ `@import` ใน `app/globals.css`
2. แก้ `fontFamily` ใน `tailwind.config.ts`

---

## Design system reference

| Utility class          | ใช้ทำอะไร                                                |
|------------------------|--------------------------------------------------------|
| `container-x`          | container กลาง max-w-1280px + responsive padding         |
| `eyebrow`              | label ตัวเล็ก uppercase + จุด phosphor-lime              |
| `h-display`            | headline ใหญ่สุด (clamp 56–128px) สำหรับ hero            |
| `h-section`            | headline section (clamp 40–64px)                         |
| `accent-italic`        | Instrument Serif italic phosphor-lime — editorial moment |
| `btn btn-primary`      | phosphor-lime → glow ตอน hover                           |
| `btn btn-ghost`        | transparent / border / hover accent                      |
| `btn-link`             | text link มี arrow ตามท้าย                                |
| `surface`              | card dark + border + rounded                             |
| `surface-hover`        | hover: lift + lime border tint                           |
| `tag`                  | pill เล็กสำหรับ tech stack                                |
| `reveal` + `delay-N`   | scroll-reveal (1-5) — IntersectionObserver ทำงานเองใน layout |
| `gradient-mesh`        | radial lime+violet glow อ่อนเป็น bg ใต้ section          |
| `glass-nav`            | sticky blurred nav style                                 |

---

## Animations

ใน `tailwind.config.ts` — สามารถใช้เป็น utility:
- `animate-pulse-soft` — opacity + scale loop
- `animate-live-blink` — สำหรับ live indicator (deploy feed)
- `animate-typing` — typing dots
- `animate-marquee` — สำหรับ trust bar
- `animate-reveal-up` — fade up

---

## Notes

- `'use client'` directive ใช้กับ component ที่มี state / event handler / browser API: `Navigation`, `RevealOnScroll`, `StatCounter`, `ProjectSearch`, `FAQ`, `ShowcaseFilter`, `BlogFilter`, `ContactForm`, `NewsletterCta`, `TrustBar`. ที่เหลือเป็น Server Components — เร็วและเบาเพราะ render ที่ server.
- ทุก image เป็น inline SVG — ไม่มีไฟล์รูปต้องโหลด
- Contact form / Newsletter ปัจจุบัน mock state. ใส่ `fetch('/api/contact')` + สร้าง `app/api/contact/route.ts` เพื่อทำงานจริง
- ⌘K (Mac) / Ctrl+K (Win) focus search bar จากทุกที่บนหน้า home

---

© 2026 Nexable — built with care.
