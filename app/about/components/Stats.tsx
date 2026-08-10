"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    value: "8+",
    label: "Years Experience",
  },
  {
    value: "5k+",
    label: "Happy Clients",
  },
  {
    value: "15+",
    label: "Premium Services",
  },
  {
    value: "4.9★",
    label: "Customer Rating",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0F0F0F] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            OUR IMPACT
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Trusted By Thousands
            <span className="block text-neutral-400">
              Of Happy Clients.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
            Great grooming isn't measured only by haircuts.
            It's measured by returning clients, lasting
            relationships and the confidence every customer
            leaves with.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
              }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:bg-white/10"
            >
              <h3 className="text-5xl font-black text-amber-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-neutral-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}