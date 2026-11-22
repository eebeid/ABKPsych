import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getContent } from "@/lib/contentStore";
import { AudienceCard } from "@/components/AudienceCard";
import { FormattedText } from "@/components/FormattedText";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const content = getContent();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-[#F9F8F5] border-b border-[#E2E6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E] leading-[1.2] font-medium tracking-tight">
                <FormattedText content={content.heroHeadline} />
              </h1>

              <div className="space-y-3 text-base sm:text-lg text-[#4A544C] font-light leading-relaxed">
                <p className="font-medium text-[#4F6752] text-sm uppercase tracking-[0.25em]">
                  <FormattedText content={content.heroTagline} />
                </p>
                <div className="space-y-3">
                  <FormattedText as="p" content={content.heroIntro} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-all shadow-xs"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  href="/who-i-work-with"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1C241E] bg-[#FFFFFF] hover:bg-[#EFF3EF] border border-[#E2E6E2] rounded-sm transition-colors"
                >
                  Who I Work With
                </Link>
              </div>
            </div>

            {/* Right Doctor Portrait Column */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative rounded-sm overflow-hidden border border-[#E2E6E2] shadow-sm max-w-[320px] w-full">
                <Image
                  src="/images/doctor-portrait-v2.png"
                  alt={`${content.doctorTitle} - ${content.practiceName}`}
                  width={600}
                  height={650}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Highlight Callout */}
      <section className="py-14 bg-[#EFF3EF] border-b border-[#C8D4C9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">
            <FormattedText content={content.practiceHighlightHeadline} />
          </span>
          <p className="text-base sm:text-lg text-[#1C241E] font-serif leading-relaxed max-w-2xl mx-auto">
            <FormattedText content={content.practiceHighlightBody} />
          </p>
        </div>
      </section>

      {/* Who I Work With Overview */}
      <section className="py-20 bg-[#F9F8F5]" id="who-i-work-with">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
              Who I Work With
            </h2>
            <p className="text-sm text-[#4A544C] leading-relaxed font-light">
              <FormattedText content={content.whoIWorkWithIntro} />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.audiences.map((audience) => (
              <AudienceCard
                key={audience.id}
                audience={{
                  ...audience,
                  anchor: `#${audience.id}`,
                }}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/who-i-work-with"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#4F6752] hover:text-[#3E5341] transition-colors"
            >
              Explore Full Practice Specializations for Individuals, Parents & Partners
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Distinction Section */}
      <section className="py-20 bg-[#F9F8F5] border-b border-[#E2E6E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
            <FormattedText content={content.clinicalDistinctionHeadline} />
          </h2>

          <div className="space-y-4 text-sm text-[#4A544C] leading-relaxed font-light">
            <p>
              <FormattedText content={content.clinicalDistinctionPara1} />
            </p>
            <p>
              <FormattedText content={content.clinicalDistinctionPara2} />
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-colors"
            >
              Read About {content.practiceName}
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-20 bg-[#EFF3EF] border-t border-[#C8D4C9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
            <FormattedText content={content.ctaHeadline} />
          </h2>

          <p className="text-base text-[#4A544C] font-light leading-relaxed max-w-xl mx-auto">
            <FormattedText content={content.ctaBody} />
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-all shadow-xs"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1C241E] bg-[#FFFFFF] hover:bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm transition-colors"
            >
              Contact Dr. K
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
