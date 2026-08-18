import React from "react";

interface EditorialQuoteProps {
  quote: string;
  author?: string;
  source?: string;
  className?: string;
}

export function EditorialQuote({ quote, author, source, className = "" }: EditorialQuoteProps) {
  return (
    <blockquote className={`relative border-l-2 border-[#3F5166] pl-6 py-2 my-8 italic text-[#181A1D] font-serif text-lg sm:text-xl leading-relaxed bg-[#FAFAFA]/70 rounded-r-sm ${className}`}>
      <p className="mb-2">“{quote}”</p>
      {(author || source) && (
        <cite className="not-italic text-xs font-sans uppercase tracking-widest text-[#3F5166] font-semibold block mt-3">
          {author && <span>{author}</span>}
          {author && source && <span> · </span>}
          {source && <span className="text-[#4A5056]">{source}</span>}
        </cite>
      )}
    </blockquote>
  );
}
