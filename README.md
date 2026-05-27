# Cristóbal Otero Website

Static academic website. The primary experience is now the one-page `index.html` homepage, with compact publication entries and expandable paper details.

## Pages

- `index.html` - main one-page academic site
- `research.html` - redirects to `index.html`
- `data-code.html` - redirects to `index.html`
- `cv.html` - redirects to `index.html`
- `teaching.html` - redirects to `index.html`
- `contact.html` - redirects to `index.html`
- `assets/portrait.jpg` - local portrait image for reliable GitHub Pages rendering
- `styles.css` - global styles
- `script.js` - nav highlighting and reveal animations
- `CNAME` - GitHub Pages custom domain configuration for `www.cristobalotero.com`

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy options

- GitHub Pages
- Netlify
- Vercel

For GitHub Pages, keep `CNAME` in the published repository root so the site resolves at `www.cristobalotero.com`.
