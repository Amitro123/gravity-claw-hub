import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { systemInfo } from "@/data/mock-data";
import { Cpu, HardDrive, MemoryStick, RotateCcw } from "lucide-react";

const statusBadge: Record<string, string> = {
  online: "bg-success/20 text-success",
  stopped: "bg-destructive/20 text-destructive",
  errored: "bg-warning/20 text-warning",
};

const OSPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">OS Monitor</h1>

    {/* System gauges */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { label: "CPU", value: systemInfo.cpu, icon: Cpu },
        { label: "Memory", value: systemInfo.memory, icon: MemoryStick },
        { label: "Disk", value: systemInfo.disk, icon: HardDrive },
      ].map((g) => (
        <Card key={g.label}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{g.label}</CardTitle>
            <g.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{g.value}%</div>
            <Progress value={g.value} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>

    {/* PM2 processes */}
    <Card>
      <CardHeader><CardTitle className="text-lg">PM2 Processes</CardTitle></CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">CPU %</TableHead>
              <TableHead className="text-right">Memory (MB)</TableHead>
              <TableHead className="text-right">Uptime</TableHead>
              <TableHead className="text-right">Restarts</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {systemInfo.processes.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium font-mono text-sm">{p.name}</TableCell>
                <TableCell><Badge className={statusBadge[p.status]} variant="secondary">{p.status}</Badge></TableCell>
                <TableCell className="text-right text-muted-foreground">{p.cpu}</TableCell>
                <TableCell className="text-right text-muted-foreground">{p.memory}</TableCell>
                <TableCell className="text-right text-muted-foreground">{p.uptime}</TableCell>
                <TableCell className="text-right">{p.restarts}</TableCell>
                <TableCell><Button variant="ghost" size="icon" className="h-8 w-8"><RotateCcw className="h-3.5 w-3.5" /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    {/* Logs */}
    <Card>
      <CardHeader><CardTitle className="text-lg">System Logs</CardTitle></CardHeader>
      <CardContent>
        <div className="bg-background rounded-md p-4 font-mono text-xs space-y-1 max-h-64 overflow-auto">
          {systemInfo.logs.map((log, i) => (
            <div key={i} className={`${log.includes("ERROR") ? "text-destructive" : "text-muted-foreground"}`}>
              {log}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default OSPage;
