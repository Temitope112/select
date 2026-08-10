"use client";

import Link from "next/link";
import clsx from "clsx";

interface BrandProps {
  isHome: boolean;
}

export default function Brand({
  isHome,
}: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Select Place Barber & Spa"
      className="flex flex-col leading-none"
    >
      <span
        className={clsx(
          "text-xl font-black tracking-[0.25em] transition-colors duration-300",
          isHome ? "text-black" : "text-white"
        )}
      >
        SELECT PLACE
      </span>

      <span className="mt-1 text-[11px] uppercase tracking-[0.45em] text-amber-500">
        BARBER & SPA
      </span>
    </Link>
  );
}