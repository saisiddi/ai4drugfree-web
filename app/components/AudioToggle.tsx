"use client";

import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/audio/ambient.mp3";

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_SRC);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) {
      return;
    }
    if (enabled) {
      audioRef.current.pause();
      setEnabled(false);
      return;
    }
    try {
      await audioRef.current.play();
      setEnabled(true);
    } catch {
      setEnabled(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-orange-200/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-100/70"
    >
      {enabled ? "Audio On" : "Audio Off"}
    </button>
  );
}
