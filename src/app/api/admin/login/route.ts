import { NextRequest, NextResponse } from "next/server";
import { ADMIN_USERNAME, ADMIN_PASSWORD, signToken, COOKIE_NAME } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await signToken(username);

  const isHttps =
    req.headers.get("x-forwarded-proto") === "https" ||
    req.nextUrl.protocol === "https:";

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isHttps,
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });
  return res;
}
