import Link from "next/link";
import { redirect } from "next/navigation";
import { getEventBySlug } from "../../data/events";
import RegisterForm from "../../components/registration/RegisterForm";
import HeroSceneLazy from "../../components/HeroSceneLazy";

export default async function RegisterEventPage({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event: eventSlug } = await params;
  const event = getEventBySlug(eventSlug);

  if (!event) {
    redirect("/register");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* ─── CINEMATIC BACKGROUND ──────────────────────── */}
      <div className="fixed inset-0 z-0 opacity-30">
        <HeroSceneLazy reduced={true} />
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 30%, transparent 0%, #0a0a0a 100%)",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-warm">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.6em] text-orange-300/60">
              Registration
            </p>
            <h1
              className="font-heading mt-4 text-4xl leading-tight tracking-wide text-glow sm:text-5xl"
              style={{
                background:
                  "linear-gradient(180deg, #f5f5f5 30%, #ff8c00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {event.title}
            </h1>
            <p className="mt-4 text-lg text-orange-100/60">{event.tagline}</p>
          </div>
          <Link
            href="/register"
            className="rounded-full border border-orange-500/30 bg-black/40 px-6 py-2.5 text-xs uppercase tracking-[0.3em] text-orange-100/80 backdrop-blur-md transition-colors hover:border-orange-400/60 hover:bg-orange-950/30 hover:text-orange-50"
          >
            Back to Events
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-orange-500/20 bg-black/40 p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <h2 className="font-heading text-2xl tracking-wide text-orange-100">
              Event Overview
            </h2>
            <p className="mt-6 leading-relaxed text-orange-100/60">
              {event.description}
            </p>

            <div className="mt-8 space-y-4 text-sm text-orange-100/70">
              <div className="flex justify-between border-b border-orange-500/10 pb-2">
                <span className="text-orange-400/50 uppercase tracking-[0.2em] text-[0.65rem]">
                  Team Size
                </span>
                <span className="text-right text-orange-100/85">
                  {event.teamSize}
                </span>
              </div>
              <div className="flex justify-between border-b border-orange-500/10 pb-2">
                <span className="text-orange-400/50 uppercase tracking-[0.2em] text-[0.65rem]">
                  Schedule
                </span>
                <span className="text-right text-orange-100/85">
                  {event.schedule}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-orange-500/10 pb-2">
                <span className="text-orange-400/50 uppercase tracking-[0.2em] text-[0.65rem]">
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

            <div className="mt-8 rounded-2xl bg-orange-950/20 p-6 border border-orange-500/10">
              <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-orange-400/60">
                Important Notes
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-orange-100/70">
                {event.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="text-orange-500/50">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-black/40 p-1 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <RegisterForm event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}
