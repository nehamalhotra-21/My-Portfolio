# Neha Malhotra — Portfolio

A static, dependency-free portfolio site (HTML/CSS/vanilla JS).

## Structure

```
index.html      Page markup
styles.css      All styling (design tokens at the top of the file)
script.js       Injects skills/projects/education/certifications/achievements,
                handles the nav, scroll reveals, and the certificate modal
resume/         Drop your resume PDF here (see below)
```

## Before you publish

1. **Resume file** — the "Download Resume" buttons link to
   `resume/Neha_Malhotra_Resume.pdf`. Add your resume PDF to the `resume/`
   folder with that exact filename and the buttons will work immediately.

2. **Google Drive images** — the profile photo and certificate previews load
   directly from Google Drive. For these to display for site visitors, each
   file's sharing setting must be **"Anyone with the link" → Viewer**.
   If a file is private, the image will silently fall back to a placeholder
   icon (this is handled automatically, so the page never breaks — it just
   won't show that particular image).

   For a more reliable, permanent setup, consider downloading the images and
   certificate files and placing them in an `assets/` folder, then swapping
   the corresponding URLs in `script.js` (search for `drive.google.com`) to
   local paths.

## Running locally

No build step is required. Open `index.html` directly in a browser, or serve
the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This is a static site, so it works out of the box on:
- **Vercel** — drag-and-drop the folder or connect the repo, no config needed
- **Netlify** — same, drag-and-drop deploy
- **GitHub Pages** — push to a repo and enable Pages on the `main` branch

## Editing content

All page copy for skills, projects, education, certifications, and
achievements lives in structured arrays at the top of `script.js` — edit
those objects to update content without touching the HTML.
