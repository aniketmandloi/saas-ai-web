"use client";

import { useState } from "react";
import { DemoTabs } from "./demo-tabs";
import { DemoInterface } from "./demo-interface";
import { UsageIndicator } from "./usage-indicator";
import { type DemoType, DEMO_TYPES } from "@/lib/constants";
import { trackClientEvent } from "@/lib/analytics";
import { ChatHistory } from "@/components/playground/chat-history";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { type ChatMessage } from "@/lib/types";

export function AIPlayground() {
  const [activeDemo, setActiveDemo] = useState<DemoType>(DEMO_TYPES.CHATBOT);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);

  const handleDemoChange = (demo: DemoType) => {
    setActiveDemo(demo);
    setHistory([]);
    trackClientEvent("demo_started", { demo_type: demo });
  };

  const handleNewChat = () => {
    setHistory([]);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4">
          <DemoTabs activeDemo={activeDemo} onTabChange={handleDemoChange} />
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleNewChat}>
              <RefreshCw className="mr-2 h-4 w-4" />
              New Chat
            </Button>
            <UsageIndicator demoType={activeDemo} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">
          <ChatHistory messages={history} loading={loading} />
          <DemoInterface
            type={activeDemo}
            loading={loading}
            setLoading={setLoading}
            onMessageSent={(message) =>
              setHistory((prev) => [...prev, message])
            }
          />
        </div>
      </div>
    </div>
  );
}
