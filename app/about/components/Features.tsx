"use client";

import { motion } from "framer-motion";
import {
  FaCut,
  FaGem,
  FaLeaf,
  FaSpa,
} from "react-icons/fa";

const FEATURES = [
  {
    title: "Precision Haircuts",
    description:
      "Modern fades, classic cuts and personalised styling tailored to your look.",
    icon: FaCut,
    span: "md:col-span-2",
  },
  {
    title: "Premium Products",
    description:
      "Only trusted grooming products for healthier hair and beard care.",
    icon: FaGem,
    span: "",
  },
  {
    title: "Relaxing Atmosphere",
    description:
      "A calm environment where grooming becomes an experience.",
    icon: FaLeaf,
    span: "",
  },
  {
    title: "Spa Treatments",
    description:
      "Facials, pedicure and premium treatments beyond a regular haircut.",
    icon: FaSpa,
    span: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            WHY CHOOSE US
          </p>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Everything You Need.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every service is designed to make you leave looking
            sharp, feeling refreshed and ready for every occasion.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className={`${item.span} group rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500 transition-all duration-300 group-hover:rotate-6 group-hover:bg-amber-500 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}