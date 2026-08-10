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
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            CONTACT US
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            We'd Love To
            <span className="block text-neutral-500">
              Hear From You.
            </span>
          </h2>

          <div className="mt-10 space-y-5">

            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <FaMapMarkerAlt className="mt-1 text-amber-500" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-neutral-600">{BUSINESS.address}</p>
              </div>
            </div>

            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <FaPhone className="mt-1 text-amber-500" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>{BUSINESS.phone}</p>
              </div>
            </div>

            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm">
              <FaClock className="mt-1 text-amber-500" />
              <div>
                <h3 className="font-bold">Opening Hours</h3>
                <p>Mon – Sat: 9AM – 8PM</p>
                <p>Sunday: Appointment Only</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] bg-white p-8 shadow-lg"
        >
          <input
            placeholder="Full Name"
            className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
          />

          <input
            placeholder="Email Address"
            className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
          />

          <input
            placeholder="Phone Number"
            className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="mb-6 w-full rounded-xl border p-4 outline-none focus:border-amber-500"
          />

          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-black py-4 font-semibold text-white transition hover:bg-amber-500 hover:text-black"
          >
            <FaWhatsapp />
            Send via WhatsApp
          </a>
        </motion.form>

      </div>
    </section>
  );
}