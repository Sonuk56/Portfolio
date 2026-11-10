# CRAZY VLZZZ — Premium Personal Portfolio Website

A modern, liquid glass personal portfolio website designed for **Sreenidhi Sunil (Crazy Vlzzz)** — Gaming & Technology Content Creator based in Kerala, India.

Built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🎨 Strict Brand Color Palette

- **Primary (70%) — Charcoal (`#1E1E1C`)**: Backgrounds, navigation, cards, liquid glass surfaces, footer.
- **Secondary (25%) — Sand (`#D6CBB2`)**: Typography, headings, subtle borders, decorative lines, and icons.
- **Accent (5%) — Electric Blue (`#2E6BFF`)**: **Reserved strictly for primary action CTA buttons** (*"Let's Collaborate"*, *"LET'S TALK"*, *"Discuss a Collaboration"*, *"Send Inquiry"*).

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

The production output is generated in `/dist` and is completely ready for deployment to **Vercel**, **Netlify**, or **Cloudflare Pages**.

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg           # Custom branded CV favicon
├── src/
│   ├── assets/               # Static assets & images
│   ├── components/           # UI and section components
│   │   ├── Navigation.tsx    # Floating liquid glass navbar + mobile menu
│   │   ├── Hero.tsx          # Full-screen hero with animated text & CTAs
│   │   ├── About.tsx         # Editorial bio & interest tags
│   │   ├── Services.tsx      # 6 service offerings cards
│   │   ├── Interests.tsx     # 4 interactive category interest grids
│   │   ├── Work.tsx          # Video portfolio with category filter & preview modal
│   │   ├── Collaborations.tsx# Brand partnership section with Electric Blue CTA
│   │   ├── Contact.tsx       # Working contact form with validation & direct mail draft
│   │   ├── Footer.tsx        # Branded footer with social links & back to top
│   │   ├── BackToTop.tsx     # Floating scroll-to-top button
│   │   ├── LoadingScreen.tsx # Animated entrance loader
│   │   ├── ParticleBackground.tsx # Subtle sand floating particles
│   │   ├── CustomCursor.tsx  # Desktop cursor with magnetic hover
│   │   ├── SectionHeading.tsx# Reusable section heading component
│   │   └── SocialIcons.tsx   # Custom SVG icons for YouTube & Instagram
│   ├── data/
│   │   └── portfolioData.ts  # Centralized file to update all information
│   ├── App.tsx               # Root component assembling all sections
│   ├── index.css             # Tailwind CSS & liquid glass styling
│   └── main.tsx              # React DOM entry
├── vercel.json               # Vercel deployment configuration
├── vite.config.ts            # Vite configuration
└── package.json
```

---

## ✏️ How to Customize Your Content

All personal info, subscriber stats, video projects, and copy can be easily edited in **`src/data/portfolioData.ts`**:

- **Profile Picture**: Replace the placeholder in `src/components/Hero.tsx` or `src/components/About.tsx` with your image by placing an image file in `src/assets/avatar.jpg` and updating `<img src="..." />`.
- **YouTube Link & Handle**: Update `youtubeUrl` in `src/data/portfolioData.ts`.
- **Social Handles**: Update `instagramUrl` and `email` in `src/data/portfolioData.ts`.
- **Portfolio Videos**: Add or edit items in `sampleVideos` array in `src/data/portfolioData.ts`.

---

## 🛡️ License

© 2026 Crazy Vlzzz. All Rights Reserved.
