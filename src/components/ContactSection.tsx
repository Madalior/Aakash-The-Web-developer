import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-20 w-full max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,10vw,140px)]">
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="w-full">
          <p className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)] mb-4 md:mb-12">
            Ready to bring your ideas to life? Let's connect and create something extraordinary.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Phone */}
          <FadeIn delay={0.3} y={40} className="flex">
            <a 
              href="tel:+918122220141" 
              className="flex-1 flex flex-col items-center justify-center gap-4 p-8 rounded-[30px] border-2 border-[#D7E2EA]/10 bg-[#1A1A1A] hover:bg-[#222222] hover:border-[#D7E2EA]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B600A8] to-[#7621B0] flex items-center justify-center shadow-[0_0_15px_rgba(181,1,167,0.4)] group-hover:scale-110 transition-transform">
                <Phone className="text-white w-7 h-7" />
              </div>
              <div className="text-center">
                <h3 className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-semibold mb-2">Phone</h3>
                <p className="text-[#D7E2EA] font-bold text-xl">+91 81222 20141</p>
              </div>
            </a>
          </FadeIn>

          {/* WhatsApp */}
          <FadeIn delay={0.4} y={40} className="flex">
            <a 
              href="https://wa.me/918122220141" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-4 p-8 rounded-[30px] border-2 border-[#D7E2EA]/10 bg-[#1A1A1A] hover:bg-[#222222] hover:border-[#D7E2EA]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)] group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white w-7 h-7" />
              </div>
              <div className="text-center">
                <h3 className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-semibold mb-2">WhatsApp</h3>
                <p className="text-[#D7E2EA] font-bold text-xl">+91 81222 20141</p>
              </div>
            </a>
          </FadeIn>

          {/* Gmail */}
          <FadeIn delay={0.5} y={40} className="flex">
            <a 
              href="mailto:rockysuriyaa@gmail.com" 
              className="flex-1 flex flex-col items-center justify-center gap-4 p-8 rounded-[30px] border-2 border-[#D7E2EA]/10 bg-[#1A1A1A] hover:bg-[#222222] hover:border-[#D7E2EA]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EA4335] to-[#B31404] flex items-center justify-center shadow-[0_0_15px_rgba(234,67,53,0.4)] group-hover:scale-110 transition-transform">
                <Mail className="text-white w-7 h-7" />
              </div>
              <div className="text-center w-full overflow-hidden">
                <h3 className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-semibold mb-2">Email</h3>
                <p className="text-[#D7E2EA] font-bold text-[0.95rem] md:text-[1rem] truncate w-full" title="rockysuriyaa@gmail.com">rockysuriyaa@gmail.com</p>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
