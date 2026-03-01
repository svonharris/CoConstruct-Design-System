<style>
    /* .markdown-body {background-color: red;} */
    .markdown-body .logo {
        margin: 0 auto;
        display: block;
        text-align: center;
    }
    .markdown-body hr {
        height: .25em;
        margin: 1.5rem 0;
        background-color: #ededed;
    }
</style>

<div classname="markdown-body">

<div classname="logo">

![CoConstruct Logo](public/CoConstruct_Logo-square.png "CoConstruct Logo")

</div>

# CoConstruct Design System

The CoConstruct Design System provides reusable UI components, design tokens, and foundations that help teams build consistent, accessible, and scalable product experiences across CoConstruct applications.

This guide walks you through installing and using the design system in your project.

<hr>
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

```
npm install @coconstruct/design-system
```

### Peer Dependencies

Make sure your project includes the required peer dependencies:

```
npm install react react-dom
```

If you're using TypeScript:

```
npm install -D typescript @types/react @types/react-dom
```

### Using Components

Import components directly:

```
import { Button } from '@coconstruct/design-system';

export function Example() {
    return <Button variant="primary">Create Project</Button>;
}
```

### Using Design Tokens

Design tokens are available for direct use in CSS or JavaScript.

#### Javascript

```
import { tokens } from '@coconstruct/design-system';

console.log(tokens.color.primary);
```

#### CSS

```
.my-card {
  background: var(--button-primary-background);
  border-radius: var(--button-border-radius);
}
```

<hr>

## Documentation

Interactive documentation and live examples are available in our internal Storybook environment powered by Storybook. There you can:

- Explore components
- View accessibility notes
- Inspect props and variants
- Review usage guidelines
