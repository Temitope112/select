"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

import { BUSINESS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-neutral-50 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            CONTACT US
          </p>

          <h2 className="mt-5 text-4xl font-black text-neutral-900 md:text-5xl">
            We'd Love To
            <span className="block text-neutral-500">
              Hear From You.
            </span>
          </h2>

          <div className="mt-10 space-y-5">
            {/* Address */}
            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-xl text-amber-500" />

              <div>
                <h3 className="font-bold text-neutral-900">
                  Address
                </h3>

                <p className="mt-1 leading-7 text-neutral-600">
                  {BUSINESS.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <FaPhone className="mt-1 shrink-0 text-xl text-amber-500" />

              <div>
                <h3 className="font-bold text-neutral-900">
                  Phone
                </h3>

                <p className="mt-1 text-neutral-600">
                  {BUSINESS.phone}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <FaClock className="mt-1 shrink-0 text-xl text-amber-500" />

              <div>
                <h3 className="font-bold text-neutral-900">
                  Opening Hours
                </h3>

                <p className="mt-1 text-neutral-600">
                  Mon – Sat: 9:00 AM – 8:00 PM
                </p>

                <p className="text-neutral-600">
                  Sunday: Appointment Only
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] bg-white p-6 text-neutral-900 shadow-lg sm:p-8"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="mb-5 w-full rounded-xl border border-neutral-200 p-4 text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-amber-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="mb-5 w-full rounded-xl border border-neutral-200 p-4 text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-amber-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="mb-5 w-full rounded-xl border border-neutral-200 p-4 text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-amber-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="mb-6 w-full rounded-xl border border-neutral-200 p-4 text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-amber-500"
          />

          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-black py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-black"
          >
            <FaWhatsapp />
            Send via WhatsApp
          </a>
        </motion.form>
      </div>
    </section>
  );
}