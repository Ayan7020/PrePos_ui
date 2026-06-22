import { NextRequest, NextResponse } from "next/server";
import { backendClient } from "@/lib/api/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get("authorization");

    const response = await backendClient.post("/api/workspace/create-workspace", body, {
      headers: authHeader ? { authorization: authHeader } : {},
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(error, { status: error.status || 500 });
  }
}
