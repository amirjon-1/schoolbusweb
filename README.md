# SchoolBus — Landing Page

A one-page marketing site for the college-only rideshare app SchoolBus. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Logo

**Where to add the logo in the codebase**

Place your SchoolBus logo file here:

- **`public/sblogo.png`**

The Navbar and Footer reference it as `/sblogo.png`. If your file has a different name (e.g. `sblogo_1-814536dd-1b6a-437b-9cad-94b981685676.png`), either:

1. Rename it to `sblogo.png` and put it in `public/`, or  
2. Copy it into `public/` and update the `src` in:
   - `src/components/Navbar.tsx` (line with `src="/sblogo.png"`)
   - `src/components/Footer.tsx` (same)

Example: if you keep the full filename, use `src="/sblogo_1-814536dd-1b6a-437b-9cad-94b981685676.png"` in both components.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react
