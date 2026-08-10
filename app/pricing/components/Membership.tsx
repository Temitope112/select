"use client";

import Link from "next/link";
import { FaCrown, FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "@/lib/constants";

export default function Membership() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-black lg:p-16">
        <FaCrown className="text-5xl" />

        <h2 className="mt-6 text-4xl font-black">
          VIP Grooming Membership
        </h2>

        <p className="mt-5 max-w-2xl text-lg">
          Enjoy priority booking, exclusive discounts and
          monthly premium grooming sessions.
        </p>

        <ul className="mt-8 space-y-3 font-medium">
          <li>✓ Priority Booking</li>
          <li>✓ Exclusive Member Discounts</li>
          <li>✓ Free Beard Touch-up</li>
          <li>✓ Birthday Grooming Offer</li>
        </ul>

        <Link
          href={`https://wa.me/${BUSINESS.whatsapp}`}
          target="_blank"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white"
        >
          <FaWhatsapp />
          Join Membership
        </Link>
      </div>
    </section>
  );
}