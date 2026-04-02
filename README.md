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

Frontend: React

Backend: Express, PostgreSQL

## Features

### Baseline Features

- Full-stack app: Express backend + React frontend
- PostgreSQL schema with one-to-many and many-to-many
- API RESTful CRUD for Study Goals
- Reset DB endpoint
- React Router dynamic routes (home, goal detail, session log)
- Same-page interaction: start/stop timer + add log without navigation
- Frontend redirect (e.g., login redirects to dashboard)
- Component hierarchy: pages/components and container/presenter design
- Deployed on Render with all visible features working

### Custom Features

- Auto-generate starter data when a new user creates an account (starter goals + subject tags)
- Modal for adding/editing study sessions (covers current page content), plus a slide-out details panel

### Stretch Features (Optional)

- Validation: session duration must be > 0 and goal target hours must be positive before DB update
- Filter/sort goals by status, time logged, or subject

## Installation Instructions

1. Clone repo
2. Install client and server dependencies
3. Set up the PostgreSQL database
