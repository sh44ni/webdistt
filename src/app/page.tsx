import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Technologies from "@/components/sections/Technologies";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <CTA />
    </>
  );
}
