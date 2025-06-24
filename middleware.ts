import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "./lib/rate-limit";
import { getClientIP } from "./lib/rate-limit";

// Apply rate limiting middleware to specific routes
export async function middleware(request: NextRequest) {
  // Only apply rate limiting to demo API routes
  if (request.nextUrl.pathname.startsWith("/api/demo/")) {
    const ip = getClientIP();
    const demoType = request.nextUrl.pathname.split("/").pop() || "unknown";
    const key = `${ip}:${demoType}`;

    // Check rate limit
    const { success, limit, remaining } = await rateLimiter.limit(key);

    // If rate limit exceeded, return 429 Too Many Requests
    if (!success) {
      return new NextResponse(
        JSON.stringify({
          error: "Rate limit exceeded",
          limit,
          remaining,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
          },
        }
      );
    }
  }

  return NextResponse.next();
}

// Configure which routes this middleware applies to
export const config = {
  matcher: ["/api/demo/:path*"],
};
