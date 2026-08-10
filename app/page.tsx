import Hero from "./components/sections/hero/Hero";
import Services from "./components/sections/services/Services";
import About from "./components/sections/about/About";
import WhyChooseUs from "./components/sections/why-choose-us/WhyChooseUs";
import Gallery from "./components/sections/gallery/Gallery";
import Pricing from "./components/sections/pricing/Pricing";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Contact from "./components/sections/contact/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}