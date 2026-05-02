"use client";

import dynamic from "next/dynamic";

type HeroSceneProps = {
  reduced?: boolean;
};

const HeroSceneDynamic = dynamic<HeroSceneProps>(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#0a0a0a]" aria-hidden />,
});

export default function HeroSceneLazy({ reduced }: HeroSceneProps) {
  return <HeroSceneDynamic reduced={reduced} />;
}
