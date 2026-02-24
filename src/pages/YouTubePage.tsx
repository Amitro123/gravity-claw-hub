import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { youtubeResults } from "@/data/mock-data";
import { Search, Download } from "lucide-react";

const YouTubePage = () => {
  const [query, setQuery] = useState("AI workshops for beginners");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">YouTube Research</h1>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            placeholder="Search YouTube..."
          />
        </div>
        <Button>Search</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead className="text-right">Duration</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {youtubeResults.map((v) => (
                <TableRow key={v.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-sm">{v.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{v.transcript}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{v.channel}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{v.duration}</TableCell>
                  <TableCell className="text-right">{v.views}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-3.5 w-3.5" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default YouTubePage;
