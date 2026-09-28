import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Clinical Disclaimer | ABK Psychological Services, PLLC",
  description: "Terms of use and clinical disclaimer for ABK Psychological Services, PLLC.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8 text-sm text-[#4A544C] leading-relaxed font-light">
      <div className="border-b border-[#E2E6E2] pb-6 space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
          Terms & Professional Disclaimers
        </h1>
        <p className="text-xs uppercase tracking-wider text-[#4F6752] font-semibold">
          ABK Psychological Services, PLLC
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#1C241E]">Website Information</h2>
        <p>
          The information on this website is provided for general informational purposes. Browsing this site or submitting an inquiry does not constitute psychological advice or establish a formal therapist-client relationship.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#1C241E]">Existing Professional Relationships</h2>
        <p>
          To maintain clear professional boundaries and avoid conflicts of interest, Dr. Krimitsos does not provide private services to individuals or family members with whom she has an existing professional relationship through another organization.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#1C241E]">No Emergency Services</h2>
        <p>
          This website and contact form are not monitored for emergency situations. If you are experiencing a mental health emergency, please call <strong>988</strong> (Crisis Lifeline), call <strong>911</strong>, or visit your nearest emergency room immediately.
        </p>
      </section>
    </div>
  );
}
