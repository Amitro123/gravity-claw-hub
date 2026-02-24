import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { usageToday, usageDaily } from "@/data/mock-data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { AlertTriangle } from "lucide-react";

const COLORS = ["hsl(160,84%,39%)", "hsl(217,91%,60%)"];

const pieData = usageToday.map((u) => ({ name: u.provider, value: u.totalTokens }));

const UsagePage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Usage</h1>

    {/* Budget alert */}
    <div className="flex items-center gap-3 rounded-lg border border-warning/30 bg-warning/10 p-4">
      <AlertTriangle className="h-5 w-5 text-warning shrink-0" />
      <div>
        <p className="text-sm font-medium">Budget Alert</p>
        <p className="text-sm text-muted-foreground">You've used 80% of your $100 monthly limit ($80.45 spent)</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Token usage chart */}
      <Card>
        <CardHeader><CardTitle className="text-lg">Daily Token Usage</CardTitle></CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={usageDaily}>
              <XAxis dataKey="date" tick={{ fill: "hsl(0,0%,55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(0,0%,55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(0,0%,7%)", border: "1px solid hsl(0,0%,14%)", borderRadius: 8 }} />
              <Bar dataKey="tokens" fill="hsl(160,84%,39%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Cost chart */}
      <Card>
        <CardHeader><CardTitle className="text-lg">Daily Cost</CardTitle></CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usageDaily}>
              <XAxis dataKey="date" tick={{ fill: "hsl(0,0%,55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(0,0%,55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(0,0%,7%)", border: "1px solid hsl(0,0%,14%)", borderRadius: 8 }} />
              <Line type="monotone" dataKey="cost" stroke="hsl(217,91%,60%)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Provider breakdown pie */}
      <Card>
        <CardHeader><CardTitle className="text-lg">Provider Breakdown</CardTitle></CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(0,0%,7%)", border: "1px solid hsl(0,0%,14%)", borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Provider table */}
      <Card>
        <CardHeader><CardTitle className="text-lg">Provider Costs</CardTitle></CardHeader>
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
    </div>
  </div>
);

export default UsagePage;
