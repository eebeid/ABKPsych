import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCheck, HeartHandshake, Users, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Who I Work With | Individuals, Parents & Partners | ABK Psychological Services",
  description:
    "Psychotherapy for adolescents and adults navigating autism and ADHD, as well as parents and partners processing the emotional impact of a diagnosis.",
};

export default function WhoIWorkWithPage() {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="py-16 bg-[#F9F8F5] border-b border-[#E2E6E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="sage">Practice Specializations</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
            Who I Work With
          </h1>
          <p className="text-base sm:text-lg text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
            Trying to make sense of a later-in-life neurodevelopmental diagnosis, whether your own or that of someone you love, can feel especially disorienting.
          </p>
          <p className="text-sm text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
            It often brings a complex mix of <strong className="font-medium text-[#1C241E]">clarity, validation, relief, grief, and uncertainty</strong> that can be difficult to integrate into a new understanding of yourself or your loved one.
          </p>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            <a href="#individuals" className="px-4 py-2 bg-[#FFFFFF] border border-[#E2E6E2] text-xs font-semibold uppercase tracking-wider text-[#1C241E] hover:bg-[#EFF3EF] hover:text-[#4F6752] rounded-sm transition-colors">
              Individuals
            </a>
            <a href="#parents" className="px-4 py-2 bg-[#FFFFFF] border border-[#E2E6E2] text-xs font-semibold uppercase tracking-wider text-[#1C241E] hover:bg-[#EFF3EF] hover:text-[#4F6752] rounded-sm transition-colors">
              Parents
            </a>
            <a href="#partners" className="px-4 py-2 bg-[#FFFFFF] border border-[#E2E6E2] text-xs font-semibold uppercase tracking-wider text-[#1C241E] hover:bg-[#EFF3EF] hover:text-[#4F6752] rounded-sm transition-colors">
              Partners
            </a>
          </div>
        </div>
      </section>

      {/* INDIVIDUALS */}
      <section id="individuals" className="py-20 bg-[#FFFFFF] border-b border-[#E2E6E2] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EFF3EF] flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-[#4F6752]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">Specialization 01</span>
              <h2 className="font-serif text-3xl text-[#1C241E]">
                Individuals
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-base text-[#4A544C] font-light leading-relaxed">
            <p>
              Those diagnosed as adolescents or adults have already spent years learning to compensate, adapt, or mask their difficulties, often becoming highly capable on the outside while expending considerable effort to manage what others cannot see.
            </p>
            <p>
              My practice can offer meaningful exploration of questions about identity, relationships, work, and the life you have built around strategies and compromises that may no longer serve you.
            </p>
            <p>
              Integrating this new understanding into the person you have always been can allow you to move forward with greater clarity about who you are.
            </p>
          </div>

          <div className="p-5 bg-[#F9F8F5] border-l-3 border-[#4F6752] rounded-r-sm space-y-2">
            <h3 className="font-serif text-lg text-[#1C241E]">Key Exploration Areas:</h3>
            <ul className="space-y-2 text-xs text-[#4A544C]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
                <span>Navigating masking, compensation, and the energetic cost of daily adaptation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
                <span>Integrating later-in-life identification into self-concept, career, and relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
                <span>Re-examining childhood memories and long-standing compromises with compassion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section id="parents" className="py-20 bg-[#F9F8F5] border-b border-[#E2E6E2] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EFF3EF] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-[#4F6752]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">Specialization 02</span>
              <h2 className="font-serif text-3xl text-[#1C241E]">
                Parents
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-base text-[#4A544C] font-light leading-relaxed">
            <p>
              When your child is diagnosed in early or late adolescence, following years of uncertainty, unanswered questions, or challenges that were difficult to understand, parents may also need space to process what has come before.
            </p>
            <p>
              Addressing parental stress and emotional fatigue, while processing the unique grief of shifting expectations, is worthy of the dedicated space of therapy.
            </p>
          </div>

          <div className="p-5 bg-[#FFFFFF] border-l-3 border-[#4F6752] rounded-r-sm space-y-2">
            <h3 className="font-serif text-lg text-[#1C241E]">Key Exploration Areas:</h3>
            <ul className="space-y-2 text-xs text-[#4A544C]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
                <span>Processing years of uncertainty, unanswered questions, and emotional fatigue</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
                <span>Navigating the unique grief and adaptation of shifting parenting expectations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
                <span>Creating dedicated space for your own reflective experience separate from caregiving</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 bg-[#FFFFFF] border-b border-[#E2E6E2] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EFF3EF] flex items-center justify-center">
              <Users className="w-6 h-6 text-[#4F6752]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4F6752] font-semibold">Specialization 03</span>
              <h2 className="font-serif text-3xl text-[#1C241E]">
                Partners
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-base text-[#4A544C] font-light leading-relaxed">
            <p>
              When neurodivergence enters an adult relationship, whether through a recent diagnosis or a growing recognition of longstanding differences, established perspectives on communication, intimacy, and conflict may shift.
            </p>
            <p>
              Processing how this realization influences the relationship allows for greater understanding of your own needs and experiences within it.
            </p>
          </div>

          {/* Important Practice Boundary Box */}
          <div className="p-5 bg-[#F3F1EC] border border-[#8A7F6E]/30 rounded-sm space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8A7F6E] block">
              Important Practice Boundary
            </span>
            <p className="text-xs text-[#1C241E] font-medium leading-relaxed">
              ABK Psychological Services provides individual psychotherapy for partners, rather than couples or marriage counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Key Thematic Transition Statement */}
      <section className="py-24 bg-[#EFF3EF] border-y border-[#C8D4C9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E] font-medium leading-tight">
            “The impact of a neurodevelopmental diagnosis rarely belongs to one person alone.”
          </h2>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-all shadow-xs"
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
