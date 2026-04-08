# Light Theme Migration

This plan outlines the changes required to switch the website's overall aesthetic from its current dark theme (deep navy/slate) to a clean, modern light theme.

## Proposed Changes

### Global CSS Variables (`src/index.css`)

We will update the `:root` variables to establish the foundation of the light mode:

*   **Backgrounds:**
    *   `--bg-color`: Deep navy (`#050510`) ➔ Light slate (`#f8fafc`)
    *   `--bg-color-end`: Dark slate (`#0a0a14`) ➔ Slightly cooler slate (`#e2e8f0`)
*   **Typography:**
    *   `--text-primary`: White (`#f8fafc`) ➔ Dark gray (`#0f172a`)
    *   `--text-secondary`: Muted stone (`#94a3b8`) ➔ Slate gray (`#475569`)
*   **Accents:**
    *   Colors will be shifted to slightly darker variants (e.g. brighter blue ➔ deeper blue `#2563eb`) to ensure high contrast against the light background.
*   **Glassmorphism Effects:**
    *   `--glass-bg`: `rgba(255, 255, 255, 0.03)` ➔ `rgba(255, 255, 255, 0.6)` (Semi-transparent white)
    *   `--glass-border`: `rgba(255, 255, 255, 0.08)` ➔ `rgba(0, 0, 0, 0.1)` (Subtle dark border)

### Local Component Overrides

Several components have hardcoded `rgba(255, 255, 255, x)` values for hover states or backgrounds that only work on dark themes. We will invert these to `rgba(0, 0, 0, x)`:

#### [MODIFY] `src/index.css`
*   Glass panel hover border: `rgba(255,255,255, 0.2)` ➔ `rgba(0, 0, 0, 0.15)`
*   Badges background: Shift to slightly darker/more opaque light-blue backgrounds.

#### [MODIFY] `src/components/Experience.css`
*   Timeline date badge background: `rgba(255,255,255, 0.05)` ➔ `rgba(0, 0, 0, 0.05)`

#### [MODIFY] `src/components/Hero.css`
*   Social icon hover background: `rgba(255,255,255, 0.1)` ➔ `rgba(0, 0, 0, 0.05)`

## Verification Plan

### Manual Verification
Once implemented, you can verify the changes by visiting the local development server at `http://localhost:5173/`. The website should present a premium, airy light mode while retaining the vibrant accent gradients and glassmorphism structure.
