# Milestone 4

This document should be completed and submitted during **Unit 8** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

- [ ] Update the completion percentage of each GitHub Milestone. The milestone for this unit (Milestone 4 - Unit 8) should be 100% completed when you submit for full points.
- [x] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of the feature's name.
  - [ ] Under each feature you have completed, include a GIF showing feature functionality.
- [x] In this document, complete all five questions in the **Reflection** section below.

## Reflection

### 1. What went well during this unit?

We brought the baseline feature set together into a working end-to-end app. Register/login via JWT, full CRUD for study goals and study sessions, the dashboard with aggregate stats, and the goal detail view with a timer that stops and logs a session all landed this unit. We also got our first deploy up on Render using the `render.yaml` blueprint — Postgres, API, and static site all provisioned from the repo.

### 2. What were some challenges your group faced in this unit?

The biggest pain was untangling the nested Git submodule structure we'd inherited — history rewrites and parent-repo pointer bumps took several iterations to get right without losing work. We also had to keep the timer state consistent between the goal detail page and the database: the elapsed counter, the stop-and-log flow, and the `logged_minutes` aggregate on the goal all had to stay in sync across a refresh.

### Did you finish all of your tasks in your sprint plan for this week? If you did not finish all of the planned tasks, how would you prioritize the remaining tasks on your list?

We finished the baseline CRUD, auth, dashboard, goal detail with timer, and the Render deployment that we planned for Milestone 4. Polish items we chose to defer to Milestone 5: inline validation errors (instead of browser alerts), loading spinners, filter/sort on the dashboard, and the slide-out details panel. Priority for the remaining week was going to be: fix validation UX first (it's a bug surface), then dashboard polish, then the bigger custom/stretch features.

### Which features and user stories would you consider "at risk"? How will you change your plan if those items remain "at risk"?

Our more ambitious custom/stretch features — the AI syllabus parser, Google Calendar integration, gamification/virtual plant, and social features (profiles/leaderboard/study rooms) — were squarely at risk entering Milestone 5 because we hadn't started any of them. The fallback plan was to pick two or three and ship them well rather than half-build all five. (In practice we shipped all of them during Milestone 5, but only because we committed the week to it.)

### 5. What additional support will you need in upcoming units as you continue to work on your final project?

Guidance on OAuth setup for third-party APIs (we ended up needing this for Google Calendar), and Render troubleshooting — the static-site SPA fallback surfaced as an issue later and wasn't obvious from the getting-started docs. A schema review before locking the database would have been useful too, since we ended up adding columns during Milestone 5 that could have been part of the original design.
