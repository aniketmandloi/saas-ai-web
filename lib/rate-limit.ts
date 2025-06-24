import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { kv } from "@vercel/kv";
import { prisma } from "./db";
import { headers } from "next/headers";

// Initialize Redis client for rate limiting
// Use Vercel KV if available, otherwise fall back to Upstash Redis
const redis =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? kv
    : new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      });

// Create a rate limiter that allows 5 requests per hour
export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  analytics: true,
  prefix: "ratelimit:demo",
});

// Get client IP address from request headers
export async function getClientIP(): Promise<string> {
  const headersList = await headers();

  // Try different headers to get the client IP
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = headersList.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Default fallback
  return "127.0.0.1";
}

// Check if user has exceeded demo quota
export async function checkDemoQuota(demoType: string): Promise<{
  allowed: boolean;
  remaining: number;
  total: number;
  resetAt: Date | null;
}> {
  const ip = await getClientIP();
  const key = `${ip}:${demoType}`;

  // Check rate limit
  const { success, limit, remaining, reset } = await rateLimiter.limit(key);

  // If successful, also record usage in database for analytics
  if (success) {
    try {
      await recordDemoUsage(demoType);
    } catch (error) {
      console.error("Failed to record demo usage:", error);
      // Continue even if DB recording fails
    }
  }

  return {
    allowed: success,
    remaining,
    total: limit,
    resetAt: reset ? new Date(reset) : null,
  };
}

// Record demo usage in database
export async function recordDemoUsage(
  demoType: string,
  sessionId?: string
): Promise<void> {
  const ip = await getClientIP();
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000);

  // Try to find existing record from this IP for this demo type within the last hour
  const existingUsage = await prisma.demoUsage.findFirst({
    where: {
      ipAddress: ip,
      demoType,
      lastUsed: { gte: hourAgo },
    },
  });

  if (existingUsage) {
    // Update existing record
    await prisma.demoUsage.update({
      where: { id: existingUsage.id },
      data: {
        usageCount: { increment: 1 },
        lastUsed: new Date(),
        sessionId: sessionId || existingUsage.sessionId,
      },
    });
  } else {
    // Create new record
    await prisma.demoUsage.create({
      data: {
        ipAddress: ip,
        demoType,
        sessionId,
        usageCount: 1,
        lastUsed: new Date(),
      },
    });
  }
}
