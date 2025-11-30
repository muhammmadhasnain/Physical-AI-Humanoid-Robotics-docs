### Task 1.1 — Verify Node.js & npm Installation

Goal: Ensure Node.js (LTS) + npm installed and working.
Acceptance Criteria:

node -v aur npm -v terminal par successfully run hon

Versions markdown file (env-check.md) mein record
Depends on: None
Checkpoint: Human Review → Human Approve

### Task 1.2 — Verify Internet Connectivity for Package Installation

Goal: Ensure network packages download ho sakte hain.
Acceptance Criteria:

npm ping successful

Output screenshot ya text env-check.md mein add
Depends on: Task 1.1
Checkpoint: Human Review → Human Approve

### Task 1.3 — Confirm Target Folder for Docusaurus Setup

Goal: Ensure working directory clean & correct location.
Acceptance Criteria:

Folder path documented

Confirm no conflicting files
Depends on: Task 1.2
Checkpoint: Human Review → Human Approve

### Task 2.1 — Run Docusaurus Initialization Command

Command:

npx create-docusaurus@latest . classic


Acceptance Criteria:

Command runs without error

All expected folders auto-created:
docs/, blog/, src/, static/, node_modules/,
docusaurus.config.js, sidebars.js, package.json, README.md
Depends on: Task 1.3
Checkpoint: Human Review → Human Approve

### Task 2.2 — Verify Folder Structure Generated

Goal: Confirm project generated correctly.
Acceptance Criteria:

A markdown file (structure-check.md) containing folder tree
Depends on: Task 2.1
Checkpoint: Human Review → Human Approve

### Task 3.1 — Add Sample Doc in docs/

Goal: Create one test documentation file.
File: docs/intro.md
Acceptance Criteria:

Page opens in Docusaurus dev server

Sidebar shows entry
Depends on: Task 2.2
Checkpoint: Human Review → Human Approve

### Task 3.2 — Start Development Server

Command:

npm start


Acceptance Criteria:

Docs page accessible in browser

Hot reload works
Depends on: Task 3.1
Checkpoint: Human Review → Human Approve

### Task 4.1 — Add Sample Blog Post

Goal: Create one test blog post.
File: blog/first-post.md
Acceptance Criteria:

Blog page renders

Post title appears in blog listing
Depends on: Task 3.2
Checkpoint: Human Review → Human Approve

### Task 5.1 — Customize Navbar in config file

File: docusaurus.config.js
Acceptance Criteria:

New navbar label visible
Depends on: Task 3.2
Checkpoint: Human Review → Human Approve

### Task 5.2 — Customize Footer

Goal: Add project links.
Acceptance Criteria:

Footer updated on reload
Depends on: Task 5.1
Checkpoint: Human Review → Human Approve

### Task 5.3 — Modify Sidebar Structure

File: sidebars.js
Acceptance Criteria:

New sidebar order visible