"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { EventItem } from "../../data/events";

export default function EventModal({
  event,
  onClose,
}: {
  event: EventItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="glass-panel relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-8"
            onClick={(eventClick) => eventClick.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-orange-200/70">
              Event Detail
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-orange-100">
              {event.title}
            </h3>
            <p className="mt-2 text-base text-orange-100/80">{event.tagline}</p>
            <p className="mt-4 text-sm text-orange-100/70">
              {event.description}
            </p>

            <div className="mt-6 grid gap-4 rounded-2xl border border-orange-200/20 bg-black/40 p-6 text-sm text-orange-100/70">
              <p>Team Size: {event.teamSize}</p>
              <p>Schedule: {event.schedule}</p>
              <p>Venue: {event.venue}</p>
            </div>

            <div className="mt-6 grid gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] text-orange-200/70">
                  Rules & Guidelines
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-orange-100/70">
                  {event.rules.map((rule) => (
                    <li key={rule}>• {rule}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] text-orange-200/70">
                  Event Structure
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-orange-100/70">
                  {event.structure.map((step) => (
                    <li key={step}>• {step}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] text-orange-200/70">
                  Judging Criteria
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-orange-100/70">
                  {event.judging.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] text-orange-200/70">
                  Submission Requirements
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-orange-100/70">
                  {event.submissions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] text-orange-200/70">
                  Organizer Notes
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-orange-100/70">
                  {event.notes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`/register/${encodeURIComponent(event.id)}`}
                className="gradient-ember rounded-full px-6 py-3 text-xs font-semibold text-black"
              >
                Register for this event
              </a>
              <button
                onClick={onClose}
                className="rounded-full border border-orange-200/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-orange-100/80"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
