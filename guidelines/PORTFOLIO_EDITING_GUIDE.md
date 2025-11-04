# Portfolio Page Editing Guide

## 🎯 Portfolio Page Structure

The portfolio page has **two main parts**:

1. **Portfolio Page Header** (title + intro text)
2. **Project Cards Grid** (the clickable project cards)

---

## 📝 Part 1: Portfolio Page Header

### What It Looks Like:
```
┌─────────────────────────────────────┐
│         PORTFOLIO                    │  ← Main title
│                                      │
│  A focused look at my design        │
│  process and the solutions they     │  ← Introduction text
│  inspired...                         │
└─────────────────────────────────────┘
```

### Where to Edit:
**File:** `/index.html`  
**Location:** Around line 162  
**Search for:** `id="portfolioPage"`

```html
<div class="page" id="portfolioPage">
    <section class="page-header portfolio-header">
        <div class="container">
            <h1>Portfolio</h1>  <!-- ← EDIT TITLE HERE -->
            <p class="header-text">
                A focused look at my design process and the 
                solutions they inspired. Follow the journey where 
                curiosity, research, and iteration connect to 
                build something meaningful.
                <!-- ↑ EDIT INTRODUCTION TEXT HERE -->
            </p>
        </div>
    </section>
```

---

## 📝 Part 2: Project Cards (Grid Items)

### What It Looks Like:
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   [Image]    │  │   [Image]    │  │   [Image]    │
│              │  │              │  │              │
│ Web Design   │  │ Mobile App   │  │ SaaS Product │  ← category
│ Project Name │  │ Project Name │  │ Project Name │  ← title
│ Description  │  │ Description  │  │ Description  │  ← description
│ [Tag] [Tag]  │  │ [Tag] [Tag]  │  │ [Tag] [Tag]  │  ← tags
└──────────────┘  └──────────────┘  └──────────────┘
```

### Where to Edit:
**File:** `/data/projects.js`

Each project in the `projects` array controls one card. The grid cards use these specific fields:

```javascript
{
    id: 1,
    title: 'E-Commerce Redesign',        // ← Shows as card title
    category: 'Web Design',               // ← Shows as label above title
    description: 'Complete redesign...', // ← Shows as card description
    image: 'https://...',                 // ← Card image
    tags: ['UI Design', 'UX Research'],   // ← Shows as tags at bottom
    
    // These fields below are for the DETAIL PAGE (when user clicks card)
    role: 'Lead Product Designer',
    timeline: '3 months',
    // ... rest of detail fields
}
```

### What Each Field Does:

| Field | Where It Shows | Example |
|-------|----------------|---------|
| `title` | Card heading | "E-Commerce Redesign" |
| `category` | Small label above title | "Web Design" |
| `description` | Text under title | "Complete redesign of an e-commerce platform..." |
| `image` | Card background image | URL to image |
| `tags` | Bottom of card | `['UI Design', 'UX Research']` |

---

## 🔄 How It All Works Together

```
Portfolio Page (index.html)
    │
    ├── Page Header & Intro  ← Edit in /index.html (lines 162-171)
    │
    └── Projects Grid
            │
            └── Renders from /data/projects.js
                    │
                    ├── Uses: title, category, description, image, tags
                    │        (for the grid card view)
                    │
                    └── When clicked → Goes to detail page
                                       Uses: role, timeline, overview, etc.
                                       (all other fields)
```

---

## ✏️ Example Edit

**To change a project card title:**

1. Open `/data/projects.js`
2. Find the project by its current title
3. Change the `title` field:

```javascript
{
    id: 1,
    title: 'NEW TITLE HERE',  // ← Change this
    category: 'Web Design',
    // ... rest stays the same
}
```

4. Save and refresh browser ✨

---

## 💡 Pro Tips

✅ **Grid cards only use:** title, category, description, image, tags  
✅ **Detail pages use:** ALL fields (including role, timeline, overview, etc.)  
✅ **Page header text:** Edit in `/index.html`  
✅ **Individual project content:** Edit in `/data/projects.js`  

---

Need more help? Check `/data/README.md` for detailed project editing instructions!
