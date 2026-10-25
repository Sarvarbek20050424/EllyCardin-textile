# ELLYCARDIN TEKSTIL — Corporate Website

A premium minimalist one-page website for "ELLYCARDIN TEKSTIL" FC LLC, a textile enterprise in Kuvasay, Fergana region, Uzbekistan.

## Features

- **Trilingual**: Uzbek (default), Russian, English — switchable without page reload
- **Responsive**: Mobile-first from 360px, works on all screen sizes
- **Accessible**: WCAG AA contrast, keyboard navigation, screen reader support
- **Animated**: Gold thread concept with GSAP ScrollTrigger (graceful degradation)
- **Print-ready**: Requisites section prints as a clean one-page document
- **No dependencies on server**: Works by double-clicking `index.html` (file://) or on any static host

## Quick Start

### Option 1: Direct open
Simply open `index.html` in a browser. All assets load from CDN.

### Option 2: Local server (recommended)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

## File Structure

```
index.html          — Main HTML file
css/styles.css      — All styles (design tokens, layout, components, print)
js/config.js        — Feature flags and confirmed contact constants
js/i18n.js          — All translations (uz/ru/en) + language switcher
js/products.js      — Product data (placeholder names — edit freely)
js/main.js          — App logic: loader, nav, animations, slider, form, FAQ, etc.
assets/             — See "Assets to Supply" below
README.md           — This file
```

## Configuration

Edit `js/config.js` to toggle features:

```javascript
var CONFIG = {
  showRouteCountries: false,  // true = "Xitoy"/"Turkiya"; false = "Mato"/"Ip"
  showTeam: false,            // true = show #team section
  // ... contact info (confirmed facts only)
};
```

## Customization

### Replace product data
Edit `js/products.js`. Each product has: `id`, `image`, `title` (uz/ru/en), `text` (uz/ru/en).

### Change colors
All design tokens are CSS variables in `css/styles.css` under `:root`.

### Edit copy/text
All visible text is in `js/i18n.js` — edit the uz/ru/en objects. Keys must remain identical.

## Assets to Supply

The following files go in the `assets/` directory. **The site works without them** (fallbacks are provided):

| File | Purpose | Fallback |
|------|---------|----------|
| `assets/logo-full.png` | Full logo (hero) | Text wordmark "Ellycardin TEKSTİL" |
| `assets/logo-mark.png` | Logo mark (nav, footer) | Gold circle with "E" |
| `assets/hero.mp4` | Hero background video (H.264) | Animated gold silk lines SVG |
| `assets/hero.webm` | Hero video (VP9, preferred) | MP4 or silk lines |
| `assets/hero-poster.jpg` | Video poster frame | Emerald gradient |
| `assets/products/*.jpg` | Product photos (6 images) | CSS knit/weave texture pattern |

### Recommended specs:
- **Hero video**: 1080p, muted, loop-friendly, 10-30 seconds, H.264 + WebM
- **Product images**: 800×600px, JPG, optimized (<100KB each)
- **Logo**: PNG with transparency, SVG preferred

## Deployment

### Static hosting (Netlify, Vercel, GitHub Pages)
Upload all files as-is. No build step needed.

### Custom server
Serve the root directory. Ensure MIME types are correct:
- `.html` → `text/html`
- `.css` → `text/css`
- `.js` → `application/javascript`
- `.mp4` → `video/mp4`
- `.webm` → `video/webm`

## Known Limitations

1. **CDN dependency**: GSAP, Lenis, and Embla load from jsDelivr. If CDN is unreachable, the site remains fully functional (no animations, no slider autoplay).
2. **No backend**: Form sends via WhatsApp/mailto links. For a Telegram bot or database, a backend is needed.
3. **No image optimization**: Product images are loaded as-is. Consider using a CDN with image optimization.
4. **Print**: Only the requisites section is styled for print. Other sections are hidden.

## Accessibility Notes

- Skip link to main content
- All interactive elements are keyboard-accessible
- Focus visible rings on all focusable elements
- `aria-label`, `aria-expanded`, `aria-hidden` used appropriately
- Color contrast meets WCAG AA (4.5:1 minimum)
- `prefers-reduced-motion` disables all animations
- Touch targets are minimum 44px

## Performance

- Fonts preloaded
- Images lazy-loaded
- Video preload="metadata" (doesn't auto-download)
- No layout shift (aspect-ratio set)
- CSS is minimal and non-blocking
- JS is deferred

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## License

© 2026 ELLYCARDIN TEKSTIL FC LLC. All rights reserved.
