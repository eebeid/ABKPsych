export interface PracticeConfig {
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
  practiceType: string;
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
  boundaryDisclaimer: string;
  meta: {
    title: string;
    description: string;
    siteUrl: string;
  };
}

export const practiceConfig: PracticeConfig = {
  psychologistName: "Dr. Antonia B. Krimitsos",
  doctorTitle: "Dr. Antonia B. Krimitsos, Psy.D.",
  credentials: "Licensed Psychologist",
  degree: "Psy.D., Clinical Psychology",
  university: "The George Washington University · Washington, DC",
  internship: "Lenox Hill Hospital · New York, NY",
  bachelors: "B.A., Biology-Psychology · Skidmore College, NY",
  licensure: "Licensed Psychologist, New York State",
  yearsLicensed: "20+",
  yearsAssessment: "20+",
  practiceType: "Intentionally Small, Direct-Service Practice",
  practiceName: "ABK Psychological Services, PLLC",
  email: "dr.antonia@abkpsych.com",
  phone: "(555) 000-0000",
  consultationDetails: "Direct preliminary consultation with Dr. Krimitsos",
  sessionLength: "45–50 minutes",
  fees: "Private, direct-service practice. Details provided upon consultation.",
  insurancePolicy: "Services are provided privately and directly. Out-of-network superbills provided upon request.",
  superbillPolicy: "Monthly superbills provided for out-of-network insurance reimbursement.",
  schedulingURL: "#contact",
  professionalPhoto: "/images/doctor-portrait-v2.png",
  officeAddress: "Telehealth Psychotherapy Practice",
  privacyPolicyURL: "/privacy",
  noticeOfPrivacyPracticesURL: "/privacy#notice",
  emergencyDisclaimer: "This site is for non-urgent administrative inquiries and does not establish a clinical relationship. In a mental health emergency, please call 988, call 911, or visit your nearest emergency room immediately.",
  boundaryDisclaimer: "To maintain clear professional boundaries and avoid conflicts of interest, I do not provide private services to individuals or family members with whom I have an existing professional relationship through another organization.",
  meta: {
    title: "ABK Psychological Services, PLLC | Dr. Antonia B. Krimitsos",
    description: "Collaborative, reflective, and relational psychotherapy for adolescents, adults, parents, and partners navigating autism, ADHD, and neurodivergence.",
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
  boundaryNote?: string;
  keyThemes: string[];
}

export const audienceData: AudienceInfo[] = [
  {
    id: "individuals",
    title: "Individuals",
    subtitle: "Adolescents & Adults",
    anchor: "#individuals",
    summary: "For those diagnosed as adolescents or adults, or re-examining life through a neurodevelopmental lens.",
    description: "Those diagnosed as adolescents or adults have already spent years learning to compensate, adapt, or mask their difficulties, often becoming highly capable on the outside while expending considerable effort to manage what others cannot see. My practice offers meaningful exploration of questions about identity, relationships, work, and the life you have built around strategies that may no longer serve you. Integrating this new understanding can allow you to move forward with greater clarity about who you are.",
    keyThemes: [
      "Understanding masking, compensation, and energetic burnout",
      "Integrating later-in-life identification into identity and career",
      "Re-examining relational patterns and long-standing compromises",
      "Moving forward with authentic self-clarity and direction",
    ],
  },
  {
    id: "parents",
    title: "Parents",
    subtitle: "Dedicated space for parents",
    anchor: "#parents",
    summary: "Space for parents to process the emotional impact, shifting expectations, and personal grief following a diagnosis.",
    description: "When your child is diagnosed in early or late adolescence, following years of uncertainty, unanswered questions, or challenges that were difficult to understand, parents may also need space to process what has come before. Addressing parental stress and emotional fatigue, while processing the unique grief of shifting expectations, is worthy of the dedicated space of therapy.",
    keyThemes: [
      "Processing years of uncertainty and unanswered questions",
      "Addressing parental stress, exhaustion, and emotional fatigue",
      "Navigating the unique grief of shifting family expectations",
      "Creating dedicated space for your own reflective experience",
    ],
  },
  {
    id: "partners",
    title: "Partners",
    subtitle: "Individual therapy for partners",
    anchor: "#partners",
    summary: "Individual therapy for partners navigating how neurodivergence influences relationship dynamics and intimacy.",
    description: "When neurodivergence enters an adult relationship, whether through a recent diagnosis or a growing recognition of longstanding differences, established perspectives on communication, intimacy, and conflict may shift. Processing how this realization influences the relationship allows for greater understanding of your own needs and experiences within it.",
    boundaryNote: "ABK Psychological Services provides individual psychotherapy for partners, rather than couples or marriage counseling.",
    keyThemes: [
      "Understanding shifts in communication, intimacy, and conflict",
      "Exploring your own needs and boundaries within the relationship",
      "Processing how a partner's diagnosis influences shared dynamics",
      "Reflecting on long-standing relationship patterns without blame",
    ],
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services & Fit" | "Fees & Practice";
}

export const faqData: FAQItem[] = [
  {
    id: "practice-model",
    category: "Services & Fit",
    question: "What is the practice model of ABK Psychological Services?",
    answer: "ABK Psychological Services, PLLC was founded as an intentionally small, direct-service psychotherapy practice. You work directly and exclusively with Dr. Antonia B. Krimitsos, ensuring privacy, consistency, and highly personalized care.",
  },
  {
    id: "who-do-you-work-with",
    category: "Services & Fit",
    question: "Who does Dr. Krimitsos work with?",
    answer: "Dr. Krimitsos works with adolescents and adults navigating autism, ADHD, and broader neurodivergence, as well as parents and partners affected by a loved one's diagnosis or growing recognition of neurodevelopmental differences.",
  },
  {
    id: "couples-counseling",
    category: "Services & Fit",
    question: "Do you offer couples or marriage counseling?",
    answer: "ABK Psychological Services provides individual psychotherapy for partners, rather than couples or marriage counseling. If couples counseling is needed, Dr. Krimitsos can provide referrals.",
  },
  {
    id: "assessments",
    category: "Services & Fit",
    question: "Do you offer diagnostic autism or ADHD testing?",
    answer: "This practice focuses on psychotherapy. While Dr. K brings over two decades of diagnostic assessment experience into therapy, she does not conduct formal diagnostic evaluations through this practice.",
  },
  {
    id: "fees-and-payment",
    category: "Fees & Practice",
    question: "How are fees and billing handled?",
    answer: "Services are provided privately and directly. Out-of-network superbills can be provided monthly for clients seeking reimbursement from their insurance provider.",
  },
  {
    id: "how-to-start",
    category: "General",
    question: "How do I schedule an initial consultation?",
    answer: "You can submit an inquiry via the Contact page or email dr.antonia@abkpsych.com. Dr. K will follow up directly to discuss your needs and schedule an initial consultation.",
  },
];
