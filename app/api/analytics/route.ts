import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import { getClientIP } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const { eventName, properties } = await request.json();

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

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to track event:", error);
    return Response.json(
      { success: false, error: "Failed to track event" },
      { status: 500 }
    );
  }
}
