import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "About ABK Psychological Services | Dr. Antonia B. Krimitsos",
  description:
    "Learn about Dr. Antonia B. Krimitsos and the founding vision of ABK Psychological Services, PLLC.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-14">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="sage">Practice Background</Badge>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
          About ABK Psychological Services
        </h1>
        <p className="text-base sm:text-lg text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
          Bringing together over 20 years of clinical experience in diagnosis and psychotherapy.
        </p>
      </section>

      {/* Main Bio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Portrait Image */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="relative rounded-sm overflow-hidden border border-[#E2E6E2] shadow-xs max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Antonia B. Krimitsos - ABK Psychological Services, PLLC"
                width={600}
                height={750}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4 bg-[#FFFFFF] border border-[#E2E6E2] rounded-sm text-xs text-[#4A544C] space-y-1">
              <strong className="block text-[#1C241E] font-serif text-sm">Dr. Antonia B. Krimitsos, Psy.D.</strong>
              <p>Licensed Psychologist, New York State</p>
            </div>
          </div>

          {/* Right Column - Deep Biography Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-sm sm:text-base text-[#4A544C] leading-relaxed font-light">
              <p className="text-base sm:text-lg text-[#1C241E] font-light leading-relaxed">
                ABK Psychological Services grew from seeing a particular gap: adolescents and adults whose neurodevelopmental differences were not being identified in childhood.
              </p>

              <p>
                Many have learned to compensate, adapt, or mask well enough, but often, the strategies that made that possible become harder to sustain as life becomes more demanding. In turn, those closest to them frequently share in the impact of those crumbling strategies.
              </p>

              <p className="font-serif text-xl text-[#1C241E] pt-2">
                I developed ABK to meet that moment.
              </p>

              <p>
                I wanted to create a practice that brings together over 20 years of experience in diagnosis and psychotherapy, with an understanding that later-life identification is not simply about putting a name to longstanding difficulties.
              </p>

              <p>
                It can also be an opportunity to re-examine the life already lived, individually and together, with a clearer understanding of what has been difficult, what has helped, and what may need to change going forward.
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
                  <p className="font-serif text-sm text-[#1C241E]">Psy.D., Clinical Psychology</p>
                  <p>The George Washington University</p>
                  <p className="text-[#8A7F6E]">Washington, DC</p>
                </div>

                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Doctoral Internship
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">Lenox Hill Hospital</p>
                  <p className="text-[#8A7F6E]">New York, NY</p>
                </div>

                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Bachelor of Arts
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">Biology-Psychology</p>
                  <p>Skidmore College</p>
                  <p className="text-[#8A7F6E]">New York</p>
                </div>

                <div className="space-y-1">
                  <strong className="block text-[#1C241E] font-medium uppercase tracking-wider text-[11px] text-[#4F6752]">
                    Licensure
                  </strong>
                  <p className="font-serif text-sm text-[#1C241E]">Licensed Psychologist</p>
                  <p>New York State</p>
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
        </div>
      </section>
    </div>
  );
}
