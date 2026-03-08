import {
  LayoutDashboard,
  FolderKanban,
  Bot,
  ListTodo,
  BarChart3,
  Search,
  Youtube,
  Monitor,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ApiStatusBadge } from "@/components/ApiStatusBadge";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "Agents", url: "/agents", icon: Bot },
  { title: "Tasks", url: "/tasks", icon: ListTodo },
  { title: "Usage", url: "/usage", icon: BarChart3 },
  { title: "Traces", url: "/traces", icon: Search },
  { title: "YouTube", url: "/youtube", icon: Youtube },
  { title: "OS", url: "/os", icon: Monitor },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">GC</span>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Gravity Claw</h2>
            <p className="text-xs text-muted-foreground">Ops Hub</p>
            <div className="mt-2">
              <ApiStatusBadge />
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      activeClassName="bg-accent text-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
