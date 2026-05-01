"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function GlowButton({
  href,
  onClick,
  children,
  variant = "primary",
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 button-glow";
  const styles =
    variant === "primary"
      ? "gradient-ember text-black"
      : "border border-orange-200/40 bg-transparent text-warm hover:border-orange-200/70";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
