# Brief Section - Example Implementation

## Your Requested Example

Here's the exact example you provided, now available as a reusable Brief section:

### HTML Output (Rendered):
```html
<div class="detail-section">
    <h2>Brief</h2>
    <p>Incidents involving unauthorized access to CPF accounts highlight a critical vulnerability: the breach of trust where authorized login credentials are intentionally or unintentionally compromised by individuals close to the account holder.</p>
    <p class="critique-brief-indent">The Central Provident Fund (CPF) is a comprehensive social security system that enables working Singapore Citizens and Permanent Residents to set aside funds for retirement. It also addresses healthcare, home ownership, family protection and asset enhancement.</p>
    <p>In these scenarios, the system's security, designed primarily against external threats, fails to detect or prevent insider fraud, leading to significant financial losses and erosion of public trust in digital financial platforms.</p>
</div>
```

### Data Structure (How to Add It):

To create this exact section, add this to your project or critique in `/data/projects.js` or `/data/critiques.js`:

```javascript
brief: {
    title: 'Brief',
    paragraphs: [
        'Incidents involving unauthorized access to CPF accounts highlight a critical vulnerability: the breach of trust where authorized login credentials are intentionally or unintentionally compromised by individuals close to the account holder.',
        {
            text: 'The Central Provident Fund (CPF) is a comprehensive social security system that enables working Singapore Citizens and Permanent Residents to set aside funds for retirement. It also addresses healthcare, home ownership, family protection and asset enhancement.',
            indent: true
        },
        'In these scenarios, the system\'s security, designed primarily against external threats, fails to detect or prevent insider fraud, leading to significant financial losses and erosion of public trust in digital financial platforms.'
    ]
}
```

## How It Works

1. **Regular Paragraphs**: String entries create standard `<p>` tags
2. **Indented Paragraphs**: Object entries with `indent: true` create `<p class="critique-brief-indent">` tags
3. **Custom Title**: Change `title: 'Brief'` to any heading you want

## Visual Appearance

- **First Paragraph**: Full-width, standard text
- **Second Paragraph (Indented)**: 
  - Left border: 3px solid gray
  - Padding left: 1.5rem (desktop), 1rem (mobile)
  - Lighter text color for visual distinction
- **Third Paragraph**: Back to full-width, standard text

## Where to Add It

In your project/critique data, the brief section should go:
```javascript
{
    id: 1,
    title: 'Your Project',
    // ... other properties ...
    
    tldr: { /* ... */ },
    imageTextSection: { /* ... */ },
    
    // ADD BRIEF HERE
    brief: {
        title: 'Brief',
        paragraphs: [ /* ... */ ]
    },
    
    galleries: [ /* ... */ ]
}
```

## Quick Start

1. Open `/data/projects.js` or `/data/critiques.js`
2. Find the project/critique you want to add a brief to
3. Add the `brief` object after `imageTextSection` and before `galleries`
4. Copy the data structure example above
5. Customize the paragraphs with your content
6. Save and refresh your page!

## Mobile Responsive

The Brief section is fully responsive:
- Indentation reduces from 1.5rem to 1rem on mobile
- Font size adjusts to 0.95rem on mobile (max-width: 768px)
- Line height and word wrapping ensure readability on all devices
