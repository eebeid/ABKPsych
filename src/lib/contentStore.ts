import fs from "fs";
import path from "path";
import { practiceConfig, audienceData, faqData } from "@/config/practiceConfig";

// Stored outside .next so it survives builds
const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");

export type EditableContent = {
  // ── Practice meta ──
  themePalette: string;
  headingFont: string;
  bodyFont: string;
  practiceName: string;
  psychologistName: string;
  doctorTitle: string;
  credentials: string;
  degree: string;
  university: string;
  internship: string;
  bachelors: string;
  licensure: string;
  yearsLicensed: string;
  yearsAssessment: string;
  email: string;
  phone: string;
  officeAddress: string;
  sessionLength: string;
  fees: string;
  insurancePolicy: string;
  superbillPolicy: string;
  consultationDetails: string;
  emergencyDisclaimer: string;
  boundaryDisclaimer: string;
  // ── Home page ──
  heroHeadline: string;
  heroTagline: string;
  heroIntro: string;
  practiceHighlightHeadline: string;
  practiceHighlightBody: string;
  whoIWorkWithIntro: string;
  clinicalDistinctionHeadline: string;
  clinicalDistinctionPara1: string;
  clinicalDistinctionPara2: string;
  ctaHeadline: string;
  ctaBody: string;
  // ── Page Titles ──
  aboutTitle: string;
  whoIWorkWithTitle: string;
  faqTitle: string;
  contactTitle: string;
  // ── About page ──
  aboutSubtitle: string;
  aboutOpening: string;
  aboutPara1: string;
  aboutQuote: string;
  aboutPara2: string;
  aboutPara3: string;
  // ── Footer ──
  footerBlurb: string;
  footerPracticeModelHeading: string;
  footerPracticeModelItems: string[];
  footerDisclaimerHeading: string;
  footerDisclaimerBody: string;
  footerCopyright: string;
  // ── SEO ──
  metaTitle: string;
  metaDescription: string;
  // ── FAQ ──
  faq: {
    id: string;
    category: string;
    question: string;
    answer: string;
  }[];
  // ── Audiences ──
  audiences: {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    description: string;
    keyThemes: string[];
    boundaryNote?: string;
  }[];
};

export const CONTENT_FILE_PATH = CONTENT_FILE;

export function defaultContent(): EditableContent {
  return {
    // Practice meta
    themePalette: "taupe",
    headingFont: "default",
    bodyFont: "default",
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
    practiceHighlightHeadline: "An intentionally small practice.",
    practiceHighlightBody:
      "abk psychological services, pllc was founded as an intentionally small, direct-service practice, ensuring consistent and highly personalized care.",
    whoIWorkWithIntro:
      "Trying to make sense of a later-in-life neurodevelopmental diagnosis, whether your own or that of someone you love, can feel especially disorienting. It often brings a complex mix of clarity, validation, relief, grief, and uncertainty.",
    clinicalDistinctionHeadline:
      "Clinical depth grounded in both assessment and psychotherapy.",
    clinicalDistinctionPara1:
      "For more than two decades, I have worked across two closely connected areas of clinical practice: neurodevelopmental assessment and psychotherapy.",
    clinicalDistinctionPara2:
      "My work as a diagnostician in education and as a psychotherapist in private practice has given me a particular appreciation for how and when developmental differences such as autism and ADHD are recognized—and what can happen when they are not.",
    ctaHeadline: "Schedule an Initial Consultation",
    ctaBody:
      "Connect directly with Dr. Krimitsos to discuss psychotherapy for yourself, your child, or your relationship in a thoughtful, confidential setting.",
    // Page Titles
    aboutTitle: `About ${practiceConfig.practiceName}`,
    whoIWorkWithTitle: "Core Areas",
    faqTitle: "Frequently Asked Questions",
    contactTitle: "Inquiries",
    // About page
    aboutSubtitle:
      "Bringing together over 20+ years of clinical experience in diagnosis and psychotherapy.",
    aboutOpening:
      "ABK Psychological Services grew from seeing a particular gap: adolescents and adults whose neurodevelopmental differences were not being identified in childhood.",
    aboutPara1:
      "Many have learned to compensate, adapt, or mask well enough, but often, the strategies that made that possible become harder to sustain as life becomes more demanding. In turn, those closest to them frequently share in the impact of those crumbling strategies.",
    aboutQuote: "I developed ABK to meet that moment.",
    aboutPara2:
      "I wanted to create a practice that brings together over 20 years of experience in diagnosis and psychotherapy, with an understanding that later-life identification is not simply about putting a name to longstanding difficulties.",
    aboutPara3:
      "It can also be an opportunity to re-examine the life already lived, individually and together, with a clearer understanding of what has been difficult, what has helped, and what may need to change going forward.",
    // Footer
    footerBlurb:
      "An intentionally small, direct-service psychotherapy practice for adolescents, adults, parents, and partners.",
    footerPracticeModelHeading: "Practice Model",
    footerPracticeModelItems: [
      "Intentionally Small & Direct Service",
      "Direct Care with Dr. Krimitsos",
      "Personalized, Confidential Psychotherapy",
      "Out-of-Network Superbills Provided",
    ],
    footerDisclaimerHeading: "Important Disclaimer",
    footerDisclaimerBody:
      "Submitting an inquiry does not establish a therapist-client relationship. In a crisis or mental health emergency, please call <strong>988</strong> or visit an emergency room immediately.",
    footerCopyright: "",
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

export function readContent(): EditableContent | null {
  try {
    if (!fs.existsSync(CONTENT_FILE)) return null;
    const raw = fs.readFileSync(CONTENT_FILE, "utf-8");
    return JSON.parse(raw) as EditableContent;
  } catch {
    return null;
  }
}

export function getContent(): EditableContent {
  const defaults = defaultContent();
  const saved = readContent();
  if (!saved) return defaults;
  return {
    ...defaults,
    ...saved,
    faq: saved.faq && saved.faq.length > 0 ? saved.faq : defaults.faq,
    audiences: saved.audiences && saved.audiences.length > 0 ? saved.audiences : defaults.audiences,
  };
}

export function writeContent(data: EditableContent): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2), "utf-8");
}
