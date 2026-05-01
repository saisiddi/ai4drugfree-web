"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = Array.from({ length: 10 }, (_, i) => `/img/${i + 1}.webp`);

const variants = {
  active: {
    x: 0,
    scale: 1.15,
    opacity: 1,
    zIndex: 50,
    rotateY: 0,
    filter: "blur(0px) brightness(1.1)",
    boxShadow: "0 20px 40px rgba(255, 106, 0, 0.4)",
  },
  right1: {
    x: "80%",
    scale: 0.85,
    opacity: 0.7,
    zIndex: 40,
    rotateY: -15,
    filter: "blur(2px) brightness(0.7)",
    boxShadow: "0 0px 0px rgba(0,0,0,0)",
  },
  right2: {
    x: "140%",
    scale: 0.65,
    opacity: 0.3,
    zIndex: 30,
    rotateY: -25,
    filter: "blur(4px) brightness(0.4)",
    boxShadow: "0 0px 0px rgba(0,0,0,0)",
  },
  rightHidden: {
    x: "200%",
    scale: 0.5,
    opacity: 0,
    zIndex: 0,
    rotateY: -35,
    filter: "blur(8px) brightness(0)",
  },
  left1: {
    x: "-80%",
    scale: 0.85,
    opacity: 0.7,
    zIndex: 40,
    rotateY: 15,
    filter: "blur(2px) brightness(0.7)",
    boxShadow: "0 0px 0px rgba(0,0,0,0)",
  },
  left2: {
    x: "-140%",
    scale: 0.65,
    opacity: 0.3,
    zIndex: 30,
    rotateY: 25,
    filter: "blur(4px) brightness(0.4)",
    boxShadow: "0 0px 0px rgba(0,0,0,0)",
  },
  leftHidden: {
    x: "-200%",
    scale: 0.5,
    opacity: 0,
    zIndex: 0,
    rotateY: 35,
    filter: "blur(8px) brightness(0)",
  },
};

export default function PosterCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getVariant = (index: number) => {
    const total = images.length;
    let offset = index - activeIndex;

    // Normalize offset to -total/2 ... total/2
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset === 0) return "active";
    if (offset === 1) return "right1";
    if (offset === 2) return "right2";
    if (offset === -1) return "left1";
    if (offset === -2) return "left2";
    if (offset > 2) return "rightHidden";
    if (offset < -2) return "leftHidden";
    return "rightHidden";
  };

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, index) => {
        const variant = getVariant(index);
        return (
          <motion.div
            key={src}
            className="absolute h-[400px] w-[280px] origin-center cursor-pointer rounded-2xl border border-white/10 bg-black/50"
            variants={variants}
            initial={false}
            animate={variant}
            transition={{
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1], // Custom smooth ease out
            }}
            style={{
              willChange: "transform, opacity, filter",
              transformStyle: "preserve-3d",
            }}
            onClick={() => {
              if (variant !== "active") {
                setActiveIndex(index);
              }
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Poster ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 280px"
                priority={index < 3 || index === images.length - 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
