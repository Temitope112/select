import Hero from "./components/Hero";
import GalleryGrid from "./components/GalleryGrid";
import CTA from "@/app/contact/components/CTA";

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <Hero />
      <GalleryGrid />
      <CTA />
    </main>
  );
}