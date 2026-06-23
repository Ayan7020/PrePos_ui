import { NextRequest, NextResponse } from "next/server";
import { backendClient } from "@/lib/api/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await backendClient.post("/api/workspace/create-workspace", body);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(error, { status: error.status || 500 });
  }
}
