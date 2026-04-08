# Wireframes

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## List of Pages

| Page | Route (planned) | Notes |
|------|-----------------|--------|
| Landing / login | `/` | Entry for guests; redirect to dashboard when authenticated |
| Dashboard (goals list) | `/dashboard` or `/goals` | Primary hub after login |
| Goal detail | `/goals/:id` | Progress, sessions, timer, modal |
| Session log (same page) | (no separate route) | Modal + inline list on goal detail |

**Pages with wireframes below (⭐):** Landing, Dashboard, Goal detail (session modal shown on goal detail).

---

## Wireframe 1: Landing / login ⭐

```
+----------------------------------------------------------+
|  Study Sprint Tracker          [ About ]    [ Log in ]   |
+----------------------------------------------------------+
|                                                          |
|     [  Logo / illustration area  ]                       |
|                                                          |
|              Plan. Track. Focus.                         |
|         Short value line for students.                   |
|                                                          |
|     +------------------+    +------------------+           |
|     | Email            |    | Password         |         |
|     +------------------+    +------------------+           |
|                                                          |
|              [        Sign in        ]                   |
|              [   Create account (link) ]                 |
|                                                          |
|     (After sign-in → redirect to Dashboard)            |
+----------------------------------------------------------+
```

---

## Wireframe 2: Dashboard (goals list) ⭐

```
+----------------------------------------------------------+
|  Study Sprint Tracker    [ Filter: Active ▼ ]   [ + Goal ] |
+----------------------------------------------------------+
|  Your goals                                    Total: 12h|
+----------------------------------------------------------+
|  +----------------------------------------------------+  |
|  | CS midterm prep          [=====>    ] 62%   Active  |  |
|  | Target 20h · Logged 12.4h              [ Open ]    |  |
|  +----------------------------------------------------+  |
|  +----------------------------------------------------+  |
|  | Biology chapter 3      [==>        ] 35%   Active  |  |
|  | Target 10h · Logged 3.5h               [ Open ]    |  |
|  +----------------------------------------------------+  |
|  +----------------------------------------------------+  |
|  | History essay outline  [==========] 100%  Done     |  |
|  | Target 8h · Logged 8h                  [ Open ]    |  |
|  +----------------------------------------------------+  |
|                                                          |
|  (Click row or Open → Goal detail)                       |
+----------------------------------------------------------+
```

---

## Wireframe 3: Goal detail (timer + sessions + modal) ⭐

```
+----------------------------------------------------------+
|  < Back    CS midterm prep                    [ ⋮ menu ] |
+----------------------------------------------------------+
|  Progress [=========>        ] 62%    Status: Active    |
|  Target 20h · Logged 12.4h · Remaining 7.6h              |
+----------------------------------------------------------+
|  Timer                                                   |
|  +----------------------------------------------------+  |
|  |            00 : 25 : 14                             |  |
|  |         [  Start ]   [  Pause  ]                   |  |
|  |         [ Log session (opens modal) ]              |  |
|  +----------------------------------------------------+  |
+----------------------------------------------------------+
|  Recent sessions                         [ + Add session ] |
|  +----------------------------------------------------+  |
|  | Apr 7  ·  45 min  ·  "Practice problems"   [edit]  |  |
|  | Apr 6  ·  30 min  ·  "Reading"             [edit]  |  |
|  +----------------------------------------------------+  |
|                                                          |
|  -------- Modal (covers page when open) --------         |
|  +----------------------------------------------------+  |
|  | Log session                                   [ X ] |  |
|  | Duration (min): [  45  ]                              |  |
|  | Notes: [________________________________]           |  |
|  |           [ Cancel ]  [ Save session ]               |  |
|  +----------------------------------------------------+  |
+----------------------------------------------------------+
```

The session log uses a **modal** over the goal page so the user does not navigate away (baseline: same-page interaction).

---

## Wireframe 4 (optional): Slide-out details panel

```
Goal detail with narrow right panel for metadata (subjects/tags, created date):

+----------------------------------------+---------------+
|  (same header + timer + session list)  | Details     |
|                                        | Subjects: CS |
|                                        | Created: ... |
|                                        | [ Close ]    |
+----------------------------------------+---------------+
```

Custom feature from README: slide-out details panel complements the modal pattern.
