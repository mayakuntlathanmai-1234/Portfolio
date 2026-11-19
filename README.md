# Thanmai Mayakuntla — Premium Talking-Video Developer Portfolio

A personal developer portfolio built for **Thanmai Mayakuntla**, Computer Science student at K L University specializing in **Generative AI for Agentic & Multimodal Intelligence**.

This website features a talking-video centerpiece, an interactive periodic-table style skill matrix, detailed project architecture breakdowns with interactive UI mockups, combined career timelines, and direct contact actions.

---

## 🌟 Key Features & Highlights

- **Hero Talking Video Centerpiece**: Integrates the original video (`/public/intro-video.mp4`) with background typography, muted autoplay, and accessible interactive sound toggle (`Audio On` / `Unmute Intro`). Includes scroll detection (`IntersectionObserver`) to pause video when offscreen.
- **Interactive Skill Matrix**: Periodic-table style skill cards with atomic shortcodes (`Jv`, `Py`, `Rc`, `Sb`, `Chr`), category filters, and detail panel describing proficiency context and related projects.
- **Featured Projects Gallery**: Accordion project cards detailing CareStream, GreenLoop, Urban Mobility, and Sovereign Agentic AI Workbench, complete with verified GitHub links and interactive HTML/CSS UI mockups.
- **Combined Career Timeline**: Chronological layout linking industry technical internships (CODEON, KODACY/SPACE) and academic qualifications (KL University B.Tech, SV Govt Polytechnic).
- **Recognitions & Certifications**: AWS Certified Developer, AI/ML Internship credentials, State-Level Volleyball player, NCC Cadet, and English Typewriting qualifications.
- **Editorial Design System**: Warm off-white background (`#f4f2ee`), white card surfaces, dark typography (`#0d0d0d`), subtle borders, Inter sans-serif, and Playfair Display italic serif accents.
- **100% Verified Resume Facts**: Zero invented achievements, statistics, or metrics. Every fact is extracted directly from the resume source document.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Keyframe Animations & Native `IntersectionObserver` Reveal Effects

---

## 📁 Project Structure

```
portfolie/
├── public/
│   ├── intro-video.mp4              # Original talking video centerpiece
│   ├── poster.jpg                   # Extracted video frame for poster/fallback
│   └── Mayakuntla_Thanmai_Resume.pdf# Downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css              # Theme design tokens, editorial grid, reveal utility classes
│   │   ├── layout.tsx               # Next.js layout, Google Fonts (Inter & Playfair), OpenGraph SEO
│   │   └── page.tsx                 # Main portfolio page entry point
│   ├── components/
│   │   ├── Navbar.tsx               # Responsive navbar with scroll progress bar & section tracking
│   │   ├── Hero.tsx                 # Video centerpiece with sound toggle & scroll pause
│   │   ├── About.tsx                # Bio, quick facts, ID card portrait, education
│   │   ├── SkillsGrid.tsx           # Periodic table skill matrix & filter tabs
│   │   ├── Projects.tsx             # Featured projects accordions & tech stack tags
│   │   ├── IllustrativeUiMockup.tsx # Interactive UI previews for each project
│   │   ├── ExperienceTimeline.tsx   # Combined chronological work & study timeline
│   │   ├── Certifications.tsx       # Certifications, sports, NCC, typewriting
│   │   ├── Contact.tsx              # Actionable email/phone, copy email toast, GitHub link
│   │   ├── Footer.tsx               # Minimalist footer with location & Back-to-Top scroll
│   │   ├── ScrollReveal.tsx         # IntersectionObserver reveal animation wrapper
│   │   └── Icons.tsx                # Custom SVG icons (GithubIcon, etc.)
│   └── lib/
│       └── data.ts                  # Centralized typed portfolio content extracted from resume
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Requirements & Prerequisites

- **Node.js**: `v18.17.0` or higher (Tested on Node.js `v24.11.0`)
- **Package Manager**: `npm` `v10.0.0` or higher

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build Production Bundle
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## ✏️ Updating Portfolio Data & Assets

### How to Update Resume Facts
Edit `src/lib/data.ts`. All profile facts, skills, education, experience, projects, certifications, and contact details are centralized in typed exported objects:
- `PROFILE`
- `NAV_ITEMS`
- `SKILL_CATEGORIES`
- `EDUCATION`
- `EXPERIENCE`
- `PROJECTS`
- `CERTIFICATIONS`
- `ACHIEVEMENTS`

### How to Replace the Resume PDF
Replace the file located at:
`public/Mayakuntla_Thanmai_Resume.pdf`

### How to Replace the Intro Video
Replace the MP4 file located at:
`public/intro-video.mp4`
If updating the fallback frame, save the static image to `public/poster.jpg`.

---

## 🌐 Deployment Instructions

### Vercel Deployment (Recommended)
1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js. Click **Deploy**.

### Netlify Deployment
1. Build command: `npm run build`
2. Publish directory: `.next`

---

## 📄 License & Credits

Designed & Built for **Mayakuntla Thanmai**. All rights reserved.
