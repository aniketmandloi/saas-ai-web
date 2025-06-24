export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
  lastUpdated: string;
}

export interface DemoUsage {
  demoType: string;
  usageCount: number;
  lastUsed: Date;
  remaining: number;
}

export interface WaitlistSubscriber {
  id: string;
  email: string;
  createdAt: Date;
  source?: string;
  referrer?: string;
}

export interface NewsletterSubscriber {
  email: string;
  source?: string;
  active: boolean;
}

export type DemoType = "chatbot" | "generator" | "summarizer";

export interface AnalyticsEvent {
  eventName: string;
  properties: Record<string, unknown>;
  timestamp: Date;
  userAgent?: string;
  referer?: string;
  ipAddress?: string;
}
