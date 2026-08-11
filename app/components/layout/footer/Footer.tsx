"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { BUSINESS } from "@/lib/constants";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}`;

  return (
    <footer className="bg-black text-white">
      {/* Final CTA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Your next look starts here
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Look sharp.
                <span className="text-neutral-500">
                  {" "}
                  Feel confident.
                </span>
              </h2>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-500 px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-amber-400 sm:w-fit"
            >
              <FaWhatsapp className="h-5 w-5" />

              Book Appointment

              <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-8 lg:px-8 lg:py-20">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="block text-xl font-black tracking-[0.25em]">
                SELECT PLACE
              </span>

              <span className="mt-1 block text-[10px] uppercase tracking-[0.4em] text-amber-400">
                Barber & Spa
              </span>
            </Link>

            <p className="mx-auto mt-7 max-w-sm text-sm leading-7 text-neutral-500 md:mx-0">
              Premium grooming, precision styling and personal care for the
              modern gentleman.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href={`tel:${BUSINESS.phone}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
              >
                <FaPhone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col items-center gap-4 md:items-start">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-neutral-400 transition-colors duration-300 hover:text-amber-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Visit Us
            </p>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-neutral-500">Address</p>

                <p className="mx-auto mt-1 max-w-xs leading-6 text-neutral-300 md:mx-0">
                  {BUSINESS.address}
                </p>
              </div>

              <div>
                <p className="text-neutral-500">Phone</p>

                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="mt-1 block text-neutral-300 transition-colors hover:text-amber-400"
                >
                  {BUSINESS.phone}
                </a>
              </div>

              <div>
                <p className="text-neutral-500">Hours</p>

                <p className="mt-1 text-neutral-300">
                  Mon – Sat · 9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center text-xs text-neutral-600 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Select Place Barber & Spa. All rights
            reserved.
          </p>

          <p>Designed & built with precision.</p>
        </div>
      </div>
    </footer>
  );
}