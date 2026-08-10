"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaUserTie,
  FaLeaf,
  FaHeart,
} from "react-icons/fa";

const FEATURES = [
  {
    icon: FaUserTie,
    title: "Experienced Barbers",
    text: "Our professionals deliver consistent, precision grooming tailored to your style.",
  },
  {
    icon: FaLeaf,
    title: "Premium Products",
    text: "We use high-quality products that protect your hair and skin while enhancing results.",
  },
  {
    icon: FaAward,
    title: "Luxury Experience",
    text: "Relax in a modern, comfortable environment designed to elevate every visit.",
  },
  {
    icon: FaHeart,
    title: "Customer First",
    text: "Your satisfaction is our priority, from consultation to the final touch.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            WHY CHOOSE US
          </p>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            More Than
            <span className="block text-neutral-500">
              Just A Haircut
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8 transition hover:-translate-y-2 hover:border-amber-400"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}