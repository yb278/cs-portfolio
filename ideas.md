# CS Portfolio — Design Brainstorm

<response>
<text>
**Design Movement:** Dark Terminal Brutalism
**Core Principles:** Raw monospace type, high contrast black/green, deliberate asymmetry, code-as-art
**Color Philosophy:** Near-black background (#0a0a0a), terminal green (#00ff41) as the sole accent — evoking old CRT monitors and hacker aesthetics. Secondary text in dim grey.
**Layout Paradigm:** Left-aligned content with a fixed-width "terminal column" feel. No centering. Content bleeds to edges on mobile.
**Signature Elements:** Blinking cursor animations, ASCII-style borders, `>` prompt prefixes on headings
**Interaction Philosophy:** Hover reveals "typed" underlines; clicks trigger brief flash/glitch effects
**Animation:** Typewriter entrance for hero text; scanline overlay on sections; glitch keyframes on name
**Typography System:** JetBrains Mono for everything — headings at 700, body at 400, subheadings use letter-spacing 0.2em uppercase
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Design Movement:** Swiss International Typographic Style (Modernist Grid)
**Core Principles:** Strict typographic hierarchy, functional whitespace, diagonal tension lines, no decoration without purpose
**Color Philosophy:** Off-white (#f5f0e8) background with deep charcoal (#1a1a2e) text and a single warm amber (#e8a020) accent — confident, editorial, timeless
**Layout Paradigm:** Asymmetric two-column grid with a thin vertical rule dividing name/nav from content. Large section numbers (01, 02, 03) in oversized light type behind headings.
**Signature Elements:** Oversized section numerals as background texture, thin horizontal rules, bold condensed uppercase labels
**Interaction Philosophy:** Hover states shift accent color; scroll triggers staggered reveal of grid cells
**Animation:** Elements slide in from left with a slight skew; section numbers count up on scroll; smooth parallax on the rule lines
**Typography System:** Bebas Neue for display headings, DM Sans for body text. Strict 8px baseline grid. Headings at 6xl–8xl, labels at xs uppercase tracked wide.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Design Movement:** Midnight Glassmorphism + Flowing Paths (chosen)
**Core Principles:** Dark depth with luminous glass cards, organic animated SVG paths as the hero backdrop, generous whitespace with purposeful density in skill/project grids
**Color Philosophy:** Deep navy-black (#050a14) background, electric indigo (#6366f1) as primary accent, soft cyan (#22d3ee) as secondary highlight. Gradients flow from indigo to cyan. Cards use frosted glass (white/5% fill, white/10% border, backdrop-blur).
**Layout Paradigm:** Full-bleed hero with the BackgroundPaths animation, then alternating full-width sections with max-w-5xl content. Skills use a masonry-style tag cloud. Projects use a 2-col card grid with hover lift.
**Signature Elements:** The animated floating SVG paths from 21st.dev, glass-morphic cards with subtle inner glow, gradient text on the hero name
**Interaction Philosophy:** Cards lift and glow on hover; nav links have an underline that slides in from left; CTA button has a shimmer sweep on hover
**Animation:** Hero text springs in letter-by-letter (BackgroundPaths component); section headings fade+slide up on scroll via framer-motion; skill tags stagger in; project cards scale up subtly on hover
**Typography System:** Syne for display headings (bold, geometric), Inter for body text. Hero name at 7xl–9xl. Section labels in Syne uppercase tracked wide at sm size.
</text>
<probability>0.09</probability>
</response>

## Selected: Midnight Glassmorphism + Flowing Paths
Going with the third approach — it directly incorporates the BackgroundPaths component as the hero, uses a sophisticated dark palette, and creates a visually impressive portfolio that feels modern and crafted.
