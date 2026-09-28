import fs from "fs";
import path from "path";

// Stored outside .next so it survives builds
const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");

export type EditableContent = {
  // Practice info
  practiceName: string;
  psychologistName: string;
  doctorTitle: string;
  credentials: string;
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
  // Meta
  metaTitle: string;
  metaDescription: string;
  // FAQ items
  faq: {
    id: string;
    category: string;
    question: string;
    answer: string;
  }[];
  // Audience descriptions
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

export function readContent(): EditableContent | null {
  try {
    if (!fs.existsSync(CONTENT_FILE)) return null;
    const raw = fs.readFileSync(CONTENT_FILE, "utf-8");
    return JSON.parse(raw) as EditableContent;
  } catch {
    return null;
  }
}

export function writeContent(data: EditableContent): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2), "utf-8");
}
