"use client";

import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaHandshake,
  FaComments,
  FaCut,
  FaSpa,
  FaSmile,
} from "react-icons/fa";

const STEPS = [
  {
    icon: FaCalendarCheck,
    title: "Book Appointment",
    text: "Reserve your preferred time quickly through WhatsApp.",
  },
  {
    icon: FaHandshake,
    title: "Warm Welcome",
    text: "Relax in a clean, comfortable environment from the moment you arrive.",
  },
  {
    icon: FaComments,
    title: "Consultation",
    text: "We understand your style, preferences and grooming goals.",
  },
  {
    icon: FaCut,
    title: "Precision Grooming",
    text: "Every cut and beard trim is carried out with attention to detail.",
  },
  {
    icon: FaSpa,
    title: "Relax & Refresh",
    text: "Enhance your visit with premium spa and grooming treatments.",
  },
  {
    icon: FaSmile,
    title: "Leave Confident",
    text: "Walk out looking sharp and feeling your best.",
  },
];

export default function Experience() {
  return (
    <section className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            THE EXPERIENCE
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Your Journey Starts Here
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            From booking your appointment to leaving with renewed confidence,
            every step is carefully designed to deliver a premium experience.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: left ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`relative flex items-center ${
                    left ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="relative ml-16 w-full rounded-3xl border border-white/10 bg-neutral-900 p-8 md:ml-0 md:w-[45%]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-2xl text-black">
                      <Icon />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-400">
                      {step.text}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-6 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-black bg-amber-500 md:left-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}