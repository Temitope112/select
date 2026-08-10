"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaClock,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";

import { BUSINESS } from "@/lib/constants";

const SERVICES = [
  {
    category: "Haircuts",
    items: [
      {
        title: "Classic Haircut",
        price: "₦5,000",
        duration: "30 mins",
        image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
        description: "Clean and professional haircut for every occasion.",
      },
      {
        title: "Skin Fade",
        price: "₦7,000",
        duration: "45 mins",
        image: "https://images.unsplash.com/photo-1512690459411-b0fd0d3b53dd?q=80&w=1200&auto=format&fit=crop",
        description: "Modern fade finished with precision.",
      },
    ],
  },
  {
    category: "Beard & Spa",
    items: [
      {
        title: "Beard Grooming",
        price: "₦3,000",
        duration: "20 mins",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
        description: "Shape, trim and style your beard.",
      },
      {
        title: "Facial Spa",
        price: "₦10,000",
        duration: "60 mins",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
        description: "Premium facial treatment and skin care.",
      },
    ],
  },
];

export default function PricingGrid() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {SERVICES.map((group) => (
          <div key={group.category} className="mb-20">
            <h2 className="mb-10 text-3xl font-black">
              {group.category}
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {group.items.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px)100vw,50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black">
                      {service.price}
                    </span>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-neutral-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-neutral-500">
                        <FaClock />
                        {service.duration}
                      </span>

                      <span className="flex items-center gap-1 text-amber-500">
                        <FaStar />
                        4.9
                      </span>
                    </div>

                    <Link
                      href={`https://wa.me/${BUSINESS.whatsapp}`}
                      target="_blank"
                      className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-amber-500 hover:text-black"
                    >
                      <FaWhatsapp />
                      Book This Service
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}