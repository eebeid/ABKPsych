import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, GitMerge, RefreshCw, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Therapeutic Approach | abk psychological services, pllc",
  description:
    "Explore the psychodynamic and assessment-informed therapeutic approach of Dr. Antonia B. Krimitsos.",
};

export default function ApproachPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="sage">Therapeutic Philosophy</Badge>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181A1D]">
          Therapeutic Approach
        </h1>
        <p className="text-base sm:text-lg text-[#4A5056] max-w-2xl mx-auto font-light leading-relaxed">
          Curious rather than prescriptive. Psychodynamic therapy designed to foster authentic self-understanding and relational connection.
        </p>
      </section>

      {/* 3-Part Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Understand */}
          <div className="bg-[#FAFAFA] border border-[#D5CECB] p-8 rounded-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EDF2F7] flex items-center justify-center">
              <Compass className="w-6 h-6 text-[#3F5166]" />
            </div>
            <span className="font-serif text-3xl font-light text-[#8A9DB5] block">01</span>
            <h2 className="font-serif text-2xl text-[#181A1D]">Understand</h2>
            <p className="text-sm text-[#4A5056] leading-relaxed">
              Making room for your full story without rushing to label or fix. Therapy begins by creating a confidential space where feelings, memories, masking experiences, and diagnostic questions can be explored with care.
            </p>
          </div>

          {/* Connect */}
          <div className="bg-[#FAFAFA] border border-[#D5CECB] p-8 rounded-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F4EFEA] flex items-center justify-center">
              <GitMerge className="w-6 h-6 text-[#7A6B5D]" />
            </div>
            <span className="font-serif text-3xl font-light text-[#8A9DB5] block">02</span>
            <h2 className="font-serif text-2xl text-[#181A1D]">Connect</h2>
            <p className="text-sm text-[#4A5056] leading-relaxed">
              Examining how identity, relationships, neurotype, and family expectations intersect. We look at repeating patterns with curiosity rather than judgment to understand how you relate to yourself and others.
            </p>
          </div>

          {/* Change */}
          <div className="bg-[#FAFAFA] border border-[#D5CECB] p-8 rounded-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EDF2F7] flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-[#3F5166]" />
            </div>
            <span className="font-serif text-3xl font-light text-[#8A9DB5] block">03</span>
            <h2 className="font-serif text-2xl text-[#181A1D]">Change</h2>
            <p className="text-sm text-[#4A5056] leading-relaxed">
              Cultivating deeper self-recognition to create freedom for genuine choices. As clarity develops, you gain confidence to unmask safely, communicate your needs, and establish sustainable boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment-Informed Insight Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#EAE8E5] p-8 sm:p-12 border border-[#D5CECB] rounded-sm space-y-6">
        <Badge variant="clay">Assessment-Informed Perspective</Badge>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
          Bridging Diagnostic Insight with Psychodynamic Depth
        </h2>
        <p className="text-sm text-[#4A5056] leading-relaxed">
          With over 15 years of experience conducting early childhood autism assessments, Dr. Krimitsos brings a deep understanding of developmental trajectories and diagnostic nuances. In therapy, this diagnostic insight is integrated into a warm, psychodynamic process focused on personal meaning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-1" />
            <p className="text-xs text-[#181A1D]">
              <strong>No Cookie-Cutter Formulas:</strong> Therapy is tailored to your unique history and goals.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-1" />
            <p className="text-xs text-[#181A1D]">
              <strong>Relational Focus:</strong> Exploring how neurotype impacts partnership, parenting, and family.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#181A1D]">
          Explore if this approach is right for you.
        </h2>
        <p className="text-sm text-[#4A5056]">
          Contact Dr. Krimitsos to request a preliminary consultation.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3F5166] hover:bg-[#2F3D4F] rounded-sm transition-all shadow-xs"
          >
            Request Preliminary Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
