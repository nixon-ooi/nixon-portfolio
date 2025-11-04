# Critiques & Redesign Page Guide

## Overview
The Critiques page showcases your design critique case studies with a modern **Bento Grid** layout that displays all 6 case studies at once. The grid features one large featured card and varied card sizes creating visual interest. Each critique opens in a separate detailed page (similar to portfolio projects).

---

## 📐 Page Structure

### Overview Page (Critiques Page - Bento Grid)
- **Bento Grid Layout**: All 6 case studies visible at once in a modern grid
- **Featured Card**: First card is 2× larger (spans 2 columns × 2 rows) 
- **Varied Sizes**: Mix of regular and wide cards for visual interest
- **Category Badges**: Purple badges showing the type of design (MOBILE APP, E-COMMERCE, etc.)
- **Hover Effects**: Cards lift with purple border and image zoom on hover
- **Instant Overview**: See all work immediately without navigation
- **Click to View**: Clicking any card opens the full critique detail page

### Detail Page (Individual Critique)
- **Header Section**: Category tag, title, and description with gray background
- **Hero Image**: Large featured image
- **Analysis Section**: Two-column layout comparing:
  - **Original Issues** (left column, red accent)
  - **Improvements Made** (right column, green accent)
- **Key Insights**: Highlighted box with gradient background
- **Measured Impact**: Bold results box with green gradient
- **Back Button**: Returns to critiques overview

---

## ✏️ How to Edit Critiques

### File Location
`/data/critiques.js`

### Critique Data Structure
```javascript
{
    id: 1,                          // Unique number
    title: 'Project Title',         // Main heading
    category: 'MOBILE APP',         // Category badge (uppercase)
    description: 'Brief summary',   // Shown on card and detail page
    image: 'https://...',          // Cover image URL
    originalIssues: [               // Array of problems identified
        'First issue',
        'Second issue',
        'Third issue',
    ],
    improvements: [                 // Array of solutions
        'First improvement',
        'Second improvement',
        'Third improvement',
    ],
    keyInsights: 'Main learning',   // Key takeaway paragraph
    impact: 'Measured results',     // Metrics and outcomes
}
```

### Adding a New Critique
1. Open `/data/critiques.js`
2. Copy an existing critique object
3. Paste before the closing `]`
4. Update all fields:
   - Increment the `id` number
   - Change the `title`
   - Update the `category` (use uppercase: MOBILE APP, E-COMMERCE, WEB APP, DASHBOARD)
   - Write a brief `description` (1-2 sentences)
   - Add an `image` URL (use Unsplash or your own)
   - List 3-5 `originalIssues`
   - List 3-5 `improvements`
   - Write your `keyInsights` paragraph
   - Add measurable `impact` results
5. Don't forget the comma after `},`
6. Save the file

---

## 🎨 Visual Design

### Color System
- **Cards**: White background, purple accent on hover
- **Category Badge**: Purple (#6366f1)
- **Issues Column**: Red accent (#ef4444)
- **Improvements Column**: Green accent (#10b981)
- **Insights Box**: Blue-purple gradient
- **Impact Box**: Green-teal gradient

### Layout Differences from Portfolio
- **Portfolio**: Uses "At a Glance" summary cards, detailed galleries, structured sections
- **Critiques**: Simpler card grid, two-column analysis, focuses on before/after comparison
- **Visual Distinction**: Purple accents (vs portfolio's project cards), gradient boxes

---

## 🖼️ Getting Images

### Unsplash (Free Stock Photos)
1. Visit [unsplash.com](https://unsplash.com)
2. Search for relevant images:
   - "mobile app" for mobile designs
   - "e-commerce" or "shopping" for e-commerce
   - "dashboard" or "analytics" for web apps
   - "user interface" for general UI
3. Right-click image → Copy image address
4. Add `?w=800&q=80` to optimize

Example:
```javascript
image: 'https://images.unsplash.com/photo-XXXXX?w=800&q=80'
```

### Your Own Images
Place in `/assets/images/` and reference:
```javascript
image: './assets/images/my-critique.jpg'
```

---

## 📱 Mobile Responsiveness

### Overview Page
- Cards stack in single column
- Full-width cards on mobile
- Touch-friendly tap targets

### Detail Page
- Two columns become single column
- Issues and Improvements stack vertically
- Insights box content stacks
- Reduced padding for smaller screens

---

## 🔑 Key Differences from Portfolio

| Feature | Portfolio | Critiques |
|---------|-----------|-----------|
| **Overview Layout** | Summary cards with stats | Image cards with categories |
| **Detail Navigation** | Separate page | Separate page ✓ |
| **Content Focus** | Your design work | Analysis of others' designs |
| **Visual Style** | Project colors | Purple/red/green accents |
| **Sections** | Overview, Challenge, Research, Solution, Results, Gallery | Header, Analysis (Issues/Improvements), Insights, Impact |
| **Tags** | Technology tags | Category badges |

---

## 💡 Best Practices

### Writing Critiques

**Title**: Be specific about what you critiqued
- ✅ "Banking App Dashboard Redesign"
- ❌ "App Redesign"

**Category**: Use consistent naming
- MOBILE APP
- E-COMMERCE  
- WEB APP
- DASHBOARD
- SAAS PRODUCT

**Description**: Hook readers with the problem
- ✅ "Transforming complex financial data into actionable insights through clear visual hierarchy."
- ❌ "I redesigned a banking dashboard."

**Original Issues**: Be specific and actionable
- ✅ "Critical actions buried in dropdown menus"
- ❌ "Bad design"

**Improvements**: Show your solution thinking
- ✅ "Surfaced primary actions as prominent CTAs"
- ❌ "Made it better"

**Key Insights**: Share what you learned
- Focus on design principles
- Explain the "why" behind decisions
- Make it valuable for readers

**Impact**: Use real or realistic metrics
- Include percentages when possible
- Show business value
- Be specific about improvements

---

## 🐛 Troubleshooting

### Issue: Cards not clickable
**Solution**: Check that `data-critique-id` matches the critique `id`

### Issue: Detail page not loading
**Solution**: 
- Verify critique `id` exists in the data
- Check browser console for errors
- Ensure `navigateToPage('critiqueDetail')` is called

### Issue: Images not loading
**Solution**:
- Test URL directly in browser
- Check for HTTPS (not HTTP)
- Verify Unsplash URL format

### Issue: Layout looks broken
**Solution**:
- Check for missing commas in data file
- Ensure all required fields are present
- Validate quote marks are matching

---

## 📂 Related Files

- **Data**: `/data/critiques.js` - Edit critique content
- **JavaScript**: `/script.js` - `renderCritiques()` and `showCritiqueDetail()` functions
- **HTML**: `/index.html` - Page structure (critiquesPage and critiqueDetailPage)
- **CSS**: `/style.css` - All critique styles

---

## 🎯 Example Critique

```javascript
{
    id: 4,
    title: 'Fitness Tracking App Onboarding',
    category: 'MOBILE APP',
    description: 'Simplifying the user onboarding process to reduce drop-off rates and improve first-week retention.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    originalIssues: [
        'Complex 7-step onboarding requiring too much upfront information',
        'Excessive permission requests before showing value',
        'No clear explanation of app benefits',
        'High drop-off rate at step 3 (personal goals)',
    ],
    improvements: [
        'Reduced to 3 essential steps with progressive profiling',
        'Delayed permission requests until contextually relevant',
        'Added value proposition screens between setup steps',
        'Made personal goals optional with smart defaults',
    ],
    keyInsights: 'Users need to experience value before committing time to setup. Progressive onboarding that balances quick start with personalization leads to better completion rates and long-term engagement.',
    impact: '54% increase in onboarding completion rate, 23% higher first-week retention, 31% reduction in permission denial',
},
```

---

## 📊 Content Guidelines

### Quantity
- **Current**: 6 critiques (bento grid designed for 6)
- **Flexible**: Can add more - grid will automatically add rows
- **Recommended**: 6-9 critiques for optimal visual balance
- **Focus**: Quality over quantity - showcase your best work

### Quality Checklist
- [ ] Title is specific and descriptive
- [ ] Category is clear and consistent
- [ ] Description hooks the reader
- [ ] Image is high-quality and relevant
- [ ] 3-5 original issues identified
- [ ] 3-5 clear improvements listed
- [ ] Key insights are valuable and specific
- [ ] Impact includes measurable results

---

**Last Updated**: October 31, 2025
**Status**: ✅ Clean Implementation Complete
