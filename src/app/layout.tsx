import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { practiceConfig } from "@/config/practiceConfig";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-family",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

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
        url: "/images/doctor-portrait.png",
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for ProfessionalService / MedicalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": practiceConfig.psychologistName,
    "medicalSpecialty": "Psychiatric",
    "description": practiceConfig.meta.description,
    "alumniOf": practiceConfig.university,
    "hasCredential": practiceConfig.degree,
    "telephone": practiceConfig.phone,
    "email": practiceConfig.email,
    "url": practiceConfig.meta.siteUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Telehealth Practice",
      "addressCountry": "US",
    },
    "knowsAbout": [
      "Autism Spectrum Conditions",
      "Adult Autism Identity",
      "Psychodynamic Psychotherapy",
      "Neurodiversity-Affirming Therapy",
      "Parent & Family Dynamics",
    ],
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F3ED] text-[#2C302E] selection:bg-[#EAF0E7] selection:text-[#52634E]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
