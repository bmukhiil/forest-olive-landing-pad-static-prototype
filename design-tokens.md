# Forest Olive Landing Pad Design Tokens

Current static prototype note:

- The original source audit was forest/olive based.
- The current NeetCode prototype has been rethemed to a restrained black/plum/violet system for dark mode.
- Glass intensity was intentionally reduced across the page, with the hero code editor using the most solid surface treatment.
- The active accent hierarchy is now:
  - primary accent: muted violet
  - muted accent: plum/violet-gray
  - text highlight: lavender-gray
  - glow/bloom tone: soft violet haze

Source of truth for this static port:

- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\tailwind.config.ts`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\index.css`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\Navbar.tsx`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\Hero.tsx`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\Features.tsx`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\Testimonial.tsx`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\CallToAction.tsx`
- `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\Footer.tsx`
- Shared primitives:
  - `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\ui\button.tsx`
  - `C:\Users\bmukhiil\Documents\neetcode-design\forest-olive-landing-pad\src\components\ui\card.tsx`

## Fidelity Constraints

- Port the current landing page as-rendered from source, not an improved interpretation.
- Preserve section order exactly: `Navbar -> Hero -> Features -> Testimonials -> CTA -> Footer`.
- Preserve copy exactly.
- Preserve Tailwind-derived spacing, radii, shadows, blur, gradients, and glass recipes.
- Preserve responsive breakpoints and layout changes at the same widths used by Tailwind defaults.
- Preserve current interaction cadence: reveal threshold, reveal easing, navbar scroll state, hero cycle timing, and mic toggle state.
- Do not invent new components, spacing systems, colors, or motion behaviors.
- One implementation caveat in source: feature cards set `animationDelay`, but reveal is implemented with CSS transitions, so the delay is inert in the React version. Static build should match the current behavior, not add a new stagger.

## Theme Variables

Light mode `:root` values from `src/index.css`:

| Token | Raw value | Resolved use |
| --- | --- | --- |
| `--background` | `0 0% 100%` | `hsl(var(--background))` |
| `--foreground` | `222.2 84% 4.9%` | main text |
| `--card` | `0 0% 100%` | card surfaces |
| `--card-foreground` | `222.2 84% 4.9%` | card text |
| `--popover` | `0 0% 100%` | popover surfaces |
| `--popover-foreground` | `222.2 84% 4.9%` | popover text |
| `--primary` | `222.2 47.4% 11.2%` | default shadcn button color |
| `--primary-foreground` | `210 40% 98%` | on-primary text |
| `--secondary` | `210 40% 96.1%` | muted secondary surface |
| `--secondary-foreground` | `222.2 47.4% 11.2%` | on-secondary text |
| `--muted` | `210 40% 96.1%` | muted surface |
| `--muted-foreground` | `215.4 16.3% 46.9%` | muted text |
| `--accent` | `210 40% 96.1%` | accent surface |
| `--accent-foreground` | `222.2 47.4% 11.2%` | on-accent text |
| `--destructive` | `0 84.2% 60.2%` | destructive surface |
| `--destructive-foreground` | `210 40% 98%` | destructive text |
| `--border` | `214.3 31.8% 91.4%` | default border |
| `--input` | `214.3 31.8% 91.4%` | default input border |
| `--ring` | `222.2 84% 4.9%` | focus ring |
| `--radius` | `0.5rem` | base radius token |
| `--sidebar-background` | `0 0% 98%` | sidebar bg |
| `--sidebar-foreground` | `240 5.3% 26.1%` | sidebar text |
| `--sidebar-primary` | `240 5.9% 10%` | sidebar primary |
| `--sidebar-primary-foreground` | `0 0% 98%` | sidebar primary text |
| `--sidebar-accent` | `240 4.8% 95.9%` | sidebar accent |
| `--sidebar-accent-foreground` | `240 5.9% 10%` | sidebar accent text |
| `--sidebar-border` | `220 13% 91%` | sidebar border |
| `--sidebar-ring` | `217.2 91.2% 59.8%` | sidebar focus ring |
| `--glow-color` | `90 59% 50%` | green/olive glow hue |
| `--glow-spread` | `20px` | glow blur radius |

Dark mode `.dark` overrides from `src/index.css`:

| Token | Raw value | Resolved use |
| --- | --- | --- |
| `--background` | `240 10% 3.9%` | page background |
| `--foreground` | `0 0% 98%` | page text |
| `--card` | `240 10% 3.9%` | card surface |
| `--card-foreground` | `0 0% 98%` | card text |
| `--popover` | `240 10% 3.9%` | popover surface |
| `--popover-foreground` | `0 0% 98%` | popover text |
| `--primary` | `0 0% 98%` | primary surface |
| `--primary-foreground` | `240 5.9% 10%` | on-primary text |
| `--secondary` | `240 3.7% 15.9%` | secondary surface |
| `--secondary-foreground` | `0 0% 98%` | on-secondary text |
| `--muted` | `240 3.7% 15.9%` | muted surface |
| `--muted-foreground` | `240 5% 64.9%` | muted text |
| `--accent` | `240 3.7% 15.9%` | accent surface |
| `--accent-foreground` | `0 0% 98%` | accent text |
| `--destructive` | `0 62.8% 30.6%` | destructive surface |
| `--destructive-foreground` | `0 0% 98%` | destructive text |
| `--border` | `240 3.7% 15.9%` | default border |
| `--input` | `240 3.7% 15.9%` | default input border |
| `--ring` | `240 4.9% 83.9%` | focus ring |
| `--glow-color` | `90 59% 40%` | darker olive glow hue |
| `--glow-spread` | `25px` | larger dark glow spread |

## Custom Palette

Extended palette from `tailwind.config.ts`:

| Family | Token | Value |
| --- | --- | --- |
| Forest | `forest.DEFAULT` | `#1E3329` |
| Forest | `forest.light` | `#2A453A` |
| Forest | `forest.dark` | `#152218` |
| Olive | `olive.DEFAULT` | `#606C38` |
| Olive | `olive.light` | `#A3B18A` |
| Olive | `olive.dark` | `#515C30` |
| Sage | `sage.DEFAULT` | `#DDE5B6` |
| Sage | `sage.light` | `#F0F4E1` |
| Sage | `sage.dark` | `#BDC79A` |

## Semantic Color Mapping Used On The Landing Page

| Semantic use | Value in light mode | Value in dark mode | Source |
| --- | --- | --- | --- |
| Page shell gradient start | `#ffffff` | `hsl(var(--background))` | `Index.tsx` wrapper |
| Page shell gradient end | `rgba(240, 244, 225, 0.3)` | `rgba(30, 51, 41, 0.5)` | `Index.tsx` wrapper |
| Gradient headline start | `#1E3329` | `#F0F4E1` | `.gradient-text` |
| Gradient headline end | `#A3B18A` | `#A3B18A` | `.gradient-text` |
| Primary filled CTA | `rgba(30, 51, 41, 0.9)` | `rgba(30, 51, 41, 0.8)` | navbar + hero buttons |
| Primary filled CTA hover | `#2A453A` | `rgba(30, 51, 41, 0.6)` or `rgba(42, 69, 58, 0.8)` | button class overrides |
| Outline CTA border | `rgba(30, 51, 41, 0.7)` | `rgba(221, 229, 182, 0.7)` | navbar + hero buttons |
| Outline CTA text | `#1E3329` | `#DDE5B6` or `#F0F4E1` | navbar + hero buttons |
| Hero paragraph | `#374151` (`gray-700`) | `#DDE5B6` | `Hero.tsx` |
| Section supporting copy | `#4B5563` (`gray-600`) | unchanged unless explicit dark variant | Features + CTA |
| Testimonial section background | `rgba(30, 51, 41, 0.95)` to `rgba(42, 69, 58, 0.95)` | same | `Testimonial.tsx` |
| Footer background | `#1E3329` | same | `Footer.tsx` |

## Semantic Surface Tokens

The static prototype now uses adaptive semantic section/card tokens so dark mode is not limited to the header.

| Token | Light mode | Dark mode | Purpose |
| --- | --- | --- | --- |
| `--surface-0` | `rgba(255, 255, 255, 0.82)` | `rgba(19, 28, 23, 0.88)` | section interior shell |
| `--surface-1` | `#ffffff` | `rgba(24, 34, 29, 0.94)` | primary card base |
| `--surface-2` | `rgba(255, 255, 255, 0.72)` | `rgba(33, 47, 40, 0.88)` | elevated or pill surface |
| `--surface-muted` | `rgba(240, 244, 225, 0.72)` | `rgba(43, 63, 52, 0.72)` | muted panel background |
| `--text-primary` | `hsl(var(--foreground))` | `#F0F4E1` | primary text on major surfaces |
| `--text-secondary` | `#4B5563` | `rgba(221, 229, 182, 0.86)` | supporting body copy |
| `--text-muted` | `#6B7280` | `rgba(163, 177, 138, 0.82)` | tertiary metadata |
| `--border-soft` | `rgba(96, 108, 56, 0.1)` | `rgba(163, 177, 138, 0.16)` | low-contrast border |
| `--border-strong` | `rgba(96, 108, 56, 0.18)` | `rgba(221, 229, 182, 0.24)` | emphasis border |
| `--section-light-bg` | `#ffffff` | `rgba(18, 26, 22, 0.96)` | section shell baseline |
| `--section-dark-bg` | `rgba(30, 51, 41, 0.82)` | `rgba(22, 32, 27, 0.92)` | darker shell reference |

Current dark-mode implementation note:

- Body sections are no longer intended to stay visually light in dark mode.
- The prototype now uses near-black section bases, plum/violet surfaces, lavender text accents, and reduced-intensity glow.
- The editor surface is intentionally denser and less glassy than the adjacent question panel.

## Typography Actually Used

Tailwind default font families are implied:

- Sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`
- Body feature settings from `src/index.css`: `"rlig" 1, "calt" 1`

Type scale used by this page:

| Utility | Size | Line height | Used in |
| --- | --- | --- | --- |
| `text-xs` | `0.75rem` | `1rem` | hero footer, feedback list |
| `text-sm` | `0.875rem` | `1.25rem` | badges, nav labels, code UI, body snippets |
| `text-base` | `1rem` | `1.5rem` | most paragraph/body copy |
| `text-lg` | `1.125rem` | `1.75rem` | hero paragraph, CTA buttons |
| `text-xl` | `1.25rem` | `1.75rem` | feature titles, footer brand, secondary testimonial text |
| `text-2xl` | `1.5rem` | `2rem` | CTA art title, features simulator title |
| `text-3xl` | `1.875rem` | `2.25rem` | section headings on mobile/default |
| `text-4xl` | `2.25rem` | `2.5rem` | section headings at `md` |
| `text-5xl` | `3rem` | `1` | hero heading at `md` |
| `text-6xl` | `3.75rem` | `1` | hero heading at `lg` |

Font weights used:

- `font-medium`: `500`
- `font-semibold`: `600`
- `font-bold`: `700`

## Containers And Layout

Tailwind container config:

- centered container
- effective page padding on this landing page: `1rem` from `px-4`
- max widths by breakpoint:
  - `sm >= 640px`: `640px`
  - `md >= 768px`: `768px`
  - `lg >= 1024px`: `1024px`
  - `xl >= 1280px`: `1280px`
  - `2xl >= 1536px`: `1400px` override from config

Max-width utilities used:

| Utility | Value |
| --- | --- |
| `max-w-2xl` | `42rem` |
| `max-w-4xl` | `56rem` |
| `max-w-5xl` | `64rem` |
| `max-w-md` | `28rem` |

Important layout breakpoints used by the page:

- `sm (640px)`: hero buttons switch from stacked to row
- `md (768px)`: desktop nav appears, hero card becomes split panel, features grid becomes 2-column, CTA art appears
- `lg (1024px)`: hero headline becomes `text-6xl`

## Spacing Scale Actually Used

| Utility | Value |
| --- | --- |
| `1` | `0.25rem` |
| `2` | `0.5rem` |
| `3` | `0.75rem` |
| `4` | `1rem` |
| `5` | `1.25rem` |
| `6` | `1.5rem` |
| `8` | `2rem` |
| `10` | `2.5rem` |
| `12` | `3rem` |
| `16` | `4rem` |
| `20` | `5rem` |
| `24` | `6rem` |

Arbitrary dimensions used:

- hero orbs: `600px`, `700px`, `500px`
- global orbs: `900px`, `700px`, `800px`
- assistant thread height: `300px` mobile, `400px` at `md`
- CTA art height: `16rem`

## Radius, Border, And Shadow Values

Radius values used:

| Utility | Value |
| --- | --- |
| `rounded-md` | `0.375rem` |
| `rounded-lg` | `0.5rem` |
| `rounded-xl` | `0.75rem` |
| `rounded-2xl` | `1rem` |
| `rounded-full` | `9999px` |

Border usage:

- base border token: `hsl(var(--border))`
- glass borders:
  - light: `rgba(255, 255, 255, 0.2)` or `0.3`
  - dark: `rgba(255, 255, 255, 0.05)`
- olive/sage borders are mostly low-alpha custom palette overlays such as:
  - `rgba(96, 108, 56, 0.1)`
  - `rgba(163, 177, 138, 0.1)`
  - `rgba(221, 229, 182, 0.3)`

Shadow values used:

| Token | Exact formula |
| --- | --- |
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |
| `.glass` light override | `0 8px 32px rgba(31, 38, 135, 0.15)` |
| `.glass` dark override | `0 8px 32px rgba(0, 0, 0, 0.25)` |
| `.glass-card` light override | `0 8px 32px rgba(31, 38, 135, 0.15)` |
| `.glass-card` dark override | `0 8px 32px rgba(0, 0, 0, 0.25)` |

## Exact Effect Recipes

### Gradient text

```css
.gradient-text {
  background-image: linear-gradient(to right, #1E3329, #A3B18A);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.dark .gradient-text {
  background-image: linear-gradient(to right, #F0F4E1, #A3B18A);
}
```

### Glass

```css
.glass {
  backdrop-filter: blur(24px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.dark .glass {
  backdrop-filter: blur(24px);
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.glass-card {
  backdrop-filter: blur(64px);
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.dark .glass-card {
  backdrop-filter: blur(64px);
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.glass-input {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
}

.dark .glass-input {
  backdrop-filter: blur(16px);
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

### Glow

```css
.glow {
  box-shadow: 0 0 var(--glow-spread) hsla(var(--glow-color) / 40%);
}

.glow-text {
  text-shadow: 0 0 10px hsla(var(--glow-color) / 60%);
}

.glow-border {
  box-shadow:
    0 0 15px hsla(var(--glow-color) / 30%),
    inset 0 0 15px hsla(var(--glow-color) / 20%);
}
```

### Light orb

```css
.light-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(64px);
  opacity: 0.5;
  background: radial-gradient(
    circle,
    hsla(var(--glow-color) / 80%) 0%,
    hsla(var(--glow-color) / 0%) 70%
  );
}

.dark .light-orb {
  opacity: 0.3;
}
```

### Patterned background

`light-grid-bg` uses an exact SVG data URI. Light mode uses `#606C38` at `0.05` opacity. Dark mode swaps to `#A3B18A` at `0.05` opacity. Preserve the same asset string and tile size `60 x 60`.

### Page-level hero glow behind main card

From `Hero.tsx`:

```css
background-image: linear-gradient(
  to right,
  rgba(163, 177, 138, 0.3),
  rgba(96, 108, 56, 0.2),
  rgba(42, 69, 58, 0.3)
);
```

Dark variant:

```css
background-image: linear-gradient(
  to right,
  rgba(42, 69, 58, 0.2),
  rgba(96, 108, 56, 0.2),
  rgba(221, 229, 182, 0.2)
);
```

Blur amount is `64px`, opacity `0.5`, translated upward by `3rem`, with `border-radius: 9999px`.

### CTA artwork treatment

From `CallToAction.tsx`:

- base panel gradient: top-left to bottom-right from `rgba(30, 51, 41, 0.8)` to `#606C38`
- image layer: full bleed, cover, center, `opacity: 0.2`
- centered copy remains over the darkened art panel

## Motion And Timing

| Behavior | Formula |
| --- | --- |
| Scroll reveal initial state | `opacity: 0; transform: translateY(20px)` |
| Scroll reveal visible state | `opacity: 1; transform: translateY(0)` |
| Scroll reveal timing | `transition: opacity 0.6s ease-out, transform 0.6s ease-out` |
| Fade-in keyframe start | `opacity: 0; transform: translateY(5px)` |
| Fade-in keyframe end | `opacity: 1; transform: translateY(0)` |
| Fade-in animation | `0.5s ease-out forwards` |
| Navbar transition | `500ms` |
| Button / color hovers | `300ms` or default shadcn color transitions |
| Arrow hover shift | `translateX(0.25rem)` |
| Hero conversation cycle | `4000ms` per step, loop `0 -> 1 -> 2 -> 3 -> 0` |
| IntersectionObserver threshold | `0.1` |
| Mic recording state | toggles pulse/glow styling and footer text |

## Component Recipes And Static Class Mapping

### Navbar

Source classes:

- wrapper:
  - base: `fixed w-full z-50 transition-all duration-500`
  - top state: `py-4 bg-transparent`
  - scrolled state: `py-2 glass glow-border`
- desktop nav:
  - `hidden md:flex items-center space-x-8`
- mobile menu panel:
  - `md:hidden absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 animate-fade-in glass glow-border backdrop-blur-2xl bg-white/30 dark:bg-black/30`

Static mapping:

- `.site-nav`
- `.site-nav.is-scrolled`
- `.site-nav__desktop`
- `.site-nav__mobile`

### Hero

Source classes:

- section: `relative min-h-screen flex items-center light-grid-bg pt-16 transition-colors duration-300 overflow-hidden`
- badge: `inline-block mb-4 px-4 py-1 glass glow rounded-full`
- title: `text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text glow-text`
- button row: `flex flex-col sm:flex-row gap-4 mb-16`
- demo shell: `overflow-hidden rounded-2xl shadow-lg glass-card glow-border relative z-10`
- split panel: `flex flex-col md:flex-row`
- assistant width: `w-full md:w-2/5`

Static mapping:

- `.hero`
- `.hero__badge`
- `.hero__title`
- `.hero__actions`
- `.hero-demo`
- `.hero-demo__layout`
- `.hero-demo__code`
- `.hero-demo__assistant`

### Features

Source classes:

- section: `py-24 bg-white`
- feature grid: `grid grid-cols-1 md:grid-cols-2 gap-8`
- card: `bg-white border border-olive/10 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-on-scroll overflow-hidden`
- simulator band: `bg-sage-light/50 rounded-2xl p-8 md:p-12 border border-sage/30 shadow-sm`

Static mapping:

- `.features`
- `.feature-grid`
- `.feature-card`
- `.simulator-band`

### Testimonials

Source classes:

- section: `py-20 bg-gradient-to-br from-forest/95 to-forest-light/95 text-white`
- hero quote card: `bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-white/20 shadow-lg animate-on-scroll`
- secondary cards: same family, `p-6`

Static mapping:

- `.testimonials`
- `.testimonial-lead`
- `.testimonial-grid`
- `.testimonial-card`

### CTA

Source classes:

- section: `py-20 bg-sage-light light-grid-bg`
- card: `bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto border border-olive/10 animate-on-scroll`
- artwork: `hidden md:block relative h-64`

Static mapping:

- `.cta`
- `.cta-card`
- `.cta-card__art`
- `.cta-logo-bars`

### Footer

Source classes:

- section: `bg-forest text-white`
- grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
- newsletter input: `px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none focus:ring-1 focus:ring-olive-light`
- subscribe button: `bg-olive hover:bg-olive-dark px-4 py-2 rounded-r-md transition-colors`

Static mapping:

- `.site-footer`
- `.site-footer__grid`
- `.newsletter-form`

## Notes For Future Continuation

- The landing page reuses a small shared language: glass surfaces, olive glow, low-alpha borders, and gradient headline text. Keep these recipes centralized.
- The only stateful pieces are navbar scroll state, mobile menu visibility, theme selection, hero conversation step, mic recording toggle, and reveal visibility.

## NeetCode Content Remap

The original static port preserved the Prepleet React landing page. That content model is now superseded by an audit-driven NeetCode homepage remap based on:

- `C:\Users\bmukhiil\Documents\neetcode-design\homepage-information-audit.md`

Current content/section mapping in the static prototype:

| Audit IA | Static section id | Primary class shell |
| --- | --- | --- |
| Navigation | n/a | `.site-nav` |
| Hero with value prop and stats | `#home` | `.hero` + `.hero-demo` |
| Social proof with logos and testimonials | `#social-proof` | `.testimonials` |
| Course catalog overview | `#courses` | `.features` + `.course-grid` |
| Free practice pitch | `#practice` | `.cta` + `.practice-preview` |
| Founder story | `#about` | `.about-section` + `.about-card` |
| Footer utility links | `#footer` | `.site-footer` |

Audit-driven content rules now in effect:

- Brand is `NeetCode`
- Navigation uses `Courses`, `Practice`, `Roadmap`, `Pro`, `Sign in`
- Hero uses `NeetCode` and `A Better Way to Prepare`
- Trust messaging, course catalog, free practice, founder story, and footer content come from the audit file
- The forest/olive visual language remains in use even though the source content is no longer Prepleet

Behavior rules after remap:

- Keep theme toggle and persistence
- Keep navbar scroll state
- Keep mobile menu open/close
- Keep scroll reveal
- Remove hero interview simulation behavior, recording state, and assistant-thread cycling because they no longer match the page intent

## Dark Mode Unification

The NeetCode remap no longer keeps body sections visually light in dark mode. Dark mode now uses adaptive section and card surfaces so the body follows the same forest-glass language as the header and hero.

Sections now intended to be token-driven in both light and dark modes:

- `.features`
- `.feature-card`
- `.simulator-band`
- `.simulator-preview`
- `.cta`
- `.cta-card`
- `.practice-preview`
- `.about-card`
- footer body/link text
- shared section intro badges and supporting copy

Superseded note:

- Previous guidance that “Features and CTA sections stay light in dark mode” is no longer applicable.
