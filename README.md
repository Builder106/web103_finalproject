# Study Sprint Tracker

CodePath WEB103 Final Project

Designed and developed by: Olayinka Vaughan, Osmani Hernandez and Adit Syed Afnan

🔗 Link to deployed app: https://studysprint-frontend.onrender.com/

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

### ✅ Baseline Features

- Study goals CRUD — create, read, update (PUT & PATCH), delete (StudySprint/backend/routes/goals.js)
- Study sessions CRUD nested under goals (StudySprint/backend/routes/sessions.js)
- Dashboard with progress bars per goal and aggregate stats (StudySprint/frontend/app/components/Dashboard.tsx)
- Goal detail view with recent sessions, remaining target time, and a slide-out metadata panel (StudySprint/frontend/app/components/GoalDetailWithPanel.tsx)
- Timer controls that save elapsed time as a session on stop (StudySprint/frontend/app/components/shared/TimerCard.tsx)
- Email/password auth (bcrypt + JWT) with protected routes (StudySprint/backend/routes/auth.js, StudySprint/frontend/lib/auth.tsx, StudySprint/frontend/app/components/shared/ProtectedRoute.tsx)
- React Router dynamic routes: `/`, `/register`, `/dashboard`, `/goals/new`, `/goal/:id`, `/analytics`, `/garden`, `/community`, `/rooms/:slug`, `/u/:username`
- Hierarchical components: pages in `app/components/`, reusable primitives in `app/components/shared/`
- One-to-many (users → study_goals, study_goals → study_sessions) and many-to-many with join table (study_goals ↔ subjects via goal_subjects)
- Account reset endpoint that wipes user data and re-seeds starters (StudySprint/backend/routes/admin.js)
- Render deployment via `render.yaml` with `_redirects` SPA fallback

### ✅ Custom Features

- Starter goals and subject tags auto-generated on registration (StudySprint/backend/lib/starterData.js)
- Session add/edit modal works inline without navigation (StudySprint/frontend/app/components/shared/SessionModal.tsx)
- Slide-out details panel for goal metadata and edit/pause/delete (StudySprint/frontend/app/components/GoalDetailWithPanel.tsx)
- Goal filtering and sorting on the dashboard (by status, recent/logged/remaining/progress)
- Server-side validation rejects non-positive goal hours and session durations with inline aria-described errors
- Custom context menus (right-click) on goal rows and session rows via `@radix-ui/react-context-menu`
- Non-RESTful routes: `/api/analytics/summary`, `/api/gamification/profile`, `/api/syllabus/parse`, `/api/integrations/google/*`, `/api/rooms/:slug/join`, `/api/rooms/:slug/leave`, `/api/admin/reset`
- One-to-one relationship: `users` ↔ `user_google_tokens`
- Pomodoro timer mode with automatic break rotation (25/5/15) and stopwatch fallback (StudySprint/frontend/app/components/shared/TimerCard.tsx)
- Session quality rating with spaced-repetition `next_review_at` computed server-side (SM-2 lite: 1/2/4/7/14 days)
- Focus tools panel: algorithmic white/pink/brown ambient noise via Web Audio API + live-preview markdown notes auto-saved to localStorage
- Analytics dashboard: GitHub-style 52-week contribution heatmap (hand-rolled SVG), hour-of-day & day-of-week charts, subject donut (recharts)
- Gamification: derived XP/level from sessions + quality, streaks, 10 achievements, SVG virtual plant with six growth stages
- AI syllabus parser that extracts study goals from pasted text or uploaded PDF via OpenRouter's free meta-model; user reviews and approves before goals are saved
- Google Calendar OAuth integration: connect account, export sessions as calendar events (with update-on-resync, not duplicates)
- Social features: public read-only profiles at `/u/:username`, weekly leaderboard, study rooms with passcode auth and 48h activity polling

### ✅ Stretch Features

- Protected pages require login (dashboard, goal detail, analytics, garden, community, rooms)
- Loading spinner on async page loads (StudySprint/frontend/app/components/shared/Spinner.tsx)
- Form submission buttons disable during pending requests (NewGoal, SessionModal, SyllabusImport, Community profile editor, Create room, Join room)
- Inline validation errors prevent invalid POST/PATCH requests from being sent
- Toast messages (sonner) deliver success, error, and neutral feedback globally
- Dark/light theme toggle via `next-themes`

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
# Auth
POST   /api/auth/register               { email, password }
POST   /api/auth/login                  { email, password }
GET    /api/auth/me

# Goals (PATCH also accepted as alias for PUT)
GET    /api/goals
POST   /api/goals
GET    /api/goals/:id
PUT    /api/goals/:id
PATCH  /api/goals/:id
DELETE /api/goals/:id

# Sessions (PATCH also accepted)
GET    /api/goals/:goalId/sessions
POST   /api/goals/:goalId/sessions
PUT    /api/sessions/:id
PATCH  /api/sessions/:id
DELETE /api/sessions/:id

# Subjects
GET    /api/subjects
POST   /api/subjects

# Analytics & gamification
GET    /api/analytics/summary           # daily, hourly, weekday, subjects, streaks
GET    /api/gamification/profile        # XP, level, achievements, plant stage

# AI syllabus parser (multipart: pdf or text)
POST   /api/syllabus/parse

# Google Calendar integration
GET    /api/integrations/google/status
POST   /api/integrations/google/auth-url
GET    /api/integrations/google/callback
DELETE /api/integrations/google
POST   /api/integrations/google/export-session/:id

# Social
GET    /api/profiles/me
PUT    /api/profiles/me
GET    /api/profiles/:username          # public
GET    /api/leaderboard
GET    /api/rooms
POST   /api/rooms
GET    /api/rooms/:slug
POST   /api/rooms/:slug/join
POST   /api/rooms/:slug/leave

# Admin
POST   /api/admin/reset                 # reset caller's data to starter state
```

All routes except `/api/auth/register`, `/api/auth/login`, `/api/profiles/:username`, and the OAuth callback require `Authorization: Bearer <jwt>`.

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
