# lib-kit

A minimal TypeScript + React library starter using [tsdown](https://tsdown.dev/guide/).

## Setup

```bash
pnpm install
```

## Scripts

```bash
pnpm build      # one-time build to dist/
pnpm dev        # watch mode
pnpm typecheck  # TypeScript checks only
```

## React Notes

- `react` and `react-dom` are set as peer dependencies
- JSX is configured via `tsconfig.json` (`"jsx": "react-jsx"`)
- `tsdown` uses `platform: "neutral"` for framework-agnostic library output

## Example

```tsx
import { Greeting } from 'lib-kit'

export function App() {
  return <Greeting name="Freddie Gibbs" />
}
```

## Structure

- `src/index.ts`: library entry point
- `src/Greeting.tsx`: starter React component
- `tsdown.config.ts`: build config (`dts` + `exports` enabled)
- `dist/`: generated build output
