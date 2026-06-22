import { NextRequest, NextResponse } from "next/server";
import { backendClient } from "@/lib/api/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await backendClient.post("/api/auth/login", body);

    const res = NextResponse.json(response.data);

    // Forward Set-Cookie header if present
    const cookieHeader = response.headers["set-cookie"];
    if (cookieHeader) {
      cookieHeader.forEach((cookie) => {
        res.headers.append("Set-Cookie", cookie);
      });
    }

    return res;
  } catch (error: any) {
    return NextResponse.json(error, { status: error.status || 500 });
  }
}
