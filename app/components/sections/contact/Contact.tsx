
"use client";

import { motion } from "framer-motion";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { BUSINESS } from "@/lib/constants";

export default function Contact() {
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-neutral-950 py-24 text-white md:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[180px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Visit Select Place
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Ready for your
              <span className="text-neutral-400"> next look?</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
              Book your next grooming experience with us.
              Whether it's a fresh cut, beard treatment or
              complete grooming session, we're ready for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:justify-self-end"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              <FaWhatsapp />

              Book via WhatsApp

              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Visit Our Studio",
              label: "Location",
              value: BUSINESS.address,
            },
            {
              icon: <FaClock />,
              title: "Opening Hours",
              label: "Hours",
              value: (
                <>
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 8:00 PM</p>
                  <p>Sunday — By Appointment</p>
                </>
              ),
            },
            {
              icon: <FaPhone />,
              title: "Let's Talk",
              label: "Contact",
              value: (
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {BUSINESS.phone}
                </a>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-xl text-amber-400">
                {item.icon}
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-neutral-500">
                {item.label}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {item.title}
              </h3>

              <div className="mt-3 text-sm leading-7 text-neutral-400">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black p-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_70%)]" />

          <div className="relative text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-3xl text-black shadow-2xl shadow-amber-500/30">
              <FaMapMarkerAlt />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Find Us Here
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-neutral-400">
              {BUSINESS.address}
            </p>
          </div>
        </motion.div>

        {/* Booking Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="text-xl font-bold">
              Prefer to book directly?
            </h3>

            <p className="mt-2 text-neutral-400">
              Send us a WhatsApp message and we'll
              reserve your preferred time.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
          >
            <FaWhatsapp />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

