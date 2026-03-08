import { useEffect, useState } from "react";
import { checkApiHealth } from "@/lib/api";

export function ApiStatusBadge() {
    const [isLive, setIsLive] = useState<boolean | null>(null);

    useEffect(() => {
        let mounted = true;
        checkApiHealth().then((status) => {
            if (mounted) {
                setIsLive(status);
            }
        });

        return () => {
            mounted = false;
        };
    }, []);

    if (isLive === null) {
        return (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
                Checking API...
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 text-sm">
            <div
                className={`h-2 w-2 rounded-full ${isLive ? "bg-green-500" : "bg-red-500"
                    }`}
            />
            <span className={isLive ? "text-green-600" : "text-red-500"}>
                {isLive ? "API Live" : "API Offline"}
            </span>
        </div>
    );
}
