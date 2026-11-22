import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { practiceConfig } from "@/config/practiceConfig";
import { getContent } from "@/lib/contentStore";
import { getPalette } from "@/lib/palettes";
import { getFontOption } from "@/lib/fonts";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: practiceConfig.meta.title,
    template: `%s | ${practiceConfig.psychologistName}`,
  },
  description: practiceConfig.meta.description,
  keywords: [
    "autism psychotherapy",
    "autistic adults therapy",
    "late autism diagnosis therapy",
    "therapy for parents of autistic children",
    "neurodiverse relationship therapy",
    "psychodynamic therapy autism",
    "telehealth psychologist autism",
    "autism identity therapy",
  ],
  authors: [{ name: practiceConfig.psychologistName }],
  metadataBase: new URL(practiceConfig.meta.siteUrl),
  openGraph: {
    title: practiceConfig.meta.title,
    description: practiceConfig.meta.description,
    url: practiceConfig.meta.siteUrl,
    siteName: practiceConfig.practiceName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/doctor-portrait-v2.png",
        width: 1200,
        height: 630,
        alt: `${practiceConfig.psychologistName} - Autism-Focused Psychotherapy Practice`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: practiceConfig.meta.title,
    description: practiceConfig.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = getContent();
  const palette = getPalette(content.themePalette);
  const headingFontOpt = getFontOption(content.headingFont);
  const bodyFontOpt = getFontOption(content.bodyFont);
  const paletteVars = {
    "--accent-primary": palette.primary,
    "--accent-dark": palette.dark,
    "--accent-muted": palette.muted,
    "--accent-wash": palette.wash,
    "--accent-border": palette.border,
    "--font-serif": headingFontOpt.headingFamily,
    "--font-serif-family": headingFontOpt.headingFamily,
    "--font-sans": bodyFontOpt.bodyFamily,
    "--font-sans-family": bodyFontOpt.bodyFamily,
    fontFamily: bodyFontOpt.bodyFamily,
  } as React.CSSProperties;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: content.psychologistName,
    medicalSpecialty: "Psychiatric",
    description: content.metaDescription || practiceConfig.meta.description,
    alumniOf: content.university,
    hasCredential: content.degree,
    telephone: content.phone,
    email: content.email,
    url: practiceConfig.meta.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: content.officeAddress || "Telehealth Practice",
      addressCountry: "US",
    },
    knowsAbout: [
      "Autism Spectrum Conditions",
      "Adult Autism Identity",
      "Psychodynamic Psychotherapy",
      "Neurodiversity-Affirming Therapy",
      "Parent & Family Dynamics",
    ],
  };

  return (
    <div style={paletteVars} className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        practiceName={content.practiceName}
        psychologistName={content.psychologistName}
      />
      <main className="flex-grow">{children}</main>
      <Footer
        practiceName={content.practiceName}
        doctorTitle={content.doctorTitle}
        degree={content.degree}
        university={content.university}
        licensure={content.licensure}
        email={content.email}
        footerBlurb={content.footerBlurb}
        footerPracticeModelHeading={content.footerPracticeModelHeading}
        footerPracticeModelItems={content.footerPracticeModelItems}
        footerDisclaimerHeading={content.footerDisclaimerHeading}
        footerDisclaimerBody={content.footerDisclaimerBody}
        footerCopyright={content.footerCopyright}
        audiences={content.audiences}
      />
    </div>
  );
}
