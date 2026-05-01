"use client";

import SectionReveal from "../SectionReveal";

const pillars = [
  {
    title: "AI",
    copy: "Predictive insights, immersive simulations, and ethical analytics to guide recovery paths.",
  },
  {
    title: "Awareness",
    copy: "Human stories amplified by technology, turning silence into collective resolve.",
  },
  {
    title: "Action",
    copy: "Community pledges, support networks, and on-ground programs that continue beyond the event.",
  },
];

export default function PillarsSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <SectionReveal>
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
              Core Pillars
            </p>
            <h3 className="mt-4 text-4xl font-semibold text-glow">
              We merge technology with human willpower.
            </h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-panel rounded-3xl p-8 transition hover:-translate-y-2"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-orange-200/70">
                  {pillar.title}
                </p>
                <p className="mt-4 text-lg text-orange-100/90">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
