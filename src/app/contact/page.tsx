import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { practiceConfig } from "@/config/practiceConfig";
import { ShieldCheck, Info, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Inquiries & Consultation | ABK Psychological Services, PLLC",
  description:
    "Schedule an initial consultation directly with Dr. Antonia B. Krimitsos at ABK Psychological Services, PLLC.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 py-14">
      {/* Page Title Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="sage">Direct & Private Services</Badge>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
          Inquiries
        </h1>

        <p className="text-base text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
          Reach out to request an initial consultation directly with Dr. Antonia B. Krimitsos.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Right Column: Info & Professional Boundaries */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {/* Practice Details Box */}
            <div className="bg-[#FFFFFF] border border-[#E2E6E2] p-6 rounded-sm space-y-4 shadow-xs">
              <h2 className="font-serif text-xl text-[#1C241E] border-b border-[#E2E6E2] pb-3">
                {practiceConfig.practiceName}
              </h2>

              <div className="space-y-3 text-xs text-[#4A544C] font-light">
                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Psychologist
                  </strong>
                  {practiceConfig.psychologistName}
                </div>

                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Direct Email
                  </strong>
                  {practiceConfig.email}
                </div>

                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Practice Model
                  </strong>
                  Intentionally small, private, direct-service practice.
                </div>

                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Insurance & Billing
                  </strong>
                  Services are provided privately and directly. Out-of-network superbills provided monthly.
                </div>
              </div>
            </div>

            {/* Existing Professional Boundary Disclaimer */}
            <div className="bg-[#F3F1EC] border border-[#8A7F6E]/30 p-5 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#8A7F6E]">
                <Info className="w-4 h-4 shrink-0" />
                <h3 className="text-xs uppercase tracking-wider font-semibold">
                  Professional Boundary Note
                </h3>
              </div>
              <p className="text-xs text-[#1C241E] leading-relaxed font-light">
                {practiceConfig.boundaryDisclaimer}
              </p>
            </div>

            {/* Emergency Disclaimer */}
            <div className="bg-[#EFF3EF] border border-[#C8D4C9] p-5 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#4F6752]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <h3 className="text-xs uppercase tracking-wider font-semibold">
                  Emergency Notice
                </h3>
              </div>
              <p className="text-xs text-[#4A544C] leading-relaxed font-light">
                Submitting an inquiry does not establish a clinical relationship. If you are in a crisis or emergency, call <strong>988</strong> or visit your nearest emergency room immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
