# Carousel Quick Reference

## 🎠 Visual Layout

```
Desktop View:
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  Card 2  │  │  Card 1  │  │ CENTER   │  │  Card +1 │  │  Card +2 │
│   70%    │  │   85%    │  │  100%    │  │   85%    │  │   70%    │
│  Opacity │  │  Opacity │  │  Fully   │  │  Opacity │  │  Opacity │
│   30%    │  │   50%    │  │  Visible │  │   50%    │  │   30%    │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
                                 ↑
                            Main Focus
```

## 🎯 Quick Stats

- **Total Cards**: 6 case studies
- **Visible**: 5 cards (center + 2 each side)
- **Main Focus**: 3 cards at full attention
- **Auto-play**: Every 5 seconds
- **Loop**: Infinite rotation

## 🎨 Card Positions

| Position | Size | Opacity | Z-Index | Clickable |
|----------|------|---------|---------|-----------|
| center   | 100% | 100%    | 10      | ✅ Yes    |
| left-1   | 85%  | 50%     | 5       | ✅ Yes    |
| left-2   | 70%  | 30%     | 4       | ✅ Yes    |
| right-1  | 85%  | 50%     | 5       | ✅ Yes    |
| right-2  | 70%  | 30%     | 4       | ✅ Yes    |
| hidden   | 50%  | 0%      | 1       | ❌ No     |

## 🕹️ Navigation

### Arrow Buttons
```
[←] Left Arrow  - Previous card
[→] Right Arrow - Next card
```

### Dot Indicators
```
● ● ● ● ● ●
↑ ▬▬▬ ↑
Active  Others
```

### Keyboard (Future Enhancement)
- Not yet implemented
- Could add arrow key support

## ⚙️ Auto-play Behavior

```
Start: Page loads → Auto-play begins
Pause: Mouse hover → Auto-play stops
Resume: Mouse leave → Auto-play restarts
Reset: Manual navigation → Timer resets
```

## 📱 Responsive Breakpoints

| Screen Size | Cards Shown | Card Width | Nav Size |
|-------------|-------------|------------|----------|
| >1200px     | 5 (all)     | 380px      | 50px     |
| 968-1200px  | 5 (all)     | 320px      | 50px     |
| 768-968px   | 5 (all)     | 300px      | 50px     |
| 480-768px   | 3 (center+2)| 280px      | 40px     |
| <480px      | 3 (subtle)  | 260px      | 40px     |

## 🎨 Colors

```css
Purple (Primary):   #6366f1
White (Cards):      #ffffff
Gray-50 (BG):       #f9fafb
Gray-300 (Dots):    #d1d5db
```

## ✏️ Quick Edit

### Change a Critique
1. Open: `/data/critiques.js`
2. Find: critique with id 1-6
3. Edit: any field
4. Save: Changes appear immediately

### Change Auto-play Speed
```javascript
// In script.js, line ~660
autoplayInterval = setInterval(() => {
    nextSlide();
}, 5000); // ← Change this number (milliseconds)
```

### Disable Auto-play
```javascript
// In renderCritiques(), comment out:
// startAutoplay();
```

## 🔧 Common Customizations

### Adjust Card Spacing
```css
/* In style.css */
.critique-carousel-card.left-1 {
  transform: translateX(-420px) scale(0.85);
  /* ↑ Change -420px to adjust spacing */
}
```

### Change Side Card Opacity
```css
.critique-carousel-card.left-1 {
  opacity: 0.5; /* ← Adjust (0-1) */
}
```

### Adjust Animation Speed
```css
.critique-carousel-card {
  transition: all 0.5s ease;
  /* ↑ Change 0.5s to speed up/slow down */
}
```

## 🐛 Quick Fixes

### Cards Not Moving
- Check JavaScript console
- Ensure `updateCarousel()` is called
- Verify all 6 critiques exist in data

### Buttons Not Working
- Check event listeners attached
- Verify button IDs match script
- Test in browser console

### Auto-play Too Fast/Slow
- Adjust interval in `startAutoplay()`
- Default: 5000ms (5 seconds)

### Cards Overlapping
- Check responsive breakpoints
- Adjust `translateX` values
- Test at different screen sizes

## 📁 Key Files

| File | Purpose |
|------|---------|
| `/index.html` | Carousel HTML structure |
| `/script.js` | Carousel logic & navigation |
| `/style.css` | Carousel styling & animations |
| `/data/critiques.js` | 6 case study content |

## 🎯 User Journey

```
1. Land on Critiques page
   ↓
2. See 5 cards (center + sides)
   ↓
3. Auto-play shows all 6 in rotation
   ↓  
4. Click arrow/dot to navigate manually
   ↓
5. Hover center card for purple border
   ↓
6. Click card to view full detail
   ↓
7. Read critique analysis
   ↓
8. Click back to return to carousel
```

## ✅ Success Checklist

- [x] 6 case studies created
- [x] Carousel displays correctly
- [x] Center card is in focus
- [x] Side cards show at reduced size
- [x] Auto-play advances cards
- [x] Navigation buttons work
- [x] Dot indicators work
- [x] Cards clickable to detail page
- [x] Responsive on mobile
- [x] Principles section removed
- [x] Methodology section removed

---

**Quick Access**: For full details, see `/CAROUSEL_IMPLEMENTATION_SUMMARY.md`
