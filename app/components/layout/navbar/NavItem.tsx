"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
  href: string;
  label: string;
  isHome: boolean;
}

export default function NavItem({
  href,
  label,
  isHome,
}: Props) {
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        "relative text-sm font-medium transition-colors duration-300",
        active
          ? "text-amber-500"
          : isHome
            ? "text-black hover:text-amber-500"
            : "text-white hover:text-amber-400"
      )}
    >
      {label}

      <span
        className={clsx(
          "absolute -bottom-2 left-0 h-0.5 bg-amber-500 transition-all duration-300",
          active ? "w-full" : "w-0"
        )}
      />
    </Link>
  );
}