# Maithilee Bhatkar — Personal Developer Portfolio

A clean, modern, typography-first personal portfolio website built with **React**, **Vite**, and **plain CSS**. Designed with an editorial aesthetic, warm neutral backgrounds, and subtle indigo accents.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static production files will be output to the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── images/              # Project screenshots (16:9 ratio)
│   │   ├── timechat.png
│   │   ├── finassist.png
│   │   ├── agentshield.png
│   │   └── portfolio.png
│   ├── favicon.svg          # Custom SVG favicon ("m.")
│   └── resume.pdf           # Place your actual resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile hamburger menu
│   │   ├── Hero.jsx         # Typography-first hero with availability dot & socials
│   │   ├── About.jsx        # Concise editorial about section
│   │   ├── Education.jsx    # Academic card with CGPA pill & coursework tags
│   │   ├── Skills.jsx       # 2-column tech stack categorized by domain
│   │   ├── Projects.jsx     # Selected projects with 16:9 media & details
│   │   ├── Achievement.jsx  # Highlighted milestone card (AgentShield Award)
│   │   ├── Leadership.jsx   # Timeline of IIC-UMIT leadership roles
│   │   ├── Certifications.jsx # Certificate cards with badges
│   │   ├── Contact.jsx      # Direct email CTA & social links
│   │   ├── Footer.jsx       # Copyright & back-to-top button
│   │   └── SocialIcons.jsx  # Accessible, matching SVG icons
│   ├── data/
│   │   └── portfolio.js     # Central data file for all content
│   ├── App.jsx              # Main application layout & resume handling
│   ├── App.css              # Section, card, button, and responsive styling
│   ├── index.css            # CSS variables, typography, and reset
│   └── main.jsx             # React entry point
├── index.html               # Semantic HTML with Google Fonts & metadata
├── vite.config.js           # Vite configuration
└── package.json             # Minimal dependencies (React, Vite, Lucide)
```

---

## ✏️ How to Customize

### 1. Updating Personal Information
All personal details, social URLs, coursework, skills, leadership positions, and project descriptions are stored in a single central file:
👉 **`src/data/portfolio.js`**

You can easily update:
- Name, bio, and academic details (CGPA, graduation year).
- GitHub, LinkedIn, LeetCode, and email addresses.
- Project descriptions, key features, and technology tags.
- Skills and tool categories.

### 2. Adding Project Screenshots
Place your 16:9 screenshots inside the **`public/images/`** directory:
- `timechat.png` — TimeChat project screenshot
- `finassist.png` — FinAssist AI project screenshot
- `agentshield.png` — AgentShield project screenshot
- `portfolio.png` — Portfolio website screenshot

> **Note:** If a screenshot has not yet been placed, the website automatically displays a clean, tasteful pastel placeholder with the project's name and Lucide icon. No broken image icon will ever appear.

### 3. Adding Your Resume PDF
Place your resume PDF inside the **`public/`** directory and name it:
👉 **`public/resume.pdf`**

- Clicking **Resume** in the navigation bar will open `resume.pdf` in a new tab.
- Clicking **Download resume** in the Hero section will download it as `Maithilee_Bhatkar_Resume.pdf`.
- If the file is not yet uploaded, clicking either button displays a polite in-app toast notification instead of opening a broken 404 link.

---

## 🌐 Deploying to Vercel

This portfolio is a static Single Page Application (SPA) built with Vite and is ready for one-click deployment on [Vercel](https://vercel.com):

### Option A: Via Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account (`https://github.com/maithilee17/portfolio`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🎨 Design Philosophy
- **Colors**: Warm neutral background (`#FAFAF9`), clean white cards (`#FFFFFF`), dark charcoal primary text (`#18181B`), and selective indigo accents (`#4F46E5`).
- **Typography**: 
  - **Plus Jakarta Sans** for prominent headings.
  - **Inter** for readable body copy, navigation, and descriptions.
  - **JetBrains Mono** for numbered section labels (`01 / ABOUT ME`) and categories.
- **Lightweight**: Zero external UI frameworks, zero heavy animation libraries, and zero runtime overhead.
