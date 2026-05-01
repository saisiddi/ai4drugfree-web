"use client";

import GlowButton from "../GlowButton";
import SectionReveal from "../SectionReveal";

export default function CTASection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionReveal>
        <div className="glass-panel rounded-[32px] p-12 text-center cinematic-grid">
          <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
            Join the Movement
          </p>
          <h3 className="mt-4 text-4xl font-semibold text-glow">
            Stand with us. Illuminate a drug-free future.
          </h3>
          <p className="mt-5 text-base text-orange-100/80">
            Your presence signals to every survivor that they are not alone.
            Register, share, and keep the movement alive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GlowButton href="/register">Register Now</GlowButton>
            <GlowButton href="#about" variant="ghost">
              Explore Movement
            </GlowButton>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
