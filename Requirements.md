# AI Workout Planner — Phase 1: Product Requirements

**Status:** FROZEN
**Phase:** 1 — Product Planning
**Version:** 1.0

---

## 1. Product Overview

### Working Name

**FitAI**

### Product Description

FitAI is an AI-powered workout planning and tracking platform that creates personalized workout plans, tracks workout performance, analyzes progress, and dynamically adapts the user's workout schedule based on real-life changes and workout history.

The key differentiator is that the workout plan is **not static**.

The AI can modify the user's existing plan when circumstances change.

Examples:

- User skips a workout.
- User only has 30 minutes available.
- User does not have access to required equipment.
- User wants to replace an exercise.
- User wants to adjust the difficulty.
- User's progress suggests that the current plan needs modification.

---

# 2. Target User

The primary target user is:

> Beginner to intermediate gym users who want a structured and personalized workout plan without requiring a personal trainer.

### V1 Target

- Beginners
- Intermediate users
- Gym users
- Users with limited workout time
- Users who want structured training
- Users who want to track their progress

### Out of Scope

V1 is not designed specifically for:

- Professional athletes
- Medical rehabilitation
- Physiotherapy
- Injury diagnosis
- Advanced bodybuilding programming
- Sports-specific training

---

# 3. Core Product Concept

FitAI consists of three major loops.

## 3.1 Planning Loop

```text
User Preferences
        ↓
       AI
        ↓
Personalized Workout Plan
```

## 3.2 Training Loop

```text
Workout Plan
        ↓
Today's Workout
        ↓
Sets / Reps / Weight
        ↓
Workout History
```

## 3.3 Intelligence Loop

```text
Workout History
        ↓
       AI
        ↓
Progress Analysis
        ↓
Recommendations
        ↓
Updated Workout Plan
```

The three loops work together to create a continuously adapting workout system.

---

# 4. Core User Journey

```text
Sign Up
   ↓
Day-One Onboarding
   ↓
Set Fitness Preferences
   ↓
Generate Workout Plan
   ↓
Review Plan
   ↓
Start Today's Workout
   ↓
Log Sets / Reps / Weight
   ↓
Complete Workout
   ↓
Save Performance
   ↓
View Progress
   ↓
AI Analyzes Progress
   ↓
AI Suggests Adjustments
   ↓
User Applies Changes
   ↓
Updated Workout Plan
```

---

# 5. Authentication

Users must be able to:

- Create an account
- Log in
- Log out
- Manage their profile

Authentication is required because workout plans, workout history, and progress are user-specific.

---

# 6. Day-One Onboarding

The onboarding experience establishes the user's starting point.

### Step 1 — Experience Level

```text
What's your current fitness level?

○ Complete Beginner
○ Some Training Experience
○ Experienced
```

### Step 2 — Primary Goal

```text
What is your primary goal?

○ Build Muscle
○ Lose Fat
○ Build Strength
○ Improve Fitness
○ General Health
```

### Step 3 — Training Frequency

```text
How many days can you train?

2
3
4
5
6
```

### Step 4 — Workout Duration

```text
How long can you train?

30 minutes
45 minutes
60 minutes
90 minutes
```

### Step 5 — Equipment

Users select the equipment available to them.

Examples:

- Full Gym
- Dumbbells
- Resistance Bands
- Home Equipment
- Other available equipment

### Step 6 — Muscle Group Preferences

This step is **optional and skippable**.

```text
What would you like to focus on?

☐ Chest
☐ Back
☐ Shoulders
☐ Arms
☐ Legs
☐ Core
☐ Full Body

[Skip for now]
```

Muscle-group preferences are treated as preferences rather than strict restrictions.

The AI must still maintain a balanced workout plan.

---

# 7. AI Workout Generator

The AI generates the user's initial workout plan using their onboarding information.

### Inputs

- Experience level
- Primary goal
- Training frequency
- Workout duration
- Available equipment
- Muscle-group preferences

### Output

The generated plan should contain:

- Workout schedule
- Workout days
- Exercises
- Sets
- Repetitions
- Rest periods
- Target muscle groups
- Estimated workout duration

### Example

```text
4-Day Muscle Building Plan

Monday
Push

Tuesday
Pull

Thursday
Legs

Saturday
Upper Body
```

---

# 8. Workout Plan

Each workout contains a collection of exercises.

Each exercise should display:

- Exercise name
- Target muscle
- Sets
- Repetitions
- Rest time
- Exercise order

The user can view the entire weekly plan.

---

# 9. Today's Workout

The user can start the workout scheduled for the current day.

Example:

```text
PUSH

Estimated Time: 55 minutes

1. Bench Press

Set 1
60 kg × 10 ✓

Set 2
60 kg × 10 ✓

Set 3
60 kg × 8 ✓

Set 4
55 kg × 10 ✓


2. Incline Dumbbell Press

...
```

### User Actions

The user can:

- Enter weight
- Enter repetitions
- Complete a set
- Start a rest timer
- Skip an exercise
- Replace an exercise
- Complete the workout

---

# 10. Workout Tracking

The application records workout performance.

For each exercise set, the system should be able to store:

- Weight
- Repetitions
- Set number
- Completion status

For each workout session, the system should track:

- Workout date
- Start time
- End time
- Duration
- Completion status
- Exercises performed

---

# 11. Workout History

Users can view previously completed workouts.

Example:

```text
WORKOUT HISTORY

August 2
Push
Completed

July 31
Pull
Completed

July 29
Legs
Completed

July 27
Upper Body
Completed
```

Users can open a workout to see detailed performance.

Workout history also serves as an important source of context for the AI.

---

# 12. Progress Dashboard

The application provides visual progress analytics.

### Metrics

- Workouts completed
- Weekly consistency
- Current streak
- Total training volume
- Personal records

### Progress Tracking

The application can display:

- Strength progression
- Workout frequency
- Training volume
- Exercise performance
- Personal records

Charts should be used where they provide useful insight.

---

# 13. AI Progress Analysis

The AI analyzes the user's historical workout data and provides meaningful insights.

Example:

> Your bench press has increased by 12% over the past four weeks.

Another example:

> Your training consistency decreased from five workouts per week to three workouts last week.

The AI may identify:

- Progress trends
- Performance plateaus
- Consistency issues
- Excessive workout duration
- Changes in training volume

The AI can then provide recommendations.

---

# 14. Dynamic AI Workout Adjustment

This is one of the **core features of FitAI**.

The workout plan is dynamic rather than static.

The user can communicate real-life changes to the AI, and the AI can propose modifications to the existing workout plan.

---

## 14.1 Missed Workout

User:

> "I skipped Monday."

The AI understands the current schedule.

Example:

```text
Monday    Push     Missed
Tuesday   Pull
Thursday  Legs
Saturday  Upper
```

The AI may propose:

```text
Updated Schedule

Tuesday    Pull
Wednesday  Push
Thursday   Rest
Friday     Legs
Saturday   Upper
```

The user can review and apply the changes.

---

## 14.2 Limited Time

User:

> "I only have 30 minutes today."

If today's workout normally requires 60 minutes, the AI can shorten it.

Example:

```text
Original Workout

Bench Press
Incline Dumbbell Press
Shoulder Press
Lateral Raises
Tricep Pushdown
```

AI adjustment:

```text
Keep:
✓ Bench Press
✓ Incline Dumbbell Press
✓ Shoulder Press

Remove:
Lateral Raises
Tricep Pushdown

Estimated Time:
~30 minutes
```

The user can apply the changes.

---

## 14.3 Equipment Change

User:

> "I don't have access to a bench today."

The AI can suggest an appropriate replacement.

Example:

```text
Bench Press
      ↓
Floor Press
```

The user can accept the replacement.

---

## 14.4 Exercise Replacement

The user can request:

> "Replace barbell squats."

The AI suggests alternatives based on:

- Target muscle
- Available equipment
- Workout goals
- User preferences

The user selects a replacement.

---

## 14.5 Schedule Adjustment

The AI can modify the workout schedule when necessary.

Examples:

- Missed workout
- Changed availability
- Training day conflict
- Reduced time
- Temporary equipment limitations

The system should avoid creating conflicting workouts or unreasonable scheduling.

---

# 15. AI Coach

FitAI includes a conversational AI Coach.

Users can communicate naturally with the system.

Examples:

> "I only have 30 minutes today."

> "I skipped yesterday's workout."

> "Replace exercises that require a cable machine."

> "Make today's workout easier."

> "I want more chest volume."

> "I missed my workout yesterday."

> "Can I replace deadlifts?"

The AI should use the user's current workout plan and relevant workout history as context.

---

# 16. AI Actions and Backend Validation

The AI must **not directly modify the database**.

The intended architecture is:

```text
User
  ↓
AI
  ↓
Structured Action
  ↓
Backend Validation
  ↓
Database Update
```

For example, the AI may produce a structured action equivalent to:

```text
ACTION: RESCHEDULE_WORKOUT

WORKOUT: Push
FROM: Monday
TO: Wednesday
```

The backend must validate:

- Workout exists
- New date is valid
- Schedule does not conflict
- User owns the workout
- Requested modification is allowed

Only after validation should the backend update the database.

This keeps AI-generated changes controlled and predictable.

---

# 17. Safety Boundaries

FitAI is a workout planning and tracking assistant.

V1 must not:

- Diagnose injuries
- Diagnose medical conditions
- Provide medical treatment
- Act as a replacement for a medical professional
- Make claims about treating medical conditions

The AI should recommend seeking qualified professional guidance when a user raises medical or injury-related concerns.

---

# 18. Features Explicitly Out of Scope for V1

The following features will **not** be built in the first version.

### Computer Vision

No camera-based exercise form analysis.

### Wearable Integration

No:

- Apple Watch
- Fitbit
- Garmin
- Other wearable integrations

### Calorie Tracking

Not included in V1.

### Meal Planning

Not included in V1.

### Social Features

No:

- Followers
- Friends
- Likes
- Comments
- Social feed

### Trainer Marketplace

No personal trainer marketplace or trainer booking system.

### Advanced Athletic Programming

No specialized professional-athlete programming.

### Injury Diagnosis

No injury detection or diagnosis.

### Complex Machine Learning

The system will use an LLM/AI service for intelligent generation and reasoning rather than building a custom machine-learning model.

---

# 19. V1 Screen List

The application will contain the following primary screens/views:

1. Landing Page
2. Login
3. Signup
4. Day-One Onboarding
5. Dashboard
6. AI Workout Generator
7. Workout Plan
8. Today's Workout
9. Workout Completion
10. Workout History
11. Workout Details
12. Progress / Analytics
13. AI Coach
14. Profile / Settings

Some of these may be implemented as views or components within the same dashboard rather than completely separate pages.

---

# 20. V1 Feature Summary

### Authentication

- Signup
- Login
- Logout
- Profile

### Onboarding

- Experience
- Goal
- Training frequency
- Workout duration
- Equipment
- Optional muscle-group preferences

### AI

- Initial workout generation
- Progress analysis
- Workout adjustment
- Schedule adjustment
- Exercise replacement
- Conversational AI Coach

### Workout

- Weekly workout plan
- Today's workout
- Set tracking
- Weight tracking
- Rep tracking
- Rest timer
- Exercise replacement
- Workout completion

### Analytics

- Workout history
- Consistency
- Training volume
- Strength progression
- Personal records
- AI insights

---

# 21. Product Differentiator

The primary differentiator of FitAI is:

> **An adaptive workout plan that responds to the user's real-life circumstances and performance instead of remaining a static AI-generated routine.**

The system should continuously move through:

```text
PLAN
 ↓
TRAIN
 ↓
TRACK
 ↓
ANALYZE
 ↓
ADAPT
 ↓
TRAIN AGAIN
```

---

# 22. Phase 1 Completion Criteria

Phase 1 is considered complete when:

- Product concept is defined
- Target user is defined
- Core user journey is defined
- V1 features are defined
- AI features are defined
- Dynamic AI adjustment is defined
- Onboarding flow is defined
- Screen list is defined
- Out-of-scope features are defined
- Safety boundaries are defined

**Phase 1 Status: FROZEN**

No additional features should be added during later development unless the scope is intentionally reopened.
