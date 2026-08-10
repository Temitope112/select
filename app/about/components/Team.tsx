"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const TEAM = [
  {
    name: "Michael Johnson",
    role: "Master Barber",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "David Smith",
    role: "Senior Barber",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Grooming Specialist",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            OUR TEAM
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Meet The Experts
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Skilled professionals dedicated to delivering
            exceptional grooming experiences every day.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-[32px] bg-neutral-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={900}
                  className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 transition duration-500 group-hover:opacity-100">
                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                    <FaInstagram />
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-black">
                    <FaWhatsapp />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-neutral-500">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}