"use client";

import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import { SERVICES } from "./data";

export default function Services() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Our Services
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-black md:text-6xl">
              Grooming beyond the ordinary.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl text-base leading-8 text-neutral-500 md:ml-auto md:text-lg"
          >
            From precision cuts to premium spa treatments, Select Place
            brings together everything you need to look sharp, feel
            confident and take care of yourself.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}