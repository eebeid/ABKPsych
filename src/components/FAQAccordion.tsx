"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqData, FAQItem } from "@/config/practiceConfig";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("who-do-you-work-with");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Services & Fit", "General", "Fees & Insurance", "Telehealth"];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D5CECB]">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="FAQ Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                selectedCategory === cat
                  ? "bg-[#3F5166] text-[#FAFAFA]"
                  : "bg-[#FAFAFA] text-[#181A1D] border border-[#D5CECB] hover:bg-[#EDF2F7]"
              }`}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <label htmlFor="faq-search" className="sr-only">
            Search Frequently Asked Questions
          </label>
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4A5056]" />
          <input
            id="faq-search"
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-[#FAFAFA] border border-[#D5CECB] rounded-sm text-[#181A1D] placeholder-[#4A5056] focus:outline-none focus:ring-2 focus:ring-[#3F5166]"
          />
        </div>
      </div>

      {/* Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div className="text-center py-12 bg-[#FAFAFA] border border-[#D5CECB] rounded-sm p-6">
          <p className="text-base text-[#4A5056]">
            No questions matched your search criteria. Please try another search or category.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-[#FAFAFA] border border-[#D5CECB] rounded-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#EAE8E5]/50 transition-colors"
                >
                  <span className="font-serif text-lg text-[#181A1D] pr-4 font-medium">
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-1.5 rounded-full bg-[#EDF2F7] text-[#3F5166]">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={faq.id}
                    className="px-6 pb-6 pt-2 text-sm text-[#4A5056] leading-relaxed border-t border-[#E8E3DF] animate-fade-in"
                  >
                    <p className="whitespace-pre-line">{faq.answer}</p>
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs text-[#8A9DB5]">
                      <span>Category: {faq.category}</span>
                      <span>Psychotherapy Practice FAQ</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
