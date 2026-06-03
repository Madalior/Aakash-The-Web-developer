import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, i) => {
        const characters = word.split("");
        return (
          <span key={i} className="mr-[0.25em] whitespace-nowrap flex">
            {characters.map((char, j) => {
              // Calculate index globally across all characters might be tricky, 
              // but we can approximate by mapping progress across the total length.
              const prevWordsLength = words.slice(0, i).join("").length + i; // +i for spaces
              const charIndex = prevWordsLength + j;
              const totalLength = text.length;
              
              const start = charIndex / totalLength;
              const end = start + (1 / totalLength);
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <span key={j} className="relative">
                  <span className="invisible">{char}</span>
                  <motion.span className="absolute left-0 top-0" style={{ opacity }}>
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
