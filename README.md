# DRomero Monorepo

Clean-slate baseline for the architecture firm modernization demo.

## Layout

- `apps/web`: Fresh React website scaffold.

## Prerequisites

- Node.js 20+
- npm 10+
- Docker Desktop

## Install

```bash
npm install
```

## Run in Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Docker

Build image:

```bash
npm run docker:build
```

Run container:

```bash
npm run docker:up
```

Stop container:

```bash
npm run docker:down
```

Default URL: http://localhost:8080
Health: http://localhost:8080/health
