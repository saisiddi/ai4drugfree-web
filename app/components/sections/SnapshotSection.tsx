"use client";

import SectionReveal from "../SectionReveal";

const stats = [
  { label: "Speakers", value: "18+" },
  { label: "AI Labs", value: "6" },
  { label: "Student Chapters", value: "24" },
  { label: "Impact Pledges", value: "1,200+" },
];

export default function SnapshotSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <SectionReveal>
        <div className="glass-panel rounded-3xl p-10 cinematic-grid">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
                Event Snapshot
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-glow">
                A live, multi-sensory rally for change.
              </h3>
            </div>
            <div className="flex gap-6 text-xs uppercase tracking-[0.3em] text-orange-200/70">
              <span>Keynotes</span>
              <span>Demo Rooms</span>
              <span>Rehab Stories</span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-orange-200/20 bg-black/40 p-6 text-center"
              >
                <p className="text-3xl font-semibold text-orange-100">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-orange-200/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
