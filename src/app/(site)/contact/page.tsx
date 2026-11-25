import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FormattedText } from "@/components/FormattedText";
import { getContent } from "@/lib/contentStore";
import { Info, AlertTriangle } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Inquiries & Consultation | ABK Psychological Services, PLLC",
  description:
    "Schedule an initial consultation directly with Dr. Antonia B. Krimitsos at ABK Psychological Services, PLLC.",
};

export default function ContactPage() {
  const content = getContent();

  return (
    <div className="space-y-12 py-14">
      {/* Page Title Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
          <FormattedText content={content.contactTitle} />
        </h1>

        {content.contactIntro && (
          <p className="text-base text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
            <FormattedText content={content.contactIntro} />
          </p>
        )}
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <ContactForm email={content.email} />
          </div>

          {/* Right Column: Info & Professional Boundaries */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {/* Practice Details Box */}
            <div className="bg-[#FFFFFF] border border-[#E2E6E2] p-6 rounded-sm space-y-4 shadow-xs">
              <h2 className="font-serif text-xl text-[#1C241E] border-b border-[#E2E6E2] pb-3">
                {content.practiceName}
              </h2>

              <div className="space-y-3 text-xs text-[#4A544C] font-light">
                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[var(--accent-primary)]">
                    Psychologist
                  </strong>
                  {content.doctorTitle}
                </div>

                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[var(--accent-primary)]">
                    Direct Email
                  </strong>
                  <a href={`mailto:${content.email}`} className="text-[var(--accent-primary)] hover:underline font-medium">
                    {content.email}
                  </a>
                </div>

                {content.phone && (
                  <div>
                    <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[var(--accent-primary)]">
                      Phone
                    </strong>
                    {content.phone}
                  </div>
                )}

                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[var(--accent-primary)]">
                    Practice Model
                  </strong>
                  <FormattedText content={content.contactPracticeModel} />
                </div>

                <div>
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[var(--accent-primary)]">
                    Insurance & Fees
                  </strong>
                  <FormattedText content={content.fees} />{" "}
                  <FormattedText content={content.insurancePolicy} />
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
                {content.boundaryDisclaimer}
              </p>
            </div>

            {/* Emergency Disclaimer */}
            <div className="bg-[var(--accent-wash)] border border-[var(--accent-border)] p-5 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[var(--accent-primary)]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <h3 className="text-xs uppercase tracking-wider font-semibold">
                  Emergency Notice
                </h3>
              </div>
              <p className="text-xs text-[#4A544C] leading-relaxed font-light">
                {content.emergencyDisclaimer || (
                  <>
                    Submitting an inquiry does not establish a clinical relationship. If you are in a crisis or emergency, call <strong>988</strong> or visit your nearest emergency room immediately.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
