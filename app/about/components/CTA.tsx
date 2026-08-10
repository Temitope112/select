"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

import { BUSINESS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 py-24 text-black md:py-32">

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em]">
            READY FOR YOUR NEXT VISIT?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Your Best Look
            <span className="block">
              Starts Here.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/80">
            Whether it's a fresh haircut, beard grooming or a
            complete spa session, we're ready to deliver an
            experience you'll want to come back for.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900"
            >
              <FaWhatsapp />

              Book Via WhatsApp

              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 text-sm font-bold transition-all duration-300 hover:bg-black hover:text-white"
            >
              View Pricing
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}