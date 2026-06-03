import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LiveProjectButton } from "./ui/LiveProjectButton";

interface ProjectDetails {
  id: string;
  num: string;
  clientRow: string;
  name: string;
  url: string;
  videoSrc: string;
}

const projects: ProjectDetails[] = [
  {
    id: "p1",
    num: "01",
    clientRow: "E-Commerce",
    name: "VAULX",
    url: "https://e-commerce-eight-orcin-29.vercel.app/",
    videoSrc: "1.mp4"
  },
  {
    id: "p2",
    num: "02",
    clientRow: "Healthcare",
    name: "Rocky Clinic",
    url: "https://clinic-kw62.vercel.app/#doctors",
    videoSrc: "2.mp4"
  },
  {
    id: "p3",
    num: "03",
    clientRow: "Legal",
    name: "Law Daily",
    url: "https://lawyer-six-flax.vercel.app/",
    videoSrc: "3.mp4"
  },
  {
    id: "p4",
    num: "04",
    clientRow: "Retail",
    name: "K. Perumal Silks",
    url: "https://k-perumal-silks.vercel.app/",
    videoSrc: "4.mp4"
  },
  {
    id: "p5",
    num: "05",
    clientRow: "Blog",
    name: "NHM Explorations",
    url: "https://blog1-omega-olive.vercel.app/",
    videoSrc: "5.mp4"
  },
  {
    id: "p6",
    num: "06",
    clientRow: "Platform",
    name: "Asme Platform",
    url: "https://login-l3byaq3ab-madaliors-projects.vercel.app/",
    videoSrc: "6.mp4"
  },
  {
    id: "p7",
    num: "07",
    clientRow: "Construction",
    name: "Ironveil",
    url: "https://construction-pink-delta.vercel.app/",
    videoSrc: "7.mp4"
  }
];

const ProjectCard: React.FC<{ project: ProjectDetails; index: number; totalCards: number; progress: any }> = ({ project, index, totalCards, progress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div className="h-[80vh] md:h-[85vh] flex items-center justify-center sticky top-20 md:top-32 w-full px-4 sm:px-6 md:px-10">
      <motion.div 
        style={{ scale, top: `${index * 28}px`, transformOrigin: 'top center' }}
        className="relative w-full max-w-7xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 h-full md:h-auto"
      >
        <div className="flex flex-row md:flex-row justify-between items-start md:items-end gap-2 md:gap-0 px-2 sm:px-4 md:px-8 pt-2 sm:pt-4 md:pt-8 w-full shrink-0">
          <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-12 flex-1 min-w-0 md:w-full">
            <span className="font-black text-[clamp(2.5rem,8vw,100px)] leading-none text-[#D7E2EA]">{project.num}</span>
            <div className="flex flex-col mt-1 md:mt-0 min-w-0 pr-2 md:pr-0">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-xs md:text-base font-medium mb-1 md:mb-2">{project.clientRow}</span>
              <h3 className="font-bold uppercase text-[clamp(1.1rem,4vw,3.5rem)] md:text-[clamp(1.5rem,4vw,3.5rem)] leading-tight md:leading-none text-[#D7E2EA] truncate whitespace-normal break-words md:truncate-none md:whitespace-nowrap md:break-normal">{project.name}</h3>
            </div>
          </div>
          <div className="shrink-0 mt-2 md:mt-0 md:pb-2">
             <a href={project.url} target="_blank" rel="noreferrer">
               <LiveProjectButton />
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 w-full flex-1 md:flex-none md:h-full min-h-0 md:min-h-[500px]">
          <div className="flex flex-row md:flex-col w-full md:w-[40%] gap-2 sm:gap-4 md:gap-8 justify-between h-[25%] min-h-[80px] md:min-h-0 md:h-auto shrink-0">
            <video src={project.videoSrc} autoPlay loop muted playsInline className="w-1/2 md:w-full h-full md:h-[clamp(130px,16vw,230px)] rounded-[15px] sm:rounded-[30px] md:rounded-[50px] object-cover object-center md:object-top" />
            <video src={project.videoSrc} autoPlay loop muted playsInline className="w-1/2 md:w-full h-full md:min-h-[clamp(160px,22vw,340px)] flex-1 rounded-[15px] sm:rounded-[30px] md:rounded-[50px] object-cover object-center" />
          </div>
          <div className="w-full md:w-[60%] flex-1 md:flex-none flex bg-[#1A1A1A] rounded-[20px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/10 relative group">
            <video 
              src={project.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover relative z-10 bg-black"
              onError={(e) => {
                (e.target as HTMLVideoElement).style.display = 'none';
              }}
            />
            <iframe 
               src={project.url} 
               title={`${project.name} preview`} 
               loading="lazy" 
               className="w-full h-full border-none absolute inset-0 z-0 hidden md:block" 
               sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pb-40 w-full overflow-hidden">
      <div className="pt-24 sm:pt-32 md:pt-40 pb-24 md:pb-40">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </div>

      <div ref={containerRef} className="relative w-full">
        {projects.map((proj, i) => (
          <ProjectCard 
            key={proj.id} 
            index={i} 
            project={proj} 
            totalCards={projects.length}
            progress={scrollYProgress} 
          />
        ))}
      </div>
    </section>
  );
};
