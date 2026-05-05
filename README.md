<p align="center">
  <img src="public/CoConstruct_Logo-square.png" alt="CoConstruct Logo" />
</p>

<h1 align="center">CoConstruct Design System</h1>

Storybook is live at: https://svonharris.github.io/CoConstruct-Design-System/

The CoConstruct Design System provides reusable UI components, design tokens, and foundations that help teams build consistent, accessible, and scalable product experiences across CoConstruct applications.

This guide walks you through installing and using the design system in your project.

<hr size="4" color="#ededed">

What this includes:

- Reusable React components (buttons, inputs, dropdowns, navigation, cards, modals, and more)
- Design foundations (color, typography, spacing, layout, motion, and border radius)
- Accessibility-first patterns and implementation guidance
- Storybook documentation with examples and usage notes

Using shared standards helps teams:

- Build faster with less duplication
- Maintain visual and behavioral consistency
- Improve onboarding for designers and developers
- Deliver predictable, confidence-inspiring product experiences

The system is built on:

- Design tokens
- Accessibility standards
- Interaction principles
- Responsive layout rules

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

Storybook is live at: https://svonharris.github.io/CoConstruct-Design-System/

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
