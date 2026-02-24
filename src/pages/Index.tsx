import { DollarSign, Coins, Bot, ListTodo } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dashboardMetrics, usageToday, recentActivity } from "@/data/mock-data";

const metricCards = [
  { title: "Total Cost Today", value: `$${dashboardMetrics.totalCost.toFixed(2)}`, icon: DollarSign, color: "text-success" },
  { title: "Total Tokens", value: `${(dashboardMetrics.totalTokens / 1000).toFixed(1)}k`, icon: Coins, color: "text-info" },
  { title: "Active Agents", value: `${dashboardMetrics.activeAgents}/${dashboardMetrics.totalAgents}`, icon: Bot, color: "text-success" },
  { title: "Open Tasks", value: String(dashboardMetrics.openTasks), icon: ListTodo, color: "text-warning" },
];

const statusColor: Record<string, string> = {
  success: "bg-success/20 text-success",
  running: "bg-info/20 text-info",
  error: "bg-destructive/20 text-destructive",
};

const Index = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((m) => (
          <Card key={m.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{m.title}</CardTitle>
              <m.icon className={`h-4 w-4 ${m.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{m.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Provider Stats */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Provider Stats</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Provider</TableHead>
                  <TableHead className="text-right">Input</TableHead>
                  <TableHead className="text-right">Output</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usageToday.map((u) => (
                  <TableRow key={u.provider}>
                    <TableCell className="font-medium">{u.provider}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{(u.inputTokens / 1000).toFixed(1)}k</TableCell>
                    <TableCell className="text-right text-muted-foreground">{(u.outputTokens / 1000).toFixed(1)}k</TableCell>
                    <TableCell className="text-right">{(u.totalTokens / 1000).toFixed(1)}k</TableCell>
                    <TableCell className="text-right text-success">${u.cost.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Recent Activity</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-sm">{a.agent}</span>
                    <span className="text-muted-foreground text-sm">{a.task}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={statusColor[a.status]} variant="secondary">
                      {a.status === "success" ? "✓ Done" : a.status === "running" ? "⟳ Running" : "✗ Error"}
                    </Badge>
                    <span className="text-xs text-muted-foreground w-14 text-right">{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
