"use client";

import { cn } from "@/lib/utils";
import { type DemoType, DEMO_TYPES } from "@/lib/constants";
import { MessageSquare, Wand2, FileText } from "lucide-react";

interface DemoTabsProps {
  activeDemo: DemoType;
  onTabChange: (demo: DemoType) => void;
}

const demoIcons = {
  [DEMO_TYPES.CHATBOT]: MessageSquare,
  [DEMO_TYPES.GENERATOR]: Wand2,
  [DEMO_TYPES.SUMMARIZER]: FileText,
};

export function DemoTabs({ activeDemo, onTabChange }: DemoTabsProps) {
  return (
    <div className="flex space-x-1">
      {Object.values(DEMO_TYPES).map((demo) => {
        const Icon = demoIcons[demo];
        return (
          <button
            key={demo}
            onClick={() => onTabChange(demo)}
            className={cn(
              "flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium",
              activeDemo === demo
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/80"
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{demo}</span>
          </button>
        );
      })}
    </div>
  );
}
