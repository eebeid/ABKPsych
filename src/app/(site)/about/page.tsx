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
          <FormattedText content={content.aboutTitle} />
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

              <p className="text-xl font-medium text-[#1C241E] pt-2">
                <FormattedText content={content.aboutQuote} />
              </p>

              <p>
                <FormattedText content={content.aboutPara2} />
              </p>

              <p>
                <FormattedText content={content.aboutPara3} />
              </p>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[var(--accent-primary)] hover:bg-[var(--accent-dark)] rounded-sm transition-colors shadow-xs"
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
