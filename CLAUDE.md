# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Project Overview

Shopify Enterprise Dashboard - A multi-store management platform built with React, Remix, Shopify Polaris, and Supabase. The application provides centralized control for multiple Shopify stores with analytics, user management, and role-based access control.

## Tech Stack

- **Framework**: Remix 2.x with React 18
- **Language**: TypeScript (strict mode)
- **UI**: Shopify Polaris v12 (BlockStack, InlineStack components)
- **Database**: Supabase (PostgreSQL with Row-Level Security)
- **State Management**: Zustand + TanStack Query v5
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Package Manager**: Yarn 4.x (use `yarn`, not `npm`)

## Project Structure

```
app/                    # Main Remix application (primary codebase)
├── components/         # UI components (Analytics/, Dashboard/, Layout/)
├── lib/               # API clients (shopify.ts, supabase.ts)
├── routes/            # Remix routes (_index.tsx, analytics.tsx, etc.)
├── styles/            # Tailwind CSS
└── root.tsx           # Root layout with providers

src/                   # Legacy/secondary source (hooks, contexts, pages)
├── components/        # Additional components
├── context/           # React contexts (AuthContext, TestModeContext)
├── hooks/             # Custom hooks (useShopifyData, useOpenAI, etc.)
├── lib/               # Utility libraries
├── pages/             # Legacy page components
└── store/             # Zustand stores

tests/
├── unit/              # Vitest unit tests
├── e2e/               # Playwright E2E tests
├── mocks/             # MSW handlers
└── utils/             # Test utilities

supabase/              # Database migrations
```

## Common Commands

```bash
# Development
yarn dev               # Start Remix dev server (port 3000)
yarn build             # Production build
yarn start             # Start production server

# Testing
yarn test              # Run unit tests (Vitest)
yarn test:watch        # Watch mode
yarn test:coverage     # With coverage report
yarn test:e2e          # Run E2E tests (Playwright)

# Code Quality
yarn typecheck         # TypeScript type checking
yarn lint              # ESLint
yarn lint:fix          # Auto-fix lint issues
yarn format            # Prettier formatting
yarn format:check      # Check formatting
```

## Code Conventions

### TypeScript
- Strict mode enabled
- Use explicit types for function parameters and return values
- Prefix unused variables with underscore (`_unused`)
- Avoid `any` - use specific types or `unknown`

### React/Remix
- Use Shopify Polaris components (BlockStack, InlineStack, Card, Page, etc.)
- Data fetching via TanStack Query hooks
- Routes follow Remix conventions (`_index.tsx` for index routes)
- Path aliases: `~` for `app/`, `@` for `src/`

### Testing
- Unit tests: `tests/unit/**/*.test.{ts,tsx}`
- E2E tests: `tests/e2e/**/*.spec.ts`
- Use test utilities from `tests/utils/test-utils.tsx`
- Mock external APIs using MSW handlers in `tests/mocks/`

### ESLint Rules
- React Hooks rules enforced
- No unused variables (except `_` prefixed)
- `@typescript-eslint/no-explicit-any` is a warning (avoid when possible)
- Test files have relaxed rules

## Environment Variables

Required variables (see `.env.example`):
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
- `VITE_SHOPIFY_ADMIN_API_URL` - Shopify Admin API endpoint
- `VITE_SHOPIFY_ACCESS_TOKEN` - Shopify access token

The app works with mock data if env vars are not configured.

## Key Integrations

- **Shopify Admin API**: Store management, products, orders
- **Supabase**: Auth, database with RLS, realtime subscriptions
- **OpenAI**: AI-powered analytics features
- **Stripe**: Payment processing

## Important Notes

1. **Package Manager**: Always use `yarn`, never `npm` (enforced by `prevent-npm.js`)
2. **Polaris Components**: Use Shopify Polaris v12 component patterns
3. **Database Security**: All tables use Row-Level Security (RLS)
4. **Dual Codebase**: Primary code in `app/`, legacy code in `src/` - prefer `app/` for new work
5. **Coverage Thresholds**: Low thresholds set (lines: 2%, functions: 10%, branches: 20%)
