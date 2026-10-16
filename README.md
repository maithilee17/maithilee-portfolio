# Maithilee Mukesh Bhatkar - Developer Portfolio

A bright, responsive, accessibility-conscious one-page portfolio for Maithilee Mukesh Bhatkar, a BTech Computer Engineering student in Mumbai seeking internship opportunities.

The site is intentionally dependency-free. It can be opened directly in a modern browser or served with any static web server.

## Current portfolio details

- **Name:** Maithilee Mukesh Bhatkar
- **Professional title:** BTech Computer Engineering Student
- **Location:** Mumbai
- **Email:** [maithileebhatkar1702@gmail.com](mailto:maithileebhatkar1702@gmail.com)
- **GitHub:** [github.com/maithilee17](https://github.com/maithilee17)
- **LinkedIn:** [linkedin.com/in/maithilee17](https://www.linkedin.com/in/maithilee17)
- **Career goal:** Seeking software development internship opportunities

## Technologies used

- HTML5
- CSS3, including Grid, Flexbox, custom properties, and responsive media queries
- Vanilla JavaScript
- Local JPG, PNG, SVG, and PDF assets

No framework, package manager, build tool, backend, or database is required to run the portfolio.

## Project structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.jpeg
│   ├── playhub.png
│   ├── sdn-ddos.png
│   ├── traffic-safety.png
│   ├── timechat.png
│   └── favicon.svg
├── resume/
│   └── resume.pdf
├── .gitignore
├── .nojekyll
└── README.md
```

## Features

- Personalized hero, About, skills, projects, education, and contact sections
- Sticky responsive navigation with an accessible mobile menu
- Four project cards with locally stored artwork
- Accessible project filtering for All, Web, Java, and Python
- Frontend-only contact-form validation with inline feedback
- Active navigation states and restrained reveal-on-scroll enhancement
- Keyboard-visible focus states, skip link, semantic markup, and reduced-motion support
- Responsive layouts for desktop, laptop, tablet, and small mobile screens
- Updated SEO and Open Graph metadata without a fabricated public URL

## Run locally

### Option A: open the file directly

Open `index.html` in a modern browser. All essential content and interactions work without a build step.

### Option B: use a local HTTP server

From this folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C`.

## Profile photograph

`images/profile.jpeg` is the current profile image. Replace it with a professional photograph using the same filename so the existing HTML reference continues to work.

- Recommended dimensions: at least 900 x 900 pixels
- Keep the subject centered for safe responsive cropping
- Preserve the square aspect ratio to prevent layout shifts
- After replacing it, update the image alt text and remove the “Illustration placeholder” label in `index.html`

## Resume

`resume/resume.pdf` is still a temporary template. It is not Maithilee's actual resume and must be replaced before publishing.

Replace it with the real PDF using the same filename. The existing Download Resume button will continue to work without HTML changes.

## Project images

Project artwork is stored in `images/`:

- `playhub.png`
- `sdn-ddos.png`
- `traffic-safety.png`
- `timechat.png`

The included files are original concept illustrations, not screenshots of deployed applications. Replacement images should use a 3:2 landscape ratio; 1200 x 800 pixels is recommended. Update the corresponding alt text in `index.html` whenever an image changes.

## Repository links

TimeChat already links to its confirmed repository:

```text
https://github.com/maithilee17/TimeChat-RealTime-Messaging
```

PLAYHUB, SDN-Based DDoS Detection and Automatic Mitigation, and Smart Traffic Safety System intentionally display a non-clickable “Repository link pending” label. When a repository becomes available:

1. Find that project's `.project-actions` block in `index.html`.
2. Replace the pending `<span>` with an `<a>` element.
3. Use the real repository URL only.
4. Add `target="_blank" rel="noopener noreferrer"`.
5. Add a specific accessible label, such as `aria-label="View the PLAYHUB repository on GitHub"`.

## Education

Education details are in the `#education` section of `index.html`. Update the institution, date, or CGPA text directly when verified information changes. Do not add marks, rankings, or qualifications without confirmed details.

## Certifications and achievements

No certifications or achievements are currently displayed because none have been supplied. To add the section later:

1. Add a semantic `<section>` with a unique ID between Education and Contact.
2. Include only verified certifications, hackathons, coding achievements, or academic awards.
3. Add a navigation link only if the section should appear in the main navigation.
4. Reuse the existing card, border, spacing, and typography tokens from `css/style.css` so the section matches the current design.

The active-navigation script automatically reads links marked with `data-nav-link`, so any future navigation target must use that attribute and point to an existing section ID.

## Email and social profiles

The verified email, GitHub URL, and LinkedIn URL appear in the hero, contact section, footer, and this README. If any changes later, update every occurrence in `index.html` and this file.

- Email links use `mailto:maithileebhatkar1702@gmail.com`
- External profile links open in a new tab with `rel="noopener noreferrer"`

## Contact-form limitation

The contact form is frontend-only. It validates the visitor's name, email format, and message, then explains that nothing was sent or stored. It does not email Maithilee, save data, or call an external service.

Visitors should use the verified email or LinkedIn links for genuine contact.

## Deployment

This is a static website with no build step. All deployment assets use relative paths, so it works both at a custom domain root and under a GitHub Pages repository subpath.

Anything committed to a public GitHub repository or published with GitHub Pages can be accessed, copied, and indexed by other people. Review staged files before every push. The included resume is intentionally a placeholder, but it will still be publicly downloadable if the site is published now.

### GitHub Pages

This folder is not currently a Git repository. Choose the repository name yourself; do not replace `<REPOSITORY-NAME>` with a guessed value.

1. Sign in to GitHub and create a new repository under the `maithilee17` account. Choose the repository name and description. A public repository supports GitHub Pages on GitHub Free; private-repository Pages availability depends on the account plan. Because this folder already contains a README, create the remote repository without adding a GitHub-generated README, `.gitignore`, or license.
2. Open PowerShell in this portfolio folder and run:

   ```powershell
   cd "C:\Users\Mihir\Desktop\Placement prep\project\portfolio"
   git init
   git add .
   git status
   git commit -m "Publish portfolio"
   git branch -M main
   git remote add origin https://github.com/maithilee17/<REPOSITORY-NAME>.git
   git remote -v
   git push -u origin main
   ```

   Replace `<REPOSITORY-NAME>` with the exact repository name you created. GitHub may ask you to authenticate through the browser or a credential manager.
3. Open the repository on GitHub and select **Settings**.
4. In the sidebar, select **Pages** under **Code, planning, and automation**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then select **Save**.
7. Wait for GitHub Pages to finish deploying. The Pages settings screen will display the real public URL when it is ready.
8. Open that exact URL and verify the homepage, project images, favicon, navigation, filters, contact-form validation, and `resume/resume.pdf` download.

GitHub's current publishing-source instructions are available in the [official GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

For a normal project repository, GitHub commonly uses a repository-subpath URL. A repository named exactly `maithilee17.github.io` is a special user-site repository and uses the account-level Pages URL. Do not assume either URL until GitHub displays it in the Pages settings.

The `.nojekyll` file tells GitHub Pages to serve this dependency-free static site directly. No build command, package installation, GitHub Actions workflow, backend, or environment variable is required.

### Vercel

1. Push this folder to a Git repository and import it in Vercel.
2. Choose **Other** as the framework preset if prompted.
3. Leave the build command empty.
4. Use `.` as the output directory if a value is required.
5. Deploy and verify the generated URL. No environment variables are required.

### Netlify

1. Choose **Add new site > Deploy manually** and drag this folder into Netlify, or import its Git repository.
2. For Git deployment, leave the build command empty and set the publish directory to `.`.
3. Deploy and verify the generated URL. No environment variables are required.

## Maintenance and future updates

### Where to make changes

- Edit `index.html` for text, education details, project descriptions, links, and page structure.
- Edit `css/style.css` for colors, spacing, typography, layout, and responsive styling.
- Edit `js/script.js` for navigation, filtering, validation, active-section behavior, and other interactions.
- Replace files in `images/` using the same filenames to avoid changing HTML references. If a filename changes, update the corresponding `src` value and alt text in `index.html`.
- Replace `resume/resume.pdf` with the real resume using the same filename. Verify that it opens locally before committing it.
- Replace each non-clickable `Repository link pending` entry in `index.html` only after a genuine project URL is available.

### Preview before publishing

From the portfolio folder, run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`, test the changed content and interactions, then stop the server with `Ctrl+C`. Opening `index.html` directly may also work, but the local server more closely matches static hosting.

### Publish an update

Before staging files, review what changed:

```powershell
git status
git diff
```

Stage only the files you intended to change. For example:

```powershell
git add index.html css/style.css
git diff --cached
git commit -m "Update portfolio content and styling"
git push
```

For an image or resume replacement, stage that exact file instead:

```powershell
git add images/profile.jpeg
git add resume/resume.pdf
git diff --cached --stat
git commit -m "Update portfolio assets"
git push
```

After pushing, open the repository's **Actions** tab or **Settings > Pages** and wait for the latest Pages deployment to complete. Then refresh the public Pages URL and verify the updated content and resume. Browser or CDN caching can briefly delay what you see; use a hard refresh if the deployment is complete but an older version remains visible.

Never commit `.env` files, passwords, API keys, authentication tokens, private keys, or unrelated personal documents. The provided `.gitignore` blocks common local and credential files, but `git status` and `git diff --cached` remain the final safety checks.

## Pre-publishing checklist

- [ ] Replace `images/profile.jpeg` with Maithilee's professional photograph when needed.
- [ ] Remove the illustration-placeholder label and update its alt text.
- [ ] Replace `resume/resume.pdf` with Maithilee's real, proofread resume.
- [ ] Add genuine repository links for the three projects still marked pending.
- [ ] Recheck education and CGPA details.
- [ ] Verify all project descriptions and technology lists against the actual work.
- [ ] Test keyboard navigation, filters, form validation, and reduced-motion behavior.
- [ ] Check the site at 1440, 1200, 992, 768, 576, and 375 pixel widths.
- [ ] Confirm the deployed resume link and all external links work.
- [ ] Confirm there are no fake, broken, or obsolete links.

## Progressive enhancement

All essential content is visible without JavaScript. JavaScript enhances navigation, filtering, validation, active states, and motion. If JavaScript is unavailable, in-page links still work and every project remains visible.
