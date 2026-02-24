import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/mock-data";
import { FolderKanban, Bot, ListTodo, DollarSign } from "lucide-react";

const ProjectsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((p) => (
        <Card key={p.id} className="hover:border-primary/30 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">{p.name}</CardTitle>
            </div>
            <Badge variant={p.status === "active" ? "default" : "secondary"}>
              {p.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Bot className="h-3.5 w-3.5" />{p.agentCount} agents</span>
              <span className="flex items-center gap-1"><ListTodo className="h-3.5 w-3.5" />{p.taskCount} tasks</span>
              <span className="flex items-center gap-1 text-success"><DollarSign className="h-3.5 w-3.5" />${p.cost.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ProjectsPage;
