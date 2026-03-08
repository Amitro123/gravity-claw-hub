const API_BASE = import.meta.env.DEV ? '' : import.meta.env.VITE_API_BASE;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE}${path}`;
    const headers = {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
        ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export interface AgentModel {
    primary: string;
}

export interface Agent {
    id: string;
    name: string;
    model: AgentModel;
}

export interface AgentsResponse {
    agents: {
        defaults: any;
        list: Agent[];
    };
}

export interface AgentResponse {
    agent: Agent;
}

export interface ChannelsResponse {
    channels: {
        telegram: any;
        whatsapp: any;
    };
}

export interface SessionsResponse {
    sessions: any;
}

export interface Pm2Process {
    id: number;
    name: string;
    status: string;
    cpu: number;
    memory: number;
    uptime: number;
    restarts: number;
}

export interface Pm2StatusResponse {
    processes: Pm2Process[];
}

export interface LogsResponse {
    logs: Record<string, {
        stdout: string[];
        stderr: string[];
    }>;
}

export interface CronJobsResponse {
    jobs: any[];
}

export interface WorkspaceFile {
    filename: string;
    size: number;
    modified: string;
}

export interface WorkspaceFilesResponse {
    files: WorkspaceFile[];
}

export interface WorkspaceFileResponse {
    filename: string;
    content: string;
}

export async function getAgents(): Promise<AgentsResponse> {
    return apiFetch<AgentsResponse>('/api/agents');
}

export async function getAgentById(id: string): Promise<AgentResponse> {
    return apiFetch<AgentResponse>(`/api/agents/${id}`);
}

export async function getChannels(): Promise<ChannelsResponse> {
    return apiFetch<ChannelsResponse>('/api/channels');
}

export async function getSessions(): Promise<SessionsResponse> {
    return apiFetch<SessionsResponse>('/api/sessions');
}

export async function getPm2Status(): Promise<Pm2StatusResponse> {
    return apiFetch<Pm2StatusResponse>('/api/pm2/status');
}

export async function getLogs(): Promise<LogsResponse> {
    return apiFetch<LogsResponse>('/api/logs');
}

export async function getCronJobs(): Promise<CronJobsResponse> {
    return apiFetch<CronJobsResponse>('/api/cron');
}

export async function getWorkspaceFiles(): Promise<WorkspaceFilesResponse> {
    return apiFetch<WorkspaceFilesResponse>('/api/workspace');
}

export async function getWorkspaceFile(filename: string): Promise<WorkspaceFileResponse> {
    return apiFetch<WorkspaceFileResponse>(`/api/workspace/${filename}`);
}

export async function getHealth(): Promise<{ status: string }> {
    return apiFetch<{ status: string }>('/health');
}

export async function checkApiHealth(): Promise<boolean> {
    try {
        const res = await getHealth();
        return res.status === 'ok';
    } catch (error) {
        return false;
    }
}
