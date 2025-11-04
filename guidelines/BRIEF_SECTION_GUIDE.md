# Brief Section Guide

## Overview
The Brief section has been added to both portfolio projects and critique pages. It allows you to add text paragraphs with optional indentation for emphasis or quotations.

## Features
- Custom section title (defaults to "Brief")
- Multiple paragraphs with standard styling
- Optional indented paragraphs with left border accent
- Perfect for project context, background information, or problem statements

## How to Add a Brief Section

### Data Structure

Add a `brief` object to your project or critique in `/data/projects.js` or `/data/critiques.js`:

```javascript
brief: {
    title: 'Brief',  // Optional - defaults to "Brief"
    paragraphs: [
        // Simple string paragraph (standard styling)
        'This is a regular paragraph with normal styling.',
        
        // Object with indent flag (for emphasis)
        {
            text: 'This paragraph will be indented with a left border accent. Perfect for definitions, quotes, or important context.',
            indent: true
        },
        
        // Another regular paragraph
        'Back to regular paragraph styling for continued explanation.'
    ]
}
```

### Full Example (Based on Your Request)

```javascript
{
    id: 1,
    title: 'CPF Security Redesign',
    // ... other properties ...
    
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
}
```

## Visual Styling

### Regular Paragraphs
- Standard body text styling
- Full width
- Normal spacing

### Indented Paragraphs
- Left border accent (3px solid gray)
- 1.5rem left padding (desktop)
- 1rem left padding (mobile)
- Slightly smaller font on mobile (0.95rem)

## Placement

The Brief section appears:
1. After the TL;DR section (if present)
2. After the Image and Text section (if present)
3. Before any galleries
4. Before tabs and accordion sections

## Tips for Writing Brief Content

1. **First Paragraph**: Introduce the main problem or context
2. **Indented Section**: Provide background information, definitions, or important context
3. **Final Paragraph**: Connect back to the implications or why this matters

## Mobile Responsiveness

The Brief section is fully responsive:
- Text automatically adjusts for readability
- Indentation reduces on smaller screens
- Maintains visual hierarchy across all devices

## CSS Classes Used

- `.detail-section` - Section container
- `.critique-brief-indent` - Indented paragraph with left border

## Example Use Cases

1. **Problem Context**: Explain the background of the design challenge
2. **Project Background**: Provide company or product information
3. **Key Definitions**: Define important terms or concepts
4. **Stakeholder Quotes**: Include client or user quotes with indentation
5. **Project Scope**: Clarify boundaries and focus areas
