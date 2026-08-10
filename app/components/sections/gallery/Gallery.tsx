"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { GALLERY_ITEMS } from "./data";

export default function Gallery() {
  return (
    <section className="bg-neutral-950 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Our Gallery
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight md:text-6xl">
              The work speaks
              <span className="text-neutral-500"> for itself.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-sm leading-7 text-neutral-400 md:text-base"
          >
            A glimpse into the details, styles and experiences that
            define Select Place.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid auto-rows-[260px] gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden ${item.className ?? ""}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    {item.category}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex justify-end"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            More styles coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}