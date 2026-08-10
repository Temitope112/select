"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

import { BUSINESS } from "@/lib/constants";

const FEATURES = [
  "Premium Haircuts & Styling",
  "Professional Beard Grooming",
  "Relaxing Barber & Spa Experience",
  "Premium Hair Care Products",
];

export default function Story() {
  return (
    <section className="bg-white py-20 text-black md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px]">
            <Image
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1974&auto=format&fit=crop"
              alt="Barber at work"
              width={700}
              height={900}
              className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-black p-8 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              Experience
            </p>

            <h3 className="mt-2 text-5xl font-black">
              8+
            </h3>

            <p className="text-neutral-400">
              Years of Excellence
            </p>
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            OUR STORY
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            More Than A Barber Shop.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Select Place Barber & Spa was created with one
            mission—to give every client a grooming
            experience that combines precision, comfort and
            confidence.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            From modern fades to luxury spa treatments,
            every service is delivered with attention to
            detail and genuine care.
          </p>

          <div className="mt-10 grid gap-5">
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-amber-500" />

                <span className="text-neutral-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Link
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-neutral-800"
          >
            <FaWhatsapp />

            Book Appointment
          </Link>
        </motion.div>

      </div>
    </section>
  );
}