import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Instagram from "@/components/home/Instagram";
import Packages from "@/components/home/Packages";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Instagram />
      <Packages />
      <Contact />
    </>
  );
}
