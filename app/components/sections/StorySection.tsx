"use client";

import SectionReveal from "../SectionReveal";

export default function StorySection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <SectionReveal>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
              Why This Matters
            </p>
            <h3 className="mt-4 text-4xl font-semibold text-glow">
              We are engineering a future where recovery is visible.
            </h3>
            <p className="mt-6 text-base text-orange-100/80">
              Drug abuse isolates. Our movement reconnects. AI-driven
              storytelling and real-world action create an atmosphere where
              empathy becomes momentum. Every pledge, demo, and conversation is
              a node in a growing network of hope.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-3xl border border-orange-200/20 bg-black/50 p-6">
              <h4 className="text-lg font-semibold text-orange-100">
                Immersive Recovery Pathways
              </h4>
              <p className="mt-3 text-sm text-orange-100/70">
                AI simulations recreate the steps of healing, turning fear into
                understanding and action into habit.
              </p>
            </div>
            <div className="rounded-3xl border border-orange-200/20 bg-black/50 p-6">
              <h4 className="text-lg font-semibold text-orange-100">
                Community Intelligence
              </h4>
              <p className="mt-3 text-sm text-orange-100/70">
                Data-informed outreach highlights hotspots and mobilizes
                students to respond with precision.
              </p>
            </div>
            <div className="rounded-3xl border border-orange-200/20 bg-black/50 p-6">
              <h4 className="text-lg font-semibold text-orange-100">
                Freedom, Amplified
              </h4>
              <p className="mt-3 text-sm text-orange-100/70">
                Storytelling rooms spotlight survivors who reclaimed their
                lives, proving that recovery is possible.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
