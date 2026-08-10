"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every cut, trim and grooming detail is handled with attention to the finish.",
  },
  {
    number: "02",
    title: "Comfort",
    description:
      "A modern environment where you can take a moment to relax and reset.",
  },
  {
    number: "03",
    title: "Versatility",
    description:
      "From barbering to spa and personal care, your grooming needs come together in one place.",
  },
  {
    number: "04",
    title: "Quality",
    description:
      "A focus on professional service and quality grooming products.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-black">
                <Sparkles className="h-4 w-4" />
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                The Select Place Difference
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-black md:text-6xl"
          >
            Grooming should be an experience,
            <span className="text-neutral-400">
              {" "}
              not just an appointment.
            </span>
          </motion.h2>
        </div>

        {/* Benefits */}
        <div className="mt-20 border-t border-black/10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-black/10 py-8 md:grid-cols-[100px_0.8fr_1.2fr_auto] md:items-center"
            >
              {/* Number */}
              <span className="text-sm font-semibold tracking-[0.2em] text-amber-500">
                {benefit.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight text-black transition-transform duration-300 md:text-3xl md:group-hover:translate-x-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
                {benefit.description}
              </p>

              {/* Icon */}
              <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-black md:flex">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <p className="max-w-xl text-lg leading-8 text-neutral-500">
            Walk in for a fresh cut. Stay for the experience. Leave
            feeling like the best version of yourself.
          </p>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-black">
            Select Place Barber & Spa
          </span>
        </motion.div>
      </div>
    </section>
  );
}