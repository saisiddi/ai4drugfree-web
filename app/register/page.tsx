"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import GlowButton from "../components/GlowButton";
import EventCard from "../components/events/EventCard";
import EventModal from "../components/events/EventModal";
import HeroScene from "../components/HeroScene";
import { events } from "../data/events";

const filters = ["All", "Solo", "Team"] as const;

export default function RegisterPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const [search, setSearch] = useState("");
  const [activeEvent, setActiveEvent] = useState<
    (typeof events)[number] | null
  >(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.tagline.toLowerCase().includes(search.toLowerCase());
      const isSolo = event.teamSize.toLowerCase().startsWith("1");
      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Solo" && isSolo) ||
        (activeFilter === "Team" && !isSolo);
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* ─── CINEMATIC BACKGROUND ──────────────────────── */}
      <div className="fixed inset-0 z-0 opacity-40">
        <HeroScene reduced={true} />
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 30%, transparent 0%, #0a0a0a 100%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/50" />

      {/* ─── CONTENT ───────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-warm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[0.65rem] uppercase tracking-[0.6em] text-orange-300/60">
              The Movement
            </p>
            <h1
              className="font-heading mt-4 text-5xl leading-tight tracking-wide text-glow sm:text-6xl"
              style={{
                background: "linear-gradient(180deg, #f5f5f5 30%, #ff8c00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choose Your Impact.
            </h1>
            <p className="mt-6 text-lg text-orange-100/60">
              Explore the official AI4DRUGFREE experiences and register for the
              track that matches your skillset.
            </p>
          </div>
          <GlowButton href="/" variant="ghost">
            Back to Home
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <div className="flex gap-2 rounded-full border border-orange-200/20 bg-black/40 p-1 backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] transition duration-300 ${
                  activeFilter === filter
                    ? "gradient-ember text-black shadow-[0_0_15px_rgba(255,140,0,0.5)]"
                    : "text-orange-100/60 hover:text-orange-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search events..."
            className="w-full max-w-xs rounded-full border border-orange-200/30 bg-black/40 px-5 py-2.5 text-sm text-orange-100/80 outline-none backdrop-blur-md transition hover:border-orange-200/50 focus:border-orange-500/80 focus:shadow-[0_0_20px_rgba(255,140,0,0.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onView={() => setActiveEvent(event)}
              registerHref={`/register/${encodeURIComponent(event.id)}`}
            />
          ))}
        </motion.div>
      </div>

      <EventModal event={activeEvent} onClose={() => setActiveEvent(null)} />
    </div>
  );
}
