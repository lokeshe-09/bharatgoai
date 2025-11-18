# BharatGoAI Component Library Specification
## Premium Graphite Elegance Design System v3.0

**Version:** 3.0.0
**Last Updated:** 2025-11-17
**Framework:** React + TypeScript + Tailwind CSS

---

## TABLE OF CONTENTS

1. [Navigation Components](#1-navigation-components)
2. [Hero Components](#2-hero-components)
3. [Card Components](#3-card-components)
4. [Button Components](#4-button-components)
5. [Input Components](#5-input-components)
6. [Pricing Components](#6-pricing-components)
7. [Testimonial Components](#7-testimonial-components)
8. [Footer Components](#8-footer-components)
9. [Utility Components](#9-utility-components)

---

## 1. NAVIGATION COMPONENTS

### 1.1 Navbar (Premium Floating Glass)

**File:** `components/Navbar.tsx`

**Design Tokens:**
```css
background: linear-gradient(180deg, rgba(232,241,247,0.08), rgba(232,241,247,0.06))
backdrop-filter: blur(14px)
border: 1px solid rgba(255,255,255,0.06)
shadow: --shadow-elevation-1
height: 72px
```

**Props:**
```typescript
interface NavbarProps {
  scrolled?: boolean;
  transparent?: boolean;
  className?: string;
}
```

**Structure:**
```
[Logo] ─────── [Nav Links] ─────── [Get Started CTA]
```

**Responsive Behavior:**
- **Desktop (>= 1024px):** Full horizontal layout, all links visible
- **Tablet (768-1023px):** Hide secondary links (Security, Docs, FAQ) → move to hamburger
- **Mobile (< 768px):** Logo + Hamburger + Icon-only CTA

**Get Started Button Specs:**
- **Desktop:** 36px h, 10px 16px padding, 14px font
- **Tablet:** 32px h, 8px 14px padding, 13px font
- **Mobile:** 36×36px square, icon-only, aria-label="Get Started"

**States:**
- Default: Glass-whisper background
- Scrolled: Glass-depth-1 background + accent line border-top
- Hover (links): Scale 1.02, cyan color
- Hover (CTA): translateY(-3px), shadow-elevation-2

**Code Example:**
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 h-18 px-6 lg:px-12 bg-gradient-to-b from-white/[0.08] to-white/[0.06] border-b border-white/[0.06] backdrop-blur-[14px] shadow-[0_6px_18px_rgba(4,6,8,0.45)]">
  <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
    {/* Logo */}
    <a href="/" className="text-xl font-bold text-[#F6F7F8]">BharatGoAI</a>

    {/* Nav Links */}
    <div className="hidden lg:flex items-center gap-8">
      <a href="/features" className="text-[#AEB6BD] hover:text-[#3ABAD6] transition-colors">Features</a>
      {/* ... */}
    </div>

    {/* CTA */}
    <a href="/chat" className="h-9 px-4 rounded-[10px] bg-[rgba(58,186,214,0.86)] text-white text-sm font-medium hover:-translate-y-[3px] transition-all">
      Get Started
    </a>
  </div>
</nav>
```

---

## 2. HERO COMPONENTS

### 2.1 Hero Section (Two-Column with Chat Panel)

**File:** `components/Hero.tsx`

**Design Tokens:**
```css
--hero-left-width: 60%  /* Desktop */
--hero-right-width: 40% /* Desktop */
background: --color-background
min-height: calc(100vh - 72px)
padding: --spacing-6xl --spacing-4xl
```

**Grid Layout:**
- **Desktop:** 60/40 split (grid-cols-12, left=7col, right=5col)
- **Tablet:** 55/45 split
- **Mobile:** Single column stack (Headline → CTAs → Stats → Chat Panel)

**Left Content Elements:**
1. Premium Badge (glass-subtle, 24px border-radius)
2. H1 Headline (72px desktop, 34px mobile, -0.02em tracking)
3. Subhead (20px, --color-text-secondary)
4. Description (16px, max-width 580px)
5. CTA Group (Primary + Secondary buttons, 16px gap)
6. Stats Grid (3 columns desktop, 1 column mobile)

**Right Content (Chat Panel):**
- Glass card: blur(16px), elevation-2 shadow
- Max-height: 85vh desktop, 400px mobile
- Internal scroll ONLY within .chat-messages
- NO horizontal overflow

**Code Reference:** See `/redesign-deliverables/hero/hero.tsx`

---

## 3. CARD COMPONENTS

### 3.1 Glass Card (Standard)

**Design Tokens:**
```css
background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))
border: 1px solid rgba(255,255,255,0.06)
border-radius: 16px
backdrop-filter: blur(12px)
padding: 32px
shadow: --shadow-elevation-1
```

**Props:**
```typescript
interface GlassCardProps {
  variant?: 'default' | 'elevated' | 'subtle';
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

**Variants:**
- **default:** Standard glass with blur(12px)
- **elevated:** blur(16px) + elevation-2 shadow
- **subtle:** blur(8px) + minimal border

**Hover State:**
```css
border-color: rgba(255,255,255,0.12)
transform: translateY(-6px)
shadow: --shadow-elevation-2
transition: 360ms cubic-bezier(0.16,1,0.3,1)
```

**Code Example:**
```tsx
<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.06] backdrop-blur-sm transition-all duration-[360ms] hover:border-white/[0.12] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(3,6,8,0.55)]">
  {children}
</div>
```

---

### 3.2 Feature Card

**Extends:** Glass Card

**Additional Elements:**
- Icon container (64×64px, cyan accent background)
- Title (H3, 24px)
- Description (16px, 2-line clamp)
- CTA link (14px, arrow icon)

**Layout:**
```
┌─────────────────┐
│  [Icon 64×64]   │
│                 │
│  Feature Title  │
│                 │
│  Description... │
│  (max 2 lines)  │
│                 │
│  Learn More →   │
└─────────────────┘
```

**Icon Hover:** Scale 1.1 + rotate 3deg

**Code Reference:** See `/redesign-deliverables/feature-grid/FeatureGrid.tsx`

---

### 3.3 Solution Tile

**Extends:** Glass Card

**Additional Elements:**
- Icon (64×64px desktop, 48×48px mobile)
- Category badge (small pill, 11px)
- Title (H3, 28px)
- Summary (16px, 2-line clamp)
- Feature bullets (max 3, custom SVG checkmark)
- CTA link

**Code Reference:** See `/redesign-deliverables/solutions/SolutionTiles.tsx`

---

### 3.4 Stats Card

**Design Tokens:**
```css
padding: 20px
background: from-white/[0.02] to-white/[0.01]
border: 1px solid rgba(58,186,214,0.20) /* Cyan accent border */
border-radius: 12px
text-align: center
```

**Structure:**
```tsx
<div className="stat-card">
  <span className="stat-value text-[28px] font-bold text-[#3ABAD6]">12.8K+</span>
  <span className="stat-label text-[13px] text-[#6B7280]">Active Users</span>
</div>
```

---

## 4. BUTTON COMPONENTS

### 4.1 Primary Button (Frosted Cyan)

**Design Tokens:**
```css
background: rgba(58,186,214,0.86)
color: #FFFFFF
padding: 14px 28px
border-radius: 10px
font-size: 16px
font-weight: 500
shadow: 0 6px 30px rgba(58,186,214,0.08)
```

**States:**
- **Default:** bg rgba(58,186,214,0.86)
- **Hover:** bg rgba(58,186,214,0.96), translateY(-3px), shadow-glow-medium
- **Active:** translateY(0)
- **Focus:** 2px cyan focus ring, 2px offset
- **Disabled:** opacity 0.5, cursor not-allowed

**Code:**
```tsx
<button className="px-7 py-3.5 rounded-[10px] bg-[rgba(58,186,214,0.86)] text-white font-medium shadow-[0_6px_30px_rgba(58,186,214,0.08)] transition-all duration-[180ms] hover:bg-[rgba(58,186,214,0.96)] hover:-translate-y-[3px] hover:shadow-[0_8px_36px_rgba(58,186,214,0.14)]">
  Primary Action
</button>
```

---

### 4.2 Secondary Button (Glass Outline)

**Design Tokens:**
```css
background: rgba(255,255,255,0.04)
border: 1px solid rgba(255,255,255,0.12)
color: --color-text-primary
padding: 14px 28px
border-radius: 10px
backdrop-filter: blur(8px)
```

**Hover:**
```css
background: rgba(255,255,255,0.08)
border-color: rgba(255,255,255,0.20)
transform: translateY(-2px)
```

**Code:**
```tsx
<button className="px-7 py-3.5 rounded-[10px] bg-white/[0.04] border border-white/[0.12] text-[#F6F7F8] backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/[0.20] hover:-translate-y-[2px]">
  Secondary Action
</button>
```

---

### 4.3 Text Link Button

**Design Tokens:**
```css
color: --color-accent
font-size: 14px
font-weight: 500
display: inline-flex
gap: 8px
```

**Hover:**
```css
gap: 12px /* Arrow shifts right */
```

**Code:**
```tsx
<a href="#" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#3ABAD6] transition-all hover:gap-3">
  Learn More
  <ArrowRight className="w-4 h-4" />
</a>
```

---

## 5. INPUT COMPONENTS

### 5.1 Text Input (Glass Style)

**Design Tokens:**
```css
background: rgba(255,255,255,0.04)
border: 1px solid rgba(255,255,255,0.06)
border-radius: 8px
padding: 12px 16px
color: --color-text-primary
font-size: 14px
```

**States:**
- **Default:** border white/[0.06]
- **Focus:** border rgba(58,186,214,0.40), bg white/[0.06]
- **Error:** border red/[0.60]
- **Disabled:** opacity 0.5

**Code:**
```tsx
<input
  type="text"
  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#F6F7F8] placeholder:text-[#6B7280] outline-none transition-all focus:border-[rgba(58,186,214,0.40)] focus:bg-white/[0.06]"
  placeholder="Enter text..."
/>
```

---

### 5.2 Chat Input (Hero Mockup)

**Extends:** Text Input

**Additional:**
- Paired with send button (40×40px square, cyan background)
- Flex layout with 8px gap

**Code Reference:** See hero components

---

## 6. PRICING COMPONENTS

### 6.1 Pricing Card

**Design Tokens:**
```css
background: from-white/[0.02] to-white/[0.01]
border: 1px solid white/[0.06]
border-radius: 20px
padding: 40px 32px
```

**Featured Variant:**
```css
border: 1px solid rgba(58,186,214,0.30)
shadow: --shadow-glow-subtle
transform: scale(1.05) /* Slightly larger */
```

**Structure:**
```
┌──────────────────┐
│ [Popular Badge]  │ (featured only)
│                  │
│  Plan Name       │ (H3, 24px)
│  ₹999/mo         │ (H2, 48px, cyan)
│                  │
│  • Feature 1     │
│  • Feature 2     │ (custom checkmark SVG)
│  • Feature 3     │
│                  │
│  [Get Started]   │ (Primary/Secondary button)
└──────────────────┘
```

**Responsive:**
- Desktop: 3 columns (equal width)
- Mobile: 1 column (stacked)

---

## 7. TESTIMONIAL COMPONENTS

### 7.1 Testimonial Slider

**Design Tokens:**
```css
card-background: glass-card
quote-icon-size: 32×32px
avatar-size: 64×64px
```

**Structure:**
```
┌───────────────────────────────┐
│  "Testimonial quote text..."  │
│                               │
│  ┌────┐                       │
│  │ [A]│  Name                 │
│  └────┘  Title, Company       │
└───────────────────────────────┘
```

**Slider Controls:**
- Prev/Next arrows (ghost buttons)
- Pagination dots (cyan active, gray inactive)

---

## 8. FOOTER COMPONENTS

### 8.1 Footer (4-Column Grid)

**Design Tokens:**
```css
background: --color-surface (#15171A)
border-top: 1px solid white/[0.06]
padding: 64px 48px 32px
```

**Layout:**
```
┌─────────┬─────────┬──────────┬──────────┐
│ Product │ Company │ Resources│ Legal    │
├─────────┴─────────┴──────────┴──────────┤
│ Logo    © 2025 BharatGoAI    [Socials]  │
└──────────────────────────────────────────┘
```

**Link Style:**
```css
color: --color-text-muted
font-size: 14px
hover: color-accent
```

**Responsive:**
- Desktop: 4 columns
- Mobile: Single column stacked

---

## 9. UTILITY COMPONENTS

### 9.1 Badge (Premium Pill)

```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-[12px] font-medium uppercase tracking-wide text-[#3ABAD6]">
  <Icon className="w-3 h-3" />
  Label Text
</span>
```

---

### 9.2 Loading Spinner

```tsx
<div className="w-8 h-8 border-2 border-white/[0.12] border-t-[#3ABAD6] rounded-full animate-spin" />
```

---

### 9.3 Focus Ring (Accessibility)

**Global Utility:**
```css
.focus-ring:focus-visible {
  outline: 2px solid rgba(58,186,214,0.60);
  outline-offset: 2px;
}
```

**Usage:**
Apply to all interactive elements (buttons, links, inputs)

---

## CSS TOKEN REFERENCE QUICK GUIDE

**Colors:**
- Primary BG: `bg-[#0B0D0F]`
- Card BG: `bg-gradient-to-b from-white/[0.02] to-white/[0.01]`
- Border: `border-white/[0.06]`
- Accent: `text-[#3ABAD6]`
- Text Primary: `text-[#F6F7F8]`
- Text Secondary: `text-[#AEB6BD]`
- Text Muted: `text-[#6B7280]`

**Shadows:**
- Elevation 1: `shadow-[0_6px_18px_rgba(4,6,8,0.45)]`
- Elevation 2: `shadow-[0_12px_30px_rgba(3,6,8,0.55)]`
- Glow Subtle: `shadow-[0_6px_30px_rgba(58,186,214,0.08)]`

**Blur:**
- Cards: `backdrop-blur-sm` (12px)
- Hero Panel: `backdrop-blur-[16px]`
- Navbar: `backdrop-blur-[14px]`

**Spacing:**
- Container padding: `px-4 md:px-8 lg:px-12`
- Section padding: `py-16 lg:py-24`
- Card padding: `p-6 lg:p-8`

**Border Radius:**
- Buttons: `rounded-[10px]`
- Cards: `rounded-2xl` (16px)
- Pills: `rounded-full`

---

## ACCESSIBILITY CHECKLIST

- [ ] All interactive elements have focus-visible states
- [ ] Color contrast >= 4.5:1 for normal text
- [ ] Semantic HTML (nav, header, main, section, footer)
- [ ] ARIA labels on icon-only buttons
- [ ] Keyboard navigation support (Tab, Enter, Esc)
- [ ] Screen reader tested
- [ ] Reduced motion support via Tailwind

---

**END OF COMPONENT LIBRARY SPEC**
