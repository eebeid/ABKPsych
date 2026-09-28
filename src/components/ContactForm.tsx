"use client";

import { useState } from "react";
import { Send, CheckCircle2, Shield, Mail } from "lucide-react";
import { practiceConfig } from "@/config/practiceConfig";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    seekingTherapyFor: "Individual Therapy",
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
      `Inquiry Focus: ${formData.seekingTherapyFor}\n` +
      `Preferred Contact Method: ${formData.preferredContact}\n\n` +
      `Brief Message:\n${formData.message}\n`
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
      <div className="bg-[#FFFFFF] border border-[#4F6752] rounded-sm p-8 sm:p-12 text-center space-y-6 animate-fade-in shadow-xs">
        <div className="w-14 h-14 bg-[#EFF3EF] text-[#4F6752] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-3xl text-[#1C241E]">
            Thank you, {formData.name || "for reaching out"}.
          </h3>
          <p className="text-base text-[#4A544C] max-w-lg mx-auto leading-relaxed font-light">
            Your default email application has been opened with your inquiry addressed directly to <strong>{practiceConfig.email}</strong>.
          </p>
        </div>

        <div className="p-4 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-xs text-[#4A544C] max-w-md mx-auto text-left space-y-1.5">
          <p className="font-semibold text-[#1C241E] border-b border-[#E2E6E2] pb-1">
            Prepopulated Inquiry Details
          </p>
          <p><strong>To:</strong> {practiceConfig.email}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Inquiry Focus:</strong> {formData.seekingTherapyFor}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={mailtoUrl}
            className="inline-flex items-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4 mr-2" />
            Open Email Application Again
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider font-semibold text-[#4A544C] hover:text-[#1C241E] underline"
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
      className="bg-[#FFFFFF] border border-[#E2E6E2] rounded-sm p-6 sm:p-10 shadow-xs space-y-6"
      aria-labelledby="contact-form-title"
    >
      <div className="border-b border-[#E2E6E2] pb-4">
        <h3 id="contact-form-title" className="font-serif text-2xl text-[#1C241E]">
          Initial Consultation Request
        </h3>
        <p className="text-xs text-[#4A544C] mt-1 font-light">
          Submitting will prepopulate an email directly to Dr. Krimitsos at <strong>{practiceConfig.email}</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
            Your Name <span className="text-[#8A7F6E]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] placeholder-[#8A7F6E]/60 focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
            Email Address <span className="text-[#8A7F6E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] placeholder-[#8A7F6E]/60 focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
            Phone Number <span className="text-[#6B826E] font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] placeholder-[#8A7F6E]/60 focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          />
        </div>

        {/* State / Location */}
        <div className="space-y-2">
          <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
            State / Location <span className="text-[#8A7F6E]">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            placeholder="e.g., New York, NY"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] placeholder-[#8A7F6E]/60 focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Seeking Therapy For */}
        <div className="space-y-2">
          <label htmlFor="seekingTherapyFor" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
            Inquiry Focus
          </label>
          <select
            id="seekingTherapyFor"
            name="seekingTherapyFor"
            value={formData.seekingTherapyFor}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          >
            <option value="Individual Therapy">Individual Therapy (Adolescent or Adult)</option>
            <option value="Parent Therapy">Parent Therapy</option>
            <option value="Partner Therapy">Partner Therapy (Individual)</option>
            <option value="General Inquiry">General Practice Inquiry</option>
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <label htmlFor="preferredContact" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Either Email or Phone">Either Email or Phone</option>
          </select>
        </div>
      </div>

      {/* Brief Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#1C241E]">
          Brief Message <span className="text-[#8A7F6E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Briefly describe what brings you to seek therapy at this time..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#F9F8F5] border border-[#E2E6E2] rounded-sm text-sm text-[#1C241E] placeholder-[#8A7F6E]/60 focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#4F6752] hover:bg-[#3E5341] rounded-sm transition-colors shadow-xs disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
        >
          {isSubmitting ? "Opening Email..." : "Schedule a Consultation"}
          <Send className="ml-2 w-4 h-4" />
        </button>

        <p className="text-xs text-[#4A544C] font-light">
          Sends directly to <strong>{practiceConfig.email}</strong>.
        </p>
      </div>

      {/* Security Note */}
      <div className="pt-4 border-t border-[#E2E6E2] flex items-start gap-2.5 text-xs text-[#4A544C]">
        <Shield className="w-4 h-4 text-[#4F6752] shrink-0 mt-0.5" />
        <p className="font-light">
          <strong>Privacy Note:</strong> Standard email is not fully encrypted. Please do not send detailed sensitive medical histories.
        </p>
      </div>
    </form>
  );
}
