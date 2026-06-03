import React from "react";
import { FadeIn } from "./ui/FadeIn";

const plans = [
  {
    name: "Blog Website",
    price: "₹7,999",
    features: [
      "Custom Design & Development",
      "Hosting for 1 Year",
      "Cloud Infrastructure",
      "3 Months of Replay / Support"
    ]
  },
  {
    name: "E-Commerce",
    price: "₹9,999",
    features: [
      "Full Store Setup & Payments",
      "Hosting for 1 Year",
      "Cloud Infrastructure",
      "3 Months of Replay / Support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Advanced Architecture",
      "Dedicated Cloud Server",
      "Unlimited Revisions",
      "24/7 Priority Support"
    ]
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section id="price" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full text-[#D7E2EA] border-t border-[rgba(215,226,234,0.1)]">
      <FadeIn y={30}>
        <h2 className="font-black uppercase text-center text-[clamp(2.5rem,10vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none hero-heading">
          Pricing
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        {plans.map((plan, i) => (
          <FadeIn 
            key={plan.name} 
            delay={i * 0.15} 
            y={30}
            className="flex flex-col border-2 border-[rgba(215,226,234,0.2)] rounded-[30px] p-8 md:p-10 hover:border-[#D7E2EA] transition-colors duration-300 bg-[#0C0C0C]"
          >
            <h3 className="font-bold uppercase text-xl sm:text-2xl mb-4 text-[#D7E2EA]/60 tracking-widest">{plan.name}</h3>
            <div className="font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-8 hero-heading pb-2">
              {plan.price}
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {plan.features.map(feat => (
                <li key={feat} className="flex items-center gap-3 font-light text-[1rem] sm:text-[1.1rem]">
                  <span className="w-2 h-2 rounded-full bg-[#B600A8]"></span>
                  {feat}
                </li>
              ))}
            </ul>
            
            <a href="tel:+916383942114" className="text-center w-full rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest py-3 sm:py-4 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors mt-auto">
              Get Started
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
