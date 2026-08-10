import HeroButtons from "./heroButtons";
import HeroStats from "./Herostats";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl">
      <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium tracking-wide text-accent">
        PREMIUM BARBER & SPA
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
        Premium Grooming Experience
        <span className="block text-accent">
          For Modern Gentlemen
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
        Precision haircuts, beard grooming, spa treatments,
        pedicure, teeth whitening and premium hair care
        services designed to help you look and feel your best.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}