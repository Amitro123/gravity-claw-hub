// ============ AGENTS ============
export interface Agent {
  id: string;
  name: string;
  status: "online" | "degraded" | "offline";
  recentTask: string;
  uptime: string;
  costToday: number;
  model: string;
}

export const agents: Agent[] = [
  { id: "a1", name: "Archivist", status: "online", recentTask: "Index workshop docs", uptime: "99.8%", costToday: 1.23, model: "Claude 3.5" },
  { id: "a2", name: "TA1", status: "online", recentTask: "Help Q1 session", uptime: "98.5%", costToday: 0.87, model: "Claude 3.5" },
  { id: "a3", name: "Reporter", status: "online", recentTask: "Generate daily report", uptime: "99.2%", costToday: 0.45, model: "Groq" },
  { id: "a4", name: "Transcriber", status: "degraded", recentTask: "Transcribe Lesson 2", uptime: "92.1%", costToday: 0.67, model: "Claude 3.5" },
  { id: "a5", name: "Researcher", status: "online", recentTask: "Find AI workshops", uptime: "97.8%", costToday: 0.89, model: "Claude 3.5" },
  { id: "a6", name: "Scheduler", status: "offline", recentTask: "Schedule review", uptime: "0%", costToday: 0, model: "Groq" },
  { id: "a7", name: "Monitor", status: "online", recentTask: "Health check", uptime: "99.9%", costToday: 0.45, model: "Groq" },
];

// ============ PROJECTS ============
export interface Project {
  id: string;
  name: string;
  status: "active" | "archived";
  agentCount: number;
  taskCount: number;
  cost: number;
  description: string;
}

export const projects: Project[] = [
  { id: "p1", name: "AI Workshop Cancer Survivors", status: "active", agentCount: 5, taskCount: 23, cost: 45.23, description: "Multi-agent system for cancer survivor workshops" },
  { id: "p2", name: "Legal Doc Processor", status: "active", agentCount: 3, taskCount: 12, cost: 28.90, description: "Automated legal document analysis pipeline" },
  { id: "p3", name: "Content Pipeline v2", status: "active", agentCount: 4, taskCount: 8, cost: 15.67, description: "Content creation and distribution automation" },
  { id: "p4", name: "Research Assistant Beta", status: "archived", agentCount: 2, taskCount: 45, cost: 89.12, description: "AI-powered research assistant prototype" },
];

// ============ TASKS ============
export type TaskStatus = "backlog" | "in_progress" | "review" | "done";
export type TaskPriority = "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  agentId: string;
  agentName: string;
  status: TaskStatus;
  priority: TaskPriority;
  deadline: string;
  projectId: string;
}

export const tasks: Task[] = [
  { id: "t1", title: "Transcribe Lesson 2", agentId: "a4", agentName: "Transcriber", status: "in_progress", priority: "high", deadline: "2026-02-25", projectId: "p1" },
  { id: "t2", title: "Index workshop materials", agentId: "a1", agentName: "Archivist", status: "in_progress", priority: "medium", deadline: "2026-02-26", projectId: "p1" },
  { id: "t3", title: "Generate weekly report", agentId: "a3", agentName: "Reporter", status: "review", priority: "medium", deadline: "2026-02-24", projectId: "p1" },
  { id: "t4", title: "Answer participant Q&A", agentId: "a2", agentName: "TA1", status: "in_progress", priority: "high", deadline: "2026-02-24", projectId: "p1" },
  { id: "t5", title: "Research new AI tools", agentId: "a5", agentName: "Researcher", status: "backlog", priority: "low", deadline: "2026-03-01", projectId: "p2" },
  { id: "t6", title: "Schedule review meeting", agentId: "a6", agentName: "Scheduler", status: "backlog", priority: "medium", deadline: "2026-02-28", projectId: "p1" },
  { id: "t7", title: "Process legal batch #12", agentId: "a1", agentName: "Archivist", status: "done", priority: "high", deadline: "2026-02-23", projectId: "p2" },
  { id: "t8", title: "Summarize session notes", agentId: "a3", agentName: "Reporter", status: "done", priority: "medium", deadline: "2026-02-22", projectId: "p1" },
  { id: "t9", title: "Monitor system health", agentId: "a7", agentName: "Monitor", status: "in_progress", priority: "low", deadline: "2026-02-28", projectId: "p3" },
  { id: "t10", title: "Draft content calendar", agentId: "a5", agentName: "Researcher", status: "backlog", priority: "medium", deadline: "2026-03-05", projectId: "p3" },
  { id: "t11", title: "Analyze survey results", agentId: "a2", agentName: "TA1", status: "review", priority: "high", deadline: "2026-02-25", projectId: "p1" },
  { id: "t12", title: "Update training data", agentId: "a1", agentName: "Archivist", status: "backlog", priority: "low", deadline: "2026-03-10", projectId: "p4" },
];

// ============ USAGE ============
export interface UsageEntry {
  provider: string;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cost: number;
}

export const usageToday: UsageEntry[] = [
  { provider: "Claude 3.5", inputTokens: 12300, outputTokens: 4500, totalTokens: 16800, cost: 3.45 },
  { provider: "Groq", inputTokens: 5200, outputTokens: 2100, totalTokens: 7300, cost: 1.11 },
];

export const usageDaily = [
  { date: "Feb 18", tokens: 14200, cost: 3.20 },
  { date: "Feb 19", tokens: 18500, cost: 4.10 },
  { date: "Feb 20", tokens: 12800, cost: 2.90 },
  { date: "Feb 21", tokens: 22100, cost: 5.30 },
  { date: "Feb 22", tokens: 19400, cost: 4.50 },
  { date: "Feb 23", tokens: 16100, cost: 3.80 },
  { date: "Feb 24", tokens: 24100, cost: 4.56 },
];

// ============ TRACES ============
export interface Trace {
  id: string;
  timestamp: string;
  agentName: string;
  task: string;
  status: "success" | "error" | "running";
  duration: string;
  tokens: number;
  input: string;
  toolCalls: string;
  output: string;
}

export const traces: Trace[] = [
  { id: "tr1", timestamp: "2m ago", agentName: "TA1", task: "Help Q1", status: "success", duration: "3.2s", tokens: 1801, input: "User asked about radiation therapy side effects", toolCalls: '["search_docs", "generate_response"]', output: "Provided comprehensive response with 3 references" },
  { id: "tr2", timestamp: "5m ago", agentName: "Archivist", task: "Index docs", status: "success", duration: "12.1s", tokens: 4520, input: "Process batch of 15 workshop documents", toolCalls: '["read_file", "extract_metadata", "index_document"]', output: "Indexed 15 documents, 3 flagged for review" },
  { id: "tr3", timestamp: "8m ago", agentName: "Transcriber", task: "Transcribe Lesson 2", status: "running", duration: "45.3s", tokens: 8900, input: "Audio file: lesson_2_recording.mp3 (42min)", toolCalls: '["transcribe_audio", "format_text"]', output: "In progress... 67% complete" },
  { id: "tr4", timestamp: "12m ago", agentName: "Reporter", task: "Daily report", status: "success", duration: "5.8s", tokens: 2340, input: "Generate daily activity summary", toolCalls: '["aggregate_stats", "format_report"]', output: "Report generated: 23 tasks, 5 agents active" },
  { id: "tr5", timestamp: "15m ago", agentName: "Researcher", task: "Find AI workshops", status: "success", duration: "8.4s", tokens: 3200, input: "Search for AI workshops for cancer survivors 2026", toolCalls: '["web_search", "filter_results", "summarize"]', output: "Found 12 relevant workshops, 4 highly recommended" },
  { id: "tr6", timestamp: "20m ago", agentName: "Scheduler", task: "Schedule review", status: "error", duration: "1.2s", tokens: 450, input: "Schedule team review for Feb 25", toolCalls: '["check_calendar"]', output: "Error: Calendar API timeout" },
  { id: "tr7", timestamp: "25m ago", agentName: "Monitor", task: "Health check", status: "success", duration: "0.8s", tokens: 120, input: "Run system health diagnostics", toolCalls: '["check_cpu", "check_memory", "check_disk"]', output: "All systems operational" },
  { id: "tr8", timestamp: "30m ago", agentName: "TA1", task: "Help Q2", status: "success", duration: "2.9s", tokens: 1650, input: "User asked about nutrition during treatment", toolCalls: '["search_docs", "generate_response"]', output: "Response sent with dietary guidelines" },
];

// ============ YOUTUBE ============
export interface YouTubeResult {
  id: string;
  title: string;
  channel: string;
  duration: string;
  views: string;
  url: string;
  transcript: string;
  publishedAt: string;
}

export const youtubeResults: YouTubeResult[] = [
  { id: "y1", title: "AI Workshops for Cancer Survivors - Complete Guide", channel: "HealthTech Academy", duration: "24:30", views: "45.2K", url: "#", transcript: "In this workshop we explore how AI tools can help cancer survivors manage their recovery journey...", publishedAt: "2026-01-15" },
  { id: "y2", title: "Building Multi-Agent Systems with Claude", channel: "AI Engineering", duration: "38:15", views: "128K", url: "#", transcript: "Today we'll build a complete multi-agent system using Claude API and orchestration patterns...", publishedAt: "2026-02-01" },
  { id: "y3", title: "OpenClaw Dashboard Tutorial", channel: "DevOps Daily", duration: "15:45", views: "23.8K", url: "#", transcript: "Let me walk you through setting up the OpenClaw monitoring dashboard for your AI agents...", publishedAt: "2026-01-28" },
  { id: "y4", title: "Token Cost Optimization Strategies", channel: "AI Budget", duration: "19:20", views: "67.1K", url: "#", transcript: "Token costs can quickly add up. Here are 5 strategies to reduce your LLM spending by up to 60%...", publishedAt: "2026-02-10" },
  { id: "y5", title: "AI Agent Monitoring Best Practices", channel: "MLOps Weekly", duration: "42:10", views: "34.5K", url: "#", transcript: "Monitoring AI agents in production requires careful attention to latency, token usage, and error rates...", publishedAt: "2026-02-18" },
];

// ============ SYSTEM ============
export interface SystemProcess {
  id: string;
  name: string;
  status: "online" | "stopped" | "errored";
  cpu: number;
  memory: number;
  uptime: string;
  restarts: number;
}

export const systemInfo = {
  cpu: 42,
  memory: 68,
  disk: 55,
  processes: [
    { id: "pm1", name: "gravity-bot", status: "online" as const, cpu: 12, memory: 245, uptime: "3d 14h", restarts: 0 },
    { id: "pm2", name: "openc-law-gateway", status: "online" as const, cpu: 8, memory: 180, uptime: "3d 14h", restarts: 1 },
    { id: "pm3", name: "transcript-worker", status: "online" as const, cpu: 22, memory: 512, uptime: "1d 8h", restarts: 2 },
    { id: "pm4", name: "scheduler-service", status: "stopped" as const, cpu: 0, memory: 0, uptime: "—", restarts: 5 },
    { id: "pm5", name: "monitor-daemon", status: "online" as const, cpu: 3, memory: 64, uptime: "7d 2h", restarts: 0 },
  ],
  logs: [
    "[14:32:01] gravity-bot: Processing batch #47 (15 documents)",
    "[14:31:58] openc-law-gateway: Request handled in 234ms",
    "[14:31:55] transcript-worker: Transcription 67% complete for lesson_2",
    "[14:31:50] monitor-daemon: Health check passed - all systems OK",
    "[14:31:45] gravity-bot: Agent TA1 responded to query in 3.2s",
    "[14:31:40] openc-law-gateway: New connection from 192.168.1.42",
    "[14:31:35] scheduler-service: ERROR - Calendar API timeout (retry 3/3)",
    "[14:31:30] gravity-bot: Daily report generated successfully",
    "[14:31:25] transcript-worker: Audio chunk 8/12 processed",
    "[14:31:20] monitor-daemon: CPU usage normalized at 42%",
  ],
};

// ============ DASHBOARD ============
export const dashboardMetrics = {
  totalCost: 4.56,
  totalTokens: 24100,
  activeAgents: 5,
  totalAgents: 7,
  openTasks: 23,
};

export const recentActivity = [
  { agent: "TA1", task: "Help Q1 session", status: "success" as const, time: "2m ago" },
  { agent: "Archivist", task: "Index workshop docs", status: "success" as const, time: "5m ago" },
  { agent: "Transcriber", task: "Transcribe Lesson 2", status: "running" as const, time: "8m ago" },
  { agent: "Reporter", task: "Generate daily report", status: "success" as const, time: "12m ago" },
  { agent: "Researcher", task: "Find AI workshops", status: "success" as const, time: "15m ago" },
  { agent: "Scheduler", task: "Schedule review", status: "error" as const, time: "20m ago" },
  { agent: "Monitor", task: "Health check", status: "success" as const, time: "25m ago" },
];
