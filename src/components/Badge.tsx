import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sage" | "taupe" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "sage", className = "" }: BadgeProps) {
  const variantStyles = {
    sage: "bg-[#EFF3EF] text-[#4F6752] border-[#C8D4C9]",
    taupe: "bg-[#F3F1EC] text-[#8A7F6E] border-[#DCE2DC]",
    neutral: "bg-[#FFFFFF] text-[#1C241E] border-[#E2E6E2]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
