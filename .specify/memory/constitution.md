<!-- Sync Impact Report:
Version change: 1.1.0 → 1.2.0
Modified principles:
- III. Clarity & Readability (enhanced to include "simple English" and "practical examples")
- V. Practical Application & Simulation (enhanced to include "simple English" for examples)
Added sections: None
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md ⚠ pending
- .specify/templates/spec-template.md ⚠ pending
- .specify/templates/tasks-template.md ⚠ pending
- .claude/commands/sp.adr.md ⚠ pending
- .claude/commands/sp.analyze.md ⚠ pending
- .claude/commands/sp.checklist.md ⚠ pending
- .claude/commands/sp.clarify.md ⚠ pending
- .claude/commands/sp.constitution.md ⚠ pending
- .claude/commands/sp.git.commit_pr.md ⚠ pending
- .claude/commands/sp.implement.md ⚠ pending
- .claude/commands/sp.phr.md ⚠ pending
- .claude/commands/sp.plan.md ⚠ pending
- .claude/commands/sp.specify.md ⚠ pending
- .claude/commands/sp.tasks.md ⚠ pending
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Course Textbook Project Constitution

## Core Principles

### I. AI-Native Content & Physical AI Focus
The textbook will focus on AI systems functioning in the physical world and embodied intelligence, bridging the gap between digital brains and physical bodies for humanoid robotics. Content creation must leverage AI-native techniques and tools like Claude Code and Spec-Kit Plus.

### II. Modularity & Reusability
Every component, module, or library, and particularly textbook chapters and learning units, should be designed to be self-contained, independently consumable, and reusable across different parts of the project or even other educational contexts. Avoid tight coupling and ensure clear interfaces.

### III. Clarity & Readability
Content and code should be easy to understand and maintain. Prioritize clear, concise, and self-explanatory material using **simple English**. Explanations must focus on *why* concepts are important and *how* they are applied, not just *what* they are, always **including practical examples** to illustrate complex ideas.

### IV. Spec-Driven Development (SDD)
All development, including book content generation and platform features, must adhere to Spec-Driven Development principles. This involves using Claude Code and Spec-Kit Plus for defining specifications, planning, and task execution to ensure alignment with project goals and requirements.

### V. Practical Application & Simulation
The textbook content must emphasize practical application. This includes hands-on learning with tools and environments such as ROS 2, Gazebo, Unity, and NVIDIA Isaac for simulation and real-world humanoid robot control. Theoretical concepts must be reinforced with practical examples, presented in **simple English**, to ensure comprehensive understanding.

### VI. Integrated Learning Experience
The book will feature an integrated Retrieval-Augmented Generation (RAG) chatbot for interactive learning. This includes capabilities for answering questions about the book's content, answering questions based on user-selected text, and potentially supporting personalized content delivery and translation features based on user background and preferences.

### VII. Continuous Feedback & Iteration
Adopt an iterative approach to content development and platform building, delivering small, working increments frequently. This allows for continuous feedback from users and stakeholders, reduces risk, and enables rapid adaptation to changing requirements and educational best practices.

### VIII. Security by Design
Security considerations must be integrated into every stage of the development and deployment lifecycle, from content creation to the underlying platform. Implement robust authentication, authorization, data protection, and vulnerability management practices, especially for features involving user accounts or personalized data.

## Development Workflow

### Version Control
All code and book content must be managed using Git. Feature branches are to be used for all development, and pull requests are required for merging changes into the main branch (e.g., `master` or `main`).

### Code Review
All code changes and significant content additions must undergo a thorough review process before merging. Reviews should focus on correctness, adherence to principles, maintainability, educational effectiveness, and potential security issues.

## Governance

### Amendment Procedure
This constitution can be amended by consensus among project stakeholders. Proposed amendments must be documented, reviewed, and approved.

### Versioning Policy
The constitution itself will follow semantic versioning (MAJOR.MINOR.PATCH).
- MAJOR: Backward incompatible governance/principle removals or redefinitions.
- MINOR: New principle/section added or materially expanded guidance.
- PATCH: Clarifications, wording, typo fixes, non-semantic refinements.

### Compliance Review
Regular reviews will be conducted to ensure ongoing compliance with the principles and guidelines outlined in this constitution.

**Version**: 1.2.0 | **Ratified**: 2025-11-29 | **Last Amended**: 2025-11-29
