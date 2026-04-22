# Demo Script — Milestone 3 (Unit 7)

**Project:** Study Sprint Tracker  
**Repo:** https://github.com/Builder106/web103_finalproject  
**Demo account:** demo@example.com / demo123

---

## 0. Setup (before recording)

- Start both services: `cd StudySprint && npm run dev` (runs frontend + backend concurrently)
- Or open the deployed Render URL (update README once live)
- Open browser in a fresh incognito window so no session is cached

---

## 1. Auth flow and redirect — Issue #7

**What to show:** Registration redirects to dashboard; login is protected.

1. Navigate to the root (`/`). You land on the **Landing** page with a sign-in form.
2. Click **Create account** → go to `/register`.
3. Fill in a new email and password (min 6 characters) and submit.
4. The app immediately redirects to `/dashboard` — no extra step needed.
5. Click the logo to go back to `/`. Because you are already logged in, the app redirects straight to `/dashboard` again, showing the route is protected.

---

## 2. Starter goals and subject tags — Issue #10

**What to show:** New users get pre-populated goals automatically.

1. Still on the dashboard from step 1 — point out that the user has never manually created anything yet.
2. The dashboard already shows **three starter goals** (e.g. "Intro to CS Review", "Linear Algebra Practice", "Essay Drafts") each with a subject tag.
3. This data was generated server-side at registration time with no extra action from the user (see `server/lib/starterData.js`).

---

## 3. Dashboard with progress bars — Issue #2

**What to show:** Goal cards, progress visualization, and aggregate stats.

1. Point out the **Active** count and **Hours Logged** totals in the top-right header area.
2. Each goal card shows:
   - Title and status badge (Active / Paused / Completed)
   - Target hours vs logged hours
   - A progress bar that fills proportionally
   - Percentage label
3. Click a goal card to navigate to its detail page.

---

## 4. Create a new goal — Issue #1 (CRUD: Create)

**What to show:** The full new-goal form with validation.

1. From the dashboard, click the **+** button in the top-right nav.
2. Fill in the form:
   - **Title:** "Data Structures Final Prep"
   - **Description:** "Cover trees, graphs, and dynamic programming"
   - **Target hours:** 20
   - **Target date:** (pick a date a few weeks out)
   - **Subjects:** "CS, Algorithms"
3. Click **Create goal** — you land on the new goal's detail page.
4. Go back to the dashboard and confirm the new goal appears at the top of the list.

---

## 5. Goal detail view with recent sessions — Issue #3

**What to show:** Dynamic route, goal metadata, session history.

1. Click into a goal that already has sessions (one of the starter goals).
2. Point out the URL — `/goal/:id` — a dynamic React Router route.
3. The right column shows:
   - **Target / Logged / Remaining** hours computed from the database
   - An **Overall Progress** bar
   - A **Recent Sessions** list with date, duration, and notes for each entry

---

## 6. Timer controls and session save flow — Issue #4

**What to show:** Start/pause timer, stop, and save as a session.

1. On the goal detail page, click **Start Timer** — the large clock starts counting up.
2. Click **Pause** — the clock freezes.
3. Click **Start Timer** again — resumes from where it paused.
4. After a few seconds, click **Log session** to open the session modal.

---

## 7. Session add/edit modal — Issue #11

**What to show:** Inline modal saves without page navigation.

1. The **SessionModal** opens over the current page.
2. The **Duration** field is pre-filled with the elapsed minutes from the timer.
3. Add notes: "Reviewed binary search trees — need more practice on graphs."
4. Click **Save session** — the modal closes, the session appears in **Recent Sessions** without a page reload, and the progress bar updates.
5. Click the **pencil** icon on the new session to re-open the modal in edit mode.
6. Change the notes and save — the list updates in place.

---

## 8. Edit and delete a session — Issue #1 (CRUD: Update / Delete)

**What to show:** Full session CRUD inline.

1. Click the **pencil** icon on any session → modal opens pre-filled.
2. Change the duration or notes and save.
3. Click the **trash** icon on a different session → confirm the dialog → session is removed and the progress bar adjusts.

---

## 9. Edit and delete a goal — Issue #1 (CRUD: Update / Delete)

**What to show:** Goal-level CRUD via the Details panel.

1. From the goal detail page, click **Details** in the top-right nav → the slide-out panel opens (Issue #12, shipped in this milestone as a custom feature).
2. Click **Edit** → change the title or target hours and save.
3. Confirm the updated values reflect in the header and stats.
4. (Optional) Click **Delete goal** and confirm — you are returned to the dashboard and the goal is gone.

---

## 10. React Router routes — Issue #6

**What to show:** All dynamic routes work and navigation is smooth.

| Route | Component |
|---|---|
| `/` | Landing (login) |
| `/register` | Register |
| `/dashboard` | Dashboard |
| `/goals/new` | NewGoal form |
| `/goal/:id` | GoalDetail (timer + sessions) |
| `/goal/:id/details` | GoalDetailWithPanel (slide-out) |

Navigate through each route and show the URL updating in the browser bar. Attempting to open `/dashboard` while logged out should redirect to `/`.

---

## 11. Reusable component structure — Issue #8

**What to show:** Shared component library (code walkthrough, 60 seconds).

Open `StudySprint/frontend/app/components/shared/` and point out:

- `TopNav.tsx` — used on every authenticated page
- `ProgressBar.tsx` — reused in Dashboard and GoalDetail
- `StatusBadge.tsx` — reused in Dashboard and GoalDetailWithPanel
- `SessionModal.tsx` — reused for both add and edit flows
- `ProtectedRoute.tsx` — wraps all authenticated routes

---

## 12. Deployment — Issue #9

**What to show:** Live Render deployment.

1. Open `render.yaml` in the editor — point out the three services defined: static site (frontend), web service (backend), and managed PostgreSQL.
2. Navigate to the live Render URL (add once deployed).
3. Log in with **demo@example.com / demo123** to show the seeded demo account works in production.

---

## Wrap-up

All 11 issues in **Milestone 3 - Unit 7** are closed:

| # | Feature |
|---|---|
| #1 | Study goals CRUD workflow |
| #2 | Dashboard with progress bars |
| #3 | Goal detail view with recent sessions |
| #4 | Timer controls and session save flow |
| #5 | Reset database endpoint |
| #6 | React Router dynamic routes |
| #7 | Auth flow with redirect |
| #8 | Reusable component structure |
| #9 | Deploy to Render |
| #10 | Starter goal and tag generation |
| #11 | Session add/edit modal |
