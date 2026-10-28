# Maithilee Bhatkar — Portfolio

A responsive, accessibility-conscious portfolio for Maithilee Bhatkar, a Computer Engineering student, full-stack developer, and AI/ML enthusiast. The site presents education, technical skills, scholastic achievements, five projects, leadership experience, coursework, and verified contact links.

## Live site

- Website: <https://maithilee17.github.io/maithilee-portfolio/>
- Source repository: <https://github.com/maithilee17/maithilee-portfolio>

## Technology

- Semantic HTML5
- Modern CSS with Grid, Flexbox, custom properties, and responsive breakpoints
- Vanilla JavaScript with progressive enhancement
- No package manager, framework, backend, database, or build command

## Project structure

```text
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── images/
│   ├── profile.jpeg
│   ├── timechat.png
│   ├── finassist.svg
│   ├── label-lens.svg
│   ├── portfolio.svg
│   ├── agentshield.svg
│   └── favicon.svg
├── resume/
│   └── Maithilee-Resume.pdf
├── .gitignore
├── .nojekyll
└── README.md
```

## Included content

- Education at UMIT, Sathaye College, and St. Mary's High School
- First Prize for AgentShield, cumulative CGPA, and Embedded Systems minor
- Languages, frameworks, tools, technologies, and engineering concepts
- TimeChat, FinAssist AI, LabelLens, Personal Portfolio Website, and AgentShield
- Social Media and Marketing Head and IIC Representative leadership roles
- Eight core Computer Engineering subjects plus Embedded Systems coursework
- GitHub, LinkedIn, LeetCode, email, phone, and downloadable resume

Unavailable project URLs are displayed as pending rather than linked to invented destinations. FinAssist AI is described as a proposed evidence-aware architecture without claiming production readiness. AgentShield is labeled as a group project.

## Run locally

Open `index.html` directly, or serve the project from this folder:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Content maintenance

- Edit `index.html` for biography, education, achievements, projects, leadership, coursework, links, and metadata.
- Edit `css/style.css` for colors, typography, spacing, cards, layouts, and responsive behavior.
- Edit `js/script.js` for navigation, project filtering, reveal effects, and contact-form validation.
- Store project artwork and the profile photograph in `images/`. Update image dimensions and alt text when replacing an image.
- Replace `resume/Maithilee-Resume.pdf` with the latest verified PDF while keeping the filename unchanged.
- Replace a `pending-link` element only after a genuine repository or live-demo URL is available.

## Contact form behavior

The contact form is intentionally frontend-only. It validates fields locally and includes a hidden honeypot as basic spam protection, but it does not send or store messages. Its ready-state message directs visitors to the real email link and never claims submission succeeded.

To enable message delivery later, connect a verified form service or backend, document its privacy behavior, and replace the local-only submit handler only after testing the real response states.

## GitHub Pages deployment

The site is deployed from the `main` branch and repository root. All assets use relative paths, so the project works under the GitHub Pages repository subpath.

For future updates:

```powershell
git status
git diff
git add index.html css/style.css js/script.js images resume README.md
git diff --cached
git commit -m "Update portfolio"
git push origin main
```

Stage only intended files. Never commit passwords, API keys, access tokens, `.env` files, private keys, or unrelated personal documents. Anything committed to this public repository—including the resume and contact details—can be viewed or copied by others.

After pushing:

1. Open the repository's **Actions** tab and wait for the Pages deployment to complete.
2. Open <https://maithilee17.github.io/maithilee-portfolio/>.
3. Hard-refresh if an older cached version appears.
4. Verify navigation, project filters, external links, images, and the resume download.

## Pre-publishing checklist

- [ ] Confirm education, CGPA, percentages, award date, and leadership dates.
- [ ] Confirm every project description distinguishes implemented and proposed work.
- [ ] Verify genuine GitHub and live-demo links only.
- [ ] Proofread and replace the resume PDF when updated.
- [ ] Test project filtering, mobile navigation, keyboard focus, and contact validation.
- [ ] Check the page at desktop, tablet, and 375px mobile widths.
- [ ] Confirm there are no browser console errors or missing local assets.
