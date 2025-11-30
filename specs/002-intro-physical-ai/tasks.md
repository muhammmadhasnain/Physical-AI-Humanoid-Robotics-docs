# Tasks: Introduction to Physical AI & Humanoid Robotics

**Input**: Design documents from `/specs/001-intro-physical-ai/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Not explicitly requested in spec.md, so test tasks are omitted.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project: `src/`, `tests/` at repository root
- Paths below assume educational content/simulation project type, focusing on markdown files within `specs/001-intro-physical-ai/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create `chapter-content.md` for Chapter 1 content in `specs/001-intro-physical-ai/chapter-content.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T002 Update `plan.md` to reflect the current task organization and content file structure in `specs/001-intro-physical-ai/plan.md`
- [ ] T003 Generate the initial glossary content based on `spec.md` and `plan.md` into `specs/001-intro-physical-ai/glossary.md`
- [ ] T004 Define weekly learning objectives for Weeks 1-2 based on `plan.md` into `specs/001-intro-physical-ai/weekly-objectives.md`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Understanding Physical AI Concepts (Priority: P1) 🎯 MVP

**Goal**: Students can define Physical AI and explain embodied intelligence, and articulate differences from digital-only AI.

**Independent Test**: Student can correctly define Physical AI and embodied intelligence, and differentiate from digital-only AI in a conceptual assessment.

### Implementation for User Story 1

- [ ] T005 [US1] Write definitions for Physical AI and embodied intelligence in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T006 [US1] Explain differences between digital-only AI and Physical AI in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T007 [US1] Provide examples of embodied intelligence applications in `specs/001-intro-physical-ai/chapter-content.md`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Grasping Humanoid Robotics Basics (Priority: P1)

**Goal**: Students understand the importance and applications of humanoid robots, including their structure and sensor systems.

**Independent Test**: Student can describe the significance of humanoid robots, provide real-world examples, and identify key structural/sensor components.

### Implementation for User Story 2

- [ ] T008 [US2] Introduce humanoid robotics and their role in human-centered environments in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T009 [US2] Include at least two real-world examples or case studies of humanoid robots in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T010 [US2] Create diagrams showing humanoid robot structure and sensor placements, to be included in `specs/001-intro-physical-ai/chapter-content.md` (reference external image files as needed)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Sensor Systems Introduction (Priority: P1)

**Goal**: Students are familiar with key sensors used in humanoid robotics and their relevance.

**Independent Test**: Student can explain the function of LiDAR, Depth Cameras, IMUs, and Force/Torque sensors, and describe their relevance to perception, navigation, and interaction.

### Implementation for User Story 3

- [ ] T011 [P] [US3] Explain LiDAR for mapping & navigation in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T012 [P] [US3] Explain Depth Cameras for object recognition and perception in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T013 [P] [US3] Explain IMUs for orientation & balance in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T014 [P] [US3] Explain Force/Torque sensors for manipulation feedback in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T015 [US3] Ensure diagrams of sensor placement on humanoid robots are correctly referenced/integrated in `specs/001-intro-physical-ai/chapter-content.md`

**Checkpoint**: All user stories up to US3 should now be independently functional

---

## Phase 6: User Story 4 - Capstone Quarter Overview (Priority: P2)

**Goal**: Students understand the overall course structure, key tools, and the goals of the capstone project.

**Independent Test**: Student can summarize the core objectives of the capstone project and the major tools involved.

### Implementation for User Story 4

- [ ] T016 [US4] List main tools and platforms (ROS 2, Gazebo, NVIDIA Isaac, Unity) in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T017 [US4] Explain the capstone project (Autonomous Humanoid capable of VLA) in `specs/001-intro-physical-ai/chapter-content.md`
- [ ] T018 [US4] Document intended learning outcomes of the course in `specs/001-intro-physical-ai/chapter-content.md`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T019 Review and refine `specs/001-intro-physical-ai/chapter-content.md` for clarity, consistency, and adherence to principles.
- [ ] T020 Ensure all generated diagrams are properly referenced and available in `specs/001-intro-physical-ai/chapter-content.md`.
- [ ] T021 Final review of `specs/001-intro-physical-ai/glossary.md` for completeness and accuracy.
- [ ] T022 Final review of `specs/001-intro-physical-ai/weekly-objectives.md` for completeness and accuracy.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Depends on US1 concepts to some extent, but can be implemented with minimal coupling.
- **User Story 3 (P1)**: Can start after Foundational (Phase 2) - Depends on US2 for context on humanoid robots.
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Depends on US1, US2, and US3 for full context on course content.

### Within Each User Story

- Content creation for definitions, explanations, examples.
- Diagram integration.

### Parallel Opportunities

- Tasks marked [P] can run in parallel (different files, no dependencies)
- Once Foundational phase completes, user stories can start in parallel (if team capacity allows, with careful coordination of dependencies).
- Tasks T011-T014 within User Story 3 can run in parallel.

---

## Parallel Example: User Story 3

```bash
# Launch tasks for explaining different sensors in parallel:
Task: "Explain LiDAR for mapping & navigation in specs/001-intro-physical-ai/chapter-content.md"
Task: "Explain Depth Cameras for object recognition and perception in specs/001-intro-physical-ai/chapter-content.md"
Task: "Explain IMUs for orientation & balance in specs/001-intro-physical-ai/chapter-content.md"
Task: "Explain Force/Torque sensors for manipulation feedback in specs/001-intro-physical-ai/chapter-content.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple content creators:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Creator A: User Story 1
   - Creator B: User Story 2
   - Creator C: User Story 3
   - Creator D: User Story 4
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
