'use client';

import { useState, useEffect } from "react";
import { motion, PanInfo } from "motion/react";

const images = [
  "/POPULAR%20HORTFRUTI-0007.jpg",
  "/POPULAR%20HORTFRUTI-0013.jpg",
  "/POPULAR%20HORTFRUTI-0017.jpg",
  "/POPULAR%20HORTFRUTI-0031.jpg",
  "/POPULAR%20HORTFRUTI-0030%20(1).jpg",
  "/POPULAR%20HORTFRUTI-0018.jpg",
  "/POPULAR%20HORTFRUTI-0026.jpg",
  "/POPULAR%20HORTFRUTI-0001.jpg"
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePanEnd = (e: any, info: PanInfo) => {
    if (info.offset.x < -50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 50) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <motion.div 
      className="relative w-full aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
      onPanEnd={handlePanEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, i) => {
        const len = images.length;
        let diff = i - currentIndex;
        if (diff > len / 2) diff -= len;
        if (diff < -len / 2) diff += len;

        // Hide items that are too far away
        if (Math.abs(diff) > 2) {
          return null;
        }

        const isActive = diff === 0;
        
        return (
          <motion.div
            key={src}
            animate={{
              x: diff * 80 + "%",
              scale: isActive ? 1 : 0.8 - Math.abs(diff) * 0.1,
              opacity: isActive ? 1 : 0.4 - Math.abs(diff) * 0.2,
              zIndex: isActive ? 10 : 5 - Math.abs(diff),
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 1,
            }}
            className="absolute w-[75%] aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] border border-white/20 will-change-transform bg-gray-100 flex items-center justify-center"
            onClick={() => {
              if (!isActive) {
                setCurrentIndex(i);
              }
            }}
          >
            <img 
              src={src} 
              alt="Hortifruti Premium" 
              className="w-full h-full object-cover pointer-events-none" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement?.classList.add('animate-pulse');
              }}
            />
            {/* Glass refraction edge for the anti-slop visual requirement */}
            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] pointer-events-none" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
