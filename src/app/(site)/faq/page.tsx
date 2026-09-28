import { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ABK Psychological Services, PLLC",
  description:
    "Common questions regarding practice model, services, individual partner therapy, fees, and scheduling an initial consultation.",
};

export default function FAQPage() {
  return (
    <div className="space-y-14 py-14">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="sage">Practice Details & FAQ</Badge>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
          Information about practice fit, individual partner boundaries, fees, and starting therapy with Dr. Krimitsos.
        </p>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* Bottom Contact CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#EFF3EF] border border-[#C8D4C9] p-8 sm:p-10 rounded-sm space-y-4">
        <h2 className="font-serif text-2xl text-[#1C241E]">
          Have an inquiry about working together?
        </h2>
        <p className="text-sm text-[#4A544C] max-w-md mx-auto font-light">
          Reach out directly to Dr. Krimitsos to discuss your therapy needs.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-colors shadow-xs"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
