// lib/constants.ts
// Application constants and configuration

// Demo types
export const DEMO_TYPES = {
  CHATBOT: "chatbot",
  CONTENT_GENERATOR: "generator",
  SUMMARIZER: "summarizer",
} as const;

export type DemoType = (typeof DEMO_TYPES)[keyof typeof DEMO_TYPES];

// Rate limiting constants
export const RATE_LIMIT = {
  DEMO_REQUESTS_PER_HOUR: 5,
  DEMO_MAX_TOKENS: 1000,
};

// GitHub repository information
export const GITHUB_REPO = {
  OWNER: process.env.GITHUB_REPO_OWNER || "yourusername",
  NAME: process.env.GITHUB_REPO_NAME || "saas-starter-kit",
  URL: `https://github.com/${process.env.GITHUB_REPO_OWNER || "yourusername"}/${
    process.env.GITHUB_REPO_NAME || "saas-starter-kit"
  }`,
};

// Navigation items
export const NAV_ITEMS = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Docs", href: "/docs" },
  { title: "Playground", href: "/playground" },
  { title: "Blog", href: "/blog" },
];

// Feature list for marketing
export const FEATURES = [
  {
    title: "Authentication",
    description:
      "Complete auth system with social logins, email verification, and role-based access.",
    icon: "lock",
  },
  {
    title: "AI Integration",
    description:
      "Pre-built AI components for chatbots, content generation, and text summarization.",
    icon: "brain",
  },
  {
    title: "Payments",
    description:
      "Subscription management with Stripe integration and usage-based billing.",
    icon: "credit-card",
  },
  {
    title: "Team Collaboration",
    description: "Multi-user workspaces with real-time collaboration features.",
    icon: "users",
  },
  {
    title: "Analytics",
    description:
      "Built-in analytics dashboard to track user engagement and conversion.",
    icon: "bar-chart",
  },
  {
    title: "API Access",
    description:
      "RESTful and GraphQL APIs with rate limiting and authentication.",
    icon: "code",
  },
];

// Social media links
export const SOCIAL_LINKS = {
  TWITTER: "https://twitter.com/yourusername",
  GITHUB: GITHUB_REPO.URL,
  DISCORD: "https://discord.gg/yourdiscord",
};

// SEO defaults
export const SEO_DEFAULTS = {
  title: "SaaS Starter Kit",
  description: "Production-ready SaaS starter kit with AI capabilities",
  siteName: "SaaS Starter Kit",
  url: process.env.NEXT_PUBLIC_URL || "https://saas-starter-kit.com",
};
