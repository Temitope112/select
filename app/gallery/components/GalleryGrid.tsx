"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b0fd0d3b53dd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryGrid() {
  return (
    <section className="bg-neutral-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-[24px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}