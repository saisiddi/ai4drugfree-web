import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug, isRegistrationOpen } from "../../data/events";
import EventTabs from "../../components/events/EventTabs";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] px-6 py-16 text-warm">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-orange-200/70">
              Event Detail
            </p>
            <h1 className="mt-4 text-5xl font-semibold text-glow">
              {event.title}
            </h1>
            <p className="mt-4 text-base text-orange-100/80">{event.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/register"
              className="rounded-full border border-orange-200/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-orange-100/80"
            >
              All Events
            </Link>
            {isRegistrationOpen(event) ? (
              <Link
                href={`/register/${event.id}`}
                className="gradient-ember rounded-full px-5 py-2 text-xs font-semibold text-black"
              >
                Register Now
              </Link>
            ) : (
              <span className="rounded-full border border-orange-200/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-orange-100/50">
                Registration Closed
              </span>
            )}
          </div>
        </div>

        <div className="mt-8 glass-panel rounded-3xl p-8">
          <p className="text-sm text-orange-100/80">{event.description}</p>
          <EventTabs event={event} />
        </div>
      </div>
    </div>
  );
}
