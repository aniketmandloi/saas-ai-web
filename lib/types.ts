import { WaitlistSubscriber, DemoUsage, NewsletterSubscriber } from "@/types";

// Re-export types from Prisma
export type { WaitlistSubscriber, DemoUsage, NewsletterSubscriber };

// Additional types for database operations
export interface WaitlistSignupData {
  email: string;
  source?: string;
  referrer?: string;
  ipAddress?: string;
}

export interface DemoUsageData {
  ipAddress: string;
  demoType: string;
  sessionId?: string;
}

export interface NewsletterSignupData {
  email: string;
  source?: string;
}

export interface DemoQuotaResult {
  allowed: boolean;
  remaining: number;
  total: number;
  resetAt?: Date;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
