"use client";

import { motion } from "framer-motion";
import {
  FaCut,
  FaAirFreshener,
  FaSpa,
  FaChild,
  FaSmile,
  FaMagic,
} from "react-icons/fa";

const SERVICES = [
  {
    icon: FaCut,
    title: "Haircuts",
    desc: "Modern and classic styles tailored to you.",
  },
  {
    icon: FaAirFreshener,
    title: "Beard Grooming",
    desc: "Professional trimming and shaping.",
  },
  {
    icon: FaSpa,
    title: "Facial Spa",
    desc: "Deep cleansing and premium skincare.",
  },
  {
    icon: FaSmile,
    title: "Teeth Whitening",
    desc: "A brighter smile with safe treatment.",
  },
  {
    icon: FaMagic,
    title: "Hair Treatment",
    desc: "Healthy hair with premium products.",
  },
  {
    icon: FaChild,
    title: "Kids Haircut",
    desc: "Comfortable and stylish cuts for children.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-neutral-600">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}