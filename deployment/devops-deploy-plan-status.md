# DevOps Deploy Plan - State Snapshot

_Last updated: 2026-05-20_

## Current State

### Completed
- CI hardening implemented in `.github/workflows/ci.yml`:
  - Strict lint gate (`--max-warnings=0`)
  - Test coverage gate
  - Build gate
  - Audit gate
  - Dependency review on PRs
  - Build/coverage artifact upload
- Test environment CD implemented in `.github/workflows/cd-test.yml`:
  - Pre-deploy verify job
  - SSH + rsync deployment
  - Nginx config validation (`nginx -t`) and reload
  - Remote health check
  - Rollback snapshot on failure
- Quality scripts/config wired:
  - `apps/web/package.json`
  - `apps/web/vite.config.js`
  - `package.json`
- Plan/design documentation updated in `README.md`.

### Pending
- QA deployment workflow (GitHub Actions) not implemented yet.
- Prod deployment workflow (GitHub Actions) not implemented yet.
- GitHub Environments approvals/protection rules and full secrets setup.
- QA and Prod server provisioning/readiness.

## Branch and Environment Workflow

### 1) Test Workflow
1. Developer opens PR into `test`.
2. CI runs quality gates (lint, coverage, build, audit).
3. Merge to `test` triggers Test CD.
4. Pipeline verifies again and deploys to Test server.
5. Nginx validation + remote health checks run.
6. If failure occurs, rollback snapshot is restored.
7. Team executes smoke validation in Test.

### 2) QA Workflow (Planned)
1. Promote validated code from `test` into `qa` via PR.
2. CI runs quality gates again.
3. Manual approval gate (release owner/QA lead).
4. Deploy to QA server via QA CD workflow (to be created).
5. Run QA smoke/regression/UAT checks.
6. Mark as release candidate or return to `test`.

### 3) Prod Workflow (Planned)
1. Promote release candidate from `qa` into `main` via PR.
2. CI runs quality gates again.
3. Manual production approval gate (change control/release manager).
4. Deploy to Production server via Prod CD workflow (to be created).
5. Run post-deploy health and smoke checks.
6. Roll back immediately on critical failure.

## Gate Tracking

- Gate A: CI quality hardening (lint, coverage, build, audit) -> **Completed**
- Gate B: Test auto-deploy with rollback -> **Completed**
- Gate C: QA deploy pipeline -> **Pending**
- Gate D: Prod deploy pipeline -> **Pending**
- Gate E: GitHub environment approvals/branch protections -> **Pending**
- Gate F: QA/Prod infra + secrets finalized -> **Pending**

## Next Suggested Execution Order
1. Implement QA workflow file with environment approvals.
2. Implement Prod workflow file with stricter approval and rollback controls.
3. Finalize GitHub environment settings and server secrets.
