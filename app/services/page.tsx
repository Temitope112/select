import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import WhyChoose from "./components/WhyChoose";
import CTA from "@/app/pricing/components/CTA";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ServicesGrid />
      <WhyChoose />
      <CTA />
    </main>
  );
}