# Content Management Guide

This folder contains all the editable content for your portfolio website. Each file corresponds to a specific section of the site.

## 📁 File Structure

```
/data/
├── projects.js        ← Portfolio projects (edit here!)
├── critiques.js       ← Critiques & Redesign content (edit here!)
├── observations.js    ← Design Observations articles (edit here!)
└── README.md          ← This guide
```

## ✏️ How to Edit Content

### 1. **Portfolio Projects** (`projects.js`)

To add or edit a portfolio project, open `/data/projects.js` and modify the `projects` array.

**Each project has these fields:**

```javascript
{
    id: 1,                    // Unique number (don't duplicate!)
    title: 'Project Name',
    category: 'Web Design',   // e.g., 'Web Design', 'Mobile App', etc.
    description: 'Brief description...',
    image: 'https://...',     // Image URL (use Unsplash or your own)
    tags: ['Tag1', 'Tag2'],   // Skills/topics as array
    
    // Detail page content
    role: 'Lead Designer',
    timeline: '3 months',
    team: '2 Designers, 3 Engineers',
    overview: 'Full overview text...',
    
    // NEW! Quick Summary (optional) - shows as card below overview
    quickSummary: {
        problems: [             // Array of key problems
            'Problem 1',
            'Problem 2',
        ],
        solutions: [            // Array of key solutions
            'Solution 1',
            'Solution 2',
        ]
    },
    
    challenge: 'Challenge description...',
    research: [                // Array of research findings
        'Finding 1',
        'Finding 2',
    ],
    solution: 'Solution description...',
    results: [                 // Array of metrics
        { metric: '42%', label: 'Description' },
        { metric: '35%', label: 'Description' },
    ],
    
    // NEW! Image galleries (optional)
    galleries: [
        {
            type: 'carousel',              // 'carousel', 'two-column', 'three-column', 'grid-2x2'
            title: 'Gallery Title',        // Optional
            position: 'after-overview',    // Where to place it
            images: [
                { url: 'https://...', caption: 'Description' },
                { url: 'https://...', caption: 'Description' }
            ]
        }
    ]
}
```

**To add a new project:** Copy an existing project object, paste it at the end of the array (before the closing `];`), update the `id` to be unique, and fill in your content.

**📸 NEW! Image Galleries:**
Projects can now include flexible image galleries! See `/GALLERY_GUIDE.md` for complete documentation on:
- 4 gallery types (carousel, two-column, three-column, grid-2x2)
- Positioning galleries anywhere in the project
- Lightbox viewer with navigation
- Examples and best practices

---

### 2. **Critiques & Redesign** (`critiques.js`)

To add or edit critique case studies, open `/data/critiques.js`.

**Each critique has these fields:**

```javascript
{
    id: 1,
    title: 'Redesign Title',
    originalIssues: [          // Array of problems
        'Issue 1',
        'Issue 2',
    ],
    improvements: [             // Array of solutions
        'Improvement 1',
        'Improvement 2',
    ],
    keyInsights: 'Main takeaway text...',
    impact: 'Measured results...'
}
```

---

### 3. **Design Observations** (`observations.js`)

To add or edit design articles, open `/data/observations.js`.

**Each observation has these fields:**

```javascript
{
    id: 1,
    title: 'Article Title',
    category: 'UX Patterns',   // Used for filtering
    date: 'October 30, 2025',
    readTime: '5 min read',
    excerpt: 'Short preview text...',
    content: 'Full article content...',
    tags: ['Tag1', 'Tag2']
}
```

**Available categories:** 'Industry Trends', 'UX Patterns', 'Accessibility', 'Mobile Design', 'Visual Design'

---

## 🎯 Quick Tips

1. **Don't forget commas:** Each item in an array needs a comma after it (except the last one)
2. **Use unique IDs:** Each item needs a different `id` number
3. **Escape quotes:** If your text contains quotes, use `\'` like this: `'It\'s amazing'`
4. **Test your changes:** Save the file and refresh your browser to see updates

## 🚨 Common Mistakes

❌ **Missing comma between items**
```javascript
{id: 1, title: 'A'}
{id: 2, title: 'B'}  // ERROR! Missing comma above
```

✅ **Correct**
```javascript
{id: 1, title: 'A'},
{id: 2, title: 'B'}
```

---

## 📝 Need Help?

If something breaks:
1. Check the browser console for errors (F12 → Console tab)
2. Make sure all brackets `{}` and `[]` are properly closed
3. Verify all commas are in place
4. Ensure quote marks match: `'text'` or `"text"`

Happy editing! 🎨
