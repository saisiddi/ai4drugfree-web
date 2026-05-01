"use client";

import { useState } from "react";
import type { EventItem } from "../../data/events";

const tabs = ["Overview", "Rules", "Structure", "Judging", "Submissions"];

export default function EventTabs({ event }: { event: EventItem }) {
  const [active, setActive] = useState("Overview");

  const content = {
    Overview: [
      event.description,
      `Team Size: ${event.teamSize}`,
      `Venue: ${event.venue}`,
      `Schedule: ${event.schedule}`,
    ],
    Rules: event.rules,
    Structure: event.structure,
    Judging: event.judging,
    Submissions: event.submissions,
  } as Record<string, string[]>;

  return (
    <div className="mt-8 rounded-3xl border border-orange-200/20 bg-black/40 p-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
              active === tab
                ? "gradient-ember text-black"
                : "border border-orange-200/30 text-orange-100/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <ul className="mt-6 space-y-3 text-sm text-orange-100/80">
        {content[active].map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
