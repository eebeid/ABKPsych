import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sage" | "clay" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "sage", className = "" }: BadgeProps) {
  const variantStyles = {
    sage: "bg-[#3B4C61] text-[#FAFAFA] border-[#7A8DA6]/50",
    clay: "bg-[#EBF0F5] text-[#253344] border-[#3B4C61]/30 font-bold",
    neutral: "bg-[#FAFAFA] text-[#181A1D] border-[#D5CECB]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
