"use client";

import SectionReveal from "../SectionReveal";
import { events } from "../../data/events";
import Link from "next/link";

export default function EventsShowcaseSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <SectionReveal>
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
                Events Showcase
              </p>
              <h3 className="mt-4 text-4xl font-semibold text-glow">
                Nine experiences. One unified mission.
              </h3>
            </div>
            <Link
              href="/register"
              className="rounded-full border border-orange-200/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-orange-100/80"
            >
              View All Events
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="glass-panel rounded-3xl p-6 transition hover:-translate-y-2"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-orange-200/70">
                  {event.title}
                </p>
                <p className="mt-4 text-sm text-orange-100/70">
                  {event.tagline}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/events/${event.id}`}
                    className="rounded-full border border-orange-200/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-100/80"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/register/${event.id}`}
                    className="gradient-ember rounded-full px-4 py-2 text-xs font-semibold text-black"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
