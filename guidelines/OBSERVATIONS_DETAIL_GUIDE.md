# Design Observations - Detail Pages Guide

## Overview

Individual design observation pages now support the same rich content structure as portfolio projects and critique pages. You can create comprehensive, multi-section articles with galleries, tabs, accordions, and more.

## What's New

- **Individual Detail Pages**: Click any observation card to view a full detail page
- **Same Features as Critiques/Portfolio**: TL;DR sections, galleries, tabs, accordions, brief sections
- **YouTube Video Embeds**: Add videos to your observations with `videoSection` (see VIDEO_EMBED_GUIDE.md)
- **Flexible Structure**: Use as much or as little detail as you want
- **Backward Compatible**: Existing simple observations still work with basic `content` field

## Quick Start

### Simple Observation (Current Format)
```javascript
{
    id: 1,
    title: 'The Rise of Spatial Interfaces',
    category: 'Industry Trends',
    date: 'October 25, 2025',
    readTime: '5 min read',
    excerpt: 'Brief description shown on card...',
    content: 'Main content shown on detail page...',
    tags: ['Spatial Computing', 'Future of Design', '3D UI']
}
```

### Full Detail Page (Extended Format)
```javascript
{
    id: 1,
    title: 'The Rise of Spatial Interfaces',
    category: 'Industry Trends',
    date: 'October 25, 2025',
    readTime: '5 min read',
    excerpt: 'Brief description shown on card...',
    tags: ['Spatial Computing', 'Future of Design', '3D UI'],
    
    // Add these fields for full detail page
    image: 'https://images.unsplash.com/photo-hero-image',
    
    tldr: {
        overview: 'Quick summary of the observation',
        proposals: [
            {
                title: 'Key Point 1:',
                description: 'First major insight'
            },
            {
                title: 'Key Point 2:',
                description: 'Second major insight'
            }
        ],
        outcome: 'Main takeaway',
        finalImages: ['url1', 'url2']
    },
    
    imageTextSection: {
        image: 'https://images.unsplash.com/photo-analysis',
        title: 'Deep Dive',
        text: 'Detailed analysis...'
    },
    
    galleries: [ /* see Gallery Guide */ ],
    tabsSection: { /* see Tabs Guide */ },
    accordionSection: { /* see Accordion Guide */ },
    brief: { /* see Brief Section Guide */ }
}
```

## Detail Page Structure

When you add extended fields to an observation, the detail page includes:

### Header Section
- Back button to observations page
- Category badge
- Title
- Excerpt (if provided)

### Hero Image (Optional)
- Large featured image
- Only shows if `image` field is provided

### Sidebar (Auto-generated)
- Published date
- Read time
- Tags

### Main Content Area

#### With TL;DR (Recommended)
If you provide a `tldr` object:
1. **TL;DR Section**: 3-step format with overview, key points, and takeaway
2. **Image and Text Section**: Side-by-side image and text (optional)
3. **Brief Section**: Context with indented paragraphs (optional)
4. **Galleries**: Positioned throughout (optional)
5. **Tabs Section**: Organized tabbed content (optional)
6. **Accordion Section**: Expandable FAQs (optional)
7. **Impact Section**: Results/metrics (optional)

#### Without TL;DR (Fallback)
If no `tldr` is provided:
1. **Overview**: Shows the `content` field
2. **Analysis**: Shows `challenge` field if provided
3. **Key Insights**: Shows `research` array if provided
4. **Recommendations**: Shows `solution` field if provided
5. Galleries, tabs, and accordions still work

## Available Fields

### Basic Fields (Always Shown on Card)
- `id` (required) - Unique identifier
- `title` (required) - Observation title
- `category` (required) - Category badge
- `date` (required) - Published date
- `readTime` (required) - Read time estimate
- `excerpt` (required) - Card description
- `tags` (required) - Array of tags
- `content` (optional) - Basic content for simple detail pages

### Extended Fields (For Full Detail Pages)

#### Visual Content
- `image` - Hero image URL

#### TL;DR Section
```javascript
tldr: {
    overview: 'String',
    proposals: [
        { title: 'String', description: 'String' }
    ],
    outcome: 'String',
    finalImages: ['url1', 'url2']  // Optional
}
```

#### Image and Text Section
```javascript
imageTextSection: {
    image: 'URL',
    title: 'Section Title',
    text: 'Paragraph text'
}
```

#### Brief Section (See BRIEF_SECTION_GUIDE.md)
```javascript
brief: {
    title: 'Brief',  // Optional, defaults to "Brief"
    paragraphs: [
        'Regular paragraph',
        { text: 'Indented paragraph', indent: true }
    ]
}
```

#### Galleries (See GALLERY_GUIDE.md)
```javascript
galleries: [
    {
        type: 'carousel' | 'two-column' | 'three-column' | 'grid-2x2',
        title: 'Gallery Title',
        position: 'after-overview' | 'after-challenge' | 'after-research' | 'after-solution' | 'before-results',
        images: [
            { url: 'URL', caption: 'Caption' }
        ]
    }
]
```

#### Tabs Section (See TABLE_TABS_ACCORDION_GUIDE.md)
```javascript
tabsSection: {
    title: 'Section Title',
    tabs: [
        { label: 'Tab 1', content: '<p>HTML content</p>' },
        { label: 'Tab 2', content: '<p>HTML content</p>' }
    ]
}
```

#### Accordion Section (See TABLE_TABS_ACCORDION_GUIDE.md)
```javascript
accordionSection: {
    title: 'Section Title',
    items: [
        { title: 'Question 1', content: 'Answer content' },
        { title: 'Question 2', content: 'Answer content' }
    ]
}
```

#### Results/Impact Section
```javascript
results: [
    { metric: '42%', label: 'Improvement' },
    { metric: '3.2M', label: 'Users Affected' }
]
```

#### Alternative Content Fields (Fallback)
- `challenge` - Used in "Analysis" section if no TL;DR
- `research` - Array of strings for "Key Insights" section
- `solution` - Used in "Recommendations" section if no TL;DR

## Example: Full Featured Observation

```javascript
{
    id: 9,
    title: 'Micro-animations in Modern Mobile Apps',
    category: 'UX Patterns',
    date: 'November 1, 2025',
    readTime: '8 min read',
    excerpt: 'An in-depth analysis of how leading mobile apps use micro-animations to enhance user experience and provide feedback.',
    tags: ['Animation', 'Mobile UX', 'Interaction Design'],
    
    image: 'https://images.unsplash.com/photo-mobile-animation',
    
    tldr: {
        overview: 'Micro-animations have become essential in modern mobile interfaces, providing instant feedback, guiding user attention, and creating delightful experiences that keep users engaged.',
        proposals: [
            {
                title: 'Purposeful Motion:',
                description: 'Every animation serves a functional purpose—confirming actions, showing state changes, or guiding attention.'
            },
            {
                title: 'Timing Matters:',
                description: 'Optimal duration is 200-500ms for most UI animations. Too fast feels jarring, too slow feels laggy.'
            },
            {
                title: 'Subtle by Default:',
                description: 'The best micro-animations are almost invisible—users feel them more than see them.'
            }
        ],
        outcome: 'When implemented thoughtfully, micro-animations reduce cognitive load by 24% and increase user satisfaction scores by 31%, making them a critical component of modern mobile UX.',
        finalImages: [
            'https://images.unsplash.com/photo-animation-example-1',
            'https://images.unsplash.com/photo-animation-example-2'
        ]
    },
    
    imageTextSection: {
        image: 'https://images.unsplash.com/photo-app-analysis',
        title: 'Research Methodology',
        text: 'We analyzed 50 top-rated mobile apps across different categories, documenting over 200 unique micro-animation patterns. Each animation was evaluated for purpose, timing, and user impact.'
    },
    
    brief: {
        title: 'Context',
        paragraphs: [
            'As mobile devices became more powerful and screens more responsive, designers gained the ability to add motion to their interfaces.',
            {
                text: 'Micro-animations are small, functional animations that support the user by providing feedback, enhancing the sense of direct manipulation, and helping visualize the results of actions.',
                indent: true
            },
            'Today, they\'re no longer optional—users expect smooth, responsive interfaces that communicate through motion.'
        ]
    },
    
    galleries: [
        {
            type: 'carousel',
            title: 'Animation Patterns in Popular Apps',
            position: 'after-overview',
            images: [
                { url: 'https://images.unsplash.com/photo-app1', caption: 'Pull-to-refresh animation' },
                { url: 'https://images.unsplash.com/photo-app2', caption: 'Button press feedback' },
                { url: 'https://images.unsplash.com/photo-app3', caption: 'Transition animation' },
                { url: 'https://images.unsplash.com/photo-app4', caption: 'Loading state' }
            ]
        },
        {
            type: 'grid-2x2',
            title: 'Before & After Comparisons',
            position: 'before-results',
            images: [
                { url: 'https://images.unsplash.com/photo-before1', caption: 'Without animation' },
                { url: 'https://images.unsplash.com/photo-after1', caption: 'With animation' },
                { url: 'https://images.unsplash.com/photo-before2', caption: 'Static feedback' },
                { url: 'https://images.unsplash.com/photo-after2', caption: 'Animated feedback' }
            ]
        }
    ],
    
    tabsSection: {
        title: 'Animation Types',
        tabs: [
            {
                label: 'Feedback',
                content: '<p>Animations that confirm user actions, such as button presses, toggle switches, or form submissions.</p><ul><li>Duration: 150-300ms</li><li>Easing: Ease-out</li><li>Purpose: Immediate confirmation</li></ul>'
            },
            {
                label: 'Transitions',
                content: '<p>Animations that bridge different states or screens, maintaining context and reducing cognitive load.</p><ul><li>Duration: 300-500ms</li><li>Easing: Ease-in-out</li><li>Purpose: Maintain spatial awareness</li></ul>'
            },
            {
                label: 'Loading',
                content: '<p>Animations that indicate progress or system activity, managing user expectations during wait times.</p><ul><li>Duration: Loop until complete</li><li>Easing: Linear or custom</li><li>Purpose: Communicate progress</li></ul>'
            }
        ]
    },
    
    accordionSection: {
        title: 'Implementation Best Practices',
        items: [
            {
                title: 'How do I choose the right easing function?',
                content: 'Use ease-out for animations entering the screen (they decelerate), ease-in for exiting animations (they accelerate), and ease-in-out for animations that both enter and exit the viewport.'
            },
            {
                title: 'Should all animations be the same duration?',
                content: 'No. Smaller elements should animate faster (150-200ms), while larger transitions can take longer (300-500ms). This maintains a natural feeling of physics and weight.'
            },
            {
                title: 'What about accessibility?',
                content: 'Always respect the prefers-reduced-motion setting. Provide alternative feedback methods (haptics, sounds, instant state changes) for users who have motion sensitivities.'
            },
            {
                title: 'How can I measure the impact of animations?',
                content: 'Track metrics like task completion time, error rates, and user satisfaction scores. A/B testing with and without animations can reveal their true impact on user experience.'
            }
        ]
    },
    
    results: [
        { metric: '24%', label: 'Reduction in cognitive load' },
        { metric: '31%', label: 'Increase in satisfaction' },
        { metric: '200-500ms', label: 'Optimal animation duration' }
    ]
}
```

## Tips for Writing Observations

### Card View (Always Include)
1. **Title**: Clear, specific, intriguing
2. **Excerpt**: 1-2 sentences that hook the reader
3. **Tags**: 2-4 relevant tags
4. **Category**: Helps categorize content

### Detail Page (Optional but Recommended)
1. **TL;DR**: Perfect for busy readers who want the key points
2. **Visual Examples**: Use galleries to show, not just tell
3. **Practical Insights**: Include actionable takeaways
4. **Evidence**: Back up observations with data or examples
5. **Organization**: Use tabs/accordions for complex topics

## Migration Path

### Upgrading Existing Observations

**Before (Simple):**
```javascript
{
    id: 1,
    title: 'Dark Mode Done Right',
    category: 'Visual Design',
    content: 'Dark mode is important...'
}
```

**After (Full Detail):**
```javascript
{
    id: 1,
    title: 'Dark Mode Done Right',
    category: 'Visual Design',
    
    // Keep existing fields
    content: 'Dark mode is important...',
    
    // Add new fields gradually
    tldr: { ... },
    galleries: [ ... ]
}
```

## Related Guides

- **GALLERY_GUIDE.md** - How to add image galleries
- **TABLE_TABS_ACCORDION_GUIDE.md** - How to organize content
- **BRIEF_SECTION_GUIDE.md** - How to add context sections
- **CRITIQUES_GUIDE.md** - Similar structure reference

## Summary

Individual observation pages now match the depth and richness of your portfolio and critique pages, allowing you to create comprehensive design articles while maintaining the simplicity of the card-based browsing experience.
