"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { TESTIMONIALS } from "./data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="overflow-hidden bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            Client Experiences
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-black md:text-6xl">
            Don't take our word for it.
            <span className="text-neutral-400">
              {" "}
              Hear from our clients.
            </span>
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          {/* Featured Quote */}
          <div className="relative min-h-[360px]">
            <Quote className="absolute -left-3 -top-8 h-24 w-24 text-black/[0.04] md:h-32 md:w-32" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex h-full flex-col justify-center"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-8 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-black md:text-5xl">
                  “{activeTestimonial.quote}”
                </blockquote>

                {/* Client */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {activeTestimonial.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-black">
                      {activeTestimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-neutral-500">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Selector */}
          <div className="border-t border-black/10 lg:border-l lg:border-t-0 lg:pl-10">
            {TESTIMONIALS.map((testimonial, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-full items-center gap-5 border-b border-black/10 py-6 text-left"
                >
                  {/* Number */}
                  <span
                    className={`text-xs font-semibold tracking-[0.2em] transition-colors duration-300 ${
                      active
                        ? "text-amber-500"
                        : "text-neutral-400"
                    }`}
                  >
                    0{testimonial.id}
                  </span>

                  {/* Avatar */}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      active
                        ? "bg-black text-white"
                        : "bg-white text-black group-hover:bg-black group-hover:text-white"
                    }`}
                  >
                    {testimonial.initials}
                  </span>

                  {/* Name */}
                  <span className="flex-1">
                    <span
                      className={`block font-semibold transition-colors duration-300 ${
                        active
                          ? "text-black"
                          : "text-neutral-500 group-hover:text-black"
                      }`}
                    >
                      {testimonial.name}
                    </span>

                    <span className="mt-1 block text-xs text-neutral-400">
                      {testimonial.role}
                    </span>
                  </span>

                  {/* Indicator */}
                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      active
                        ? "scale-100 bg-amber-500"
                        : "scale-0 bg-black group-hover:scale-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Real experiences. Real confidence.</span>

          <span className="text-black">
            Select Place Barber & Spa
          </span>
        </motion.div>
      </div>
    </section>
  );
}