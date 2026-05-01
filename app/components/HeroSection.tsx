"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlowButton from "./GlowButton";
import HeroScene from "./HeroScene";

/* ── ANIMATION VARIANTS ──────────────────────────────── */
const fadeSlowUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeScale = (delay: number) => ({
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function HeroSection() {
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  /* Parallax values */
  const bgParallax = useTransform(scrollY, [0, 800], [0, 180]);
  const textParallax = useTransform(scrollY, [0, 800], [0, 80]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* ─── 3D BACKGROUND LAYER ─────────────────────── */}
      <motion.div className="absolute inset-0" style={{ y: bgParallax }}>
        <HeroScene reduced={reduced} />
      </motion.div>

      {/* ─── CINEMATIC OVERLAYS ──────────────────────── */}
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, transparent 0%, #0a0a0a 100%)",
        }}
      />
      {/* Bottom fade to page */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]" />
      {/* Top darkness */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-transparent" />
      {/* Central glow halo */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 35% 50% at 50% 50%, rgba(255,106,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ─── TEXT CONTENT ────────────────────────────── */}
      <motion.div
        style={{ y: textParallax, opacity: opacityFade }}
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center"
      >
        {/* Eyebrow */}
        <motion.p
          {...fadeSlowUp(0.3)}
          className="text-[0.65rem] uppercase tracking-[0.6em] text-orange-300/60 sm:text-xs"
        >
          The Moment of Choice
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          {...fadeScale(0.5)}
          className="my-5 h-px w-20 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
        />

        {/* Main Title */}
        <motion.h1
          {...fadeSlowUp(0.6)}
          className="font-heading text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            background: "linear-gradient(180deg, #f5f5f5 30%, #ff8c00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
            filter: "drop-shadow(0 0 40px rgba(255,140,0,0.25))",
          }}
        >
          AI4DRUGFREE
        </motion.h1>

        <motion.p
          {...fadeSlowUp(0.8)}
          className="font-heading mt-1 text-lg tracking-[0.35em] text-orange-200/50 sm:text-xl md:text-2xl"
        >
          FREE NATION 2026
        </motion.p>

        {/* Impact Phrases */}
        <motion.div
          {...fadeSlowUp(1.0)}
          className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-6"
        >
          <span className="font-heading text-3xl tracking-wide text-orange-100/90 sm:text-4xl md:text-5xl">
            BREAK THE CYCLE
          </span>
          <span className="hidden text-2xl text-orange-500/40 sm:block">•</span>
          <span className="font-heading text-3xl tracking-wide text-orange-100/90 sm:text-4xl md:text-5xl">
            CHOOSE FREEDOM
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeSlowUp(1.3)}
          className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-orange-100/60 sm:text-base md:text-lg"
        >
          Our mission is AI for a Drug-Free Future.
          <br className="hidden sm:block" />{" "}
          We are creating awareness so people can break free and reclaim their
          lives.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeSlowUp(1.6)}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <GlowButton href="#about">Join The Movement</GlowButton>
          <GlowButton href="/register" variant="ghost">
            Register Now
          </GlowButton>
        </motion.div>
      </motion.div>

      {/* ─── SIDE STORYTELLING CUES (Desktop only) ─── */}
      <motion.div
        {...fadeSlowUp(2.0)}
        className="pointer-events-none absolute bottom-28 left-8 z-10 hidden flex-col items-start gap-1 lg:flex"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.5em] text-red-400/30">
          Temptation
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.5em] text-red-400/20">
          Addiction
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.5em] text-red-400/10">
          Darkness
        </span>
      </motion.div>

      <motion.div
        {...fadeSlowUp(2.0)}
        className="pointer-events-none absolute bottom-28 right-8 z-10 hidden flex-col items-end gap-1 lg:flex"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.5em] text-orange-400/30">
          Resistance
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.5em] text-orange-400/20">
          Clarity
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.5em] text-orange-400/10">
          Control
        </span>
      </motion.div>

      {/* ─── SCROLL INDICATOR ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-orange-400/60 to-transparent"
        />
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-orange-200/40">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
