export interface PracticeConfig {
  psychologistName: string;
  doctorTitle: string;
  credentials: string;
  degree: string;
  university: string;
  yearsLicensed: string;
  yearsAssessment: string;
  orientation: string;
  practiceType: string;
  licenseNumber: string;
  licensedJurisdictions: string[];
  practiceName: string;
  email: string;
  phone: string;
  consultationDetails: string;
  sessionLength: string;
  fees: string;
  insurancePolicy: string;
  superbillPolicy: string;
  schedulingURL: string;
  professionalPhoto: string;
  officeAddress: string;
  privacyPolicyURL: string;
  noticeOfPrivacyPracticesURL: string;
  emergencyDisclaimer: string;
  professionalAffiliations: string[];
  meta: {
    title: string;
    description: string;
    siteUrl: string;
  };
}

export const practiceConfig: PracticeConfig = {
  psychologistName: "Dr. Antonia B. Krimitsos",
  doctorTitle: "Dr. Antonia B. Krimitsos, PsyD",
  credentials: "PsyD · Licensed Psychologist",
  degree: "Doctor of Psychology (PsyD)",
  university: "George Washington University",
  yearsLicensed: "21+",
  yearsAssessment: "15+",
  orientation: "Psychodynamic Psychotherapy",
  practiceType: "Intimate Telehealth Practice",
  licenseNumber: "[TO BE PROVIDED]",
  licensedJurisdictions: ["[STATE 1 - TO BE PROVIDED]", "[STATE 2 - TO BE PROVIDED]"],
  practiceName: "abk psychological services, pllc",
  email: "dr.antonia@abkpsych.com",
  phone: "(555) 000-0000",
  consultationDetails: "Direct 15-minute preliminary consultation with Dr. Krimitsos",
  sessionLength: "45–50 minutes",
  fees: "[TO BE PROVIDED]",
  insurancePolicy: "Out-of-network private practice. Direct billing to insurance is not provided.",
  superbillPolicy: "Monthly superbills provided for out-of-network insurance reimbursement.",
  schedulingURL: "#contact",
  professionalPhoto: "/images/doctor-portrait.png",
  officeAddress: "100% Telehealth Practice",
  privacyPolicyURL: "/privacy",
  noticeOfPrivacyPracticesURL: "/privacy#notice",
  emergencyDisclaimer: "This site is for non-urgent administrative inquiries and does not establish a clinical relationship. In a crisis or emergency, call 988, call 911, or visit the nearest emergency room immediately.",
  professionalAffiliations: [
    "American Psychological Association (APA)",
    "[State Psychological Association - TO BE PROVIDED]",
  ],
  meta: {
    title: "abk psychological services, pllc | Dr. Antonia B. Krimitsos, PsyD",
    description: "Intimate, one-on-one telehealth psychotherapy for adults, parents, partners, and families navigating autism diagnosis, identity, and relationships. Led directly by Dr. Antonia B. Krimitsos.",
    siteUrl: "https://www.abkpsych.com",
  },
};

export interface AudienceInfo {
  id: string;
  title: string;
  subtitle: string;
  anchor: string;
  summary: string;
  description: string;
  keyThemes: string[];
  quote: string;
}

export const audienceData: AudienceInfo[] = [
  {
    id: "adults",
    title: "Autistic Adults",
    subtitle: "Identity, masking & self-understanding",
    anchor: "#adults",
    summary: "For adults newly diagnosed, self-identified, or re-examining life through an autistic lens.",
    description: "An adult diagnosis brings clarity alongside complex questions about past masking, burnout, relationships, and authentic self-acceptance.",
    keyThemes: [
      "Re-examining past memories through a neurodiversity lens",
      "Navigating masking, energetic burnout, and boundaries",
      "Fostering authentic self-advocacy and self-compassion",
      "Processing relief, grief, and identity changes",
    ],
    quote: "A quiet space to integrate your diagnosis into an authentic, compassionate identity.",
  },
  {
    id: "parents",
    title: "Parents of Autistic Children",
    subtitle: "Space for the parent's own emotional life",
    anchor: "#parents",
    summary: "Dedicated therapy for parents to process their own feelings, expectations, and family dynamics.",
    description: "Parents deserve their own reflective space—separate from child treatments—to process changing expectations, emotional fatigue, and relationship dynamics.",
    keyThemes: [
      "Processing the emotional impact of a child's diagnostic evaluation",
      "Re-evaluating parenting dreams, expectations, and family roles",
      "Balancing child advocacy with your own emotional well-being",
      "Navigating extended family relationships and social pressures",
    ],
    quote: "You deserve a therapeutic space focused on your experience as a person and parent.",
  },
  {
    id: "partners",
    title: "Spouses & Partners",
    subtitle: "Communication & relationship dynamics",
    anchor: "#partners",
    summary: "Navigating relationship patterns, intimacy, and mutual understanding in neurodiverse partnerships.",
    description: "Therapy helps partners understand sensory needs, emotional processing differences, and communication patterns without blame.",
    keyThemes: [
      "Understanding communication breakdowns without assigning blame",
      "Navigating sensory, emotional, and social processing differences",
      "Re-evaluating relationship expectations with mutual clarity",
      "Fostering intimacy and sustainable emotional connection",
    ],
    quote: "Moving past frustration into curious, respectful relational connection.",
  },
  {
    id: "siblings",
    title: "Siblings & Family",
    subtitle: "Family roles & adult boundaries",
    anchor: "#siblings",
    summary: "Exploring family dynamics, unspoken roles, and personal identity in families affected by autism.",
    description: "Adult siblings often carry unspoken emotional roles. Therapy offers a place to explore your own story within the family system.",
    keyThemes: [
      "Unpacking early family expectations and 'glass child' experiences",
      "Navigating adult responsibilities, guilt, and healthy boundaries",
      "Creating space for your own identity separate from family roles",
    ],
    quote: "Your place in the family story matters. Therapy honors your experience.",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services & Fit" | "Fees & Insurance" | "Telehealth";
}

export const faqData: FAQItem[] = [
  {
    id: "who-do-you-work-with",
    category: "Services & Fit",
    question: "Who does Dr. Krimitsos work with?",
    answer: "Dr. Krimitsos works directly with adults navigating autism diagnosis, parents of autistic children, spouses and partners in neurodiverse relationships, and adult family members.",
  },
  {
    id: "small-practice-intimacy",
    category: "General",
    question: "What makes ABK Psychological Services an intimate practice?",
    answer: "ABK Psychological Services, PLLC is a small, direct private practice. You work exclusively and directly with Dr. Antonia B. Krimitsos—without associates, administrative middle layers, or group handoffs.",
  },
  {
    id: "do-you-provide-assessments",
    category: "Services & Fit",
    question: "Do you offer diagnostic autism assessments?",
    answer: "This practice focuses exclusively on psychotherapy. Dr. Krimitsos brings over 15 years of early-childhood autism assessment experience into therapy, but does not offer formal diagnostic testing here.",
  },
  {
    id: "what-is-psychodynamic",
    category: "General",
    question: "What is psychodynamic psychotherapy?",
    answer: "A reflective approach that explores how past experiences, attachments, and emotional patterns shape your current life and relationships—focusing on self-understanding rather than rigid symptom checklists.",
  },
  {
    id: "telehealth-details",
    category: "Telehealth",
    question: "How is telehealth therapy conducted?",
    answer: "All sessions are held via a secure, confidential video platform, allowing you to engage in therapy from the comfort and sensory safety of your home.",
  },
  {
    id: "fees-and-payment",
    category: "Fees & Insurance",
    question: "What are your fees and insurance policies?",
    answer: "This is an out-of-network private practice. Fees are discussed transparently during consultation. Monthly superbills are provided for insurance reimbursement upon request.",
  },
  {
    id: "how-to-get-started",
    category: "General",
    question: "How do I get started?",
    answer: "Submit a brief inquiry on our contact page. Dr. Krimitsos will follow up directly to schedule a 15-minute preliminary consultation.",
  },
];
