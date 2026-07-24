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

## Hostinger VPS (Ubuntu 24 + Nginx) Static Deploy

This app can be deployed as a static informational site without Docker.

### 1) Build locally

```bash
npm ci
npm run build
```

Build output is generated in `apps/web/dist`.

### 2) Copy build to VPS

Example using `scp`:

```bash
scp -r apps/web/dist/* user@your-vps-ip:/var/www/dromero-web/
```

### 3) Install and configure Nginx on Ubuntu 24

```bash
sudo apt update
sudo apt install -y nginx
sudo mkdir -p /var/www/dromero-web
sudo chown -R www-data:www-data /var/www/dromero-web
```

Use [deployment/nginx/dromero.hostinger.conf](deployment/nginx/dromero.hostinger.conf) as your site config:

```bash
sudo cp deployment/nginx/dromero.hostinger.conf /etc/nginx/sites-available/dromero-web
sudo ln -s /etc/nginx/sites-available/dromero-web /etc/nginx/sites-enabled/dromero-web
sudo nginx -t
sudo systemctl reload nginx
```

### 4) TLS (recommended)

If your domain points to the VPS:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## DevOps Workflow Design (Branch-Based Promotion)

This repository uses branch promotion by environment:

- `test` branch deploys to the Test environment.
- `qa` branch is reserved for QA deployments (next phase).
- `main` branch is reserved for Production deployments (next phase).

Promotion flow:

1. Merge feature work into `test` and validate deployment.
2. Promote via PR from `test` to `qa` after validation.
3. Promote via PR from `qa` to `main` for production release.

### Implemented Incremental Phase

1. CI hardening (implemented):
	- Quality gates: lint, tests with coverage threshold, build, audit.
	- PR dependency risk check.
	- Build and coverage artifacts retained from CI runs.
2. CD test-only (implemented):
	- Trigger on push to `test` (and manual dispatch).
	- Re-verification before deploy.
	- SSH deployment to Ubuntu 24 test server.
	- Health check validation and rollback on failure.

### Required GitHub Configuration For Test CD

Create GitHub Environment `test` and set:

- Secrets:
	- `TEST_SSH_HOST`
	- `TEST_SSH_USER`
	- `TEST_SSH_PRIVATE_KEY`
- Variables:
	- `TEST_SSH_PORT` (default `22`)
	- `TEST_DEPLOY_ROOT` (default `/var/www/dromero-web`)
	- `TEST_REMOTE_HEALTHCHECK_URL` (default `http://localhost/health`, executed on the test host over SSH)
	- `TEST_HEALTHCHECK_URL` (optional external URL, validated from GitHub runner)
	- `TEST_ENV_URL` (optional, for environment link)

Test server requirements:

- `rsync` and `nginx` installed.
- Deploy user has write access to deploy path.
- Deploy user can run `sudo nginx -t` and `sudo systemctl reload nginx`.

Planned next incremental phase:

- Add CD for `qa` and `main` with manual approvals and artifact promotion across environments.

## Landing Page Plan (Single Reference Scope)

This project is now scoped to a single visual target only:

- Reference image: Dribbble shot `24651856` (Architecture Agency Landing Page).
- Scope freeze: one informational landing page, no additional pages or flows.
- Asset rule: do not add image files; use black media placeholders for all visual blocks.

### Recommendations Applied

- Preserve semantic structure (`main`, `section`, headings, lists, `button` labels).
- Keep copy concise and aligned to the reference composition.
- Ensure responsive behavior for desktop and mobile without changing layout intent.
- Keep accessibility basics in place (landmarks, readable contrast, keyboard-focusable controls).
- Maintain security and quality automation already set in CI (lint/test/build/audit).
- Keep deployment target unchanged: static site on Hostinger VPS Ubuntu 24 with Nginx.

### Strict Gate Workflow

Each gate must follow the same loop before moving forward:

1. Implement only the gate delta.
2. Run `npm run test --silent`.
3. Run `npm run build --silent`.
4. Perform visual similarity review against the reference image.
5. Iterate until compliant.
6. Move to next gate only after explicit approval.

### Gate Definitions

1. Gate 0 - Scope lock:
	Lock the implementation to the single reference image and freeze non-required features.
2. Gate 1 - Hero block:
	Navigation, headline, CTA, project badge, and right-side feature card (black placeholders only).
3. Gate 2 - Overview block:
	Thumbnail rail, overview text, KPI stats, rating/review controls.
4. Gate 3 - Recommendation block:
	Left media card and right recommendation list hierarchy.
5. Gate 4 - Brand strip:
	Bottom logo/brand row using typographic placeholders only (no image assets).
6. Gate 5 - Responsive and spacing parity:
	Match section proportions, rhythm, and breakpoints to the reference intent.
7. Gate 6 - Release readiness:
	Final pass for tests/build/deploy checklist and Nginx static deployment validation.

### Done Criteria

- All gates completed and approved in sequence.
- Tests pass and production build succeeds.
- Visual composition remains faithful to the single reference image.
- No extra pages, no extra components, and no image files added.
