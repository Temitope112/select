"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    question: "Do I need to book an appointment?",
    answer:
      "Appointments are recommended to avoid waiting, but walk-ins are welcome depending on availability.",
  },
  {
    question: "How long does a haircut take?",
    answer:
      "A standard haircut takes about 30–45 minutes. Premium grooming sessions may take up to one hour.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, POS payments and other supported digital payment methods.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. Simply send us a WhatsApp message a few hours before your appointment and we'll help you reschedule.",
  },
  {
    question: "Do you offer home service?",
    answer:
      "Yes. Home service is available for selected locations. Contact us on WhatsApp for availability and pricing.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            QUESTIONS
          </p>

          <h2 className="mt-6 text-4xl font-black text-black md:text-6xl">
            Frequently Asked
            <span className="block text-neutral-500">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Everything you need to know before booking your next grooming session.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">
          {FAQS.map((item, index) => {
            const open = active === index;

            return (
              <motion.div
                key={item.question}
                layout
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-black">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: open ? 180 : 0,
                    }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <p className="px-7 pb-7 text-neutral-600 leading-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}