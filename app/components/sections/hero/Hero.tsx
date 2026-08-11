import HeroContent from "./Herocontent";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 py-24 sm:px-6 sm:py-28 md:py-32 lg:px-8 lg:py-36">
        <HeroContent />
      </div>
    </section>
  );
}