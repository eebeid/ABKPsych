import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "ABK Psychological Services, PLLC",
  description:
    "Collaborative, reflective, and relational psychotherapy for adolescents, adults, parents, and partners navigating autism, ADHD, and neurodivergence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F3ED] text-[#2C302E] selection:bg-[#EAF0E7] selection:text-[#52634E]">
        {children}
      </body>
    </html>
  );
}
