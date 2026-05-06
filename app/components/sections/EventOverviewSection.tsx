"use client";

import { useEffect, useState } from "react";
import SectionReveal from "../SectionReveal";

const targetDate = new Date("2026-05-08T09:00:00");

export default function EventOverviewSection() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = Math.max(targetDate.getTime() - now.getTime(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setCountdown({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    };

    update();
    const interval = window.setInterval(update, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-3 sm:px-6 py-10 sm:py-16">
      <SectionReveal>
        <div className="glass-panel rounded-3xl p-4 sm:p-10 cinematic-grid">
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-8 sm:gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-orange-200/70">
                Event Overview
              </p>
              <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-glow">
                A single day. A lifelong ripple effect.
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-orange-100/70">
                Keynotes, AI labs, immersive showcases, and action pledges.
                Every track builds momentum toward a drug-free future.
              </p>
            </div>
            <div className="flex w-full sm:w-auto justify-between sm:justify-center gap-2 sm:gap-4 text-center mt-6 sm:mt-0">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex-1 sm:flex-none rounded-2xl border border-orange-200/20 bg-black/40 px-3 py-3 sm:px-5 sm:py-4 min-w-[70px]"
                >
                  <p className="text-xl sm:text-2xl font-semibold text-orange-100">
                    {item.value}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-orange-200/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
