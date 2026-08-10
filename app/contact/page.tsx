import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
// import Map from "./components/Map";
import CTA from "./components/CTA";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ContactSection />
      {/* <Map /> */}
      <CTA />
    </main>
  );
}