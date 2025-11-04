# Table, Tabs & Accordion Guide

## Overview
You can now add interactive **tables**, **tabs**, and **accordions** to both your **critique** and **portfolio** detail pages. These components are perfect for organizing detailed information in an engaging, user-friendly way.

## How to Add These Components

Edit `/data/critiques.js` or `/data/projects.js` and add these optional properties to any critique or project object:

### 1. Comparison Table

```javascript
comparisonTable: {
    title: 'Feature Analysis: Testing vs Empathise Stage',
    headers: ['Column 1', 'Column 2'],
    rows: [
        ['Row 1 Cell 1', 'Row 1 Cell 2'],
        ['Row 2 Cell 1', 'Row 2 Cell 2'],
        ['Row 3 Cell 1', 'Row 3 Cell 2']
    ]
}
```

**Use cases:**
- Before vs After comparisons
- Feature comparisons
- Stage-by-stage breakdowns
- Metric comparisons

### 2. Tabs Section

```javascript
tabsSection: {
    title: 'Key Improvements by Category:',
    tabs: [
        {
            label: 'Tab 1 Name',
            content: '<p>Your content here. You can use HTML tags like <a href="#">links</a>.</p>'
        },
        {
            label: 'Tab 2 Name',
            content: '<p>More content for the second tab.</p>'
        }
    ]
}
```

**Use cases:**
- Categorized information
- Multiple perspectives on the same topic
- Step-by-step processes
- Different aspects of a solution

### 3. Accordion Section

```javascript
accordionSection: {
    title: 'Implementation Details',
    items: [
        {
            title: 'Accordion Item 1',
            content: 'Detailed explanation that appears when the item is expanded.'
        },
        {
            title: 'Accordion Item 2',
            content: 'More detailed information here.'
        }
    ]
}
```

**Use cases:**
- FAQ-style content
- Technical details
- Methodology explanations
- Detailed breakdowns

## Example Implementation

Check out **Critique #1** (Popular Social Media App Navigation) to see all three components in action with real data!

## Features

### Comparison Table
- ✅ Responsive design with horizontal scroll on mobile
- ✅ Hover effects on rows (desktop)
- ✅ Clean, professional styling
- ✅ Unlimited rows and 2+ columns
- ✅ Mobile: First column sticky (stays visible while scrolling)
- ✅ Mobile: Scroll indicators show when more content is available
- ✅ Mobile: Smooth touch scrolling with momentum

### Tabs
- ✅ Click to switch between content
- ✅ Smooth fade-in animations
- ✅ Mobile-friendly with horizontal scroll
- ✅ Supports HTML content including links
- ✅ First tab active by default
- ✅ Can contain tables or text content
- ✅ Active tab highlighted with underline

### Accordion
- ✅ Click to expand/collapse items
- ✅ Smooth height transitions
- ✅ Icon rotates 90° when expanded
- ✅ First item expanded by default
- ✅ Multiple items can be open simultaneously
- ✅ Click again to collapse expanded items

## Styling

All components use your existing design system:
- Colors from `--color-gray-*` CSS variables
- Heading font: Barlow Semi Condensed
- Body font: Inter
- Consistent spacing and borders

## Tips

1. **Keep tabs concise**: 3-5 tabs work best
2. **Table headers**: Use clear, descriptive column names
3. **Accordion titles**: Make them scannable and descriptive
4. **Content length**: Accordions are perfect for longer content that might overwhelm if shown all at once
5. **HTML in tabs**: You can use `<p>`, `<a>`, `<strong>`, `<em>`, and `<br>` tags in tab content

## Gallery & Lightbox Features

Both critique and portfolio pages now have full support for:
- ✅ **Carousel galleries** with navigation arrows and clickable images
- ✅ **2x2 Grid galleries** with clickable images
- ✅ **Lightbox modal** - Click any carousel or grid image to view full-size
- ✅ Lightbox navigation with prev/next buttons and keyboard arrows
- ✅ Image captions and counter display
- ✅ Mobile-optimized controls

These features work automatically on any gallery you add to your project or critique data!

## Need Help?

All components (tables, tabs, accordions, galleries) are completely optional. If a critique or project doesn't have these properties defined, the detail page will work normally without them.

## Technical Notes

- All styles are defined in `/style.css` under sections:
  - `CRITIQUE TABLE STYLES`
  - `CRITIQUE TABS STYLES`  
  - `CRITIQUE ACCORDION STYLES`
  - `CAROUSEL AND LIGHTBOX STYLES`
- JavaScript functions are in `/script.js`:
  - `renderComparisonTable()`
  - `renderTabsSection()`
  - `renderAccordionSection()`
  - `initializeTabs()`
  - `initializeAccordions()`
  - `initializeCarousels()`
  - `initializeLightbox()`
