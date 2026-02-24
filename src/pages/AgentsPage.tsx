import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { agents } from "@/data/mock-data";
import { Pause, Play, Search, Settings } from "lucide-react";

const statusIndicator: Record<string, { dot: string; label: string; badge: string }> = {
  online: { dot: "bg-success", label: "Online", badge: "bg-success/20 text-success" },
  degraded: { dot: "bg-warning", label: "Degraded", badge: "bg-warning/20 text-warning" },
  offline: { dot: "bg-destructive", label: "Offline", badge: "bg-destructive/20 text-destructive" },
};

const AgentsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Agents</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((a) => {
        const s = statusIndicator[a.status];
        return (
          <Card key={a.id} className="hover:border-primary/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                <CardTitle className="text-base">{a.name}</CardTitle>
              </div>
              <Badge className={s.badge} variant="secondary">{s.label}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Model:</span> <span>{a.model}</span></div>
                <div><span className="text-muted-foreground">Uptime:</span> <span>{a.uptime}</span></div>
                <div><span className="text-muted-foreground">Cost:</span> <span className="text-success">${a.costToday.toFixed(2)}</span></div>
                <div className="col-span-2"><span className="text-muted-foreground">Task:</span> <span>{a.recentTask}</span></div>
              </div>
              <div className="flex gap-2 pt-1">
                <Button variant="outline" size="sm" className="flex-1">
                  {a.status === "online" ? <><Pause className="h-3 w-3 mr-1" />Pause</> : <><Play className="h-3 w-3 mr-1" />Resume</>}
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8"><Search className="h-3 w-3" /></Button>
                <Button variant="outline" size="icon" className="h-8 w-8"><Settings className="h-3 w-3" /></Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
);

export default AgentsPage;
