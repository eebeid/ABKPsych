import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | abk psychological services, pllc",
  description: "Privacy Policy and HIPAA Notice for abk psychological services, pllc and Dr. Antonia B. Krimitsos.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-sm text-[#4A5056] leading-relaxed">
      <div className="border-b border-[#D5CECB] pb-6 space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#181A1D]">
          Privacy Policy & HIPAA Notice
        </h1>
        <p className="text-xs uppercase tracking-wider text-[#3F5166] font-semibold">
          abk psychological services, pllc
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#181A1D]">Website Information Collection</h2>
        <p>
          We respect your privacy. abk psychological services, pllc collects minimal personal data—specifically information you voluntarily submit through our preliminary contact form (such as your name, email address, phone number, location, and inquiry summary). We do not sell or share visitor information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#181A1D]">Email & Form Submissions</h2>
        <p>
          Submitting a message via our web form prepopulates an email to <strong>dr.antonia@abkpsych.com</strong>. Standard internet email is not entirely secure or HIPAA-encrypted prior to transmission. Please do not submit highly sensitive health details through standard email.
        </p>
      </section>

      <section className="space-y-3" id="notice">
        <h2 className="font-serif text-xl text-[#181A1D]">Clinical Confidentiality (HIPAA)</h2>
        <p>
          Once a formal clinical relationship is established, all telehealth psychotherapy sessions and records are protected under federal HIPAA regulations and state clinical licensing ethics.
        </p>
      </section>
    </div>
  );
}
