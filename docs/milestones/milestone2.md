# Milestone 2

This document should be completed and submitted during **Unit 6** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

- [x] In `planning/wireframes.md`: add wireframes for at least three pages in your web app.
  - [x] Include a list of pages in your app
- [x] In `planning/entity_relationship_diagram.md`: add the entity relationship diagram you developed for your database.
  - [x] Your entity relationship diagram should include the tables in your database.
- [x] Prepare your three-minute pitch presentation, to be presented during Unit 7 (the next unit).
  - [x] You do **not** need to submit any materials in advance of your pitch.
- [x] In this document, complete all three questions in the **Reflection** section below

## Wireframe Links

- Main wireframe document: [`planning/wireframes.md`](../planning/wireframes.md)
- Landing/login image: [`planning/assets/landing-login.png`](../planning/assets/landing-login.png)
- Dashboard image: [`planning/assets/dashboard-goals.png`](../planning/assets/dashboard-goals.png)
- Goal detail image: [`planning/assets/goal-detail.png`](../planning/assets/goal-detail.png)

## Reflection

### 1. What went well during this unit?

We aligned the wireframes with the user stories from Milestone 1: dashboard for prioritizing goals, goal detail for progress and timer, and a session modal that keeps users on one page. The ERD matches our baseline (one-to-many goals and sessions, many-to-many goals and subjects) so implementation can follow the diagram without surprises.

### 2. What were some challenges your group faced in this unit?

We had to decide how much to show in wireframes versus leaving for implementation (e.g. exact filter UI on the dashboard). We also settled on naming for entities (`subjects` vs `tags`) and confirmed the join table only appears in the database, not as its own “page” in the app.

### 3. What additional support will you need in upcoming units as you continue to work on your final project?

We will use feedback from the pitch to tighten scope if needed. We may ask for a quick review of Express route layout and React state flow for the timer plus modal before we lock APIs. Deployment on Render with PostgreSQL env vars is another area where we will follow course resources closely.
