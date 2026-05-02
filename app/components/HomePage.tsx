"use client";

import HeroSection from "./HeroSection";
import AboutSection from "./sections/AboutSection";
import PillarsSection from "./sections/PillarsSection";
import PostersSection from "./sections/PostersSection";
import StorySection from "./sections/StorySection";
import CTASection from "./sections/CTASection";
import EventOverviewSection from "./sections/EventOverviewSection";
import EventsShowcaseSection from "./sections/EventsShowcaseSection";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0f0f0f]">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:py-6">
          <div className="flex w-1/3 justify-start">
            <img
              src="/logo/vyasa.png"
              alt="Vyasa Logo"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="flex w-1/3 justify-center">
            <img
              src="/logo/main.png"
              alt="Main Logo"
              className="h-14 md:h-24 w-auto object-contain"
            />
          </div>
          <div className="flex w-1/3 justify-end">
            <img
              src="/logo/cluster.png"
              alt="Cluster Logo"
              className="h-14 md:h-20 w-auto object-contain scale-110 md:scale-125 origin-right"
            />
          </div>
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
      <footer className="flex flex-col items-center justify-center gap-6 px-6 py-16 text-center bg-black/40 border-t border-orange-200/10">
        <img
          src="/logo/main.png"
          alt="Main Logo"
          className="h-20 md:h-24 w-auto object-contain"
        />
        <div className="text-sm md:text-base tracking-[0.2em] text-orange-200/80">
          <p className="font-semibold text-orange-100">MAY 8, 2026</p>
          <p className="mt-2 text-xs md:text-sm text-orange-200/60">
            S-VYASA Deemed to be University, Bengaluru
          </p>
        </div>
        <div className="mt-4 text-xs uppercase tracking-[0.3em] text-orange-200/40">
          FREE NATION 2026 · Powered by AI · Designed for impact
        </div>
      </footer>
    </div>
  );
}
