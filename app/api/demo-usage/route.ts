import { NextRequest, NextResponse } from "next/server";
import { checkDemoQuota } from "@/lib/rate-limit";
import { DEMO_TYPES, type DemoType } from "@/lib/constants";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const demoType = searchParams.get("type");

    if (
      !demoType ||
      !Object.values(DEMO_TYPES).includes(demoType as DemoType)
    ) {
      return NextResponse.json({ error: "Invalid demo type" }, { status: 400 });
    }

    const quota = await checkDemoQuota(demoType);
    return NextResponse.json(quota);
  } catch (error) {
    console.error("Demo usage API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
