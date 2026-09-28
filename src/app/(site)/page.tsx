import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { practiceConfig, audienceData } from "@/config/practiceConfig";
import { AudienceCard } from "@/components/AudienceCard";
import { Badge } from "@/components/Badge";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-[#F9F8F5] border-b border-[#E2E6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="sage">
                ABK Psychological Services, PLLC
              </Badge>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E] leading-[1.2] font-medium tracking-tight">
                Assessment answers one question. Therapy makes room for the questions that follow.
              </h1>

              <div className="space-y-3 text-base sm:text-lg text-[#4A544C] font-light leading-relaxed">
                <p className="font-medium text-[#4F6752] text-sm uppercase tracking-wider">
                  Collaborative. Reflective. Relational.
                </p>
                <p>
                  A later-in-development diagnosis of autism, ADHD, or neurodivergence is rarely an ending. More often, it is a beginning that asks new questions of the individual and those closest to them.
                </p>
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
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-[#E2E6E2] shadow-sm max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/doctor-portrait-v2.png"
                  alt="Dr. Antonia B. Krimitsos - ABK Psychological Services, PLLC"
                  width={600}
                  height={650}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-3 p-3.5 bg-[#FFFFFF] border border-[#E2E6E2] rounded-sm text-xs text-[#4A544C] flex items-center justify-between">
                <span className="font-semibold text-[#4F6752]">Dr. Antonia B. Krimitsos, Psy.D.</span>
                <span>Licensed Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Highlight Callout */}
      <section className="py-14 bg-[#EFF3EF] border-b border-[#C8D4C9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">
            An intentionally small practice.
          </span>
          <p className="text-base sm:text-lg text-[#1C241E] font-serif leading-relaxed max-w-2xl mx-auto">
            ABK Psychological Services, PLLC was founded as an intentionally small, direct-service practice, ensuring consistent, private, and highly personalized care.
          </p>
        </div>
      </section>

      {/* Who I Work With Overview */}
      <section className="py-20 bg-[#F9F8F5]" id="who-i-work-with">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">
              Practice Specializations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
              Who I Work With
            </h2>
            <p className="text-sm text-[#4A544C] leading-relaxed font-light">
              Trying to make sense of a later-in-life neurodevelopmental diagnosis, whether your own or that of someone you love, can feel especially disorienting. It often brings a complex mix of clarity, validation, relief, grief, and uncertainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audienceData.map((audience) => (
              <AudienceCard key={audience.id} audience={audience} />
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

      {/* Key Thematic Statement Section */}
      <section className="py-24 bg-[#FFFFFF] border-y border-[#E2E6E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#8A7F6E] font-semibold">
            Relational Perspective
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E] leading-tight font-medium">
            “The impact of a neurodevelopmental diagnosis rarely belongs to one person alone.”
          </h2>

          <p className="text-base text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
            Diagnosis affects not only the individual, but also the people and relationships around them—asking new questions of family dynamics, expectations, and established ways of coping.
          </p>
        </div>
      </section>

      {/* Clinical Distinction Section */}
      <section className="py-20 bg-[#F9F8F5] border-b border-[#E2E6E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2">
            <Badge variant="sage">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Clinical Distinction
            </Badge>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
            Clinical depth grounded in both assessment and psychotherapy.
          </h2>

          <div className="space-y-4 text-sm text-[#4A544C] leading-relaxed font-light">
            <p>
              For more than two decades, I have worked across two closely connected areas of clinical practice: neurodevelopmental assessment and psychotherapy.
            </p>
            <p>
              My work as a diagnostician in education and as a psychotherapist in private practice has given me a particular appreciation for how and when developmental differences such as autism and ADHD are recognized—and what can happen when they are not.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-colors"
            >
              Read About ABK Psychological Services
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-20 bg-[#EFF3EF] border-t border-[#C8D4C9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">
            Direct & Private Services
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
            Schedule an Initial Consultation
          </h2>

          <p className="text-base text-[#4A544C] font-light leading-relaxed max-w-xl mx-auto">
            Connect directly with Dr. Krimitsos to discuss psychotherapy for yourself, your child, or your relationship in a thoughtful, confidential setting.
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
