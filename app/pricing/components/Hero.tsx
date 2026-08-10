"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2070&auto=format&fit=crop"
        alt="Pricing"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero */}
      <div className="relative z-10 flex min-h-[85vh] items-center pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
              OUR PRICING
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Premium Grooming,
              <span className="block text-neutral-300">
                Honest Pricing.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              Choose the service that fits your style. Every
              treatment is delivered by experienced professionals
              using premium products, with transparent pricing and
              no hidden fees.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}