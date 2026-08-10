"use client";

import { useMemo, useState } from "react";
import { Clock, MessageCircle, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  PRICING_CATEGORIES,
  PRICING_ITEMS,
  type PricingCategory,
} from "./data";

import { BUSINESS } from "@/lib/constants";

export default function Pricing() {
  const [activeCategory, setActiveCategory] =
    useState<PricingCategory>("all");

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") {
      return PRICING_ITEMS;
    }

    return PRICING_ITEMS.filter(
      (service) => service.category === activeCategory
    );
  }, [activeCategory]);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString("en-NG")}`;
  };

  const createWhatsAppLink = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hi Select Place Barber & Spa, I'd like to book the ${serviceName}.`
    );

    return `https://wa.me/${BUSINESS.whatsapp}?text=${message}`;
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500"
            >
              Pricing
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-black md:text-6xl"
            >
              Choose your experience.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-7 text-neutral-500"
            >
              Select a service, see the price and start your
              appointment directly through WhatsApp.
            </motion.p>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-black"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with us
          </motion.a>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex gap-2 overflow-x-auto border-b border-black/10 pb-4">
          {PRICING_CATEGORIES.map((category) => {
            const active = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-black"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.article
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border border-black/10 p-6 transition-all duration-300 hover:border-black/30 hover:shadow-xl md:p-8"
              >
                {/* Popular */}
                {service.popular && (
                  <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black">
                    <Check className="h-3 w-3" />
                    Popular
                  </div>
                )}

                {/* Service */}
                <div className="pr-20">
                  <h3 className="text-2xl font-bold tracking-tight text-black">
                    {service.name}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                    {service.description}
                  </p>
                </div>

                {/* Price + Duration */}
                <div className="mt-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-3xl font-black text-black">
                      {formatPrice(service.price)}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </div>
                  </div>

                  {/* Book */}
                  <a
                    href={createWhatsAppLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:text-black"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            Prices shown are starting prices and may vary by service.
          </p>

          <p className="font-medium text-black">
            Need help choosing? Chat with us on WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}