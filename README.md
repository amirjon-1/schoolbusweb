# SchoolBus — Campus Carpool Landing Page

Marketing site for [SchoolBus](https://apps.apple.com/us/app/schoolbus-campus-carpool/id6759405182), a campus-only carpool app for verified students.

## Stack

- **React 18** + TypeScript
- **Vite** — dev server and build
- **Tailwind CSS v3** — styling
- **Framer Motion** — animations
- **React Router** — client-side routing

## Getting Started

```bash
npm install
npm run dev
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Structure

```
src/
├── components/   # Page sections (Hero, Features, Safety, Footer, …)
├── pages/        # Route-level pages
├── context/      # React context (coming soon modal, etc.)
└── main.tsx      # App entry point
```

## Deployment

Deployed on Vercel. Push to `master` to ship.
