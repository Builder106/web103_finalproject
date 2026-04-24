# Milestone 5

This document should be completed and submitted during **Unit 9** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

- [x] Deploy your project on Render
  - [x] In `readme.md`, add the link to your deployed project
- [ ] Update the status of issues in your project board as you complete them
- [x] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of their title
  - [ ] Under each feature you have completed, **include a GIF** showing feature functionality
- [x] In this document, complete the **Reflection** section below
- [ ] 🚩🚩🚩**Complete the Final Project Feature Checklist section below**, detailing each feature you completed in the project (ONLY include features you implemented, not features you planned)
- [ ] 🚩🚩🚩**Record a GIF showing a complete run-through of your app** that displays all the components included in the **Final Project Feature Checklist** below
  - [ ] Include this GIF in the **Final Demo GIF** section below

## Final Project Feature Checklist

Complete the checklist below detailing each baseline, custom, and stretch feature you completed in your project. This checklist will help graders look for each feature in the GIF you submit.

### Baseline Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] The project includes an Express backend app and a React frontend app
- [x] The project includes these backend-specific features:
  - [x] At least one of each of the following database relationships in Postgres
    - [x] one-to-many *(users → study_goals; study_goals → study_sessions)*
    - [x] many-to-many with a join table *(study_goals ↔ subjects via goal_subjects)*
  - [x] A well-designed RESTful API that:
    - [x] supports all four main request types for a single entity (ex. tasks in a to-do list app): GET, POST, PATCH, and DELETE *(study_goals and study_sessions both accept GET/POST/PATCH/DELETE; PUT is also supported as an alias for PATCH)*
      - [x] the user can **view** items, such as tasks *(GET /api/goals, GET /api/goals/:id)*
      - [x] the user can **create** a new item, such as a task *(POST /api/goals, POST /api/goals/:goalId/sessions)*
      - [x] the user can **update** an existing item by changing some or all of its values, such as changing the title of task *(PATCH /api/goals/:id, PATCH /api/sessions/:id)*
      - [x] the user can **delete** an existing item, such as a task *(DELETE /api/goals/:id, DELETE /api/sessions/:id)*
    - [x] Routes follow proper naming conventions
  - [x] The web app includes the ability to reset the database to its default state *(POST /api/admin/reset — deletes the caller's goals/sessions/rooms/Google tokens and re-seeds the starter goals)*
- [x] The project includes these frontend-specific features:
  - [x] At least one redirection, where users are able to navigate to a new page with a new URL within the app *(e.g. landing → dashboard after login; /goal/:id/details → /goal/:id legacy redirect)*
  - [x] At least one interaction that the user can initiate and complete on the same page without navigating to a new page *(timer start/stop, log session modal, quality rating, right-click context menus, focus tools panel)*
  - [x] Dynamic frontend routes created with React Router *(/goal/:id, /u/:username, /rooms/:slug)*
  - [x] Hierarchically designed React components
    - [x] Components broken down into categories, including Page and Component types *(pages in `app/components/`, reusable primitives in `app/components/shared/`)*
    - [x] Corresponding container components and presenter components as appropriate *(e.g. GoalDetailWithPanel container drives TimerCard, FocusTools, SessionModal, GoogleCalendarBadge presenters)*
- [x] The project includes dynamic routes for both frontend and backend apps
- [x] The project is deployed on Render with all pages and features that are visible to the user are working as intended *(https://studysprint-frontend.onrender.com/)*

### Custom Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] The project gracefully handles errors *(try/catch on every mutation, ApiError class, inline validation, sonner toasts for user-facing failures)*
- [x] The project includes a one-to-one database relationship *(users ↔ user_google_tokens)*
- [x] The project includes a slide-out pane or modal as appropriate for your use case that pops up and covers the page content without navigating away from the current page *(goal details slide-out panel, log-session modal, syllabus import modal, profile editor modal, create room modal)*
- [ ] The project includes a unique field within the join table
- [x] The project includes a custom non-RESTful route with corresponding controller actions *(POST /api/syllabus/parse, GET /api/analytics/summary, GET /api/gamification/profile, POST /api/integrations/google/export-session/:id, POST /api/rooms/:slug/join, POST /api/admin/reset)*
- [x] The user can filter or sort items based on particular criteria as appropriate for your use case *(dashboard: filter by status All/Active/Paused/Completed, sort by recent/most-logged/least-remaining/most-progress)*
- [x] Data is automatically generated in response to a certain event or user action. Examples include generating a default inventory for a new user starting a game or creating a starter set of tasks for a user creating a new task app account *(on register: two starter goals, five subject tags; on session save with quality: next_review_at computed server-side)*
- [x] Data submitted via a POST or PATCH request is validated before the database is updated (e.g. validating that an event is in the future before allowing a new event to be created) *(target_hours > 0, duration_minutes > 0, status ∈ {Active,Paused,Completed}, quality 1-5, username regex, goal ownership check on every session mutation)*
  - [x] *To receive full credit, please be sure to demonstrate in your walkthrough that for certain inputs, the item will NOT be successfully created or updated.* *(set target hours to 0 on /goals/new — inline error blocks submit; backend also rejects with 400)*

### Stretch Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] A subset of pages require the user to log in before accessing the content *(`<ProtectedRoute>` guards /dashboard, /goal/:id, /analytics, /garden, /community, /rooms/:slug)*
  - [ ] Users can log in and log out via GitHub OAuth with Passport.js *(email/password + JWT used instead; GitHub OAuth not implemented)*
- [ ] Restrict available user options dynamically, such as restricting available purchases based on a user's currency
- [x] Show a spinner while a page or page element is loading *(`Spinner` component used across dashboard, goal detail, analytics, garden, study rooms, protected route)*
- [x] Disable buttons and inputs during the form submission process *(NewGoal, SessionModal, SyllabusImport, ProfileEditor, CreateRoom, StudyRoom Join)*
- [ ] Disable buttons after they have been clicked
  - *At least 75% of buttons in your app must exhibit this behavior to receive full credit*
- [ ] Users can upload images to the app and have them be stored on a cloud service
  - *A user profile picture does **NOT** count for this rubric item **only if** the app also includes "Login via GitHub" functionality.*
  - *Adding a photo via a URL does **NOT** count for this rubric item (for example, if the user provides a URL with an image to attach it to the post).*
  - *Selecting a photo from a list of provided photos does **NOT** count for this rubric item.*
- [x] 🍞 [Toast messages](https://www.patternfly.org/v3/pattern-library/communication/toast-notifications/index.html) deliver simple feedback in response to user events *(sonner `<Toaster />` mounted globally; used for goal status changes, deletions, calendar connect, syllabus import, and all mutation errors)*

## Final Demo GIF

🔗 [Here's a GIF walkthrough of the final project](👉🏾👉🏾👉🏾 your link here)

## Reflection

### 1. What went well during this unit?

We shipped every feature on our issue list — eleven GitHub issues closed this unit, spanning bug fixes (inline validation on goal hours and session duration), UI polish (filter/sort on the dashboard, slide-out details panel, context menus on goal and session rows), and substantial new features (Pomodoro timer with spaced-repetition quality ratings, ambient noise generated in-browser via the Web Audio API plus a live markdown notes pad, an analytics dashboard with a hand-rolled 52-week contribution heatmap, AI syllabus parsing via OpenRouter's free meta-model, Google Calendar OAuth with per-session export, gamification with streaks/XP/level/achievements and a virtual plant grown through six SVG stages, and social features with public profiles, a weekly leaderboard, and study rooms with a 48-hour activity feed). Closing issues via `Closes #N` trailers kept the GitHub project board accurate without extra ceremony, and the per-feature commits made it easy to review what shipped when.

### 2. What were some challenges your group faced in this unit?

Real-world integration issues that only appear on the deploy. OpenRouter's free-tier Llama model hit upstream rate limits mid-demo, which we worked around by switching to their `openrouter/free` meta-model that pools across providers. `pdf-parse@2` shipped a class-based API that doesn't match v1 tutorials, so the syllabus-upload route had to be rewritten after the first install. Render's static-site SPA fallback wasn't configured — `/dashboard` and every other client-routed path returned 404 on direct visits — until we added a `_redirects` file inside the build output. Google OAuth setup had its own layer of gotchas (redirect-URI byte-for-byte matching, Test users list while the app sits in Testing status, refresh tokens only returned with `access_type=offline` + `prompt=consent`). Scoping the social features was hard too — we built profiles, leaderboard, and rooms, but had to accept polling instead of websockets to keep the feature shippable in a week.

### 3. What were some of the highlights or achievements that you are most proud of in this project?

The analytics heatmap, which we built with raw SVG rather than pulling in a calendar-heatmap library, and the virtual plant in the garden page that actually grows through six visibly different stages as you log more hours. The Pomodoro timer that auto-opens the session-log modal when a focus phase ends — little flow detail but it makes the feature feel finished. The syllabus parser, which genuinely works: paste a course outline and you get back a list of editable study goals with realistic hours and deadlines in seconds. And keeping the whole app visually coherent — the same zinc/lime palette, the same uppercase-tracking labels, the same slide-out pattern — across features that span from AI to calendar sync to a leaderboard.

### 4. Reflecting on your web development journey so far, how have you grown since the beginning of the course?

At the start of the course we were writing React components without really understanding state co-location, and Express routes without transactional boundaries. By the end of this project we were reaching for `pool.connect()` + `BEGIN`/`COMMIT`/`ROLLBACK` when a request touched more than one table, refactoring repeated UI into shared primitives (`TimerCard`, `FocusTools`, `Spinner`, `ContextMenuPrimitives`), and debugging production-only issues like cached 404s from a stale CDN edge. The biggest shift was understanding that shipping is iterative: the first pass is almost never the last, and the real learning happens when real constraints — rate limits, OAuth mismatches, cache invalidation, API-version surprises — push back.

### 5. Looking ahead, what are your goals related to web development, and what steps do you plan to take to achieve them?

Short term: continue improving StudySprint — add per-room presence via Server-Sent Events, wire Pomodoro completion stats into the analytics page, and tighten the mobile layout. Medium term: keep building full-stack projects that actually deploy, because the gap between a working demo and a deployable app is where most of the growth happens — planning to explore server components in Next.js and push deeper into PostgreSQL query optimization and indexing strategies. Long term: contribute to an open-source project to learn from reviews I didn't write myself, and eventually take on backend work that involves real concurrency and migration strategy, not just CRUD.
