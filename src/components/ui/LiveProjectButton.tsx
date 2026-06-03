import React from "react";

interface LiveProjectButtonProps {
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ className = "" }) => {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-2 text-[10px] sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-3.5 md:text-base hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap ${className}`}
    >
      Live Project
    </button>
  );
};
