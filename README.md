# Maithilee Bhatkar — Portfolio

A responsive, accessibility-conscious portfolio for Maithilee Bhatkar, a Computer Engineering student, full-stack developer, and AI/ML enthusiast. The site presents education, technical skills, scholastic achievements, five projects, leadership experience, coursework, and verified contact details.

## Live site

- Website: <https://maithilee-bhatkar-portfolio-2026.socialocean6.chatgpt.site/>
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
├── robots.txt
├── sitemap.xml
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

The Contact section shows the email address and LinkedIn handle as selectable, non-interactive text. GitHub, LeetCode, and phone retain their existing links. The hero's professional-profile shortcuts remain available.

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

The contact form is intentionally frontend-only. It validates fields locally and includes a hidden honeypot as basic spam protection, but it does not send or store messages. Its ready-state message directs visitors to use the displayed email address and never claims submission succeeded.

To enable message delivery later, connect a verified form service or backend, document its privacy behavior, and replace the local-only submit handler only after testing the real response states.

## Deployment

The verified public deployment is hosted at the Sites URL above. The source is also maintained in GitHub on the `main` branch. All assets use relative paths, so GitHub Pages can also host the repository after Pages is enabled in **Settings > Pages > Deploy from a branch > main > / (root)**.

### Custom domain status

The verified Sites URL remains the canonical URL until a custom domain is purchased, attached, validated, and serving HTTPS successfully. The current host supports custom domains and supplies the exact apex A records or subdomain CNAME plus validation records after a hostname is added. No domain purchase or DNS change is performed by this repository.

For a future `maithileebhatkar.com` setup:

1. Purchase the domain from a registrar after confirming its checkout availability.
2. Explicitly authorize adding the root hostname and, if wanted, `www` to the existing Sites project.
3. Add only the A/CNAME and validation records returned by the hosting provider to the registrar's DNS panel.
4. Wait for the host to report the domain and managed SSL certificate as active.
5. Choose the root domain as canonical and redirect `www` to it (or choose the reverse, but use one canonical origin).
6. Replace the current Sites URL in `index.html`, `sitemap.xml`, `robots.txt`, and the Personal Portfolio project link, then publish and verify again.

Do not switch canonical metadata to an unverified hostname, because doing so would point search engines to a URL that may not work.

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

After pushing to GitHub:

1. Verify the commit on the repository's `main` branch.
2. If GitHub Pages has been enabled, wait for its Pages deployment to finish.
3. For the connected Sites deployment, rebuild the `dist/` folder from the root files and publish a new Site version.
4. Open the applicable public URL and verify navigation, project filters, external links, images, and the resume download.

## Pre-publishing checklist

- [ ] Confirm education, CGPA, percentages, award date, and leadership dates.
- [ ] Confirm every project description distinguishes implemented and proposed work.
- [ ] Verify genuine GitHub and live-demo links only.
- [ ] Proofread and replace the resume PDF when updated.
- [ ] Test project filtering, mobile navigation, keyboard focus, and contact validation.
- [ ] Check the page at desktop, tablet, and 375px mobile widths.
- [ ] Confirm there are no browser console errors or missing local assets.
