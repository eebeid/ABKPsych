import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { verifyToken, COOKIE_NAME } from "@/lib/adminAuth";
import { getContent, writeContent } from "@/lib/contentStore";
import type { EditableContent } from "@/lib/contentStore";

async function isAuthenticated(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getContent());
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: EditableContent = await req.json();
  writeContent(body);
  // Revalidate the entire site cache so public pages immediately show the updated copy
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
