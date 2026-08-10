"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2070&auto=format&fit=crop"
        alt="Select Place Barber & Spa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 pt-28 pb-16 lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            ABOUT SELECT PLACE
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Crafting Confidence,
            <span className="block text-neutral-300">
              One Cut At A Time.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Every haircut, beard trim and spa treatment is delivered with
            precision, consistency and genuine care. We believe premium
            grooming is more than a service—it's an experience that leaves you
            looking sharp and feeling confident.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-10">
            <div>
              <p className="text-4xl font-black text-amber-400">8+</p>
              <span className="text-sm uppercase tracking-widest text-neutral-400">
                Years Experience
              </span>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <p className="text-4xl font-black text-amber-400">5K+</p>
              <span className="text-sm uppercase tracking-widest text-neutral-400">
                Happy Clients
              </span>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <p className="text-4xl font-black text-amber-400">4.9★</p>
              <span className="text-sm uppercase tracking-widest text-neutral-400">
                Customer Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}