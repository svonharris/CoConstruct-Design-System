# CoConstruct Design System – GitHub Pages Deployment

This branch contains the static build output of the CoConstruct Design System Storybook.

It is automatically generated and deployed via GitHub Actions.

View the published Storybook here: [svonharris.github.io/CoConstruct-Design-System](https://svonharris.github.io/CoConstruct-Design-System/)

## About This Branch

- Branch: `gh-pages`
- Purpose: Hosts the compiled Storybook static files
- Source branch: `DS-storybook`
- Deployment: Automated via GitHub Actions
- Build output folder: `storybook-static`
- This branch should not be edited manually.

All changes must be made in the `DS-storybook `branch and pushed to trigger the deployment workflow.

## Deployment Process

1. Make changes in the Storybook project (`DS-storybook `branch)
2. Commit and push changes
3. GitHub Actions automatically:
   - Installs dependencies
   - Builds Storybook
   - Publishes the static output to gh-pages
4. GitHub Pages updates the live site

This process implements Continuous Integration and Continuous Deployment (CI/CD).

## Important

- Do not open pull requests targeting this branch.
- Do not manually modify files in this branch.
- Any manual changes will be overwritten by the next deployment.

## Repository Structure

| Branch         |                   Purpose                    |
| -------------- | :------------------------------------------: |
| `DS-storybook` | Development branch for Storybook source code |
| `gh-pages`     |   Auto-generated static deployment branch    |
