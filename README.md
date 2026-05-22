<p align="center">
  <img src="public/CoConstruct_Logo-square.png" alt="CoConstruct Logo" />
</p>

<h1 align="center">CoConstruct Design System</h1>

Storybook is live at: [https://svonharris.github.io/CoConstruct-Design-System/](https://svonharris.github.io/CoConstruct-Design-System/ "Go view the Storybook Documentation live")

<i><b>A personal design system project inspired by my time at CoConstruct, built independently to demonstrate design system architecture.</b></i>

The CoConstruct Design System provides reusable UI components, design tokens, and foundations that help teams build consistent, accessible, and scalable product experiences across CoConstruct applications.

This guide walks you through installing and using the design system in your project.

<hr size="4" color="#ededed">

What this includes:

- Reusable React components (buttons, inputs, dropdowns, navigation, cards, modals, and more)
- Design foundations (color, typography, spacing, layout, motion, and border radius)
- Accessibility-first patterns and implementation guidance
- Storybook documentation with examples and usage notes

## How It's Built and Why

### Architecture

The system uses a two-tier design token model: **primitive tokens** hold raw values (a hex color, a pixel size), while **semantic tokens** give those values meaning within a specific component (`--button-primary-background` rather than `#2e7d32`). This keeps the system flexible — updating a semantic token changes behavior in one place without rippling through unrelated components.

**Vite** handles bundling and development. It's fast, natively ESM, and aligns with the project's `"type": "module"` setup. **TypeScript** provides typed prop contracts for components, which matters in a design system: consumers need to trust the interface won't change unexpectedly.

**Storybook** is used for documentation over static markdown because components need to be _seen_. Every story includes a live Canvas, Controls for prop exploration, and MDX docs. The accessibility addon (`@storybook/addon-a11y`) is enabled on every story so problems surface during component development, not after.

### Accessibility

A few specific decisions came out of building these components.

The `Link` component initially used a literal `→` arrow character in the markup. Accessibility tools flagged it — screen readers interpret raw symbol characters inconsistently, sometimes announcing "right arrow" mid-sentence. The arrow was moved to a CSS `::after` pseudo-element, where it's treated as decorative and skipped by assistive technology. The dedicated `--link-arrow-symbol-font-weight` token was removed at the same time, since the standalone element it styled no longer existed.

Navigation markup uses `<header>` and `<nav>` elements rather than generic `<div>` wrappers. Landmark roles let screen reader users jump directly to navigation without tabbing through everything above it.

Storybook stories for image components include descriptive alt text in default args. This makes what "good" looks like visible to developers building stories, rather than leaving an empty string to be filled in later.

### Component Design

The component set reflects what a product team building a construction management tool would reach for first: navigation, forms, modals, cards, pricing displays, layout grids. Complex patterns like data tables or date pickers are out of scope — but the pieces here compose most of the core product surfaces.

Each component has its own semantic token layer. The practical implication: if the primary button color changes, you update `--button-primary-background`, not every instance of a color across the codebase. Variants are intentional and minimal (primary, secondary, disabled for Button; default and arrow for Link) to keep usage predictable and discourage one-off customizations.

<hr size="4" color="#ededed">

## Get Started

Install the latest version:

```
npm install github:svonharris/CoConstruct-Design-System
```

To install a specific release, append the version tag:

```
npm install github:svonharris/CoConstruct-Design-System#v1.0.1
```

Tags follow [semantic versioning](https://semver.org) and map to GitHub releases. Pinning to a tag is recommended for production use to ensure reproducible installs.

### Peer Dependencies

<hr width="50%" align="left">

Make sure your project includes the required peer dependencies:

```
npm install react react-dom
```

If you're using TypeScript:

```
npm install -D typescript @types/react @types/react-dom
```

### Using Components

<hr width="50%" align="left">

Import components directly:

```
import { Button } from '@coconstruct/design-system';

export function Example() {
    return <Button variant="primary">Create Project</Button>;
}
```

### Using Design Tokens

<hr width="50%" align="left">

Design tokens are available for direct use in CSS or JavaScript.

#### CSS

```
.my-card {
  background: var(--button-primary-background);
  border-radius: var(--button-border-radius);
}
```

#### JavaScript

```
import { tokens } from '@coconstruct/design-system';

console.log(tokens.color.primary);
```

<hr size="4" color="#ededed">
 
## Documentation

Storybook is live at: <a href="https://svonharris.github.io/CoConstruct-Design-System/" target="_blank">https://svonharris.github.io/CoConstruct-Design-System/</a>

Interactive documentation and live examples are published via [GitHub](https://svonharris.github.io/CoConstruct-Design-System/). There you can:

- Explore components
- View accessibility notes
- Inspect props and variants
- Review usage guidelines

### Run Storybook locally

```
npm install
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006).
