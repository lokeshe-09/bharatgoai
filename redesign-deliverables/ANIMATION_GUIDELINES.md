# BharatGoAI Animation & Micro-Interaction Guidelines
## Premium Graphite Elegance Design System v3.0

**Version:** 3.0.0
**Last Updated:** 2025-11-17
**Performance Target:** 60fps, no jank, GPU-accelerated

---

## TABLE OF CONTENTS

1. [Animation Philosophy](#1-animation-philosophy)
2. [Timing & Easing](#2-timing--easing)
3. [Entrance Animations](#3-entrance-animations)
4. [Hover & Focus States](#4-hover--focus-states)
5. [Loading States](#5-loading-states)
6. [Parallax Effects](#6-parallax-effects)
7. [Ambient Animations](#7-ambient-animations)
8. [Reduced Motion Support](#8-reduced-motion-support)
9. [Performance Optimization](#9-performance-optimization)

---

## 1. ANIMATION PHILOSOPHY

**Core Principles:**
- **Subtle, Not Distracting:** Animations enhance, never compete with content
- **Purpose-Driven:** Every animation communicates state, hierarchy, or feedback
- **Performance-First:** 60fps minimum, GPU-accelerated transforms only
- **Accessible:** Full reduced-motion support, keyboard-friendly

**What to Animate:**
- Transforms (translate, scale, rotate)
- Opacity
- Colors (via GPU-accelerated properties)

**What NOT to Animate:**
- Width/height (use scale instead)
- Position (use transform instead)
- Complex filters (blur only on static states)

---

## 2. TIMING & EASING

### Duration Tokens

```css
--duration-instant:   100ms  /* Immediate feedback */
--duration-fast:      180ms  /* Hover states, toggles */
--duration-normal:    360ms  /* Entrance, modal open */
--duration-slow:      600ms  /* Parallax, ambient */
--duration-very-slow: 900ms  /* Hero entrance */
```

### Easing Curves

**Default (Premium Smooth):**
```css
--easing-default: cubic-bezier(0.16, 1, 0.3, 1);
```
*Use for: All transitions by default*

**Spring (Playful):**
```css
--easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```
*Use for: Button clicks, icon bounces (subtle)*

**Ease Out (Natural):**
```css
--easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
```
*Use for: Entrance animations*

**Ease In (Exit):**
```css
--easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
```
*Use for: Exit animations, close modals*

### Timing Examples

```css
/* Button hover - fast response */
transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);

/* Card entrance - smooth reveal */
animation: fade-in-up 360ms cubic-bezier(0, 0, 0.2, 1);

/* Parallax - slow drift */
transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
```

---

## 3. ENTRANCE ANIMATIONS

### 3.1 Fade In Up (Primary Entrance)

**Use Cases:** Hero content, feature cards, section reveals

**Keyframes:**
```css
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Usage:**
```css
.element {
  animation: fade-in-up 360ms cubic-bezier(0, 0, 0.2, 1);
}

/* Staggered delay */
.element:nth-child(1) { animation-delay: 0ms; }
.element:nth-child(2) { animation-delay: 100ms; }
.element:nth-child(3) { animation-delay: 200ms; }
```

**Tailwind:**
```tsx
<div className="animate-fade-in-up animation-delay-100">
  Content
</div>
```

---

### 3.2 Scale In (Secondary Entrance)

**Use Cases:** Modals, dropdowns, tooltips

**Keyframes:**
```css
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Usage:**
```css
.modal {
  animation: scale-in 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

### 3.3 Slide Reveal (Drawer/Panel)

**Use Cases:** Mobile menu, side panels

**Keyframes:**
```css
@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## 4. HOVER & FOCUS STATES

### 4.1 Button Hover (Lift Effect)

**Primary Button:**
```css
.btn-primary {
  transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 36px rgba(58, 186, 214, 0.14);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**Secondary Button:**
```css
.btn-secondary:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.20);
}
```

**Performance Note:** Use `transform` instead of `top/bottom` for GPU acceleration.

---

### 4.2 Card Hover (Elevation Shift)

**Feature/Solution Cards:**
```css
.card {
  transition: all 360ms cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 30px rgba(3, 6, 8, 0.55);
}
```

**Icon Rotation on Card Hover:**
```css
.card:hover .card-icon {
  transform: scale(1.1) rotate(3deg);
  transition: transform 360ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

### 4.3 Link Hover (Arrow Shift)

**Text Links with Arrow:**
```css
.link-arrow {
  display: inline-flex;
  gap: 8px;
  transition: gap 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.link-arrow:hover {
  gap: 12px; /* Arrow shifts right 4px */
}

.link-arrow:hover .arrow-icon {
  transform: translateX(1px);
}
```

---

### 4.4 Focus States (Accessibility)

**All Interactive Elements:**
```css
.interactive:focus-visible {
  outline: 2px solid rgba(58, 186, 214, 0.60);
  outline-offset: 2px;
  transition: outline-offset 100ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Subtle pulse on focus */
.interactive:focus-visible {
  animation: focus-pulse 1.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

@keyframes focus-pulse {
  0%, 100% {
    outline-color: rgba(58, 186, 214, 0.60);
  }
  50% {
    outline-color: rgba(58, 186, 214, 0.40);
  }
}
```

---

## 5. LOADING STATES

### 5.1 Spinner (Circular)

**Keyframes:**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Usage:**
```tsx
<div className="w-8 h-8 border-2 border-white/10 border-t-[#3ABAD6] rounded-full animate-spin" />
```

**Timing:** Linear, infinite, 800ms duration

---

### 5.2 Skeleton Pulse

**Keyframes:**
```css
@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

**Usage:**
```tsx
<div className="h-4 bg-white/5 rounded animate-pulse" />
```

---

### 5.3 Progress Bar

**Indeterminate Loading:**
```css
@keyframes progress-indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.progress-bar {
  position: relative;
  overflow: hidden;
  background: rgba(255,255,255,0.04);
}

.progress-bar::after {
  content: '';
  position: absolute;
  width: 25%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(58,186,214,0.6), transparent);
  animation: progress-indeterminate 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
```

---

## 6. PARALLAX EFFECTS

### 6.1 Pointer-Based Parallax (Hero Shapes)

**Max Translate:** 12px
**Dampening:** 0.85 (multiply pointer offset)
**Easing:** 600ms cubic-bezier(0.16, 1, 0.3, 1)

**Implementation:**
```javascript
const parallaxElement = document.querySelector('.parallax-element');

document.addEventListener('pointermove', (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  // Calculate offset (-1 to 1)
  const xOffset = ((clientX / innerWidth) - 0.5) * 2;
  const yOffset = ((clientY / innerHeight) - 0.5) * 2;

  // Apply dampened transform
  const maxTranslate = 12;
  const dampening = 0.85;
  const x = xOffset * maxTranslate * dampening;
  const y = yOffset * maxTranslate * dampening;

  parallaxElement.style.transform = `translate(${x}px, ${y}px)`;
  parallaxElement.style.transition = 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)';
});
```

**Reduced Motion:**
```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable parallax
  return;
}
```

---

### 6.2 Scroll-Based Parallax

**Use Sparingly:** Background elements only

**Speeds:**
- Foreground: 1.0x scroll speed (normal)
- Mid-ground: 0.5x scroll speed
- Background: 0.2x scroll speed

**Max Travel Distance:** 100px vertical

---

## 7. AMBIENT ANIMATIONS

### 7.1 Floating Gradient Blobs (Hero Background)

**Keyframes:**
```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -20px) scale(1.05);
  }
}
```

**Usage:**
```css
.gradient-blob-1 {
  animation: float 8s ease-in-out infinite;
  animation-delay: 0s;
}

.gradient-blob-2 {
  animation: float 8s ease-in-out infinite;
  animation-delay: 2s;
}

.gradient-blob-3 {
  animation: float 8s ease-in-out infinite;
  animation-delay: 4s;
}
```

**Performance:** Use `will-change: transform` sparingly (max 3 elements).

---

### 7.2 Breathing Glow (Accent Highlights)

**Keyframes:**
```css
@keyframes breathe-glow {
  0%, 100% {
    box-shadow: 0 6px 30px rgba(58, 186, 214, 0.08);
  }
  50% {
    box-shadow: 0 8px 36px rgba(58, 186, 214, 0.14);
  }
}
```

**Usage:**
```css
.hero-cta {
  animation: breathe-glow 3s ease-in-out infinite;
}
```

**Performance Note:** Use on max 1-2 elements per viewport.

---

### 7.3 Shimmer Flow (Premium Accent)

**Use Cases:** Premium badges, featured cards

**Keyframes:**
```css
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}
```

**Usage:**
```css
.premium-badge {
  background: linear-gradient(
    90deg,
    rgba(58,186,214,0.2),
    rgba(58,186,214,0.6) 50%,
    rgba(58,186,214,0.2)
  );
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}
```

---

## 8. REDUCED MOTION SUPPORT

**CRITICAL:** All animations MUST respect `prefers-reduced-motion`.

### CSS Media Query

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### JavaScript Check

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable parallax, ambient animations
  // Keep instant transitions for feedback
}
```

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.36s ease-out',
        // Reduced motion variant
        'fade-in-up-reduced': 'fade-in-up 0.01s linear',
      },
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
  },
};
```

**Usage:**
```tsx
<div className="motion-safe:animate-fade-in-up motion-reduce:animate-none">
  Content
</div>
```

---

## 9. PERFORMANCE OPTIMIZATION

### 9.1 GPU Acceleration

**Always Use:**
- `transform: translate()` instead of `left/top`
- `transform: scale()` instead of `width/height`
- `opacity` for fade effects

**Avoid:**
- Animating `blur()` filters (use static states only)
- Animating `box-shadow` on scroll (use pseudo-elements)
- Too many simultaneous animations (max 3-5 per viewport)

---

### 9.2 Will-Change Property

**Use Sparingly:**
```css
/* Only on elements that WILL animate soon */
.card-on-hover-ready {
  will-change: transform;
}

/* Remove after animation */
.card-on-hover-complete {
  will-change: auto;
}
```

**Warning:** Overuse causes performance degradation.

---

### 9.3 Animation Performance Checklist

- [ ] All transforms use GPU-accelerated properties (translate, scale, rotate)
- [ ] Max 3-5 simultaneous animations per viewport
- [ ] `will-change` used on max 3 elements
- [ ] Reduced motion support implemented
- [ ] Animations tested on 60fps target
- [ ] No layout thrashing (check DevTools Performance tab)
- [ ] Background blobs use `filter: blur()` on static state only

---

## QUICK REFERENCE CHEAT SHEET

| Interaction | Duration | Easing | Transform |
|-------------|----------|--------|-----------|
| Button hover | 180ms | default | translateY(-3px) |
| Card hover | 360ms | default | translateY(-6px) |
| Link arrow shift | 180ms | default | gap +4px |
| Icon rotate (card hover) | 360ms | default | scale(1.1) rotate(3deg) |
| Entrance (fade-up) | 360ms | ease-out | translateY(0) from 20px |
| Modal open | 360ms | default | scale(1) from 0.95 |
| Drawer slide | 360ms | default | translateX(0) from 100% |
| Loading spinner | 800ms | linear (infinite) | rotate(360deg) |
| Parallax | 600ms | default | translate(±12px max) |
| Ambient float | 8s | ease-in-out (infinite) | translate(20px) scale(1.05) |

---

**END OF ANIMATION GUIDELINES**
