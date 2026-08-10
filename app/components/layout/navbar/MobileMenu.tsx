"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { NAV_ITEMS } from "./data";
import { BUSINESS } from "@/lib/constants";

interface MobileMenuProps {
  isHome: boolean;
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenu({
  isHome,
  isOpen,
  toggleMenu,
}: MobileMenuProps) {
  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className={clsx(
          "relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden",
          isHome
            ? "border-black/10 bg-black/5 text-black hover:bg-black/10"
            : "border-white/20 bg-white/10 text-white hover:bg-white/20"
        )}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm transform bg-white px-6 pt-28 shadow-2xl transition-transform duration-500 ease-out",
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Navigation */}
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="border-b border-black/10 py-5 text-lg font-medium text-black transition-colors hover:text-amber-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto pb-10">
            <Link
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-400"
            >
              Book Appointment
            </Link>

            <p className="mt-5 text-center text-xs uppercase tracking-[0.25em] text-neutral-400">
              Select Place Barber & Spa
            </p>
          </div>
        </div>
      </div>
    </>
  );
}