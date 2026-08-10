"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
        alt="Services"
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
              OUR SERVICES
            </p>

            <h1 className="mt-6 text-5xl font-black text-white md:text-7xl">
              Premium Grooming
              <span className="block text-neutral-300">
                Tailored For You.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              From precision haircuts to relaxing spa treatments,
              every service is designed to help you look sharp and
              feel your best.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}