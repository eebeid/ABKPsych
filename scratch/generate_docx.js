const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
} = require("docx");

async function generateDocx() {
  const doc = new Document({
    styles: {
      default: {
        heading1: {
          run: {
            font: "Georgia",
            size: 36,
            bold: true,
            color: "2C302E",
          },
          paragraph: {
            spacing: { before: 400, after: 200 },
          },
        },
        heading2: {
          run: {
            font: "Georgia",
            size: 28,
            bold: true,
            color: "52634E",
          },
          paragraph: {
            spacing: { before: 300, after: 150 },
          },
        },
        heading3: {
          run: {
            font: "Arial",
            size: 22,
            bold: true,
            color: "8E5A47",
          },
          paragraph: {
            spacing: { before: 200, after: 100 },
          },
        },
        body: {
          run: {
            font: "Arial",
            size: 22,
            color: "2C302E",
          },
          paragraph: {
            spacing: { line: 300, after: 150 },
          },
        },
      },
    },
    sections: [
      {
        properties: {},
        children: [
          // Title Page / Header
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 600, after: 100 },
            children: [
              new TextRun({
                text: "ABK Psychological Services, PLLC",
                font: "Georgia",
                size: 44,
                bold: true,
                color: "2C302E",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun({
                text: "Dr. Antonia B. Krimitsos, PsyD · Licensed Psychologist",
                font: "Arial",
                size: 24,
                bold: true,
                color: "52634E",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
            children: [
              new TextRun({
                text: "Website Content & Practice Copy Review Document",
                font: "Georgia",
                size: 24,
                italic: true,
                color: "4A4E4C",
              }),
            ],
          }),

          // Divider Line
          new Paragraph({
            border: {
              bottom: { color: "DCD6CC", space: 1, value: "single", size: 12 },
            },
            spacing: { after: 400 },
          }),

          // Overview Table
          new Paragraph({
            text: "Practice Overview & Credentials",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Practice Name: ", bold: true }),
              new TextRun("ABK Psychological Services, PLLC\n"),
              new TextRun({ text: "• Clinician: ", bold: true }),
              new TextRun("Dr. Antonia B. Krimitsos, PsyD\n"),
              new TextRun({ text: "• Education: ", bold: true }),
              new TextRun("Doctor of Psychology (PsyD), George Washington University\n"),
              new TextRun({ text: "• Clinical Experience: ", bold: true }),
              new TextRun("21+ Years Licensed Psychologist · 15+ Years Early Childhood Autism Assessment\n"),
              new TextRun({ text: "• Practice Format: ", bold: true }),
              new TextRun("Small, Intimate 100% Video Telehealth Practice (Direct one-on-one care with Dr. Krimitsos)\n"),
              new TextRun({ text: "• Therapeutic Orientation: ", bold: true }),
              new TextRun("Psychodynamic & Neurodiversity-Affirmative Psychotherapy"),
            ],
          }),

          // Section 1: Homepage Copy
          new Paragraph({
            text: "1. Homepage Copy",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: "Hero Headline:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Making room for the person behind the diagnosis.",
                font: "Georgia",
                size: 26,
                italic: true,
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            text: "Supporting Hero Copy:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: "Thoughtful, psychodynamic psychotherapy for adults, parents, partners, and families navigating autism diagnosis, identity, and relationships. Led directly by Dr. Antonia B. Krimitsos.",
          }),
          new Paragraph({
            text: "Core Practice Theme:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "“There is often a period of becoming after a diagnosis—a chance to understand yourself and your relationships with greater compassion.” — Dr. Antonia B. Krimitsos, PsyD",
                italic: true,
              }),
            ],
          }),
          new Paragraph({
            text: "Intimate Practice Highlight:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: "ABK Psychological Services, PLLC is a small, intimate telehealth practice. You work exclusively with Dr. Krimitsos—providing a consistent, highly attentive, and private therapeutic space without administrative handoffs.",
          }),
          new Paragraph({
            text: "Clinical Distinction (15+ Years Assessment Experience):",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: "Having spent over 15 years conducting direct clinical autism evaluations in early childhood, Dr. Krimitsos understands firsthand how a diagnosis affects an entire life and family system—reshaping identity, expectations, and relationships. The assessment answers one question. Therapy makes room for the questions that follow.",
          }),

          // Section 2: Who I Work With
          new Paragraph({
            text: "2. Who I Work With (Combined Services)",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: "Overview Statement:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: "An autism diagnosis reverberates throughout a person's life and family. Dr. Krimitsos provides dedicated, neurodiversity-affirmative psychotherapy tailored to each distinct experience.",
          }),

          // Category 1: Adults
          new Paragraph({
            text: "A. Autistic Adults & Later-in-Life Diagnosis",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "Receiving an autism diagnosis in adulthood brings relief and clarity alongside complex questions about past masking, sensory burnout, workplace demands, and authentic self-acceptance. A quiet space to integrate your diagnosis into an authentic, compassionate identity.",
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Key Themes Explored:\n", bold: true }),
              new TextRun("• Re-examining past memories through a neurodiversity lens\n"),
              new TextRun("• Navigating masking, energetic burnout, and boundaries\n"),
              new TextRun("• Fostering authentic self-advocacy and self-compassion\n"),
              new TextRun("• Processing relief, grief, and identity changes"),
            ],
          }),

          // Category 2: Parents
          new Paragraph({
            text: "B. Parents of Autistic Children",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "When a child receives an autism diagnosis, public focus turns to child services. Parents deserve their own dedicated space to process changing expectations, emotional fatigue, and marriage dynamics. You deserve a therapeutic space focused on your experience as a person and parent.",
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Key Themes Explored:\n", bold: true }),
              new TextRun("• Processing the emotional impact of a child's evaluation\n"),
              new TextRun("• Re-evaluating parenting dreams, expectations, and family roles\n"),
              new TextRun("• Balancing child advocacy with your own well-being\n"),
              new TextRun("• Navigating extended family relationships and societal pressure"),
            ],
          }),

          // Category 3: Partners
          new Paragraph({
            text: "C. Spouses & Partners in Neurodiverse Relationships",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "An autism diagnosis within a partnership illuminates communication patterns, sensory processing needs, and emotional expression. Therapy helps partners build mutual understanding without blame. Moving past frustration into curious, respectful relational connection.",
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Key Themes Explored:\n", bold: true }),
              new TextRun("• Understanding communication breakdowns without blame\n"),
              new TextRun("• Navigating sensory and emotional processing differences\n"),
              new TextRun("• Re-evaluating relationship expectations with mutual clarity\n"),
              new TextRun("• Fostering intimacy and sustainable emotional closeness"),
            ],
          }),

          // Category 4: Siblings
          new Paragraph({
            text: "D. Adult Siblings & Extended Family Members",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "Adult siblings frequently carry unspoken emotional roles and caregiving expectations. Therapy offers a safe, confidential space to honor your experiences with complete honesty. Your place in the family story matters.",
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Key Themes Explored:\n", bold: true }),
              new TextRun("• Unpacking early family expectations and unspoken roles\n"),
              new TextRun("• Navigating adult responsibilities, guilt, and healthy boundaries\n"),
              new TextRun("• Creating space for your own identity separate from family roles"),
            ],
          }),

          // Section 3: Therapeutic Approach
          new Paragraph({
            text: "3. Therapeutic Approach",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: "Headline: Curious rather than prescriptive.",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "Therapy provides space to discover what an autism diagnosis means to you and your relationships—rather than dictating what it ought to mean. My goal is not to tell you what your diagnosis should mean. It is to help you understand what it means to you.",
          }),
          new Paragraph({
            text: "3-Part Framework:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "1. Understand: ", bold: true }),
              new TextRun("Making room for your full story, including feelings and experiences that have been difficult to name.\n"),
              new TextRun({ text: "2. Connect: ", bold: true }),
              new TextRun("Exploring how identity, relationships, attachment patterns, communication, and neurotype intersect.\n"),
              new TextRun({ text: "3. Change: ", bold: true }),
              new TextRun("Using deeper self-understanding to create room for authentic choices and healthier ways of relating."),
            ],
          }),

          // Section 4: About Dr. Antonia B. Krimitsos (Full Bio)
          new Paragraph({
            text: "4. About Dr. Antonia B. Krimitsos",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: "Full Biography & Practice Philosophy:",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "For more than 21 years, I have worked as a licensed psychologist, with over 15 years devoted directly to early childhood autism assessment. This extensive background has shown me that a diagnosis is never just a technical label. It reverberates throughout a person's life and family—affecting identity, parenting, communication, and hopes for the future.",
          }),
          new Paragraph({
            text: "I earned my Doctor of Psychology (PsyD) degree from George Washington University. My clinical perspective is psychodynamic, warm, and deeply relational.",
          }),
          new Paragraph({
            text: "ABK Psychological Services, PLLC was founded as a small, direct practice. When you reach out, you work exclusively with me. There are no associates, call centers, or administrative handoffs—ensuring consistent, private, and highly personalized care.",
          }),
          new Paragraph({
            text: "My psychotherapy practice focuses on what happens after the assessment: exploring identity, masking, burnout, parenting dynamics, relationship patterns, and meaningful life choices.",
          }),

          // Section 5: FAQs
          new Paragraph({
            text: "5. Frequently Asked Questions (FAQs)",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q1: Who does Dr. Krimitsos work with?\n", bold: true }),
              new TextRun("A: Dr. Krimitsos works directly with adults navigating autism diagnosis, parents of autistic children, spouses and partners in neurodiverse relationships, and adult family members.\n\n"),
              new TextRun({ text: "Q2: What makes ABK Psychological Services an intimate practice?\n", bold: true }),
              new TextRun("A: ABK Psychological Services, PLLC is a small, direct private practice. You work exclusively and directly with Dr. Antonia B. Krimitsos—without associates, administrative middle layers, or group handoffs.\n\n"),
              new TextRun({ text: "Q3: Do you offer diagnostic autism assessments?\n", bold: true }),
              new TextRun("A: This practice focuses exclusively on psychotherapy. Dr. Krimitsos brings over 15 years of early-childhood autism assessment experience into therapy, but does not offer formal diagnostic testing here.\n\n"),
              new TextRun({ text: "Q4: What is psychodynamic psychotherapy?\n", bold: true }),
              new TextRun("A: A reflective approach that explores how past experiences, attachments, and emotional patterns shape your current life and relationships—focusing on self-understanding rather than rigid symptom checklists.\n\n"),
              new TextRun({ text: "Q5: How is telehealth therapy conducted?\n", bold: true }),
              new TextRun("A: All sessions are held via a secure, confidential video platform, allowing you to engage in therapy from the comfort and sensory safety of your home.\n\n"),
              new TextRun({ text: "Q6: What are your fees and insurance policies?\n", bold: true }),
              new TextRun("A: This is an out-of-network private practice. Fees are discussed transparently during consultation. Monthly superbills are provided for insurance reimbursement upon request."),
            ],
          }),

          // Section 6: Contact & Disclaimers
          new Paragraph({
            text: "6. Contact Inquiries & Disclaimers",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: "Contact Form Intro:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: "Begin with a conversation. Share a little about what brings you to therapy to determine whether Dr. Krimitsos's approach is a good fit for what you are seeking.",
          }),
          new Paragraph({
            text: "Privacy & Emergency Disclaimers:",
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: "• Privacy Notice: Standard web messaging is not HIPAA-secured. Please do not include highly sensitive or confidential clinical details in the initial web form. Submitting an inquiry does not establish a clinical therapist-client relationship.\n• Emergency Notice: In a mental health crisis or life-threatening emergency, call 988 (Suicide & Crisis Lifeline in the US), call 911, or proceed to the nearest emergency room immediately.",
          }),
        ],
      },
    ],
  });

  const outputPath = path.join(__dirname, "../ABK_Psychological_Services_Website_Content.docx");
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Successfully generated docx at: ${outputPath}`);
}

generateDocx().catch((err) => {
  console.error("Error generating docx:", err);
  process.exit(1);
});
