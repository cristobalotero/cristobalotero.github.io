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

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy options

- GitHub Pages
- Netlify
- Vercel

When DNS is ready to point `www.cristobalotero.com` to GitHub Pages, add a root-level `CNAME` file containing `www.cristobalotero.com`.
