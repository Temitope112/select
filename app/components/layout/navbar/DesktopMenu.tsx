"use client";

import Link from "next/link";

import NavItem from "./NavItem";
import { NAV_ITEMS } from "./data";

import { BUSINESS } from "@/lib/constants";

interface DesktopMenuProps {
  isHome: boolean;
}

export default function DesktopMenu({
  isHome,
}: DesktopMenuProps) {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      <nav className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            isHome={isHome}
          />
        ))}
      </nav>

      <Link
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
      >
        Book Appointment
      </Link>
    </div>
  );
}