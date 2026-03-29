# Next.js Dashboard

A dashboard application built with the [Next.js App Router](https://nextjs.org/docs/app). It follows the [Next.js Learn](https://nextjs.org/learn) dashboard course: financial overview, invoice and customer management, search, pagination, and authentication-ready wiring.

## Features

- **Dashboard** — Revenue chart, latest invoices, and summary cards
- **Invoices** — List, create, edit, status, search, and URL-based pagination
- **Customers** — Table view
- **PostgreSQL** — Data via `postgres` (SQL)
- **Auth** — NextAuth v5 (beta) configuration (`AUTH_SECRET`, `AUTH_URL`)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostgreSQL](https://www.postgresql.org/) + [`postgres`](https://github.com/porsager/postgres)
- [NextAuth.js](https://next-auth.js.org/) · [Zod](https://zod.dev/) · [bcrypt](https://www.npmjs.com/package/bcrypt)

## Prerequisites

- Node.js 18+
- A running PostgreSQL instance
- `pnpm`, `npm`, or `yarn` (this repo includes `pnpm`-specific settings in `package.json`)

## Getting started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Environment variables

Copy the example env file and adjust values for your machine:

```bash
cp .env.example .env
```

Set at minimum:

| Variable        | Description |
|----------------|-------------|
| `POSTGRES_URL` | PostgreSQL connection string (e.g. `postgresql://USER:PASSWORD@localhost:5432/DATABASE`) |
| `AUTH_SECRET`  | Secret for NextAuth (e.g. `openssl rand -base64 32`) |
| `AUTH_URL`     | App origin, e.g. `http://localhost:3000` for local dev |

### 3. Seed the database

With PostgreSQL reachable and `POSTGRES_URL` set, start the dev server and call the seed route once:

```bash
pnpm dev
```

In the browser or with curl:

```bash
curl http://localhost:3000/seed
```

You should see a JSON success message when tables are created and sample data is inserted.

### 4. Run the app

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description |
|----------------|-------------|
| `pnpm dev`     | Dev server with [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack) |
| `pnpm build`   | Production build |
| `pnpm start`   | Start production server (after `build`) |

## Project layout (high level)

- `app/` — Routes, layouts, API/route handlers, and UI composition
- `app/ui/` — Presentational components (dashboard, invoices, customers, shared UI)
- `app/lib/` — Data access, types, and helpers

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Next.js Learn — Dashboard course](https://nextjs.org/learn)

This project began as the official Next.js App Router course starter; the README above describes how to run and extend the app locally.
