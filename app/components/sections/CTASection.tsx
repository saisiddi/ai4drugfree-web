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

          <div className="mt-16 pt-10 border-t border-orange-500/20">
            <h4 className="text-2xl font-semibold text-glow mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-center font-body">
                <p className="text-lg font-medium text-orange-100 uppercase tracking-wider mb-1">
                  Skanda
                </p>
                <p className="text-sm text-orange-200/60 uppercase tracking-widest mb-2 font-semibold">
                  Event Head
                </p>
                <a
                  href="tel:+919902956084"
                  className="text-xl text-warm hover:text-orange-400 transition-colors inline-block tracking-widest"
                >
                  +91 99029 56084
                </a>
              </div>
              <div className="text-center font-body">
                <p className="text-lg font-medium text-orange-100 uppercase tracking-wider mb-1">
                  Tarun
                </p>
                <p className="text-sm text-orange-200/60 uppercase tracking-widest mb-2 font-semibold">
                  Event Head
                </p>
                <a
                  href="tel:+919972170225"
                  className="text-xl text-warm hover:text-orange-400 transition-colors inline-block tracking-widest"
                >
                  +91 99721 70225
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
