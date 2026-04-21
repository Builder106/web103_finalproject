# Study Sprint Tracker

CodePath WEB103 Final Project

Designed and developed by: Olayinka Vaughan, Osmani Hernandez and Adit Syed Afnan

🔗 Link to deployed app:

## About

### Description and Purpose

Study Sprint Tracker is a web app for students to plan, track, and visualize focused study sessions by goal. Users can create study goals, log timed sessions, and review progress in a dashboard without losing context.

### Inspiration

I wanted a simple app that supports deliberate practice and productivity in student life. The concept is inspired by Pomodoro habits and task-focused learning; it should help learners measure progress and feel momentum.

## Tech Stack

Frontend: React 18 + TypeScript + Vite + TailwindCSS v4 + React Router 7

Backend: Express.js + PostgreSQL (node-postgres), JWT auth with bcrypt

Deployment: Render (static site + web service + managed Postgres)

## Project Layout

```
web103_finalproject/
├── StudySprint/          # React + Vite frontend
├── server/              # Express + PostgreSQL API
├── planning/            # User stories, ERD, wireframes
├── milestones/          # CodePath milestone docs
├── render.yaml          # Render deployment blueprint
└── README.md
```

## Features

### Baseline Features

- Study goals CRUD workflow — create, read, update, delete (StudySprint/backend/routes/goals.js)
- Dashboard with progress bars per goal and aggregate stats (StudySprint/frontend/app/components/Dashboard.tsx)
- Goal detail view with recent sessions and remaining target time (StudySprint/frontend/app/components/GoalDetail.tsx)
- Timer controls that save elapsed time as a session on stop (StudySprint/frontend/app/components/GoalDetail.tsx)
- Auth flow (register/login/JWT/logout) with redirect to dashboard and protected routes (StudySprint/backend/routes/auth.js, StudySprint/frontend/lib/auth.tsx, StudySprint/frontend/app/components/shared/ProtectedRoute.tsx)
- React Router dynamic routes: `/`, `/register`, `/dashboard`, `/goals/new`, `/goal/:id`, `/goal/:id/details`
- Reusable component structure: `components/shared/` holds TopNav, StatusBadge, ProgressBar, SessionModal, ProtectedRoute
- Render deployment via `render.yaml`

### Custom Features

- Starter goals and subject tags auto-generated on registration (StudySprint/backend/lib/starterData.js)
- Session add/edit modal that works inline without navigation (StudySprint/frontend/app/components/shared/SessionModal.tsx)
- Slide-out details panel for goal metadata and edit/pause/delete (StudySprint/frontend/app/components/GoalDetailWithPanel.tsx)

### Stretch Features

- Session duration validation (client + API reject non-positive durations)
- Goal target-hours validation (client + API reject non-positive targets)

## Local Development

### Prerequisites

- Node.js 18+
- PostgreSQL 14+ running locally

### Setup

```bash
# 1) Create a local Postgres database
createdb study_sprint

# 2) Install frontend and backend dependencies
cd StudySprint
npm install                # frontend deps
cd backend
npm install                # backend deps
cd ..

# 3) Configure environment variables
cp .env.example .env                    # frontend: VITE_API_URL=http://localhost:4000
cp backend/.env.example backend/.env    # backend: edit DATABASE_URL and JWT_SECRET

# 4) Migrate the database
cd backend
npm run migrate            # applies sql/schema.sql
cd ..

# 5) (Optional) Seed demo account
cd backend
npm run seed               # creates demo@example.com / demo123
cd ..

# 6) Start both servers in separate terminals

# Terminal 1: backend
cd StudySprint/backend
npm run dev                # starts on :4000

# Terminal 2: frontend
cd StudySprint
npm run dev                # starts on :5173

## Demo Account

After seeding (step 5 above), log in with:
- **Email**: demo@example.com
- **Password**: demo123

The demo account includes two starter goals and five subject tags.
```

Open http://localhost:5173. Create an account — the API will seed two starter goals and a set of subject tags for the new user.

### API Routes

```
POST   /api/auth/register        { email, password }
POST   /api/auth/login           { email, password }
GET    /api/auth/me

GET    /api/goals
POST   /api/goals
GET    /api/goals/:id
PUT    /api/goals/:id
DELETE /api/goals/:id

GET    /api/goals/:goalId/sessions
POST   /api/goals/:goalId/sessions
PUT    /api/sessions/:id
DELETE /api/sessions/:id

GET    /api/subjects
POST   /api/subjects
```

All routes except `/api/auth/register` and `/api/auth/login` require `Authorization: Bearer <jwt>`.

## Deploying to Render

The repo ships a `render.yaml` blueprint that provisions three resources:

1. `study-sprint-db` — managed PostgreSQL
2. `study-sprint-api` — Node web service from `server/`
3. `study-sprint-web` — static site from `StudySprint/`

Steps:

1. Push this repo to GitHub.
2. In Render, **New → Blueprint → point at this repo**. Render reads `render.yaml` and creates the three services.
3. After the API deploys, copy its URL and set it as `VITE_API_URL` on the web service (Environment tab), then redeploy the static site.
4. Set `CLIENT_ORIGIN` on the API to the web service URL so CORS accepts requests.
5. The build command runs `npm run migrate`, which applies `sql/schema.sql` idempotently on every deploy.

## Installation Instructions

See Local Development above.
