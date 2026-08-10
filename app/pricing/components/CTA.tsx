"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { BUSINESS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 py-24 md:py-32">
      {/* Decorative Blurs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-black/70">
            READY TO BOOK?
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight text-black md:text-6xl lg:text-7xl">
            Your Next Fresh Look
            <span className="block">
              Starts Today.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/75">
            Skip the waiting time. Send us a message on WhatsApp and we'll help you find the perfect appointment.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900"
            >
              <FaWhatsapp />

              Book Via WhatsApp

              <FiArrowUpRight />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center rounded-full border-2 border-black px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}