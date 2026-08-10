"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { Service } from "./data";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden bg-neutral-100"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Number */}
        <span className="absolute left-6 top-6 text-sm font-medium tracking-[0.2em] text-white/70">
          0{index + 1}
        </span>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/70">
                {service.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-amber-400">
                {service.price}
              </p>
            </div>

            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.25 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black"
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}