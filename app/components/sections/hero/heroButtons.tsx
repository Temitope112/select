import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
      <Link
        href="/book"
        className="inline-flex h-14 w-full items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-400 sm:w-auto"
      >
        Book Appointment
      </Link>

      <Link
        href="/services"
        className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
      >
        Explore Services
      </Link>
    </div>
  );
}