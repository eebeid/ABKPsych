import { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | abk psychological services, pllc",
  description:
    "Find answers regarding therapy services, fees, out-of-network insurance reimbursement, telehealth, and practicing with Dr. Antonia B. Krimitsos.",
};

export default function FAQPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="sage">Practice Details & Logistics</Badge>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181A1D]">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#4A5056] max-w-2xl mx-auto font-light leading-relaxed">
          Information about therapy fit, logistics, fees, superbills, and what to expect when working directly with Dr. Krimitsos.
        </p>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* Bottom Contact CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#EAE8E5] border border-[#D5CECB] p-8 rounded-sm space-y-4">
        <h2 className="font-serif text-2xl text-[#181A1D]">
          Have a question not answered here?
        </h2>
        <p className="text-xs text-[#4A5056] max-w-md mx-auto">
          Reach out directly to Dr. Krimitsos for personal clarification.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3F5166] hover:bg-[#2F3D4F] rounded-sm transition-colors shadow-xs"
          >
            Request Preliminary Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
