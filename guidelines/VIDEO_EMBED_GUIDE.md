# YouTube Video Embed Guide

## Overview

You can now embed YouTube videos in your Design Observation detail pages. Videos are displayed in a responsive 16:9 aspect ratio container with rounded corners and a subtle shadow.

## How to Add a Video

### Option 1: Using Video ID (Recommended)

Add a `videoSection` object to your observation in `/data/observations.js`:

```javascript
{
    id: 1,
    title: 'Your Observation Title',
    // ... other fields ...
    
    videoSection: {
        title: 'Video Demonstration',      // Optional
        description: 'Watch this video to see the concept in action.',  // Optional
        videoId: 'dQw4w9WgXcQ'            // Required: YouTube video ID
    }
}
```

**How to get the Video ID:**
- From a YouTube URL like `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- The video ID is the part after `v=` → `dQw4w9WgXcQ`

### Option 2: Using Full YouTube URL

You can also provide the full YouTube URL and the system will extract the ID:

```javascript
videoSection: {
    title: 'Video Tutorial',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}
```

## Field Reference

### videoSection Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | No | Heading displayed above the video |
| `description` | String | No | Paragraph displayed below the title and above the video |
| `videoId` | String | Yes* | YouTube video ID (11 characters) |
| `url` | String | Yes* | Full YouTube URL (alternative to videoId) |

*Either `videoId` OR `url` is required

## Position in Page Layout

The video section appears **after** the Brief section and **before** galleries, tabs, and accordions.

### Default Layout Order:
1. Header (title, category, excerpt)
2. Hero image (if provided)
3. TL;DR section (if provided)
4. Image & Text section (if provided)
5. Brief section (if provided)
6. **→ Video section (if provided) ←**
7. Content sections (Overview, Analysis, etc.)
8. Galleries (if provided)
9. Tabs section (if provided)
10. Accordion section (if provided)

## Examples

### Example 1: Simple Video Embed

```javascript
{
    id: 5,
    title: 'The Evolution of Mobile Navigation',
    category: 'Mobile Design',
    date: 'October 15, 2025',
    readTime: '6 min read',
    excerpt: 'A look at how mobile navigation patterns have evolved.',
    content: 'Navigation is the backbone of mobile UX...',
    tags: ['Mobile', 'Navigation', 'UX'],
    
    videoSection: {
        videoId: 'abc123defgh'
    }
}
```

### Example 2: Video with Title and Description

```javascript
{
    id: 6,
    title: 'Accessibility in Modern Web Design',
    category: 'Accessibility',
    date: 'October 10, 2025',
    readTime: '7 min read',
    excerpt: 'Best practices for creating accessible web experiences.',
    content: 'Web accessibility ensures everyone can use your product...',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
    
    videoSection: {
        title: 'Accessibility Demo',
        description: 'This video demonstrates common accessibility issues and how to fix them.',
        videoId: 'xyz789mnopq'
    }
}
```

### Example 3: Video in a Full Detail Page

```javascript
{
    id: 7,
    title: 'Dark Mode Design Patterns',
    category: 'Visual Design',
    date: 'November 1, 2025',
    readTime: '8 min read',
    excerpt: 'Exploring best practices for implementing dark mode.',
    tags: ['Dark Mode', 'Color Theory', 'UI Design'],
    
    image: 'https://images.unsplash.com/photo-dark-ui',
    
    tldr: {
        overview: 'Dark mode is more than inverting colors.',
        proposals: [
            {
                title: 'Contrast Matters:',
                description: 'Maintain sufficient contrast ratios in dark themes.'
            },
            {
                title: 'Color Adaptation:',
                description: 'Colors appear differently on dark backgrounds.'
            }
        ],
        outcome: 'Thoughtful dark mode implementation enhances user experience.'
    },
    
    brief: {
        title: 'Why Dark Mode?',
        paragraphs: [
            'Dark mode reduces eye strain in low-light environments.',
            'It can also save battery life on OLED displays.',
            'But implementing it well requires careful consideration.'
        ]
    },
    
    videoSection: {
        title: 'Dark Mode in Practice',
        description: 'See how major apps implement dark mode effectively.',
        videoId: 'darkmode123'
    },
    
    galleries: [
        {
            type: 'grid',
            title: 'Dark Mode Examples',
            position: 'after-overview',
            columns: 2,
            images: [
                { url: 'https://images.unsplash.com/dark-example-1', caption: 'App 1' },
                { url: 'https://images.unsplash.com/dark-example-2', caption: 'App 2' }
            ]
        }
    ]
}
```

## Supported YouTube URL Formats

The video embed supports these YouTube URL formats:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- `https://www.youtube.com/v/VIDEO_ID`

The system automatically extracts the video ID from any of these formats.

## Styling

The video is automatically styled with:
- **Responsive 16:9 aspect ratio** - Works on all screen sizes
- **Rounded corners** (0.75rem border radius)
- **Subtle shadow** for depth
- **Full width** within the content container
- **1.5rem top margin** for spacing

The iframe allows:
- Autoplay
- Fullscreen
- Accelerometer
- Clipboard-write
- Encrypted media
- Gyroscope
- Picture-in-picture
- Web-share

## Best Practices

### 1. Use Videos Sparingly
- Add videos only when they provide significant value
- Don't embed videos just because you can
- Consider page load performance

### 2. Provide Context
- Always add a `title` to explain what the video shows
- Use `description` to set expectations
- Make sure the video is relevant to the observation

### 3. Video Selection
- Use short, focused videos (under 5 minutes ideal)
- Ensure video quality is good (720p minimum)
- Test that the video is publicly accessible
- Make sure subtitles/captions are available for accessibility

### 4. Alternative Content
- Don't rely solely on video to convey important information
- Provide text content that covers the same points
- Remember some users may not be able to watch videos

### 5. Video Placement
- Place videos where they logically fit in your content flow
- Consider adding the video after introducing the concept in text
- Don't put videos at the very top (use hero image instead)

## Accessibility Considerations

- YouTube's built-in player includes keyboard controls
- Closed captions should be available on your videos
- The iframe has proper `title` attribute for screen readers
- Users can navigate away from video using keyboard

## Troubleshooting

### Video Not Appearing

**Check:**
1. Is `videoId` or `url` provided?
2. Is the video ID correct (11 characters)?
3. Is the video public (not private or unlisted)?
4. Did you save `/data/observations.js`?
5. Did you refresh the page?

### Video ID Extraction Not Working

**Solution:**
- Use the `videoId` field directly instead of `url`
- Copy just the 11-character ID from the YouTube URL
- Example: From `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ`

### Embed Showing Error

**Common Causes:**
- Video is private or deleted
- Video has embed restrictions
- Video is age-restricted
- Copyright/region restrictions

**Solution:**
- Make sure the video allows embedding
- Test the video URL in a private/incognito browser
- Try a different video

## Technical Details

### CSS Classes

```css
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 0.75rem;
  margin-top: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
}
```

### JavaScript Function

The `renderVideoSection()` function in `script.js`:
- Accepts `videoSection` object from observation data
- Extracts video ID from URL if needed
- Validates video ID (must be 11 characters)
- Returns HTML with responsive iframe
- Handles optional title and description

## Complete Example

Here's a complete observation with all features including video:

```javascript
{
    id: 10,
    title: 'The Psychology of Loading States',
    category: 'UX Patterns',
    date: 'November 2, 2025',
    readTime: '6 min read',
    excerpt: 'How different loading indicators affect user perception and patience.',
    tags: ['Loading', 'Psychology', 'UX'],
    
    image: 'https://images.unsplash.com/photo-loading-spinner',
    
    tldr: {
        overview: 'Loading states significantly impact how users perceive wait times.',
        proposals: [
            {
                title: 'Skeleton Screens:',
                description: 'Provide visual structure while content loads.'
            },
            {
                title: 'Progress Indicators:',
                description: 'Show exact progress when possible.'
            },
            {
                title: 'Animations:',
                description: 'Keep users engaged during short waits.'
            }
        ],
        outcome: 'Well-designed loading states make apps feel faster and more responsive.'
    },
    
    brief: {
        title: 'Context',
        paragraphs: [
            'Users will wait, but they need feedback.',
            {
                text: 'Studies show that perceived wait time can differ significantly from actual wait time.',
                indent: true
            },
            'The right loading indicator makes all the difference.'
        ]
    },
    
    videoSection: {
        title: 'Loading States in Action',
        description: 'This video showcases different loading patterns and their psychological effects.',
        videoId: 'loading123abc'
    },
    
    galleries: [
        {
            type: 'grid',
            title: 'Loading Pattern Examples',
            position: 'after-overview',
            columns: 3,
            images: [
                { url: 'https://images.unsplash.com/spinner-1', caption: 'Spinner' },
                { url: 'https://images.unsplash.com/skeleton-1', caption: 'Skeleton' },
                { url: 'https://images.unsplash.com/progress-1', caption: 'Progress Bar' }
            ]
        }
    ],
    
    tabsSection: {
        title: 'Types of Loading Indicators',
        tabs: [
            {
                label: 'Spinners',
                content: '<p>Circular indicators for indeterminate waits...</p>'
            },
            {
                label: 'Progress Bars',
                content: '<p>Linear indicators for determinate processes...</p>'
            },
            {
                label: 'Skeleton Screens',
                content: '<p>Content placeholders that mimic layout...</p>'
            }
        ]
    }
}
```

## Summary

- Add `videoSection` to any observation to embed a YouTube video
- Provide either `videoId` or full YouTube `url`
- Optionally add `title` and `description` for context
- Videos appear after brief sections, before galleries
- Fully responsive with 16:9 aspect ratio
- Works with all YouTube URL formats
- Follow best practices for accessibility and user experience

For more details on creating observation detail pages, see:
- `OBSERVATIONS_DETAIL_GUIDE.md` - Full detail page documentation
- `OBSERVATIONS_QUICK_START.md` - Quick reference guide
- `OBSERVATIONS_IMPLEMENTATION_SUMMARY.md` - Technical implementation details
