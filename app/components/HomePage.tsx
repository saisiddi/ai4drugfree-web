"use client";

import HeroSection from "./HeroSection";
import AboutSection from "./sections/AboutSection";
import PillarsSection from "./sections/PillarsSection";
import PostersSection from "./sections/PostersSection";
import StorySection from "./sections/StorySection";
import CTASection from "./sections/CTASection";
import AudioToggle from "./AudioToggle";
import EventOverviewSection from "./sections/EventOverviewSection";
import EventsShowcaseSection from "./sections/EventsShowcaseSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0f0f0f]">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-xs uppercase tracking-[0.4em] text-orange-200/70">
            AI4DRUGFREE
          </div>
          <AudioToggle />
        </div>
      </header>
      <HeroSection />
      <main className="relative z-10">
        <AboutSection />
        <EventOverviewSection />
        <PillarsSection />
        <EventsShowcaseSection />
        <PostersSection />
        <StorySection />
        <CTASection />
      </main>
      <footer className="px-6 pb-10 text-center text-xs uppercase tracking-[0.3em] text-orange-200/60">
        FREE NATION 2026 · Powered by AI · Designed for impact
      </footer>
    </div>
  );
}
