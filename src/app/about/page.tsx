import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { practiceConfig } from "@/config/practiceConfig";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: `About Dr. Antonia B. Krimitsos, PsyD | abk psychological services, pllc`,
  description:
    "Learn about Dr. Antonia B. Krimitsos, a licensed clinical psychologist with 21+ years of experience and 15+ years in early childhood autism assessment.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Page Title & Bio Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2">
          <Badge variant="sage">Dr. Antonia B. Krimitsos, PsyD</Badge>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181A1D]">
          About Dr. Antonia B. Krimitsos
        </h1>

        <p className="text-base sm:text-lg text-[#4A5056] max-w-2xl mx-auto font-light leading-relaxed">
          Founder of abk psychological services, pllc—an intimate, direct telehealth practice providing psychodynamic psychotherapy.
        </p>
      </section>

      {/* Main Bio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column - Doctor Portrait & Credential Card */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="relative rounded-sm overflow-hidden border border-[#D5CECB] shadow-md max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Antonia B. Krimitsos, PsyD - abk psychological services, pllc"
                width={600}
                height={750}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Quick Credential Box */}
            <div className="bg-[#FAFAFA] border border-[#D5CECB] p-6 rounded-sm space-y-4 shadow-xs">
              <h3 className="font-serif text-lg text-[#181A1D] border-b border-[#E8E3DF] pb-2">
                Clinical Qualifications
              </h3>
              
              <div className="space-y-3 text-xs text-[#4A5056]">
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#3F5166] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181A1D]">Doctor of Psychology (PsyD)</strong>
                    George Washington University
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#3F5166] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181A1D]">21+ Years Licensed Psychologist</strong>
                    Decades of clinical psychotherapy experience.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-[#7A6B5D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#181A1D]">15+ Years Assessment Experience</strong>
                    Specialized early childhood autism evaluation background.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Deep Biography Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-stone max-w-none space-y-5 text-sm text-[#4A5056] leading-relaxed">
              <p className="text-base text-[#181A1D] font-light leading-relaxed">
                Welcome. I am Dr. Antonia B. Krimitsos, a licensed clinical psychologist with over two decades of clinical experience. My practice is dedicated to providing thoughtful, psychodynamic psychotherapy for adults, parents, partners, and family members navigating autism diagnosis, identity, and relationships.
              </p>

              <div className="pt-3 border-t border-[#E8E3DF]">
                <h2 className="font-serif text-2xl text-[#181A1D] mb-3">
                  Early Childhood Assessment Background
                </h2>
                <p>
                  For over 15 years, a central pillar of my clinical work involved conducting direct psychological and developmental evaluations for young children. Spending over a decade evaluating early childhood autism gave me a unique, long-term vantage point into how a diagnosis impacts an entire family system—shaping parent expectations, marital communication, sibling dynamics, and individual self-understanding over time.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E3DF]">
                <h2 className="font-serif text-2xl text-[#181A1D] mb-3">
                  Beyond the Diagnosis: The Role of Psychotherapy
                </h2>
                <p>
                  Diagnostic evaluations answer important questions, but they are only a starting point. Therapy is where we make room for the personal, relational, and emotional experiences that follow. Whether you are an autistic adult exploring late-in-life identification, a parent balancing caregiving with personal identity, or a spouse in a neurodiverse marriage, my role is to help you explore your story with deep curiosity rather than clinical prescription.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E3DF]">
                <h2 className="font-serif text-2xl text-[#181A1D] mb-3">
                  An Intimate Practice Model
                </h2>
                <p>
                  abk psychological services, pllc was founded as a small, direct practice. When you reach out, you work exclusively with me. There are no associates, call centers, or administrative handoffs—ensuring consistent, private, and highly personalized care.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8E3DF]">
                <h2 className="font-serif text-2xl text-[#181A1D] mb-3">
                  Clinical Style & Values
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-1" />
                    <p><strong>Warm & Collaborative:</strong> A grounded, empathetic relationship where your experience is heard without judgment.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-1" />
                    <p><strong>Psychodynamically Informed:</strong> Looking beneath surface symptoms to understand underlying emotions, relational patterns, and identity.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3F5166] shrink-0 mt-1" />
                    <p><strong>Neurodiversity-Respectful:</strong> Honoring neurodivergent identities and communication styles rather than forcing compliance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action Card */}
            <div className="bg-[#EDF2F7] border border-[#8A9DB5]/60 p-6 rounded-sm space-y-4">
              <h3 className="font-serif text-xl text-[#181A1D]">
                Interested in working together?
              </h3>
              <p className="text-xs text-[#4A5056] leading-relaxed">
                Contact Dr. Krimitsos to request a preliminary consultation to discuss your therapy needs in a private setting.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3F5166] hover:bg-[#2F3D4F] rounded-sm transition-colors shadow-xs"
                >
                  Request Preliminary Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
