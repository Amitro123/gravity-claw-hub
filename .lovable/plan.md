

# Gravity Claw Ops Hub — Implementation Plan

## Overview
A professional multi-agent task management dashboard with dark theme, 8 core sections, mock data, and a polished Linear/OpenClaw-inspired design. Frontend-only with mock data services ready to swap for real APIs.

---

## Phase 1: Foundation & Navigation

### Dark Theme & Design System
- Custom dark color palette: `#0a0a0a` background, green (`#10b981`) accents for success/online, red (`#ef4444`) for errors/offline, subtle card shadows
- Override Tailwind/Shadcn CSS variables for the dark theme as default

### Sidebar Navigation
- Collapsible sidebar with icons + labels for all 8 sections: Dashboard, Projects, Agents, Tasks, Usage, Traces, YouTube, OS
- Active route highlighting, smooth transitions between mini and full width

### Mock Data Layer
- Centralized mock data files for agents, projects, tasks, usage stats, traces, YouTube results, and system info
- Service functions (e.g. `getAgents()`, `getTasks()`) that return mock data, easily replaceable with `fetch()` calls later

---

## Phase 2: Dashboard (Home)

### Metrics Cards (4-column grid)
- Total Cost Today, Total Tokens, Active Agents, Open Tasks
- Animated number displays with icons and color-coded indicators

### Provider Stats Table
- Table showing Provider, Input Tokens, Output Tokens, Total, Cost
- Mock data for Claude, Groq, etc.

### Recent Activity Feed
- Timeline-style list: Agent name → Task → Status badge → Time ago
- Color-coded status indicators (success/error/in-progress)

---

## Phase 3: Projects Section

### Project Cards
- Card grid showing: Name, Status badge (Active/Archived), Agent count, Task count, Total cost
- Mock projects like "AI Workshop Cancer Survivors"

### Create/Edit Project Dialog
- Form to name a project, set status, assign agents

---

## Phase 4: Agents Page

### Agent Cards Grid
- Each card: Agent name, status indicator (🟢 Online / 🟡 Degraded / 🔴 Offline), recent task, uptime, cost today
- Action buttons: Pause/Resume, View Traces, Edit Config

---

## Phase 5: Tasks (Kanban Board)

### Drag-and-Drop Kanban
- Four columns: Backlog, In Progress, Review, Done
- Task cards showing: title, assigned agent, priority badge (High/Med/Low color-coded), deadline
- Drag-and-drop between columns to change status
- Add new task button with a simple form

---

## Phase 6: Usage Tracking

### Charts & Metrics
- Daily/Weekly/Monthly toggle with line/bar charts (using Recharts) for token usage and cost over time
- Pie chart showing provider breakdown (Claude vs Groq)
- Provider cost table
- Budget alert banner ("80% of $100 monthly limit")

---

## Phase 7: Traces (Agent Monitor)

### Filterable Trace Table
- Columns: Timestamp, Agent, Task, Status, Duration, Tokens, Actions
- Filters by agent, status, date range
- Expandable rows: click to reveal input summary, tool calls JSON, full trace detail

---

## Phase 8: YouTube Research

### Search Interface
- Search input with filters (date, duration, channel)
- Results table: Title, Channel, Duration, Views, Transcript preview snippet
- Export/save to project action button

---

## Phase 9: OS Monitor

### System Stats Dashboard
- CPU, Memory, Disk usage gauges/progress bars
- PM2 process list with status indicators (gravity-bot, openc-law-gateway, etc.)
- Simulated log tail section
- Restart action buttons per process

