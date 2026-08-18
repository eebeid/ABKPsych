import Link from "next/link";
import { practiceConfig } from "@/config/practiceConfig";
import { AlertCircle, ShieldCheck, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1B2533] text-[#FAFAFA] border-t border-[#35465C] pt-14 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#35465C]">
          {/* Practice Column */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#FAFAFA] lowercase">
              {practiceConfig.practiceName}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#9BB1CB] font-semibold">
              {practiceConfig.doctorTitle}
            </p>
            <p className="text-xs text-[#CBD8E6] leading-relaxed">
              An intimate, direct telehealth practice providing thoughtful psychodynamic therapy for adults, parents, partners, and families.
            </p>
            <div className="pt-1 text-xs text-[#9BB1CB] space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#9BB1CB]" />
                George Washington University PsyD
              </p>
              <p>21+ Years Licensed Psychologist</p>
              <p>15+ Years Early-Childhood Assessment</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#9BB1CB] font-semibold mb-3">
              Practice Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#CBD8E6]">
              <li>
                <Link href="/" className="hover:text-[#9BB1CB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-i-work-with" className="hover:text-[#9BB1CB] transition-colors font-medium text-[#FAFAFA]">
                  Who I Work With
                </Link>
              </li>
              <li className="pl-3 text-[11px] text-[#9BB1CB]">
                <Link href="/who-i-work-with#adults" className="hover:text-[#FAFAFA] transition-colors">
                  • Autistic Adults
                </Link>
              </li>
              <li className="pl-3 text-[11px] text-[#9BB1CB]">
                <Link href="/who-i-work-with#parents" className="hover:text-[#FAFAFA] transition-colors">
                  • Parents
                </Link>
              </li>
              <li className="pl-3 text-[11px] text-[#9BB1CB]">
                <Link href="/who-i-work-with#partners" className="hover:text-[#FAFAFA] transition-colors">
                  • Partners & Spouses
                </Link>
              </li>
              <li className="pl-3 text-[11px] text-[#9BB1CB]">
                <Link href="/who-i-work-with#siblings" className="hover:text-[#FAFAFA] transition-colors">
                  • Siblings & Family
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-[#9BB1CB] transition-colors">
                  Therapeutic Approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#9BB1CB] transition-colors">
                  About Dr. Krimitsos
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Information */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#9BB1CB] font-semibold mb-3">
              Practice Model
            </h3>
            <ul className="space-y-2 text-xs text-[#CBD8E6]">
              <li className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#9BB1CB]" />
                100% Video Telehealth Practice
              </li>
              <li>Direct Care with Dr. Krimitsos</li>
              <li>No Administrative Middle Layers</li>
              <li>
                <Link href="/faq" className="hover:text-[#9BB1CB] transition-colors underline">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9BB1CB] transition-colors underline">
                  Request Preliminary Consultation
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-[#35465C] text-xs text-[#CBD8E6]">
              <p>Email: {practiceConfig.email}</p>
            </div>
          </div>

          {/* Emergency Crisis Disclaimer */}
          <div className="bg-[#121A26] p-4 rounded border border-[#35465C] space-y-2">
            <div className="flex items-center gap-2 text-[#C2B5A8]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <h4 className="text-[11px] uppercase tracking-wider font-semibold">
                Clinical Emergency Notice
              </h4>
            </div>
            <p className="text-xs text-[#CBD8E6] leading-relaxed">
              This site is for non-urgent administrative inquiries. Submitting a message does not create a therapist-client relationship.
            </p>
            <p className="text-xs text-[#FAFAFA] font-medium leading-relaxed">
              In a crisis or emergency, call <strong>988</strong> (Crisis Lifeline), call <strong>911</strong>, or visit an emergency room immediately.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#9BB1CB] gap-3">
          <p>
            © {new Date().getFullYear()} {practiceConfig.practiceName}. All rights reserved. Dr. Antonia B. Krimitsos, PsyD.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-[#FAFAFA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[#FAFAFA] transition-colors">
              Terms & Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
