# Monorepo Setup with pnpm, Next.js, and Chakra UI (to Panda CSS)

This monorepo setup includes a Next.js 14 project, a separate UI library, and uses pnpm for package management. It integrates Chakra UI for styling, Biome for linting and formatting, and a bundle size analyzer. The setup also includes import aliases and three initial test routes: _Dashboard_, _Table_, and _Form_.

## 🛠️ Project Structure

- **Root (`rotate-chakra-migration/`)**  
  Contains shared configuration files, such as `pnpm-workspace.yaml` and the root `tsconfig.json`.

- **Apps (`rotate-chakra-migration/apps/`)**  
  Contains the Next.js 14 project with the app router.

- **Packages (`rotate-chakra-migration/packages/`)**  
  Contains the UI library, which will be shared across multiple apps.

## 🚀 Quick Start

1. **Install pnpm Globally**  
   Ensure [pnpm](https://pnpm.io/installation) is installed globally to manage the workspace efficiently.

2. **Initialize the Monorepo**  
   Create a monorepo using pnpm, setting up workspace packages for the apps and UI library.

3. **Setup Next.js 14 with App Router**  
   Initialize a Next.js project within the apps directory, ensuring it uses the latest app router feature.
   `pnpm create next-app@latest --ts --use-app-router` in _/apps/web_

4. **Create a Separate UI Library**  
   Set up a UI library in the packages directory. This library is designed to be reusable across multiple applications within the monorepo. In _packages/ui_

5. **Configure Import Aliases**  
   Set up import aliases in the root `tsconfig.json` to simplify the import paths between packages and apps.

6. **(Optional) Integrate Biome for Linting and Formatting**  
   Setup Biome for a unified tool that handles both linting and formatting.

7. **Configure Bundle Analyzer in the Next app**  
   Integrate a bundle size analyzer in the Next.js app to monitor and optimize the size of the final build.
   `pnpm add @next/bundle-analyzer`

8. **Integrate Chakra UI for Styling**  
   Add Chakra UI to the UI library and the Next.js app to handle consistent styling across the components and pages.

9. **Define Initial Routes**  
   Set up three main routes in the Next.js app: _Dashboard_, _Table_, and _Form_. These will be dummy test routes.

## 🧩 Key Features

- **Monorepo with pnpm**  
  Efficiently manage multiple packages and applications within a single repository.

- **Next.js 14 with App Router**  
  Leverage the latest features of Next.js for modern web development.

- **Chakra UI**  
  A simple, modular, and accessible component library that provides consistent and customizable styling.

- **Biome**  
  Unified tool for linting and formatting, streamlining code quality enforcement.

- **Bundle Size Analyzer**  
  Keep track of the application's bundle size to ensure optimal performance.

- **Import Aliases**  
  Simplified imports across the monorepo for better code organization and readability.

## 📂 Directory Structure

    rotate-chakra-migration/
    │
    ├── apps/
    │   └── web/               # Next.js 14 application with app router
    │
    ├── packages/
    │   └── ui/                # UI library with Chakra UI
    │   └── panda-ui/          # UI library with Panda CSS
    │   └── panda-preset/      # Panda CSS preset config (made to match chakra design system)
    │
    ├── pnpm-workspace.yaml    # pnpm workspace configuration
    ├── tsconfig.json          # Root TypeScript configuration

# 📜 Configuration

### TypeScript

- **Root `tsconfig.json`**: Centralized TypeScript configuration shared across all packages.
- **App-specific `tsconfig.json`**: Extends the root `tsconfig.json`
- **Package-specific `tsconfig.json`**: Extends the root `tsconfig.json`

### Biome

- Unified configuration for linting and formatting across the monorepo using Biome.

### Bundle Analyzer

- Integrated within the Next.js configuration to enable analysis during builds.

# 🌐 Initial Routes

- **Dashboard**: `/`
- **Table**: `/table`
- **Form**: `/form`

These are just dummy test routes.

# 🧑‍💻 Usage

- **Development**: Use `pnpm` to run and develop the apps and packages. Each package and app can be developed and tested independently or together. The scripts are already setup in the root **package.json**
- **Building**: Build the Next.js app with the bundle analyzer enabled to optimize the production builds.
- **Linting & Formatting**: Run Biome commands to enforce code quality standards across the monorepo.

# Gradual Migration Guide: Chakra UI to Panda CSS

## Overview

Migrating from Chakra UI to Panda CSS is a strategic approach to reduce runtime overhead and improve performance without introducing breaking changes. This guide outlines a step-by-step process to gradually transition the project, starting with the setup of Panda CSS and moving through the migration of UI components, while considering the existing design system.

## 1. Initial Setup of Panda CSS

### Install Panda CSS

Begin by installing [Panda CSS](https://panda-css.com/docs/installation/nextjs) in into the monorepo.
`pnpm add @pandacss/dev` in the root

### Configure Panda CSS

Create a `panda.config.ts` at the root of the monorepo. This configuration should align with existing chakra design system, considering variables like color tokens, typography, spacing, etc.

### Fix Emotion style reset overwriting panda css

In the **ChakraProvider** add `resetScope=".chakra-reset"`

- **Map Existing Design Tokens**: Start by mapping existing Chakra design tokens (e.g., colors, spacing, fonts) into Panda CSS. This helps in maintaining visual consistency during the migration.

### Update the Build Process

Integrate Panda CSS into the build process while ensuring it’s non-disruptive by running alongside the existing Chakra setup.

## 2. Parallel Usage: Chakra UI and Panda CSS

### Start with New Components

- **New Components**: Begin creating any new components using Panda CSS. This allows us to start benefiting from the performance improvements immediately without impacting existing Chakra-based components.
- **Component Library**: If we have a component library (e.g., `packages/ui`), create new components in Panda CSS while maintaining existing ones in Chakra UI.

### Integrate with Existing Components

- **Hybrid Components**: For components that are deeply integrated, we have to consider a hybrid approach. Wrap existing Chakra components in Panda CSS containers where feasible, gradually introducing Panda-based styles.

## 3. Gradual Refactoring of Existing Components

### Prioritize High-Impact Components

Identify components that are used frequently or contribute most to runtime overhead. These should be prioritized for refactoring.

- **Refactor Gradually**: Start refactoring these components by replacing Chakra styles with Panda CSS. Begin with non-breaking, visual-only changes.

### Maintain Consistency

- **Design System Consistency**: Ensure the refactored components in Panda CSS are visually consistent with their Chakra counterparts by maintaining the same design tokens.
- **Testing**: Thoroughly test each component after refactoring to ensure visual and functional parity. Utilize visual regression testing tools if available.

## 4. Deprecation of Chakra UI Components

### Mark Chakra Components as Deprecated

Once a component is successfully migrated, mark the Chakra-based component as deprecated in the documentation and codebase.

- **Documentation**: Clearly document which components have been migrated to Panda CSS, and which ones are still using Chakra UI.

### Provide Migration Guides for Team Members

Create internal documentation that will help other developers on the team migrate components from Chakra to Panda CSS.

## 5. Scaling the Migration

### Incremental Release Strategy

We will adopt an incremental release strategy to avoid breaking changes:

- **Versioning**: Consider versioning the UI components library to allow for gradual upgrades.
- **Feature Flags**: Use feature flags to toggle between Chakra and Panda versions of a component where necessary, especially in production.

### Monitor Performance

- **Performance Benchmarks**: Monitor performance metrics to ensure the migration is meeting the desired goals. Compare the performance of components before and after migration.
- **Feedback Loops**: Establish feedback loops for early identification of any regressions or issues during the migration.

## 6. Complete the Migration

### Fully Remove Chakra UI

Once all components have been migrated, we can begin the process of fully removing Chakra UI:

- **Remove Chakra UI**: Gradually remove Chakra UI from the project dependencies and clean up any related configuration files.
- **Final Testing**: Conduct a final round of testing to ensure the application works as expected without Chakra UI.

### Finalize Documentation

Update all documentation to reflect the full transition to Panda CSS. Ensure that all examples, component libraries, and guides reference Panda CSS exclusively.

# Setup steps for this repository

### Clone Repository

`git clone git@github.com:thonyromes/chakra-to-panda-css-migration-guide.git`

### Install Dependencies

`cd chakra-to-panda-css-migration-guide && pnpm install`

### Start the Dev Server

`pnpm web:dev`

`cd packages/panda-ui && pnpm dev`
