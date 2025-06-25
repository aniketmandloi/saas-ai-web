"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { type DemoType } from "@/lib/constants";
import { trackClientEvent } from "@/lib/analytics";
import { type ChatMessage } from "@/lib/types";

interface DemoInterfaceProps {
  type: DemoType;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  onMessageSent: (message: ChatMessage) => void;
}

export function DemoInterface({
  type,
  loading,
  setLoading,
  onMessageSent,
}: DemoInterfaceProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const message = input.trim();
    setInput("");
    onMessageSent({
      role: "user",
      content: message,
      timestamp: new Date(),
    });

    setLoading(true);
    try {
      const response = await fetch("/api/demo-usage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, message }),
      });

      const data = await response.json();
      onMessageSent({
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      });
      trackClientEvent("demo_completed", { demo_type: type });
    } catch (error) {
      console.error("Demo failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "inherit";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  return (
    <motion.div
      className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <form onSubmit={handleSubmit} className="flex space-x-2 p-4">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="min-h-[60px] max-h-[200px] resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button
          type="submit"
          size="icon"
          disabled={loading || !input.trim()}
          className="h-[60px] w-[60px]"
        >
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </form>
    </motion.div>
  );
}
