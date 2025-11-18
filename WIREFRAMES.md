# BharatGoAI Premium Wireframes
## Section-by-Section Layout Specifications

**Version:** 3.0.0
**Design System:** Graphite Elegance
**Date:** 2025-11-17

---

## 1. NAVIGATION BAR

### Desktop (XL >= 1280px)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]    Features  Solutions  Security  Pricing  Docs  FAQ   │
│                                              [Get Started btn]  │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Height:** 72px
- **Background:** Glass with blur(14px), gradient overlay
- **Border:** 1px bottom border rgba(255,255,255,0.06)
- **Shadow:** elevation-1 when scrolled
- **Layout:**
  - Logo: left-aligned, 40px padding-left
  - Nav links: center-flex, 32px spacing between
  - CTA button: right-aligned, 40px padding-right

**Get Started Button (Desktop):**
- **Dimensions:** 36px height × auto width
- **Padding:** 10px 16px
- **Font:** 14px, weight 500
- **Background:** rgba(58,186,214,0.86)
- **Border Radius:** 10px
- **Glow:** 0 6px 30px rgba(58,186,214,0.08)
- **Hover:** translateY(-3px), shadow elevation-2

---

### Tablet (MD 768-1023px)

```
┌───────────────────────────────────────────────────┐
│  [Logo]         Features  Solutions  Pricing     │
│                                  [Get Started]    │
└───────────────────────────────────────────────────┘
```

**Changes from Desktop:**
- Reduce link spacing to 24px
- Hide "Security", "Docs", "FAQ" (move to hamburger)
- Button: 32px height, 8px 14px padding, 13px font

---

### Mobile (SM < 768px)

```
┌─────────────────────────────────┐
│  [Logo]              [☰] [→]   │
└─────────────────────────────────┘
```

**Specifications:**
- Logo: left
- Hamburger menu: second from right (☰)
- Icon-only CTA: rightmost (→ arrow icon)
- **Icon CTA:** 36×36px square, aria-label="Get Started"
- **Mobile Menu:** Full-screen overlay with glass-depth-1 background

---

## 2. HERO SECTION

### Desktop (XL >= 1280px)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────┐         ┌─────────────────────────┐  │
│  │ LEFT CONTENT (60%)  │         │ RIGHT PANEL (40%)       │  │
│  │                     │         │                         │  │
│  │ [Premium Badge]     │         │  ┌─────────────────┐   │  │
│  │                     │         │  │  Chat Mockup    │   │  │
│  │ India's Most        │         │  │  ┌───────────┐  │   │  │
│  │ Trusted AI Platform │         │  │  │ User msg  │  │   │  │
│  │                     │         │  │  ├───────────┤  │   │  │
│  │ Built for Real Work,│         │  │  │ AI reply  │  │   │  │
│  │ Real Languages,     │         │  │  ├───────────┤  │   │  │
│  │ Real Businesses     │         │  │  │ User msg  │  │   │  │
│  │                     │         │  │  └───────────┘  │   │  │
│  │ [Description text]  │         │  │  [Input field]  │   │  │
│  │                     │         │  └─────────────────┘   │  │
│  │ [Try Free] [Docs]   │         │                         │  │
│  │                     │         │  Glass panel with       │  │
│  │ ┌─────────────────┐ │         │  blur(16px), realistic  │  │
│  │ │ 12.8K+  2.8M+   │ │         │  UI, no emojis          │  │
│  │ │ Users   Queries │ │         │                         │  │
│  │ │      15+        │ │         │                         │  │
│  │ │   Languages     │ │         │                         │  │
│  │ └─────────────────┘ │         │                         │  │
│  │                     │         │                         │  │
│  └─────────────────────┘         └─────────────────────────┘  │
│                                                                 │
│  Background: Subtle grid texture + radial vignette             │
└─────────────────────────────────────────────────────────────────┘
```

**Left Content (60%):**
1. **Premium Badge:** Small pill "India's #1 Enterprise AI Platform"
   - Glass-subtle background, 8px padding, 24px border-radius
2. **H1 Headline:** 72px, line-height 1.05, -0.02em letter-spacing
   - "Trusted" word in cyan gradient
3. **Subhead:** 20px, line-height 1.4, muted slate color
4. **Description:** 16px body text, max-width 580px
5. **CTA Buttons:**
   - Primary: "Try It Free" (frosted cyan with glow)
   - Secondary: "Read Documentation" (glass-outline)
   - Spacing: 16px gap
6. **Stats Grid:** 3 columns
   - Glass-breath cards with cyan borders
   - Number + label format

**Right Panel (40%):**
- **Glass Card:** blur(16px), elevation-2 shadow
- **Content:** Realistic chat UI mockup (SVG/HTML component)
  - Message bubbles (left-aligned user, right-aligned AI)
  - Input field at bottom
  - No emoji characters
  - Subtle scroll indicator if content exceeds viewport
- **Internal Padding:** 24px
- **Max Height:** 85vh on XL screens

**Background Elements:**
- Radial gradient vignette behind headline
- Subtle grid texture (2px opacity)
- Floating gradient blobs with gentle float animation

---

### Tablet (MD 768-1023px)

```
┌────────────────────────────────────────────┐
│  ┌──────────────┐    ┌──────────────┐     │
│  │ LEFT (55%)   │    │ RIGHT (45%)  │     │
│  │              │    │              │     │
│  │ [Badge]      │    │ ┌──────────┐ │     │
│  │              │    │ │ Chat UI  │ │     │
│  │ India's Most │    │ │ (reduced)│ │     │
│  │ Trusted AI   │    │ │          │ │     │
│  │              │    │ └──────────┘ │     │
│  │ [H1: 52px]   │    │              │     │
│  │              │    │              │     │
│  │ [Subhead]    │    │              │     │
│  │              │    │              │     │
│  │ [CTAs]       │    │              │     │
│  │              │    │              │     │
│  │ [Stats: 2×2] │    │              │     │
│  └──────────────┘    └──────────────┘     │
└────────────────────────────────────────────┘
```

**Changes:**
- H1: 52px font size
- Stats grid: 2 columns × 2 rows (or hide third stat)
- Right panel: reduced padding to 16px
- Chat mockup: fewer visible messages (3-4 bubbles)

---

### Mobile (SM < 768px)

**CRITICAL: Vertical Stack Order**

```
┌─────────────────────────────────┐
│                                 │
│  [Premium Badge]                │
│                                 │
│  India's Most Trusted           │
│  AI Platform                    │
│  (34px, line 1.12)              │
│                                 │
│  Built for Real Work,           │
│  Real Languages...              │
│  (18px subhead)                 │
│                                 │
│  [Description: 16px]            │
│                                 │
│  ┌─────────────────────┐        │
│  │  Try It Free (full) │        │
│  └─────────────────────┘        │
│                                 │
│  ┌─────────────────────┐        │
│  │  Read Docs (outline)│        │
│  └─────────────────────┘        │
│                                 │
│  ┌───────────────────────┐      │
│  │ 12.8K+   2.8M+        │      │
│  │ Users    Queries      │      │
│  │     15+ Languages     │      │
│  └───────────────────────┘      │
│                                 │
│  ┌───────────────────────┐      │
│  │  CHAT MOCKUP PANEL    │      │
│  │  (100% width)         │      │
│  │  ┌─────────────────┐  │      │
│  │  │ User message    │  │      │
│  │  ├─────────────────┤  │      │
│  │  │ AI response     │  │      │
│  │  ├─────────────────┤  │      │
│  │  │ User message    │  │      │
│  │  └─────────────────┘  │      │
│  │  [Input field]       │      │
│  │                      │      │
│  │  Scrollable content  │      │
│  │  Max-height: 400px   │      │
│  └───────────────────────┘      │
│                                 │
└─────────────────────────────────┘
```

**Mobile Responsive Rules:**
1. **Stack Order:** Badge → Headline → Subhead → CTAs → Stats → Chat Panel
2. **Chat Panel:**
   - Width: 100% (margin: 0 16px)
   - Max-width: calc(100vw - 32px)
   - Internal scroll ONLY (overflow-y: auto)
   - Max-height: 400px
   - No horizontal overflow
3. **Buttons:** Full-width stacked, 12px gap
4. **Stats:** Single column or 2-column grid
5. **Padding:** 16px horizontal on container

---

## 3. TRUST SECTION

### Desktop

```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────┐   │
│  │  [Shield Icon]  [Lightning Icon]  [Certificate Icon] │   │
│  │                                                       │   │
│  │   Made in India     99.9% Uptime      ISO 27001      │   │
│  │   for India           SLA            Certified       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** Glass-depth-1 card
- **Layout:** 3 equal columns
- **Icons:** Custom SVG line icons (24×24px, 1.5px stroke) - NO EMOJIS
- **Typography:** 16px title, 14px subtitle
- **Spacing:** 32px gap between items

### Mobile

```
┌─────────────────────────────┐
│  [Shield Icon]              │
│  Made in India, for India   │
├─────────────────────────────┤
│  [Lightning Icon]           │
│  99.9% Uptime SLA           │
├─────────────────────────────┤
│  [Certificate Icon]         │
│  ISO 27001 Certified        │
└─────────────────────────────┘
```

**Changes:**
- Vertical stack
- 16px vertical gap
- Full-width items

---

## 4. FEATURE GRID

### Desktop (XL >= 1280px)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  [Icon]     │  │  [Icon]     │  │  [Icon]     │         │
│  │             │  │             │  │             │         │
│  │  Feature 1  │  │  Feature 2  │  │  Feature 3  │         │
│  │  Title      │  │  Title      │  │  Title      │         │
│  │             │  │             │  │             │         │
│  │  Desc text  │  │  Desc text  │  │  Desc text  │         │
│  │             │  │             │  │             │         │
│  │  [Learn →]  │  │  [Learn →]  │  │  [Learn →]  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  [Icon]     │  │  [Icon]     │  │  [Icon]     │         │
│  │             │  │             │  │             │         │
│  │  Feature 4  │  │  Feature 5  │  │  Feature 6  │         │
│  │  Title      │  │  Title      │  │  Title      │         │
│  │             │  │             │  │             │         │
│  │  Desc text  │  │  Desc text  │  │  Desc text  │         │
│  │             │  │             │  │             │         │
│  │  [Learn →]  │  │  [Learn →]  │  │  [Learn →]  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Card Specifications:**
- **Layout:** 3 columns on desktop
- **Glass Style:** Glass-card with blur(12px)
- **Icon:** Custom SVG, 48×48px display size, cyan accent color
- **Title:** H3 scale (32px desktop, 600 weight)
- **Description:** 16px, 1.6 line-height, max 2 lines
- **CTA Link:** Text link with arrow, 14px
- **Padding:** 32px internal
- **Gap:** 24px between cards
- **Hover:** Elevation increase + micro-translate (0, -6px)

---

### Tablet (MD 768-1023px)

```
┌────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐       │
│  │ Feature 1│  │ Feature 2│       │
│  └──────────┘  └──────────┘       │
│  ┌──────────┐  ┌──────────┐       │
│  │ Feature 3│  │ Feature 4│       │
│  └──────────┘  └──────────┘       │
│  ┌──────────┐  ┌──────────┐       │
│  │ Feature 5│  │ Feature 6│       │
│  └──────────┘  └──────────┘       │
└────────────────────────────────────┘
```

**Changes:**
- 2 columns
- Reduced padding: 24px
- Icon: 40×40px

---

### Mobile (SM < 768px)

```
┌──────────────────┐
│  ┌────────────┐  │
│  │  Feature 1 │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │  Feature 2 │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │  Feature 3 │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │  Feature 4 │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │  Feature 5 │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │  Feature 6 │  │
│  └────────────┘  │
└──────────────────┘
```

**Changes:**
- Single column
- 20px padding
- 16px vertical gap

---

## 5. SOLUTIONS PAGE

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────┐
│                     SOLUTIONS HERO                           │
│  ┌───────────────────┐         ┌──────────────┐             │
│  │ Industry-Specific │         │ [Icon Grid]  │             │
│  │ AI Solutions      │         │  6 industry  │             │
│  │                   │         │  icons       │             │
│  │ [Subhead text]    │         └──────────────┘             │
│  └───────────────────┘                                       │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   SOLUTION TILES GRID                        │
│                                                              │
│  ┌────────────────────┐      ┌────────────────────┐         │
│  │ [Custom SVG Icon]  │      │ [Custom SVG Icon]  │         │
│  │                    │      │                    │         │
│  │ Enterprise AI      │      │ E-Commerce AI      │         │
│  │ Solutions          │      │ Solutions          │         │
│  │                    │      │                    │         │
│  │ Category: B2B      │      │ Category: Retail   │         │
│  │                    │      │                    │         │
│  │ Transform mission- │      │ Boost sales with   │         │
│  │ critical ops...    │      │ personalized...    │         │
│  │                    │      │                    │         │
│  │ • Custom models    │      │ • Smart recommend  │         │
│  │ • Dedicated infra  │      │ • 24/7 support     │         │
│  │ • Priority support │      │ • Auto product     │         │
│  │                    │      │                    │         │
│  │ [Learn More →]     │      │ [Learn More →]     │         │
│  └────────────────────┘      └────────────────────┘         │
│                                                              │
│  ┌────────────────────┐      ┌────────────────────┐         │
│  │ Education AI       │      │ Healthcare AI      │         │
│  │ Solutions          │      │ Solutions          │         │
│  └────────────────────┘      └────────────────────┘         │
│                                                              │
│  ┌────────────────────┐      ┌────────────────────┐         │
│  │ Startup AI Tools   │      │ Marketing AI       │         │
│  │                    │      │ Solutions          │         │
│  └────────────────────┘      └────────────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Solution Tile Specifications:**
- **Layout:** 2 columns desktop, 1 column mobile
- **Card Style:** Glass-card with blur(12px)
- **Icon:** Custom SVG (NO EMOJIS), 64×64px, top-left position
- **Title:** H3 (32px), 600 weight, cyan accent color
- **Category:** Small badge, 12px, glass-subtle background
- **Summary:** 16px body text, max 2 lines
- **Use-case Bullets:** Max 3 items, custom SVG bullet points
- **CTA:** Text link "Learn More →", 14px
- **Spacing:** 24px vertical gap, 24px horizontal gap
- **Hover:** Border opacity increase, elevation raise

---

### Mobile Solutions Grid

```
┌──────────────────┐
│  ┌────────────┐  │
│  │ [Icon]     │  │
│  │            │  │
│  │ Enterprise │  │
│  │ AI         │  │
│  │            │  │
│  │ Category   │  │
│  │            │  │
│  │ Summary... │  │
│  │            │  │
│  │ • Feature1 │  │
│  │ • Feature2 │  │
│  │ • Feature3 │  │
│  │            │  │
│  │ [Learn →]  │  │
│  └────────────┘  │
│                  │
│  ┌────────────┐  │
│  │ E-Commerce │  │
│  └────────────┘  │
│  ...             │
└──────────────────┘
```

**Mobile Changes:**
- Single column
- Icon: 48×48px
- 24px vertical spacing between tiles
- Full-width cards with 16px horizontal margin

---

## 6. PRICING SECTION

### Desktop

```
┌──────────────────────────────────────────────────────────────┐
│                  Transparent Pricing                         │
│              No hidden fees. Cancel anytime.                 │
│                                                              │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │ Starter  │    │ Professional │    │  Enterprise  │      │
│  │          │    │  [Popular]   │    │              │      │
│  │ ₹999/mo  │    │  ₹4,999/mo   │    │  Custom      │      │
│  │          │    │              │    │              │      │
│  │ • Feat 1 │    │  • Feat 1    │    │  • Feat 1    │      │
│  │ • Feat 2 │    │  • Feat 2    │    │  • Feat 2    │      │
│  │ • Feat 3 │    │  • Feat 3    │    │  • Feat 3    │      │
│  │          │    │              │    │              │      │
│  │ [Start]  │    │  [Start]     │    │  [Contact]   │      │
│  └──────────┘    └──────────────┘    └──────────────┘      │
└──────────────────────────────────────────────────────────────┘
```

**Card Specifications:**
- **Layout:** 3 equal columns
- **Featured Card:** Middle tier, elevated with accent border
- **Card Style:** Glass-card
- **Title:** H3 (24px)
- **Price:** H2 (48px), cyan color
- **Features:** Bullet list, 16px text, custom checkmark SVG
- **CTA:** Primary button for featured, secondary for others

### Mobile

```
┌──────────────────┐
│  ┌────────────┐  │
│  │  Starter   │  │
│  │  ₹999/mo   │  │
│  │  Features  │  │
│  │  [Start]   │  │
│  └────────────┘  │
│                  │
│  ┌────────────┐  │
│  │Professional│  │
│  │ [Popular]  │  │
│  └────────────┘  │
│                  │
│  ┌────────────┐  │
│  │ Enterprise │  │
│  └────────────┘  │
└──────────────────┘
```

---

## 7. FOOTER

### Desktop

```
┌──────────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Product  │  │ Company  │  │ Resources│  │ Legal    │    │
│  │          │  │          │  │          │  │          │    │
│  │ Features │  │ About    │  │ Docs     │  │ Privacy  │    │
│  │ Pricing  │  │ Blog     │  │ API      │  │ Terms    │    │
│  │ Security │  │ Careers  │  │ Support  │  │ Security │    │
│  │ Docs     │  │ Contact  │  │ Status   │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                              │
│  ───────────────────────────────────────────────────────     │
│                                                              │
│  BharatGoAI Logo                        [Social Links]      │
│  © 2025 BharatGoAI. Built in India.                         │
└──────────────────────────────────────────────────────────────┘
```

### Mobile

```
┌──────────────────┐
│  Product         │
│  [links...]      │
│                  │
│  Company         │
│  [links...]      │
│                  │
│  Resources       │
│  [links...]      │
│                  │
│  Legal           │
│  [links...]      │
│  ───────────     │
│  [Social Links]  │
│  © 2025...       │
└──────────────────┘
```

---

## CRITICAL RESPONSIVE BEHAVIORS

### Chat Panel (Hero Right Side)

**Desktop/Tablet (>= 768px):**
- Fixed width percentage (40% desktop, 45% tablet)
- Internal scroll ONLY if content exceeds max-height
- Max-height: 85vh

**Mobile (< 768px):**
- **Stacks BELOW hero content**
- Width: 100% of container (minus 32px total padding)
- Max-width: calc(100vw - 32px)
- Max-height: 400px
- Overflow-y: auto (internal scroll)
- Overflow-x: hidden (NEVER horizontal overflow)
- Use responsive SVG (viewBox scaling) or CSS object-fit for graphics

### Solutions Tiles

**Breakpoint Rules:**
- XL (>= 1280px): 2 columns, 24px gap
- MD (768-1023px): 2 columns, 20px gap, reduced padding
- SM (< 768px): 1 column, 24px vertical gap, 16px horizontal margin

### Feature Grid

**Breakpoint Rules:**
- XL: 3 columns
- MD: 2 columns
- SM: 1 column

---

## ACCESSIBILITY ANNOTATIONS

**Keyboard Navigation:**
1. Tab order: Nav → Hero CTAs → Features → Solutions → Pricing → Footer
2. Focus ring: 2px solid cyan, 2px offset
3. Skip to content link (visually hidden)

**Screen Reader:**
- Semantic HTML: `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`
- ARIA labels on icon-only buttons
- Alt text on all images
- Heading hierarchy (H1 → H2 → H3)

**Color Contrast:**
- Primary text (#F6F7F8) on background (#0B0D0F): 16.8:1 ✓
- Secondary text (#AEB6BD) on background: 8.2:1 ✓
- Accent cyan (#3ABAD6) on background: 5.4:1 ✓

---

## VIEWPORT TEST MATRIX

| Device | Width × Height | Layout |
|--------|---------------|--------|
| iPhone SE | 375×667 | Mobile stack |
| iPhone 12/13 | 390×844 | Mobile stack |
| Galaxy S21 | 412×915 | Mobile stack |
| iPad Mini | 768×1024 | Tablet 2-col |
| iPad Pro | 1024×1366 | Desktop/Tablet hybrid |
| MacBook Air | 1280×800 | Desktop 60/40 |
| Desktop HD | 1920×1080 | Desktop full |

---

**END OF WIREFRAMES**
