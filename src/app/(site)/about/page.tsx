import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FormattedText } from "@/components/FormattedText";
import { getContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About ABK Psychological Services | Dr. Antonia B. Krimitsos",
  description:
    "Learn about Dr. Antonia B. Krimitsos and the founding vision of ABK Psychological Services, PLLC.",
};

export default function AboutPage() {
  const content = getContent();

  return (
    <div className="space-y-16 py-14">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
          About {content.practiceName}
        </h1>
        {content.aboutSubtitle && (
          <p className="text-base sm:text-lg text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
            <FormattedText content={content.aboutSubtitle} />
          </p>
        )}
      </section>

      {/* Main Bio Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-5 text-sm sm:text-base text-[#4A544C] leading-relaxed font-light">
              <p className="text-base sm:text-lg text-[#1C241E] font-light leading-relaxed">
                <FormattedText content={content.aboutOpening} />
              </p>

              <p>
                <FormattedText content={content.aboutPara1} />
              </p>

              <p className="font-serif text-xl text-[#1C241E] pt-2">
                <FormattedText content={content.aboutQuote} />
              </p>

              <p>
                <FormattedText content={content.aboutPara2} />
              </p>

              <p>
                <FormattedText content={content.aboutPara3} />
              </p>
            </div>

            {/* Education & Licensure Section */}
            <div className="pt-8 border-t border-[#E2E6E2] space-y-6">
              <h2 className="font-serif text-2xl text-[#1C241E]">
                Education & Licensure
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#4A544C]">
                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Doctorate
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">{content.degree}</p>
                  <p>{content.university}</p>
                </div>

                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Doctoral Internship
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">{content.internship}</p>
                </div>

                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Bachelor of Arts
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">{content.bachelors}</p>
                </div>

                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Licensure
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">{content.licensure}</p>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-colors shadow-xs"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
