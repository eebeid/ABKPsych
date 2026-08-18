import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCheck, HeartHandshake, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Who I Work With | Adults, Parents, Partners & Siblings | abk psychological services",
  description:
    "Comprehensive autism-focused psychotherapy for autistic adults, parents of autistic children, spouses in neurodiverse relationships, and adult siblings.",
};

export default function WhoIWorkWithPage() {
  return (
    <div className="space-y-0">
      {/* Page Header (Deep Slate Navy) */}
      <section className="py-14 bg-[#253344] text-[#FAFAFA] border-b border-[#3B4C61]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="sage">Practice Specializations</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAFAFA]">
            Who I Work With
          </h1>
          <p className="text-base text-[#D5E0ED] max-w-2xl mx-auto font-light leading-relaxed">
            Psychotherapy tailored to adults, parents, partners, and family members navigating autism diagnosis, identity, and relationships.
          </p>

          {/* Jump Anchor Nav */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <a href="#adults" className="px-3.5 py-1.5 bg-[#3B4C61] border border-[#7A8DA6]/50 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] hover:bg-[#4C607A] rounded-sm transition-colors">
              Autistic Adults
            </a>
            <a href="#parents" className="px-3.5 py-1.5 bg-[#3B4C61] border border-[#7A8DA6]/50 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] hover:bg-[#4C607A] rounded-sm transition-colors">
              Parents
            </a>
            <a href="#partners" className="px-3.5 py-1.5 bg-[#3B4C61] border border-[#7A8DA6]/50 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] hover:bg-[#4C607A] rounded-sm transition-colors">
              Partners & Spouses
            </a>
            <a href="#siblings" className="px-3.5 py-1.5 bg-[#3B4C61] border border-[#7A8DA6]/50 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] hover:bg-[#4C607A] rounded-sm transition-colors">
              Siblings & Family
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: Autistic Adults & Later Diagnosis */}
      <section id="adults" className="py-16 bg-[#FAFAFA] border-b border-[#D5CECB] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF0F5] border border-[#3B4C61]/30 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-[#3B4C61]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#3B4C61] font-semibold">Specialization 01</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
                Autistic Adults & Later-in-Life Diagnosis
              </h2>
            </div>
          </div>

          <p className="text-base text-[#4A5056] leading-relaxed">
            Receiving an autism diagnosis in adulthood—or coming to recognize yourself as autistic later in life—often brings a complex mix of relief, clarity, grief, and re-evaluation.
          </p>

          <div className="p-4 bg-[#253344] text-[#FAFAFA] border-l-4 border-[#3B4C61] rounded-r-sm">
            <p className="font-serif text-lg text-[#FAFAFA] italic">
              “Therapy offers space to process who you have been, unmask safely, and build a life aligned with your true needs.”
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-xl text-[#181A1D]">Focus Areas in Therapy:</h3>
            <ul className="space-y-2 text-sm text-[#4A5056]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Post-Diagnostic Integration:</strong> Making sense of past experiences and childhood memories through a neurodiversity-affirming lens.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Masking & Autistic Burnout:</strong> Identifying the emotional cost of heavy masking and developing sustainable self-care strategies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Relational Dynamics:</strong> Navigating friendships, romantic relationships, workplace expectations, and boundary-setting.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: Parents of Autistic Children */}
      <section id="parents" className="py-16 bg-[#EBF0F5] border-b border-[#D5CECB] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#3B4C61]/30 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-[#3B4C61]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#3B4C61] font-semibold">Specialization 02</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
                Parents of Autistic Children
              </h2>
            </div>
          </div>

          <p className="text-base text-[#4A5056] leading-relaxed">
            Parenting an autistic child involves incredible dedication, but it can also involve profound fatigue, systemic stress, and complex emotions. Therapy provides a confidential space dedicated entirely to your own emotional life.
          </p>

          <div className="p-4 bg-[#FAFAFA] border-l-4 border-[#3B4C61] rounded-r-sm">
            <p className="font-serif text-lg text-[#181A1D] italic">
              “Drawing on 15+ years in early childhood assessment, I support parents as individuals—beyond advocacy and caregiving logistics.”
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-xl text-[#181A1D]">Focus Areas in Therapy:</h3>
            <ul className="space-y-2 text-sm text-[#4A5056]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Processing Diagnosis & Uncertainty:</strong> Working through complex feelings, expectations, and future worries without guilt.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Sustaining Personal Identity:</strong> Reclaiming your own goals, needs, and sense of self alongside parenting obligations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Family Dynamics & Co-Parenting:</strong> Strengthening communication with your partner and supporting neurotypical siblings.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Partners & Spouses */}
      <section id="partners" className="py-16 bg-[#FAFAFA] border-b border-[#D5CECB] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF0F5] border border-[#3B4C61]/30 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#3B4C61]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#3B4C61] font-semibold">Specialization 03</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
                Spouses & Partners in Neurodiverse Relationships
              </h2>
            </div>
          </div>

          <p className="text-base text-[#4A5056] leading-relaxed">
            Neurodiverse relationships offer deep strengths, but differing communication styles, processing speeds, and sensory needs can create repeating misunderstandings or emotional disconnect.
          </p>

          <div className="p-4 bg-[#253344] text-[#FAFAFA] border-l-4 border-[#3B4C61] rounded-r-sm">
            <p className="font-serif text-lg text-[#FAFAFA] italic">
              “Therapy builds mutual understanding without blame—translating different neurotypes into clear connection.”
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-xl text-[#181A1D]">Focus Areas in Therapy:</h3>
            <ul className="space-y-2 text-sm text-[#4A5056]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Bridging Communication Mismatches:</strong> Understanding how literal vs. implied communication styles impact intimacy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Sensory & Emotional Capacity:</strong> Aligning social expectations, downtime needs, and household routines thoughtfully.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Individual & Partner Well-being:</strong> Cultivating personal autonomy alongside shared partnership growth.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: Adult Siblings & Family */}
      <section id="siblings" className="py-16 bg-[#EBF0F5] border-b border-[#D5CECB] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#3B4C61]/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#3B4C61]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#3B4C61] font-semibold">Specialization 04</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
                Adult Siblings & Family Members
              </h2>
            </div>
          </div>

          <p className="text-base text-[#4A5056] leading-relaxed">
            Growing up as a sibling to an autistic individual shapes your identity, emotional role, and sense of responsibility in subtle and lasting ways that deserve thoughtful reflection.
          </p>

          <div className="p-4 bg-[#FAFAFA] border-l-4 border-[#3B4C61] rounded-r-sm">
            <p className="font-serif text-lg text-[#181A1D] italic">
              “Therapy offers space to explore unspoken family expectations and establish healthy adult boundaries.”
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-xl text-[#181A1D]">Focus Areas in Therapy:</h3>
            <ul className="space-y-2 text-sm text-[#4A5056]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Examining Childhood Family Roles:</strong> Understanding early experiences of self-reliance, caretaking, or minimized needs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Establishing Healthy Boundaries:</strong> Balancing family commitment with your own career, relationships, and identity.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3B4C61] shrink-0 mt-1" />
                <span><strong>Navigating Future Planning:</strong> Addressing adult responsibilities and family communication with clarity and peace.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner (Deep Navy) */}
      <section className="py-16 bg-[#253344] text-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="sage">Begin Therapy</Badge>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FAFAFA]">
            Ready to request a preliminary consultation?
          </h2>
          <p className="text-sm text-[#D5E0ED] max-w-xl mx-auto">
            Connect directly with Dr. Krimitsos to discuss therapy for yourself, your relationship, or your family.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3B4C61] hover:bg-[#4C607A] border border-[#7A8DA6]/40 rounded-sm transition-all shadow-xs"
            >
              Request Preliminary Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
