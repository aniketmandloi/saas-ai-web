import { NextRequest, NextResponse } from "next/server";
import { trackEvent, AnalyticsEvent } from "@/lib/analytics";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, properties } = body;

    // Validate event name
    if (!eventName || typeof eventName !== "string") {
      return NextResponse.json(
        { error: "Invalid event name" },
        { status: 400 }
      );
    }

    // Track the event
    const result = await trackEvent(
      eventName as AnalyticsEvent,
      properties || {}
    );

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to track event" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
