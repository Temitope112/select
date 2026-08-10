import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link
        href="https://wa.me/2348000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.03]"
      >
        Book Appointment
      </Link>

      <Link
        href="/services"
        className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-black"
      >
        Explore Services
      </Link>
    </div>
  );
}