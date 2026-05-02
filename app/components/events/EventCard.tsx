"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import type { EventItem } from "../../data/events";

function EventCard({
  event,
  onView,
  registerHref,
}: {
  event: EventItem;
  onView: () => void;
  registerHref: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-col justify-between rounded-3xl border border-orange-500/20 bg-gradient-to-br from-black/80 via-[#0a0a0a]/90 to-orange-900/10 p-7 shadow-lg backdrop-blur-sm md:p-8"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[0_0_30px_rgba(255,140,0,0.15)] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col gap-4">
        <p className="text-[0.65rem] uppercase tracking-[0.5em] text-orange-400/50">
          Track
        </p>
        <h3 className="font-heading text-3xl leading-tight tracking-wide text-orange-50 transition-colors duration-300 group-hover:text-glow">
          {event.title}
        </h3>
        <p className="text-sm font-medium leading-relaxed text-orange-200/80">
          {event.tagline}
        </p>
        <p className="text-sm leading-relaxed text-orange-100/50">
          {event.description}
        </p>

        <div className="mt-4 grid gap-3 rounded-2xl border border-orange-500/15 bg-black/30 p-4 text-sm text-orange-100/70">
          <div className="flex items-start justify-between gap-4 border-b border-orange-500/10 pb-2">
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-orange-400/50">
              Team Size
            </span>
            <span className="text-right text-orange-100/80">
              {event.teamSize}
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-orange-400/50">
              Event Coordinator
            </span>
            <div className="text-right">
              <span className="block text-orange-100/90">
                {event.eventCoordinator}
              </span>
              <span className="block text-xs text-orange-400/70">
                {event.contactDetails}
              </span>
            </div>
          </div>
        </div>

        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-orange-400/40">
          {event.schedule}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap gap-4">
        <button
          onClick={onView}
          className="rounded-full border border-orange-500/30 px-6 py-2.5 text-xs uppercase tracking-[0.3em] text-orange-100/80 transition-colors hover:border-orange-400/60 hover:bg-orange-950/30 hover:text-orange-50"
        >
          Details
        </button>
        <a
          href={registerHref}
          className="gradient-ember rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-black shadow-[0_0_15px_rgba(255,140,0,0.4)] transition-transform hover:scale-105"
        >
          Register
        </a>
      </div>
    </motion.div>
  );
}

export default memo(EventCard);
