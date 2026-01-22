import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans antialiased text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
      <Projects />
      <HowItWorks />
      <Footer />
    </main>
  );
}
