const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require('docx');

async function buildDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "ABK Psychological Services, PLLC",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
          }),
          new Paragraph({
            text: "Website Content & Development Documentation",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
          }),

          // SECTION 1
          new Paragraph({
            text: "1. Practice Overview & Direction",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Practice Name: ", bold: true }),
              new TextRun("ABK Psychological Services, PLLC\n"),
              new TextRun({ text: "Psychologist: ", bold: true }),
              new TextRun("Dr. Antonia B. Krimitsos, Psy.D. (Licensed Psychologist, NY State)\n"),
              new TextRun({ text: "Practice Model: ", bold: true }),
              new TextRun("Intentionally small, private, direct-service psychotherapy practice.\n"),
              new TextRun({ text: "Tone & Qualities: ", bold: true }),
              new TextRun("Sophisticated, warm, thoughtful, clinical yet approachable, minimal, spacious.\n"),
            ],
            spacing: { after: 200 },
          }),

          // SECTION 2: HOMEPAGE
          new Paragraph({
            text: "2. Homepage Content",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Hero Headline: ", bold: true }),
              new TextRun("Assessment answers one question. Therapy makes room for the questions that follow.\n"),
              new TextRun({ text: "Supporting Copy: ", bold: true }),
              new TextRun("Collaborative. Reflective. Relational. A later-in-development diagnosis of autism, ADHD, or neurodivergence is rarely an ending. More often, it is a beginning that asks new questions of the individual and those closest to them.\n"),
            ],
            spacing: { after: 150 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Practice Highlight: ", bold: true }),
              new TextRun("An intentionally small practice. ABK Psychological Services, PLLC was founded as an intentionally small, direct-service practice, ensuring consistent, private, and highly personalized care.\n"),
            ],
            spacing: { after: 150 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Clinical Distinction: ", bold: true }),
              new TextRun("Clinical depth grounded in both assessment and psychotherapy. For more than two decades, I have worked across two closely connected areas of clinical practice: neurodevelopmental assessment and psychotherapy. My work as a diagnostician in education and as a psychotherapist in private practice has given me a particular appreciation for how and when developmental differences such as autism and ADHD are recognized—and what can happen when they are not.\n"),
            ],
            spacing: { after: 200 },
          }),

          // SECTION 3: WHO I WORK WITH
          new Paragraph({
            text: "3. Who I Work With",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Overview: ", bold: true }),
              new TextRun("Trying to make sense of a later-in-life neurodevelopmental diagnosis, whether your own or that of someone you love, can feel especially disorienting. It often brings a complex mix of clarity, validation, relief, grief, and uncertainty that can be difficult to integrate into a new understanding of yourself or your loved one.\n"),
            ],
            spacing: { after: 150 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Individuals: ", bold: true }),
              new TextRun("Those diagnosed as adolescents or adults have already spent years learning to compensate, adapt, or mask their difficulties, often becoming highly capable on the outside while expending considerable effort to manage what others cannot see. My practice can offer meaningful exploration of questions about identity, relationships, work, and the life you have built around strategies and compromises that may no longer serve you. Integrating this new understanding into the person you have always been can allow you to move forward with greater clarity about who you are.\n"),
            ],
            spacing: { after: 150 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Parents: ", bold: true }),
              new TextRun("When your child is diagnosed in early or late adolescence, following years of uncertainty, unanswered questions, or challenges that were difficult to understand, parents may also need space to process what has come before. Addressing parental stress and emotional fatigue, while processing the unique grief of shifting expectations, is worthy of the dedicated space of therapy.\n"),
            ],
            spacing: { after: 150 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Partners: ", bold: true }),
              new TextRun("When neurodivergence enters an adult relationship, whether through a recent diagnosis or a growing recognition of longstanding differences, established perspectives on communication, intimacy, and conflict may shift. Processing how this realization influences the relationship allows for greater understanding of your own needs and experiences within it.\n"),
              new TextRun({ text: "[Boundary Note]: ABK provides individual psychotherapy for partners, rather than couples or marriage counseling.\n", italic: true }),
            ],
            spacing: { after: 200 },
          }),

          // SECTION 4: KEY THEMATIC STATEMENT
          new Paragraph({
            text: "4. Key Thematic Statement",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "“The impact of a neurodevelopmental diagnosis rarely belongs to one person alone.”", bold: true, italic: true }),
            ],
            spacing: { after: 200 },
          }),

          // SECTION 5: ABOUT / BIO & CREDENTIALS
          new Paragraph({
            text: "5. About ABK Psychological Services & Credentials",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun("ABK Psychological Services grew from seeing a particular gap: adolescents and adults whose neurodevelopmental differences were not being identified in childhood.\n\n"),
              new TextRun("Many have learned to compensate, adapt, or mask well enough, but often, the strategies that made that possible become harder to sustain as life becomes more demanding. In turn, those closest to them frequently share in the impact of those crumbling strategies.\n\n"),
              new TextRun("I developed ABK to meet that moment. I wanted to create a practice that brings together over 20 years of experience in diagnosis and psychotherapy, with an understanding that later-life identification is not simply about putting a name to longstanding difficulties. It can also be an opportunity to re-examine the life already lived, individually and together, with a clearer understanding of what has been difficult, what has helped, and what may need to change going forward.\n"),
            ],
            spacing: { after: 150 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Doctorate: ", bold: true }),
              new TextRun("Psy.D., Clinical Psychology, The George Washington University, Washington, DC\n"),
              new TextRun({ text: "Doctoral Internship: ", bold: true }),
              new TextRun("Lenox Hill Hospital, New York, NY\n"),
              new TextRun({ text: "Bachelor of Arts: ", bold: true }),
              new TextRun("Biology-Psychology, Skidmore College, New York\n"),
              new TextRun({ text: "Licensure: ", bold: true }),
              new TextRun("Licensed Psychologist, New York State\n"),
            ],
            spacing: { after: 200 },
          }),

          // SECTION 6: CONTACT & DISCLAIMERS
          new Paragraph({
            text: "6. Inquiries & Practice Boundaries",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Direct Email: ", bold: true }),
              new TextRun("dr.antonia@abkpsych.com\n"),
              new TextRun({ text: "Professional Boundary Disclaimer: ", bold: true }),
              new TextRun("To maintain clear professional boundaries and avoid conflicts of interest, I do not provide private services to individuals or family members with whom I have an existing professional relationship through another organization.\n"),
              new TextRun({ text: "Emergency Disclaimer: ", bold: true }),
              new TextRun("In a crisis or mental health emergency, please call 988 (Crisis Lifeline), call 911, or visit your nearest emergency room immediately.\n"),
            ],
            spacing: { after: 200 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.join(process.cwd(), 'ABK_Psychological_Services_Website_Content.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Successfully generated docx at: ${outputPath}`);
}

buildDocx();
