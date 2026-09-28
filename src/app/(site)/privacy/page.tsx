import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ABK Psychological Services, PLLC",
  description: "Privacy Policy and Notice of Privacy Practices for ABK Psychological Services, PLLC.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8 text-sm text-[#4A544C] leading-relaxed font-light">
      <div className="border-b border-[#E2E6E2] pb-6 space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1C241E]">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-wider text-[#4F6752] font-semibold">
          ABK Psychological Services, PLLC
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#1C241E]">Information Collection & Use</h2>
        <p>
          We respect your privacy. ABK Psychological Services, PLLC collects minimal personal data—specifically information you voluntarily submit through our preliminary contact form (such as your name, email address, phone number, location, and inquiry focus). We do not sell or share visitor information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#1C241E]">Email Communications</h2>
        <p>
          Submitting an inquiry via our contact form opens an email to <strong>dr.antonia@abkpsych.com</strong>. Standard internet email is not fully encrypted. Please do not include highly sensitive medical details in preliminary messages.
        </p>
      </section>

      <section className="space-y-3" id="notice">
        <h2 className="font-serif text-xl text-[#1C241E]">Clinical Privacy (HIPAA)</h2>
        <p>
          Once a formal clinical relationship is established, all psychotherapy records and communications are protected under federal HIPAA laws and state licensing standards.
        </p>
      </section>
    </div>
  );
}
