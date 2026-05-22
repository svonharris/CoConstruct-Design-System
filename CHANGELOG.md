# Changelog

All notable changes to the CoConstruct Design System will be documented in this file.

## [1.0.1] - 2026-05-22

### Changed
- Storybook links in README now open in a new tab

### Fixed
- Updated deploy.yaml branch path for GitHub Pages deployment

---

## [1.0.0] - Initial Release

### Added

#### Components
- **Button** — primary, secondary, and disabled variants with accessible markup
- **Footer** — site footer component with semantic tokens
- **FormGroup** — label + input wrapper with required indicator
- **FormInput** — styled text input with focus and border tokens
- **FormSelect** — styled dropdown with dynamic options array
- **HeroSection** — hero layout with optional background image support
- **Image** — wrapper component for consistent image rendering
- **Link** — anchor component with default and arrow variants
- **Logo** — brand logo with default and compact variants
- **Modal** — accessible dialog with open/close toggle
- **NavBar** — responsive navigation with hamburger menu toggle
- **PricingCard** — pricing display card with url prop
- **SectionGrid** — multi-column grid layout with column variants
- **Tabs** — tabbed content switcher
- **ToggleSwitch** — toggle with configurable button labels

#### Design Tokens
- Primitive tokens: colors, font sizes, font weights, letter spacing, text transform, border radius, transitions
- Semantic tokens for all components: Button, Footer, FormGroup, FormInput, FormSelect, HeroSection, Links, Logo, NavBar, PricingCard, Tabs, ToggleSwitch
- Color palette grouped into Neutrals/Blacks/Greys, Greens, Blues, and Reds

#### Storybook Documentation
- Deployed to GitHub Pages via GitHub Actions
- Custom manager UI theme and favicon
- Introduction overview page
- MDX docs pages with live Canvas, Controls, and Props sections for all components
- ColorGrid component for visualizing the full color token palette
- Story sort order: Docs → Brand → Components
- Accessibility addon (`@storybook/addon-a11y`)

#### Infrastructure
- Vite build tooling with TypeScript
- GitHub Actions workflow for automated Storybook deployment to GitHub Pages
- Vitest + Playwright for browser-based testing
- ESLint with React Hooks and React Refresh plugins
