<img src="public/CoConstruct_Logo-square.png" alt="CoConstruct Logo" style="margin: 0 auto; display: block;" />
<br>

<h1 style="text-align: center;">CoConstruct Design System</h1 >

The CoConstruct Design System provides reusable UI components, design tokens, and foundations that help teams build consistent, accessible, and scalable product experiences across CoConstruct applications.

This guide walks you through installing and using the design system in your project.

<hr style="height: .25em; margin: 1.5rem 0; background-color: #ededed;">
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

<hr style="width: 50%; margin: 0;">

Make sure your project includes the required peer dependencies:

```
npm install react react-dom
```

If you're using TypeScript:

```
npm install -D typescript @types/react @types/react-dom
```

### Using Components

<hr style="width: 50%; margin: 0;">
Import components directly:

```
import { Button } from '@coconstruct/design-system';

export function Example() {
    return <Button variant="primary">Create Project</Button>;
}
```

### Using Design Tokens

<hr style="width: 50%; margin: 0;">
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

<hr style="height: .25em; margin: 1.5rem 0; background-color: #ededed;">

## Documentation

Interactive documentation and live examples are available in our internal Storybook environment powered by Storybook. There you can:

- Explore components
- View accessibility notes
- Inspect props and variants
- Review usage guideline
