"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface UsageIndicatorProps {
  demoType: string;
}

interface QuotaInfo {
  remaining: number;
  total: number;
  resetAt: string | null;
}

export function UsageIndicator({ demoType }: UsageIndicatorProps) {
  const [quota, setQuota] = useState<QuotaInfo | null>(null);

  useEffect(() => {
    fetchQuota();
  }, [demoType]);

  const fetchQuota = async () => {
    try {
      const response = await fetch(`/api/demo-usage?type=${demoType}`);
      const data = await response.json();
      setQuota(data);
    } catch (error) {
      console.error("Failed to fetch quota:", error);
    }
  };

  if (!quota) return null;

  const usagePercentage = ((quota.total - quota.remaining) / quota.total) * 100;

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <Progress value={usagePercentage} className="w-32" />
          <span className="text-sm text-muted-foreground">
            {quota.remaining}/{quota.total}
          </span>
        </div>
      </div>
      <Button variant="default" size="sm">
        <Sparkles className="mr-2 h-4 w-4" />
        Upgrade
      </Button>
    </div>
  );
}
