# Image Gallery - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Open the file
```
/data/projects.js
```

### Step 2: Find your project
Scroll to the project where you want to add galleries.

### Step 3: Add galleries array
Add this before the closing `}` of your project:

```javascript
galleries: [
    {
        type: 'carousel',
        title: 'Design Process',
        position: 'after-overview',
        images: [
            { url: 'IMAGE_URL_1', caption: 'Step 1' },
            { url: 'IMAGE_URL_2', caption: 'Step 2' },
            { url: 'IMAGE_URL_3', caption: 'Step 3' }
        ]
    }
]
```

### Step 4: Save and test!
Save the file and view your project in the browser.

---

## 📋 Copy-Paste Templates

### Carousel (Slideshow)
```javascript
{
    type: 'carousel',
    title: 'Your Title',
    position: 'after-overview',
    images: [
        { url: 'https://...', caption: 'Description 1' },
        { url: 'https://...', caption: 'Description 2' },
        { url: 'https://...', caption: 'Description 3' }
    ]
}
```

### Two Images Side-by-Side
```javascript
{
    type: 'two-column',
    title: 'Before & After',
    position: 'after-solution',
    images: [
        { url: 'https://...', caption: 'Before' },
        { url: 'https://...', caption: 'After' }
    ]
}
```

### Three Images in a Row
```javascript
{
    type: 'three-column',
    title: 'Key Features',
    position: 'after-research',
    images: [
        { url: 'https://...', caption: 'Feature 1' },
        { url: 'https://...', caption: 'Feature 2' },
        { url: 'https://...', caption: 'Feature 3' }
    ]
}
```

### 2×2 Grid (4 Images)
```javascript
{
    type: 'grid-2x2',
    title: 'Main Screens',
    position: 'before-results',
    images: [
        { url: 'https://...', caption: 'Screen 1' },
        { url: 'https://...', caption: 'Screen 2' },
        { url: 'https://...', caption: 'Screen 3' },
        { url: 'https://...', caption: 'Screen 4' }
    ]
}
```

---

## 📍 Position Options

Choose where your gallery appears:

```javascript
position: 'after-overview'    // After Overview
position: 'after-challenge'   // After Challenge
position: 'after-research'    // After Research
position: 'after-solution'    // After Solution
position: 'before-results'    // Before Results
```

---

## 🎯 Complete Example

Here's a project with 2 galleries:

```javascript
{
    id: 1,
    title: 'My Amazing Project',
    category: 'Web Design',
    description: 'A cool project',
    image: 'https://...',
    tags: ['UI', 'UX'],
    
    role: 'Designer',
    timeline: '2 months',
    team: '3 people',
    overview: 'Project overview text...',
    challenge: 'Challenge text...',
    research: ['Finding 1', 'Finding 2'],
    solution: 'Solution text...',
    results: [
        { metric: '50%', label: 'Improvement' }
    ],
    
    // ADD GALLERIES HERE
    galleries: [
        {
            type: 'carousel',
            title: 'Design Evolution',
            position: 'after-overview',
            images: [
                { url: 'https://...', caption: 'Sketch' },
                { url: 'https://...', caption: 'Wireframe' },
                { url: 'https://...', caption: 'Final' }
            ]
        },
        {
            type: 'grid-2x2',
            title: 'Final Screens',
            position: 'after-solution',
            images: [
                { url: 'https://...', caption: 'Home' },
                { url: 'https://...', caption: 'Product' },
                { url: 'https://...', caption: 'Cart' },
                { url: 'https://...', caption: 'Checkout' }
            ]
        }
    ]
}
```

---

## ✅ Checklist

Before saving:
- [ ] Added comma after `results` array
- [ ] Added `galleries: [` array
- [ ] Chose a gallery type
- [ ] Set a position
- [ ] Added image URLs and captions
- [ ] Closed all brackets `]` and `}`

---

## 🎨 What Users Will See

1. **In the gallery:**
   - Carousel: Arrows + dots to navigate
   - Grid: All images displayed
   - Hover to see captions (grids only)

2. **When clicking an image:**
   - Full-screen lightbox opens
   - See caption below image
   - Counter shows "2 / 5"
   - Navigate with arrows or keyboard
   - Close with X, Esc, or click outside

---

## 💡 Tips

- **Get images from Unsplash**: Free, high-quality images
- **Keep captions short**: 5-10 words max
- **Use 3-5 carousel images**: Not too many
- **Mix gallery types**: Use different types for variety
- **Test on mobile**: Make sure it looks good!

---

## 🆘 Need Help?

- **Full guide**: See `/GALLERY_GUIDE.md`
- **Troubleshooting**: Check browser console (F12)
- **Example**: First project in `/data/projects.js` has galleries

---

That's it! Start adding galleries to your projects! 🎉
