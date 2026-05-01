"use client";

import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";
import PosterCarousel from "../PosterCarousel";

export default function PostersSection() {
  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
              Posters Gallery
            </p>
            <h3 className="mt-4 text-4xl font-semibold text-glow">
              Visual stories engineered to move hearts.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-orange-100/70">
              Swipe or click through the official AI4DRUGFREE campaign posters designed to spread awareness and ignite action.
            </p>
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.2} className="w-full">
        <PosterCarousel />
      </SectionReveal>
    </section>
  );
}
