"use client";

import { useState } from "react";
import { AlertTriangle, Send, CheckCircle2, Shield, Mail } from "lucide-react";
import { practiceConfig } from "@/config/practiceConfig";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    seekingTherapyFor: "Autistic Adult",
    preferredContact: "Email",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructMailtoLink = () => {
    const subject = encodeURIComponent(
      `Consultation Inquiry - ${formData.seekingTherapyFor} (${formData.name})`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone Number: ${formData.phone || "Not provided"}\n` +
      `Location/State: ${formData.location}\n` +
      `Seeking Therapy For: ${formData.seekingTherapyFor}\n` +
      `Preferred Contact Method: ${formData.preferredContact}\n\n` +
      `Message Details:\n${formData.message}\n`
    );
    return `mailto:${practiceConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoUrl = constructMailtoLink();
    
    // Launch mailto client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    const mailtoUrl = constructMailtoLink();
    return (
      <div className="bg-[#FAFAFA] border border-[#3F5166] rounded-sm p-8 sm:p-12 text-center space-y-6 animate-fade-in shadow-sm">
        <div className="w-14 h-14 bg-[#EDF2F7] text-[#3F5166] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-3xl text-[#181A1D]">
            Thank you, {formData.name || "for reaching out"}.
          </h3>
          <p className="text-base text-[#4A5056] max-w-lg mx-auto leading-relaxed">
            Your default email application has been opened with your inquiry details addressed to <strong>{practiceConfig.email}</strong>.
          </p>
        </div>

        <div className="p-4 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-xs text-[#4A5056] max-w-md mx-auto text-left space-y-1.5">
          <p className="font-semibold text-[#181A1D] border-b border-[#E8E3DF] pb-1">
            Prepopulated Inquiry Summary
          </p>
          <p><strong>To:</strong> {practiceConfig.email}</p>
          <p><strong>From Name:</strong> {formData.name}</p>
          <p><strong>Reply Email:</strong> {formData.email}</p>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Seeking Therapy For:</strong> {formData.seekingTherapyFor}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={mailtoUrl}
            className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3F5166] hover:bg-[#2F3D4F] rounded-sm transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4 mr-2" />
            Open Email Program Again
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider font-semibold text-[#4A5056] hover:text-[#181A1D] underline"
          >
            Edit Inquiry Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAFAFA] border border-[#D5CECB] rounded-sm p-6 sm:p-10 shadow-xs space-y-6"
      aria-labelledby="contact-form-title"
    >
      <div className="border-b border-[#E8E3DF] pb-4">
        <h3 id="contact-form-title" className="font-serif text-2xl text-[#181A1D]">
          Request a Preliminary Consultation
        </h3>
        <p className="text-xs text-[#4A5056] mt-1">
          Submitting will prepopulate an email to Dr. Krimitsos at <strong>{practiceConfig.email}</strong>.
        </p>
      </div>

      {/* Sensitive Information Warning */}
      <div className="p-4 bg-[#F4EFEA] border border-[#BFAFA3]/40 rounded-sm flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#7A6B5D] shrink-0 mt-0.5" />
        <div className="text-xs text-[#181A1D] leading-relaxed">
          <strong className="font-semibold text-[#7A6B5D]">Privacy & Security Notice:</strong> Standard email is not HIPAA-secured. Please do not include highly sensitive medical details. Submitting this form does not initiate a therapist-client relationship.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
            Your Name <span className="text-[#7A6B5D]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g., Alex Morgan"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] placeholder-[#4A5056] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
            Email Address <span className="text-[#7A6B5D]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e.g., alex@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] placeholder-[#4A5056] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
            Phone Number <span className="text-[#4A5056] font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g., (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] placeholder-[#4A5056] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          />
        </div>

        {/* Location / State */}
        <div className="space-y-2">
          <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
            State / Current Location <span className="text-[#7A6B5D]">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            placeholder="e.g., Virginia, Maryland, DC"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] placeholder-[#4A5056] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Seeking Therapy For */}
        <div className="space-y-2">
          <label htmlFor="seekingTherapyFor" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
            Who are you seeking therapy for?
          </label>
          <select
            id="seekingTherapyFor"
            name="seekingTherapyFor"
            value={formData.seekingTherapyFor}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          >
            <option value="Autistic Adult">Myself (Autistic Adult / Later Diagnosis)</option>
            <option value="Parent">Parent Seeking Therapy for Myself</option>
            <option value="Spouse or Partner">Spouse or Partner (Neurodiverse Dynamics)</option>
            <option value="Sibling or Family">Sibling or Family Member</option>
            <option value="Other Inquiry">Other Inquiry</option>
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <label htmlFor="preferredContact" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Either Email or Phone">Either Email or Phone</option>
          </select>
        </div>
      </div>

      {/* Brief Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#181A1D]">
          Brief Message <span className="text-[#7A6B5D]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Briefly describe what brings you to seek therapy at this time (e.g., recent diagnosis, relationship questions, parent experience)..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#EAE8E5] border border-[#D5CECB] rounded-sm text-sm text-[#181A1D] placeholder-[#4A5056] focus:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] bg-[#3F5166] hover:bg-[#2F3D4F] rounded-sm transition-colors shadow-xs disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
        >
          {isSubmitting ? "Prepopulating Email..." : "Send via Email Application"}
          <Send className="ml-2 w-4 h-4" />
        </button>

        <p className="text-xs text-[#4A5056]">
          Opens your mail client to <strong>{practiceConfig.email}</strong>.
        </p>
      </div>

      {/* Emergency Crisis Footer inside form */}
      <div className="pt-4 border-t border-[#E8E3DF] flex items-start gap-2 text-xs text-[#7A6B5D]">
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
        <p>
          <strong>Crisis Disclaimer:</strong> In a mental health emergency, please call <strong>988</strong> or go to your local emergency room.
        </p>
      </div>
    </form>
  );
}
