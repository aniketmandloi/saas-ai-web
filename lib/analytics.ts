import { headers } from "next/headers";
import { prisma } from "./db";
import { getClientIP } from "./rate-limit";

// Event types for type safety
export type AnalyticsEvent =
  | "page_view"
  | "demo_started"
  | "demo_completed"
  | "waitlist_signup"
  | "docs_search"
  | "feature_click"
  | "pricing_view"
  | "purchase_attempt"
  | "purchase_completed";

// Track event server-side
export async function trackEvent(
  eventName: AnalyticsEvent,
  properties: Record<string, string | number | boolean> = {}
) {
  try {
    // Get client information
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const referer = headersList.get("referer") || "";
    const ip = await getClientIP();

    // Store event in database
    await prisma.analyticsEvent.create({
      data: {
        eventName,
        properties: JSON.stringify(properties),
        userAgent,
        referer,
        ipAddress: ip,
        timestamp: new Date(),
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to track event:", error);
    return { success: false, error };
  }
}

// Get analytics data for dashboard
export async function getAnalyticsData(
  startDate: Date,
  endDate: Date = new Date(),
  eventType?: AnalyticsEvent
) {
  const whereClause = eventType
    ? { timestamp: { gte: startDate, lte: endDate }, eventName: eventType }
    : { timestamp: { gte: startDate, lte: endDate } };

  const events = await prisma.analyticsEvent.findMany({
    where: whereClause,
    orderBy: { timestamp: "asc" },
  });

  return events;
}

// Client-side analytics tracking function
export function trackClientEvent(
  eventName: AnalyticsEvent,
  properties: Record<string, string | number | boolean> = {}
) {
  // Send to Google Analytics if available
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties);
  }

  // Send to server for our own analytics
  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventName, properties }),
  }).catch((err) => console.error("Failed to track event:", err));
}
