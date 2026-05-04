# Portfolio — Unreal Engine Game Developer

A clean, minimal personal portfolio website for GitHub Pages.

## File Structure

```
portfolio/
├── index.html              ← Main page (edit your name, bio, links here)
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles (edit colours/fonts here)
│   ├── js/
│   │   ├── projects.js     ← PROJECT DATA — edit this to add your projects
│   │   └── main.js         ← Nav, filters, modal, contact form logic
│   ├── images/             ← Put your screenshots, GIFs, thumbnails here
│   └── cv.pdf              ← Drop your CV here
```

## Getting Started

### 1. Add your projects
Open `assets/js/projects.js` and edit the `PROJECTS` array. Each project looks like:

```js
{
  id: 1,
  title: "My Game",
  summary: "One-line teaser for the card.",
  description: `Longer description shown in the modal.`,
  category: "gameplay",           // gameplay | environment | prototype
  tags: ["Unreal Engine 5", "C++"],
  media: {
    type: "image",                // image | gif | video | youtube
    src: "assets/images/mygame.jpg",
    // For YouTube: src: "https://www.youtube.com/embed/VIDEO_ID"
  },
  details: [
    { label: "Role",   value: "Solo Dev" },
    { label: "Year",   value: "2024" },
  ],
  links: [
    { label: "GitHub", url: "https://github.com/..." },
  ],
}
```

### 2. Add your images/GIFs
Drop all media files into `assets/images/`. Reference them in `projects.js` as `"assets/images/filename.jpg"`.

**Recommended sizes:**
- Thumbnails / hero images: 1280×720px (16:9)
- GIFs: keep under 10MB for load speed; use ezgif.com to compress

### 3. Personalise `index.html`
Find and replace:
- `Your Name` — your actual name
- `YN` — your initials (nav logo)
- `[Your City]`, `[Your University]`, `[Your Degree]` — in the About section
- Social links (GitHub, LinkedIn, itch.io, ArtStation)

### 4. Add your CV
Drop your CV as `assets/cv.pdf`.

### 5. Set up the contact form (free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/abcdefgh`
3. Open `assets/js/main.js` and replace `YOUR_FORM_ID` with your form's ID

### 6. Add your photo
In `index.html`, find the `about-photo-placeholder` div and replace with:
```html
<img src="assets/images/photo.jpg" alt="Your Name" />
```

## Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push all files to the `main` branch
3. Go to Settings → Pages → set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io`

Or for a project repo, go to Settings → Pages and set source to `main`/`root`.

## Customisation

### Change accent colour
In `style.css`, edit the `:root` variables:
```css
--highlight: #c8b89a;  /* warm tan accent */
--black: #0e0e0e;      /* near-black for text/buttons */
```

### Add a new filter category
1. Add `category: "tools"` (for example) to a project in `projects.js`
2. Add a button in `index.html`: `<button class="filter-btn" data-filter="tools">Tools</button>`
