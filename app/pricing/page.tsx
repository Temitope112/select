import Hero from "./components/Hero";
import PricingGrid from "./components/PricingGrid";
import Membership from "./components/Membership";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function PricingPage() {
  return (
    <main className="bg-white">
      <Hero />
      <PricingGrid />
      <Membership />
      <FAQ />
      <CTA />
    </main>
  );
}