import type { Metadata } from "next";
import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Lato,
  Montserrat,
  DM_Sans,
  Nunito_Sans,
} from "next/font/google";
import "./globals.css";

const playfairFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakartaFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const latoFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const nunitoFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
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
      className={`${playfairFont.variable} ${jakartaFont.variable} ${latoFont.variable} ${montserratFont.variable} ${dmSansFont.variable} ${nunitoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F3ED] text-[#2C302E] selection:bg-[#EAF0E7] selection:text-[#52634E]">
        {children}
      </body>
    </html>
  );
}
