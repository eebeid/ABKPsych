"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqData, FAQItem } from "@/config/practiceConfig";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("practice-model");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Services & Fit", "Fees & Practice", "General"];

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E6E2]">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="FAQ Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                selectedCategory === cat
                  ? "bg-[#4F6752] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#1C241E] border border-[#E2E6E2] hover:bg-[#EFF3EF]"
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
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B826E]" />
          <input
            id="faq-search"
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-[#FFFFFF] border border-[#E2E6E2] rounded-sm text-[#1C241E] placeholder-[#8A7F6E]/60 focus:outline-none focus:ring-2 focus:ring-[#4F6752]"
          />
        </div>
      </div>

      {/* Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div className="text-center py-12 bg-[#FFFFFF] border border-[#E2E6E2] rounded-sm p-6">
          <p className="text-base text-[#4A544C]">
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
                className="bg-[#FFFFFF] border border-[#E2E6E2] rounded-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#EFF3EF]/50 transition-colors"
                >
                  <span className="font-serif text-lg text-[#1C241E] pr-4 font-medium">
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-1.5 rounded-full bg-[#EFF3EF] text-[#4F6752]">
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
                    className="px-6 pb-6 pt-2 text-sm text-[#4A544C] leading-relaxed font-light border-t border-[#E2E6E2] animate-fade-in"
                  >
                    <p className="whitespace-pre-line">{faq.answer}</p>
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs text-[#6B826E]">
                      <span>Category: {faq.category}</span>
                      <span>ABK Psychological Services</span>
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
