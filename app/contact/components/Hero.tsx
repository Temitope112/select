"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
    <Image
  src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2070&auto=format&fit=crop"
  alt="Select Place Barber & Spa"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              CONTACT US
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Let's Create
              <span className="block text-neutral-300">
                Your Next Look.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              Have a question, want to book an appointment or
              need help choosing a service? Our team is ready
              to help you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}