import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { ContactButton } from "./ui/ContactButton";
import { Magnet } from "./ui/Magnet";

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative max-w-7xl mx-auto w-full">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] px-6 md:px-10 pt-6 md:pt-8 z-20">
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#price" className="hover:opacity-70 transition-opacity duration-200">Price</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center w-full px-6 md:px-10 z-20">
        <div className="overflow-hidden w-full flex justify-center">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[clamp(2rem,9.5vw,200px)] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m rocky
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <div className="pointer-events-auto">
          <Magnet padding={150} strength={3}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Rocky Portrait"
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
};
