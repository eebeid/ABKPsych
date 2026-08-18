import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { practiceConfig } from "@/config/practiceConfig";
import { Video, ShieldCheck, Mail, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: `Contact & Preliminary Consultation | abk psychological services, pllc`,
  description:
    "Reach out to Dr. Antonia B. Krimitsos to request a direct preliminary consultation for telehealth psychotherapy.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 py-12">
      {/* Page Title Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="sage">Direct Telehealth Practice</Badge>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181A1D]">
          Begin a Conversation
        </h1>

        <p className="text-base text-[#4A5056] max-w-2xl mx-auto font-light leading-relaxed">
          Request a preliminary consultation directly with Dr. Antonia B. Krimitsos.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Right Column: Info & Expectations */}
          <div className="lg:col-span-4 space-y-5 sticky top-28">
            {/* Practice Details Box */}
            <div className="bg-[#FAFAFA] border border-[#D5CECB] p-5 rounded-sm space-y-3 shadow-xs">
              <h2 className="font-serif text-lg text-[#181A1D] border-b border-[#E8E3DF] pb-2 lowercase">
                {practiceConfig.practiceName}
              </h2>

              <div className="space-y-2 text-xs text-[#4A5056]">
                <div>
                  <strong className="block text-[#181A1D] uppercase font-semibold">Clinician</strong>
                  {practiceConfig.psychologistName}
                </div>

                <div>
                  <strong className="block text-[#181A1D] uppercase font-semibold">Format</strong>
                  100% Video Telehealth Practice
                </div>

                <div>
                  <strong className="block text-[#181A1D] uppercase font-semibold">Direct Email</strong>
                  {practiceConfig.email}
                </div>

                <div>
                  <strong className="block text-[#181A1D] uppercase font-semibold">Insurance & Fees</strong>
                  {practiceConfig.insurancePolicy} Monthly superbills provided.
                </div>
              </div>
            </div>

            {/* Direct Care Assurance Box */}
            <div className="bg-[#EDF2F7] border border-[#8A9DB5]/60 p-5 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-[#3F5166]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-xs uppercase tracking-wider font-semibold">
                  Intimate Practice Model
                </h3>
              </div>
              <p className="text-xs text-[#4A5056] leading-relaxed">
                When you reach out, your message goes directly to Dr. Krimitsos. There are no associates or administrative handoffs.
              </p>
            </div>

            {/* Crisis Warning */}
            <div className="bg-[#F4EFEA] border border-[#BFAFA3]/40 p-4 rounded-sm space-y-2 text-xs text-[#7A6B5D]">
              <div className="flex items-center gap-2 font-semibold text-[#7A6B5D]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Emergency Disclaimer</span>
              </div>
              <p className="text-[#181A1D]">
                If you are experiencing a mental health emergency, please call <strong>988</strong> or go to the nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
