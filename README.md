# Somaia Mohamed — Digital Marketing & SEO Site

Static site, ready to publish on GitHub Pages (or any static host). No build step, no dependencies.

## Structure
- `index.html`, `about.html`, `services.html`, `case-studies.html`, `blog.html`, `contact.html` — English pages
- `ar/` — Arabic (RTL) versions of every page
- `assets/logo.png`, `assets/logo-light.png` — logo files (only external assets; everything else, including all CSS and JS, is embedded directly in each HTML file)

## Publish on GitHub Pages
1. Create a new GitHub repository and push all these files to it (keep the folder structure as-is, including `ar/` and `assets/`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. Optional: add a custom domain under Settings → Pages → Custom domain.

## Notes
- Each HTML page is self-contained (CSS + JS inlined), so pages will render correctly even if opened individually.
- Photos (hero, case studies) are hotlinked from Unsplash — free for commercial use, no attribution required. If you'd rather host them yourself, download them and update the `<img src="...">` URLs to a local `assets/` path.
- WhatsApp number and email in the footer/buttons are pulled from the original site content — update the `wa.me/` links and `mailto:` address if these change.
