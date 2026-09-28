import { NextRequest, NextResponse } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/adminAuth";
import { readContent, writeContent } from "@/lib/contentStore";
import { practiceConfig, audienceData, faqData } from "@/config/practiceConfig";
import type { EditableContent } from "@/lib/contentStore";

async function isAuthenticated(req: NextRequest): Promise<boolean> {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

// Build default editable content from the static config (used if no overrides saved yet)
function defaultContent(): EditableContent {
  return {
    practiceName: practiceConfig.practiceName,
    psychologistName: practiceConfig.psychologistName,
    doctorTitle: practiceConfig.doctorTitle,
    credentials: practiceConfig.credentials,
    email: practiceConfig.email,
    phone: practiceConfig.phone,
    officeAddress: practiceConfig.officeAddress,
    sessionLength: practiceConfig.sessionLength,
    fees: practiceConfig.fees,
    insurancePolicy: practiceConfig.insurancePolicy,
    superbillPolicy: practiceConfig.superbillPolicy,
    consultationDetails: practiceConfig.consultationDetails,
    emergencyDisclaimer: practiceConfig.emergencyDisclaimer,
    boundaryDisclaimer: practiceConfig.boundaryDisclaimer,
    metaTitle: practiceConfig.meta.title,
    metaDescription: practiceConfig.meta.description,
    faq: faqData.map((f) => ({
      id: f.id,
      category: f.category,
      question: f.question,
      answer: f.answer,
    })),
    audiences: audienceData.map((a) => ({
      id: a.id,
      title: a.title,
      subtitle: a.subtitle,
      summary: a.summary,
      description: a.description,
      keyThemes: a.keyThemes,
      boundaryNote: a.boundaryNote,
    })),
  };
}

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const saved = readContent();
  return NextResponse.json(saved ?? defaultContent());
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: EditableContent = await req.json();
  writeContent(body);
  return NextResponse.json({ ok: true });
}
