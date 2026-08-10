"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { BUSINESS } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 px-8 py-16 text-center text-black md:px-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em]">
            READY TO VISIT?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Book Your Appointment
            <span className="block">
              In Less Than A Minute.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/80">
            Click the button below to chat with us on
            WhatsApp. We'll help you choose the right service
            and schedule a convenient time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900"
            >
              <FaWhatsapp />
              Book via WhatsApp
              <FiArrowUpRight />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border-2 border-black px-8 py-4 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}