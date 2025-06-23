export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
}

export interface DemoUsage {
  demoType: string;
  usageCount: number;
  lastUsed: Date;
  remaining: number;
}

export interface WaitlistSubscriber {
  email: string;
  source: string;
  referrer?: string;
}

export interface NewsletterSubscriber {
  email: string;
  source?: string;
  active: boolean;
}
