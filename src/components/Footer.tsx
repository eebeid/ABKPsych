import Link from "next/link";
import { practiceConfig } from "@/config/practiceConfig";
import { ShieldCheck } from "lucide-react";
import { FormattedText } from "@/components/FormattedText";

export function Footer({
  practiceName = practiceConfig.practiceName,
  doctorTitle = practiceConfig.doctorTitle,
  degree = practiceConfig.degree,
  university = practiceConfig.university,
  licensure = practiceConfig.licensure,
  email = practiceConfig.email,
  footerBlurb = "An intentionally small, direct-service psychotherapy practice for adolescents, adults, parents, and partners.",
  footerPracticeModelHeading = "Practice Model",
  footerPracticeModelItems = [
    "Intentionally Small & Direct Service",
    "Direct Care with Dr. Krimitsos",
    "Personalized, Confidential Psychotherapy",
    "Out-of-Network Superbills Provided",
  ],
  footerDisclaimerHeading = "Important Disclaimer",
  footerDisclaimerBody = "Submitting an inquiry does not establish a therapist-client relationship. In a crisis or mental health emergency, please call <strong>988</strong> or visit an emergency room immediately.",
  footerCopyright = "",
  audiences = [],
}: {
  practiceName?: string;
  doctorTitle?: string;
  degree?: string;
  university?: string;
  licensure?: string;
  email?: string;
  footerBlurb?: string;
  footerPracticeModelHeading?: string;
  footerPracticeModelItems?: string[];
  footerDisclaimerHeading?: string;
  footerDisclaimerBody?: string;
  footerCopyright?: string;
  audiences?: { id: string; title: string }[];
} = {}) {
  return (
    <footer className="bg-[#222923] text-[#F9F8F5] border-t border-[#343E36] pt-14 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#343E36]">
          {/* Practice Column */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F9F8F5]">
              {practiceName}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#98A89A] font-semibold">
              {doctorTitle}
            </p>
            {footerBlurb && (
              <div className="text-xs text-[#CBD4CB] leading-relaxed font-light">
                <FormattedText as="p" content={footerBlurb} />
              </div>
            )}
            <div className="pt-1 text-xs text-[#98A89A] space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#98A89A]" />
                {degree}{university ? `, ${university}` : ""}
              </p>
              <p>{licensure}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#98A89A] font-semibold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#CBD4CB]">
              <li>
                <Link href="/" className="hover:text-[#F9F8F5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/core-areas" className="hover:text-[#F9F8F5] transition-colors font-medium">
                  Core Areas
                </Link>
              </li>
              {audiences.map((aud) => (
                <li key={aud.id} className="pl-3 text-[11px] text-[#98A89A]">
                  <Link href={`/core-areas#${aud.id}`} className="hover:text-[#F9F8F5] transition-colors">
                    • {aud.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="hover:text-[#F9F8F5] transition-colors">
                  About {practiceName}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F9F8F5] transition-colors">
                  Schedule a Consultation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F9F8F5] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Model & Direct Inquiry */}
          <div>
            {footerPracticeModelHeading && (
              <h3 className="text-xs uppercase tracking-widest text-[#98A89A] font-semibold mb-3">
                {footerPracticeModelHeading}
              </h3>
            )}
            <ul className="space-y-2 text-xs text-[#CBD4CB]">
              {footerPracticeModelItems.filter(Boolean).map((item, idx) => (
                <li key={idx}>
                  <FormattedText content={item} />
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-[#343E36] text-xs text-[#CBD4CB]">
              <p>Email: <a href={`mailto:${email}`} className="text-[#A3B8A5] hover:underline font-medium">{email}</a></p>
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <div className="bg-[#1A1F1B] p-4 rounded border border-[#343E36] space-y-2">
            {footerDisclaimerHeading && (
              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#98A89A]">
                {footerDisclaimerHeading}
              </h4>
            )}
            {footerDisclaimerBody && (
              <div className="text-xs text-[#CBD4CB] leading-relaxed font-light">
                <FormattedText as="p" content={footerDisclaimerBody} />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#98A89A] gap-3">
          <p>
            {footerCopyright
              ? footerCopyright
              : `© ${new Date().getFullYear()} ${practiceName}. All rights reserved. ${doctorTitle}.`}
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-[#F9F8F5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[#F9F8F5] transition-colors">
              Terms & Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
