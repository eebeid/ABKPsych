import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { practiceConfig } from "@/config/practiceConfig";

export function DifferentiatorSection() {
  return (
    <section className="py-16 bg-[#FAFAFA] border-y border-[#D5CECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Doctor Portrait Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#D5CECB] shadow-md max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Antonia B. Krimitsos, PsyD - abk psychological services, pllc"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 p-3 bg-[#EDF2F7] border border-[#8A9DB5] rounded-sm text-xs text-[#3F5166] text-center font-medium">
              100% Direct Telehealth Practice · Personal One-on-One Care
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EDF2F7] text-[#3F5166] text-xs font-semibold uppercase tracking-wider rounded-full border border-[#8A9DB5]/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Clinical Distinction</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181A1D] leading-tight">
              A perspective shaped by 15+ years in early childhood autism assessment.
            </h2>

            <p className="text-sm text-[#4A5056] leading-relaxed">
              Having spent over 15 years conducting direct clinical autism evaluations in early childhood, Dr. Krimitsos understands firsthand how a diagnosis affects an entire life and family system—reshaping identity, expectations, and relationships.
            </p>

            <div className="p-4 bg-[#EAE8E5] border-l-3 border-[#3F5166] rounded-r-sm space-y-1">
              <p className="font-serif text-lg text-[#181A1D]">
                The assessment answers one question. Therapy makes room for the questions that follow.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#181A1D]">
                  <strong>Small, Intimate Practice:</strong> You work directly with Dr. Krimitsos without associates or administrative handoffs.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#181A1D]">
                  <strong>Assessment-Informed Psychotherapy:</strong> Bridging deep diagnostic insight with warm, psychodynamic reflection.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#181A1D]">
                  <strong>Convenient Telehealth:</strong> Secure video therapy from the sensory comfort of your own home.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#3F5166] hover:text-[#2F3D4F] transition-colors"
              >
                Read Dr. Krimitsos&apos;s Full Clinical Bio
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
