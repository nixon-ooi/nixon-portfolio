# Portfolio Website - Content Editing Guide

## 🎯 Quick Start: Where to Edit Content

Your portfolio content is now organized into separate, easy-to-find files!

### Want to edit...?

| Content Type | File to Edit | Location |
|-------------|--------------|----------|
| **Portfolio projects** | `projects.js` | `/data/projects.js` |
| **Critiques & Redesign** | `critiques.js` | `/data/critiques.js` |
| **Design Observations** | `observations.js` | `/data/observations.js` |
| **Home page text** | `index.html` | `/index.html` (search for the section) |
| **Styles & colors** | `style.css` | `/style.css` |

---

## 📂 File Structure Overview

```
portfolio-website/
├── index.html              ← Main HTML structure (rarely needs editing)
├── style.css               ← All styles and colors
├── script.js               ← Navigation logic (don't edit unless needed)
│
├── data/                   ← 🎯 EDIT CONTENT HERE!
│   ├── projects.js         ← Portfolio projects with full details
│   ├── critiques.js        ← Critique case studies
│   ├── observations.js     ← Design articles
│   └── README.md           ← Detailed editing instructions
│
└── assets/
    ├── logo.svg            ← Your NIXON logo
    └── images/             ← Place your images here
```

---

## ✏️ Common Editing Tasks

### 1. Add a New Portfolio Project

1. Open `/data/projects.js`
2. Copy an existing project object (everything between `{` and `}`)
3. Paste it at the end of the list
4. Update:
   - `id` to a new unique number
   - `title`, `description`, `image`, etc.
   - All detail fields: `role`, `timeline`, `overview`, `challenge`, `research`, `solution`, `results`
5. Save and refresh your browser

### 2. Edit Portfolio Page

**Portfolio Page Header/Intro:**
1. Open `/index.html`
2. Search for: `id="portfolioPage"` (around line 162)
3. Edit:
   - `<h1>Portfolio</h1>` - The main title
   - `<p class="header-text">` - The introduction paragraph

**Portfolio Project Cards (Grid):**
1. Open `/data/projects.js`
2. Edit these fields for each project (shown on grid cards):
   - `title` - Project name
   - `category` - Label (e.g., "Web Design")
   - `description` - Short description
   - `image` - Card image URL
   - `tags` - Array of skill tags

### 2.5. Add Quick Summary Cards to Projects

**NEW!** Add a visual problem/solution summary card (inspired by critique cards)!

1. Open `/data/projects.js`
2. Add a `quickSummary` object to any project
3. List 3-5 problems and their solutions
4. Card appears right after the overview text
5. Great for busy viewers who want to scan quickly!

**Example:**
```javascript
quickSummary: {
    problems: ['Problem 1', 'Problem 2', 'Problem 3'],
    solutions: ['Solution 1', 'Solution 2', 'Solution 3']
}
```

**See `/QUICK_SUMMARY_GUIDE.md` for complete instructions!**

### 2.6. Add Image Galleries to Projects

**NEW!** You can now add flexible image galleries to project detail pages!

1. Open `/data/projects.js`
2. Add a `galleries` array to any project
3. Choose from 4 gallery types:
   - `carousel` - Slideshow with arrows & dots
   - `two-column` - 2 images side by side
   - `three-column` - 3 images in a row
   - `grid-2x2` - 4 images in 2×2 grid
4. Place galleries anywhere: `after-overview`, `after-challenge`, `after-research`, `after-solution`, `before-results`
5. All images expand in a lightbox when clicked!

**See `/GALLERY_GUIDE.md` for complete instructions and examples!**

### 3. Update Your Photo

1. Save your photo to `/assets/images/profile.png` (or .jpg)
2. Open `/index.html`
3. Search for: `figma:asset`
4. Replace with: `./assets/images/profile.png`

### 3.5. Update Your Resume

**The "Download Resume" button is now functional!**

1. Save your resume as a PDF file
2. Name it exactly `resume.pdf`
3. Replace the file at `/assets/resume.pdf`
4. That's it! Your resume will now download when users click the button

**Current status:** A mock/placeholder PDF is in place for testing

### 4. Change Colors/Styles

1. Open `/style.css`
2. Colors are defined at the top in the `:root` section
3. Search for the element you want to style
4. Save and refresh

---

## 🔄 How the System Works

**Old Way (What We Changed):**
- All content was mixed in with code in `script.js`
- Hard to find what to edit
- Easy to break functionality while editing content

**New Way (Better!):**
- Content is in separate files in `/data/` folder
- Clear labels on what each file contains
- Can't accidentally break site navigation
- Easy to find and edit specific content

---

## 🚨 Important Notes

1. **Always test after editing:** Save your file and refresh the browser
2. **Keep backups:** Copy the file before making major changes
3. **Don't edit `script.js`:** Unless you know what you're doing
4. **JavaScript syntax matters:** 
   - Don't forget commas between items
   - Keep quotes matched: `'text'` or `"text"`
   - Make sure brackets close: `{...}` and `[...]`

---

## 💡 Pro Tips

- Use the browser console (F12 → Console) to see errors
- Edit one file at a time and test
- Comment out code you're unsure about with `//`
- The `/data/README.md` file has detailed examples

---

## Need Help?

Check `/data/README.md` for detailed content editing instructions with examples.

Happy editing! 🎨✨
