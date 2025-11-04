# Image Gallery Guide

## 🎨 Overview

Your portfolio now supports flexible image galleries that can be placed anywhere in project detail pages. Each gallery can display images in different layouts and all images can be expanded in a lightbox viewer.

---

## 📸 Gallery Types

### 1. **Carousel**
- Slideshow format with navigation arrows and dots
- One image displayed at a time
- Manual navigation (arrows + dots)
- Perfect for: Design iterations, process walkthroughs

### 2. **Two-Column Grid**
- Two images side by side (responsive: 1 column on mobile)
- Perfect for: Before/after comparisons, dual views

### 3. **Three-Column Grid**
- Three images in a row (responsive: 1 column on mobile, 3 on tablet+)
- Perfect for: Feature showcases, multiple variations

### 4. **2×2 Grid**
- Four images in a 2×2 grid (responsive: 1 column on mobile, 2×2 on tablet+)
- Perfect for: Key screens, comprehensive overviews

---

## 🛠️ How to Add Galleries

### Location
Add galleries in `/data/projects.js` within any project object.

### Basic Structure

```javascript
{
    id: 1,
    title: 'Project Name',
    // ... other project fields ...
    
    galleries: [
        {
            type: 'carousel',              // Gallery type
            title: 'Design Process',       // Optional title
            position: 'after-overview',    // Where to place it
            images: [
                { 
                    url: 'https://...', 
                    caption: 'Image description' 
                },
                // ... more images
            ]
        },
        // Add more galleries as needed
    ]
}
```

---

## 📍 Positioning Galleries

You can place galleries at these positions:

| Position | Where It Appears |
|----------|-----------------|
| `after-overview` | After the Overview section |
| `after-challenge` | After the Challenge section |
| `after-research` | After the Research & Discovery section |
| `after-solution` | After the Solution section |
| `before-results` | Before the Results section |

**Example:**
```javascript
position: 'after-overview'  // Shows gallery right after Overview
```

---

## 📝 Complete Examples

### Example 1: Carousel Gallery

```javascript
{
    type: 'carousel',
    title: 'Design Evolution',
    position: 'after-overview',
    images: [
        { url: 'https://...wireframe.jpg', caption: 'Initial wireframes' },
        { url: 'https://...mockup.jpg', caption: 'High-fidelity mockups' },
        { url: 'https://...prototype.jpg', caption: 'Interactive prototype' },
        { url: 'https://...final.jpg', caption: 'Final design' }
    ]
}
```

### Example 2: Two-Column Gallery

```javascript
{
    type: 'two-column',
    title: 'Before & After',
    position: 'after-solution',
    images: [
        { url: 'https://...before.jpg', caption: 'Original design' },
        { url: 'https://...after.jpg', caption: 'Redesigned version' }
    ]
}
```

### Example 3: Three-Column Gallery

```javascript
{
    type: 'three-column',
    title: 'Feature Highlights',
    position: 'after-research',
    images: [
        { url: 'https://...feature1.jpg', caption: 'Search functionality' },
        { url: 'https://...feature2.jpg', caption: 'Filter system' },
        { url: 'https://...feature3.jpg', caption: 'User dashboard' }
    ]
}
```

### Example 4: 2×2 Grid Gallery

```javascript
{
    type: 'grid-2x2',
    title: 'Key Screens',
    position: 'before-results',
    images: [
        { url: 'https://...home.jpg', caption: 'Homepage' },
        { url: 'https://...product.jpg', caption: 'Product page' },
        { url: 'https://...cart.jpg', caption: 'Shopping cart' },
        { url: 'https://...checkout.jpg', caption: 'Checkout flow' }
    ]
}
```

---

## 🖼️ Multiple Galleries in One Project

You can add as many galleries as you want! They'll appear in the positions you specify:

```javascript
galleries: [
    {
        type: 'carousel',
        title: 'Design Process',
        position: 'after-overview',
        images: [/* ... */]
    },
    {
        type: 'two-column',
        title: 'User Testing',
        position: 'after-research',
        images: [/* ... */]
    },
    {
        type: 'grid-2x2',
        title: 'Final Screens',
        position: 'after-solution',
        images: [/* ... */]
    }
]
```

---

## ✨ Lightbox Features

When users click any image, a lightbox opens with:

- **Full-screen view** - Image displayed in maximum size
- **Image caption** - Shown below the image
- **Image counter** - Shows "3 / 8" (current / total)
- **Navigation arrows** - Click to see prev/next images
- **Keyboard support:**
  - `←` Left arrow: Previous image
  - `→` Right arrow: Next image
  - `Esc`: Close lightbox
- **Click outside** - Click background to close

---

## 🎯 Quick Reference

### Gallery Types

```javascript
type: 'carousel'      // Slideshow with arrows & dots
type: 'two-column'    // 2 images side by side
type: 'three-column'  // 3 images in a row
type: 'grid-2x2'      // 4 images in 2×2 grid
```

### Positions

```javascript
position: 'after-overview'
position: 'after-challenge'
position: 'after-research'
position: 'after-solution'
position: 'before-results'
```

### Image Format

```javascript
{ url: 'https://...', caption: 'Description' }
```

---

## 🚀 Tips for Best Results

1. **Image URLs**: Use Unsplash or your own hosted images
2. **Captions**: Keep them short and descriptive
3. **Carousel**: Best with 3-5 images
4. **Grid layouts**: Work best with even numbers of images
5. **Position**: Spread galleries throughout the project for better flow
6. **Mix types**: Use different gallery types for variety

---

## 📱 Responsive Design

All galleries are fully responsive:

- **Mobile (< 640px)**: Single column for grids
- **Tablet (640px - 768px)**: Two columns for 2×2 grid
- **Desktop (> 768px)**: Full layout as specified

---

## ❌ Removing Galleries

To remove galleries from a project:

1. Open `/data/projects.js`
2. Find the project
3. Delete the entire `galleries: [...]` array, or
4. Remove individual gallery objects from the array

---

## 🔧 Troubleshooting

**Gallery not showing?**
- Check that `galleries` is inside the project object
- Verify the position name is spelled correctly
- Make sure images array is not empty

**Images not clickable?**
- Images should automatically be clickable
- Check browser console for errors

**Carousel not working?**
- Ensure you have more than one image in the carousel
- Check that type is exactly `'carousel'`

---

## 💡 Examples in Action

See `/data/projects.js` for a complete working example in the first project (E-Commerce Redesign).

---

Need help? Check the main `/EDITING_GUIDE.md` or `/data/README.md`!
