import Hero from "./components/Hero";
import Story from "./components/Story";
import Features from "./components/Features";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Team from "./components/Team";
import CTA from "./components/CTA";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Story />
      <Features />
      <Experience />
      <Stats />
      <Team />
      <CTA />
    </main>
  );
}