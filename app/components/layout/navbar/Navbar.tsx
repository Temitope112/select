"use client";

import clsx from "clsx";

import Brand from "./Brand";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useNavbar } from "./useNavbar";

export default function Navbar() {
  const {
    isOpen,
    toggleMenu,
    isHome,
  } = useNavbar();

  return (
    <>
      {/* Navbar */}
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          isHome
            ? "border-black/10 bg-white text-black"
            : "border-white/10 bg-black text-white"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Brand isHome={isHome} />

          {/* Desktop Navigation */}
          <DesktopMenu isHome={isHome} />

          {/* Mobile Navigation */}
          <MobileMenu
            isHome={isHome}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}