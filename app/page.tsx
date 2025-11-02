import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Conversion from "@/components/sections/Conversion";
import Support from "@/components/sections/Support";
import Awards from "@/components/sections/Awards";
import CTA from "@/components/sections/CTA";
import SystemPreview from "@/components/sections/SystemPreview";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <Hero />
      <SystemPreview />
      <Features />
      <Conversion />
      <Support />
      <Awards />
      <CTA />
      <Footer />
    </main>
  );
}
