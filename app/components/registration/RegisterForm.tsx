"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { EventItem } from "../../data/events";

type FormState = {
  teamName: string;
  teamLeadName: string;
  teamLeadWhatsapp: string;
  teamLeadEmail: string;
  teamSize: string;
  college: string;
  campusName: string;
  schoolName: string;
  degreeName: string;
  specialization: string;
  year: string;
  semester: string;
};

export default function RegisterForm({ event }: { event: EventItem }) {
  // Registration closed for "The Hidden Code"
  if (event.id === "escape-room") {
    return (
      <div className="relative rounded-[2rem] border border-orange-500/20 bg-black/60 p-8 shadow-[0_0_40px_rgba(255,140,0,0.05)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
        <div className="relative z-10 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.5em] text-orange-400/50 mb-4">
            Registration Closed
          </p>
          <h3 className="font-heading mt-4 text-3xl tracking-wide text-orange-50">
            {event.title}
          </h3>
          <p className="mt-8 text-lg text-orange-100/70">
            Registration for this event is now closed.
          </p>
        </div>
      </div>
    );
  }

  // ...existing code...
  // (Paste the rest of the original RegisterForm implementation here for other events)
  // ...existing code...
}
