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

function defaultContent(): EditableContent {
  return {
    // Practice meta
    practiceName: practiceConfig.practiceName,
    psychologistName: practiceConfig.psychologistName,
    doctorTitle: practiceConfig.doctorTitle,
    credentials: practiceConfig.credentials,
    degree: practiceConfig.degree,
    university: practiceConfig.university,
    internship: practiceConfig.internship,
    bachelors: practiceConfig.bachelors,
    licensure: practiceConfig.licensure,
    yearsLicensed: practiceConfig.yearsLicensed,
    yearsAssessment: practiceConfig.yearsAssessment,
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
    // Home page
    heroHeadline:
      "Assessment answers one question. Therapy makes room for the questions that follow.",
    heroTagline: "Collaborative. Reflective. Relational.",
    heroIntro:
      "A later-in-development diagnosis of autism, ADHD, or neurodivergence is rarely an ending. More often, it is a beginning that asks new questions of the individual and those closest to them.",
    clinicalDistinctionHeadline:
      "Clinical depth grounded in both assessment and psychotherapy.",
    clinicalDistinctionPara1:
      "For more than two decades, I have worked across two closely connected areas of clinical practice: neurodevelopmental assessment and psychotherapy.",
    clinicalDistinctionPara2:
      "My work as a diagnostician in education and as a psychotherapist in private practice has given me a particular appreciation for how and when developmental differences such as autism and ADHD are recognized—and what can happen when they are not.",
    ctaHeadline: "Schedule an Initial Consultation",
    ctaBody:
      "Connect directly with Dr. Krimitsos to discuss psychotherapy for yourself, your child, or your relationship in a thoughtful, confidential setting.",
    // About page
    aboutOpening:
      "ABK Psychological Services grew from seeing a particular gap: adolescents and adults whose neurodevelopmental differences were not being identified in childhood.",
    aboutPara1:
      "Many have learned to compensate, adapt, or mask well enough, but often, the strategies that made that possible become harder to sustain as life becomes more demanding. In turn, those closest to them frequently share in the impact of those crumbling strategies.",
    aboutQuote: "I developed ABK to meet that moment.",
    aboutPara2:
      "I wanted to create a practice that brings together over 20 years of experience in diagnosis and psychotherapy, with an understanding that later-life identification is not simply about putting a name to longstanding difficulties.",
    aboutPara3:
      "It can also be an opportunity to re-examine the life already lived, individually and together, with a clearer understanding of what has been difficult, what has helped, and what may need to change going forward.",
    // SEO
    metaTitle: practiceConfig.meta.title,
    metaDescription: practiceConfig.meta.description,
    // FAQ
    faq: faqData.map((f) => ({
      id: f.id,
      category: f.category,
      question: f.question,
      answer: f.answer,
    })),
    // Audiences
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
  // Merge saved with defaults so new fields always appear even for existing saves
  return NextResponse.json({ ...defaultContent(), ...(saved ?? {}) });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: EditableContent = await req.json();
  writeContent(body);
  return NextResponse.json({ ok: true });
}
