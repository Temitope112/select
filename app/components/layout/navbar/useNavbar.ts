"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return {
    isOpen,
    isHome,
    openMenu: () => setIsOpen(true),
    closeMenu: () => setIsOpen(false),
    toggleMenu: () => setIsOpen((prev) => !prev),
  };
}