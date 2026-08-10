"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1512690459411-b0fd0d3b53dd?q=80&w=2070&auto=format&fit=crop"
        alt="Gallery"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex min-h-[80vh] items-center pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              GALLERY
            </p>

            <h1 className="mt-6 text-5xl font-black text-white md:text-7xl">
              Every Style
              <span className="block text-neutral-300">
                Tells A Story.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              Browse some of our favourite transformations,
              premium grooming sessions and the atmosphere
              that makes Select Place different.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}