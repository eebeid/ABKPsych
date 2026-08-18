import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Clinical Disclaimer | abk psychological services, pllc",
  description: "Terms of use and clinical disclaimer for abk psychological services, pllc and Dr. Antonia B. Krimitsos.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-sm text-[#4A5056] leading-relaxed">
      <div className="border-b border-[#D5CECB] pb-6 space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#181A1D]">
          Terms & Clinical Disclaimer
        </h1>
        <p className="text-xs uppercase tracking-wider text-[#3F5166] font-semibold">
          abk psychological services, pllc
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#181A1D]">Educational & Administrative Site Purpose</h2>
        <p>
          The information contained on this website is for general informational and administrative purposes only. Browsing this website, submitting a contact form, or requesting information does not constitute medical/psychological advice or establish a formal psychologist-patient relationship.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl text-[#181A1D]">No Emergency Services</h2>
        <p>
          This website and preliminary contact form are not monitored 24/7 and are not designed for emergency crisis situations. If you or someone you know is in immediate danger or experiencing a mental health crisis, please call <strong>988</strong> (Suicide & Crisis Lifeline), call <strong>911</strong>, or visit your nearest emergency room immediately.
        </p>
      </section>
    </div>
  );
}
