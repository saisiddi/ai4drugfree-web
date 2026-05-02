"use client";

import SectionReveal from "../SectionReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionReveal>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
              About & Theme
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-glow sm:text-5xl">
              A techno-social uprising powered by empathy, AI, and action.
            </h2>
            <p className="mt-6 text-base text-orange-100/80 sm:text-lg">
              AI4DRUGFREE – DRUG FREE NATION 2026 is a cinematic movement where
              university innovators unite to fight drug abuse. Through
              intelligent awareness, immersive storytelling, and collective
              action, we build a future where recovery is possible and hope is
              engineered.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-200/70">
              Theme Statement
            </p>
            <p className="mt-4 text-lg text-orange-100/90">
              &ldquo;We design a future where AI illuminates the path to
              recovery, dignity, and freedom. Every voice we reach is a life
              reclaimed.&rdquo;
            </p>
            <div className="mt-8 h-px w-full section-divider" />
            <div className="mt-6 grid gap-4 text-sm text-orange-100/70">
              <p>Event Date: May 8 - 14, 2026</p>
              <p>Venue: S-Vyasa Deemed to be University (School of Engineering and Technology)</p>
              <p>Focus: AI-powered awareness, recovery, and advocacy</p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
