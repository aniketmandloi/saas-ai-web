"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatHistoryProps {
  messages: ChatMessage[];
  loading?: boolean;
}

export function ChatHistory({ messages, loading }: ChatHistoryProps) {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className={cn(
              "flex items-start space-x-4 p-4",
              message.role === "assistant" ? "bg-secondary/50" : "bg-background"
            )}
          >
            <Avatar className="h-8 w-8">
              {message.role === "assistant" ? (
                <Bot className="h-5 w-5" />
              ) : (
                <User className="h-5 w-5" />
              )}
            </Avatar>
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">
                {message.role === "assistant" ? "AI Assistant" : "You"}
              </p>
              <div className="prose prose-sm dark:prose-invert">
                {message.content}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
      {loading && (
        <Card className="flex items-start space-x-4 p-4 bg-secondary/50">
          <Avatar className="h-8 w-8">
            <Bot className="h-5 w-5" />
          </Avatar>
          <div className="flex-1">
            <div className="animate-pulse space-y-2">
              <div className="h-4 w-24 bg-secondary rounded" />
              <div className="h-4 w-full bg-secondary rounded" />
              <div className="h-4 w-2/3 bg-secondary rounded" />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
