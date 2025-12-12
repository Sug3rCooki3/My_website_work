# 03. Design Style Site: Museum of Aesthetics

This document details the requirements for the "Design Style Site," a sub-project intended to demonstrate mastery of a specific design movement.

## 1. Purpose
*   **Academic Goal:** To prove the ability to analyze, deconstruct, and reconstruct a specific visual language using code.
*   **The "Museum" Concept:** The site should feel like a curated digital exhibit. It is not just *about* the style; it *is* the style. The user should feel immersed in the era or philosophy of the movement.

## 2. Requirements

### Fully Responsive Layout
*   **UX Perspective:** The design integrity must hold across all devices. A "Bauhaus" grid must logically stack on mobile without losing its structural essence.
*   **Fluid Typography:** Text should scale smoothly (using `clamp()` or viewport units) rather than jumping abruptly between breakpoints.

### Accuracy Criteria
To achieve "Museum Quality," the site must adhere strictly to the movement's rules:
*   **Color Theory:** Use the exact palette associated with the movement (e.g., Neon/Black for Cyberpunk, Primary Colors/White for Bauhaus).
*   **Typography:** Use historically accurate typefaces or their modern web equivalents (e.g., Helvetica/Akzidenz-Grotesk for Swiss Style).
*   **Grid Systems:** The layout structure itself is part of the design.
*   **Historical Context:** Include a section explaining the history, key figures, and philosophy of the movement.

---

## 3. Design Movement Examples

### A. Swiss Design (International Typographic Style)
*   **Visual Definition:** Clean, objective, grid-based, asymmetric.
*   **Core Characteristics:**
    *   Heavy use of sans-serif typography (Helvetica).
    *   Strict mathematical grids.
    *   Flush-left, ragged-right text.
    *   Photography preferred over illustration.
*   **Interactive Elements:** Parallax scrolling that slides elements along the grid lines; hover effects that reveal underlying grid structures.

### B. Cyberpunk / High-Tech
*   **Visual Definition:** Dystopian, futuristic, neon, "high tech, low life."
*   **Core Characteristics:**
    *   Dark mode default (Black/Dark Blue backgrounds).
    *   Neon accents (Cyan, Magenta, Lime Green).
    *   Glitch effects, scanlines, terminal/code aesthetics.
    *   Monospaced fonts.
*   **Interactive Elements:** Glitch text on hover; CRT monitor flicker effects; "Hacking" typing animations.

### C. Minimalism
*   **Visual Definition:** "Less is more." Stripped of all non-essential elements.
*   **Core Characteristics:**
    *   Extensive whitespace (negative space).
    *   Limited color palette (often monochrome).
    *   Simple, elegant typography.
    *   Focus on content hierarchy.
*   **Interactive Elements:** Subtle fade-ins; smooth scrolling; micro-interactions that only appear when necessary.

### D. Bauhaus
*   **Visual Definition:** Form follows function. Geometric, industrial, artistic.
*   **Core Characteristics:**
    *   Geometric shapes (circles, squares, triangles).
    *   Primary colors (Red, Blue, Yellow) + Black/White.
    *   Diagonal lines and rotated text.
    *   Functional simplicity.
*   **Interactive Elements:** Shapes that assemble/disassemble on scroll; interactive geometry (drag and drop shapes).

### E. Neo-Brutalism
*   **Visual Definition:** Raw, unpolished, bold, reaction against standard web design.
*   **Core Characteristics:**
    *   High contrast, clashing colors.
    *   Default system fonts or bold/ugly typography.
    *   Visible borders, hard shadows (no blur).
    *   "Raw" HTML look.
*   **Interactive Elements:** Marquee scrolling text; harsh hover states (invert colors); custom cursors that look "retro" or "broken."
