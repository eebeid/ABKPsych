import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { practiceConfig, audienceData } from "@/config/practiceConfig";
import { AudienceCard } from "@/components/AudienceCard";
import { ApproachGrid } from "@/components/ApproachGrid";
import { EditorialQuote } from "@/components/EditorialQuote";
import { Badge } from "@/components/Badge";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Prominent Deep Navy Hero Section */}
      <section className="relative py-14 lg:py-20 bg-[#253344] text-[#FAFAFA] border-b border-[#3B4C61]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3B4C61] text-[#FAFAFA] border border-[#7A8DA6]/50">
                  abk psychological services, pllc · Telehealth Practice
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAFAFA] leading-[1.15] font-medium tracking-tight">
                Making room for the person behind the diagnosis.
              </h1>

              <p className="text-base sm:text-lg text-[#D5E0ED] leading-relaxed font-light">
                Thoughtful, psychodynamic psychotherapy for adults, parents, partners, and families navigating autism diagnosis, identity, and relationships. Led directly by Dr. Antonia B. Krimitsos.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] hover:bg-[#4C607A] border border-[#7A8DA6]/40 rounded-sm transition-all shadow-sm"
                >
                  Begin a Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  href="/who-i-work-with"
                  className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#1E2938] hover:bg-[#3B4C61] border border-[#3B4C61] rounded-sm transition-colors"
                >
                  Who I Work With
                </Link>
              </div>

              <div className="relative border-l-2 border-[#7A8DA6] pl-6 py-2 my-6 italic text-[#FAFAFA] font-serif text-lg sm:text-xl leading-relaxed bg-[#1E2938]/80 rounded-r-sm">
                <p className="mb-1">“There is often a period of becoming after a diagnosis—a chance to understand yourself and your relationships with greater compassion.”</p>
                <cite className="not-italic text-xs font-sans uppercase tracking-widest text-[#9BB1CB] font-semibold block mt-2">
                  Dr. Antonia B. Krimitsos, PsyD
                </cite>
              </div>
            </div>

            {/* Right Main Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border-2 border-[#7A8DA6]/60 shadow-xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/doctor-portrait.png"
                  alt="Dr. Antonia B. Krimitsos, PsyD - abk psychological services, pllc"
                  width={600}
                  height={500}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-3 p-3 bg-[#1E2938] border border-[#3B4C61] rounded-sm text-xs text-[#D5E0ED] flex items-center justify-between">
                <span className="font-semibold text-[#9BB1CB]">Dr. Antonia B. Krimitsos</span>
                <span>21+ Years Licensed Psychologist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intimate Practice Highlight Banner */}
      <section className="py-12 bg-[#FAFAFA] border-b border-[#D5CECB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Badge variant="clay">Direct & Intimate Telehealth Care</Badge>
          
          <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
            Personalized, one-on-one psychological care.
          </h2>

          <p className="text-sm text-[#4A5056] leading-relaxed max-w-2xl mx-auto">
            abk psychological services, pllc is a small, intimate telehealth practice. You work exclusively with Dr. Krimitsos—providing a consistent, highly attentive, and private therapeutic space without administrative handoffs.
          </p>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="py-16 bg-[#EBF0F5]" id="who-i-work-with">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#3B4C61] font-semibold">
              Practice Specializations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
              Who I Work With
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5056]">
              Dedicated, neurodiversity-respectful psychotherapy tailored to your specific experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceData.map((audience) => (
              <AudienceCard key={audience.id} audience={audience} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/who-i-work-with"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#3B4C61] hover:text-[#253344] transition-colors"
            >
              View Full Details for Adults, Parents, Partners & Siblings
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Distinction Section (High-Impact Slate Blue Block) */}
      <section className="py-16 bg-[#253344] text-[#FAFAFA] border-y border-[#3B4C61]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#3B4C61] text-[#FAFAFA] text-xs font-semibold uppercase tracking-wider rounded-full border border-[#7A8DA6]/40">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Clinical Distinction</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAFAFA]">
            A perspective shaped by 15+ years in early childhood autism assessment.
          </h2>

          <p className="text-sm text-[#D5E0ED] leading-relaxed">
            Having spent over 15 years conducting direct clinical autism evaluations in early childhood, Dr. Krimitsos understands firsthand how a diagnosis affects an entire life and family system—reshaping identity, expectations, and relationships.
          </p>

          <div className="p-4 bg-[#1E2938] border-l-3 border-[#7A8DA6] rounded-r-sm space-y-1">
            <p className="font-serif text-base text-[#FAFAFA]">
              The assessment answers one question. Therapy makes room for the questions that follow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#1E2938] border border-[#3B4C61] rounded-sm space-y-1">
              <strong className="text-xs uppercase font-semibold text-[#9BB1CB] block">Small & Intimate</strong>
              <p className="text-xs text-[#D5E0ED]">Direct one-on-one care with Dr. Krimitsos without associates.</p>
            </div>
            <div className="p-4 bg-[#1E2938] border border-[#3B4C61] rounded-sm space-y-1">
              <strong className="text-xs uppercase font-semibold text-[#9BB1CB] block">Assessment-Informed</strong>
              <p className="text-xs text-[#D5E0ED]">Bridging deep diagnostic insight with warm psychodynamic therapy.</p>
            </div>
            <div className="p-4 bg-[#1E2938] border border-[#3B4C61] rounded-sm space-y-1">
              <strong className="text-xs uppercase font-semibold text-[#9BB1CB] block">100% Telehealth</strong>
              <p className="text-xs text-[#D5E0ED]">Secure video therapy from the sensory comfort of home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Grid Section */}
      <ApproachGrid />

      {/* About Preview Section */}
      <section className="py-16 bg-[#FAFAFA] border-t border-[#D5CECB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Badge variant="sage">Licensed Clinical Psychologist</Badge>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
            Two decades of experience. A deeply human approach.
          </h2>

          <p className="text-sm text-[#4A5056] leading-relaxed">
            Dr. Antonia B. Krimitsos earned her Doctor of Psychology (PsyD) degree from George Washington University and has practiced as a licensed psychologist for over 21 years, with more than 15 years dedicated to early childhood autism assessment.
          </p>

          <p className="text-sm text-[#4A5056] leading-relaxed">
            Her psychotherapy practice focuses on what happens after diagnosis—providing a warm, curious, psychodynamic space for adults, parents, partners, and family members to explore identity, relationships, and meaningful life choices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-[#E8E3DF]">
            <div>
              <h3 className="text-[11px] uppercase tracking-wider text-[#3B4C61] font-semibold">
                Education
              </h3>
              <p className="text-xs font-serif text-[#181A1D]">PsyD, George Washington University</p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-wider text-[#3B4C61] font-semibold">
                Experience
              </h3>
              <p className="text-xs font-serif text-[#181A1D]">21+ Yrs Psychologist · 15+ Yrs Assessment</p>
            </div>
          </div>

          <div className="pt-1">
            <Link
              href="/about"
              className="inline-flex items-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] hover:bg-[#253344] rounded-sm transition-colors"
            >
              Read Full Clinical Bio
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Invitational CTA Section (Prominent Deep Navy Banner) */}
      <section className="py-16 bg-[#253344] text-[#FAFAFA] border-t border-[#3B4C61]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#9BB1CB] font-semibold">
            Direct Telehealth Care
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#FAFAFA]">
            Therapy begins with making sense of where you are.
          </h2>

          <p className="text-sm text-[#D5E0ED] leading-relaxed max-w-xl mx-auto">
            Reach out to Dr. Krimitsos for a preliminary consultation to discuss your therapy goals in a quiet, non-judgmental environment.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] hover:bg-[#4C607A] border border-[#7A8DA6]/40 rounded-sm transition-all shadow-sm"
            >
              Begin a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
