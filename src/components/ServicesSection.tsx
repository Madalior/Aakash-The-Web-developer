import React from "react";
import { FadeIn } from "./ui/FadeIn";

const services = [
  {
    num: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    name: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 w-full text-[#0C0C0C]">
      <FadeIn y={30}>
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto w-full">
        {services.map((svc, i) => (
          <FadeIn 
            key={svc.num} 
            delay={i * 0.1} 
            y={20}
            className="flex flex-col md:flex-row gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t"
          >
            <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#0C0C0C] min-w-[120px] md:min-w-[180px]">
              {svc.num}
            </div>
            <div className="flex flex-col justify-center gap-2 sm:gap-4 md:mt-4">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
                {svc.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {svc.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
