import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { traces } from "@/data/mock-data";
import { ChevronDown, ChevronRight } from "lucide-react";

const statusBadge: Record<string, string> = {
  success: "bg-success/20 text-success",
  error: "bg-destructive/20 text-destructive",
  running: "bg-info/20 text-info",
};

const TracesPage = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Traces</h1>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8" />
                <TableHead>Time</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Task</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Duration</TableHead>
                <TableHead className="text-right">Tokens</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {traces.map((t) => (
                <>
                  <TableRow key={t.id} className="cursor-pointer hover:bg-accent/50" onClick={() => toggle(t.id)}>
                    <TableCell className="px-2">
                      {expanded.has(t.id) ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{t.timestamp}</TableCell>
                    <TableCell className="font-medium">{t.agentName}</TableCell>
                    <TableCell>{t.task}</TableCell>
                    <TableCell>
                      <Badge className={statusBadge[t.status]} variant="secondary">{t.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">{t.duration}</TableCell>
                    <TableCell className="text-right">{t.tokens.toLocaleString()}</TableCell>
                  </TableRow>
                  {expanded.has(t.id) && (
                    <TableRow key={`${t.id}-detail`}>
                      <TableCell colSpan={7} className="bg-accent/30 p-4">
                        <div className="space-y-2 text-sm">
                          <div><span className="text-muted-foreground font-medium">Input:</span> {t.input}</div>
                          <div><span className="text-muted-foreground font-medium">Tool Calls:</span> <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{t.toolCalls}</code></div>
                          <div><span className="text-muted-foreground font-medium">Output:</span> {t.output}</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TracesPage;
