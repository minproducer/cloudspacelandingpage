import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { PricingTable } from "@/components/sections/PricingTable";
import { Guarantees } from "@/components/sections/Guarantees";
import { Contact } from "@/components/sections/Contact";
import { PopularSoftwarePricing } from "@/components/sections/PopularSoftwarePrice";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <PricingTable />
        <PopularSoftwarePricing/>
        <Guarantees />
        <Contact />
      </main>
      <Footer />
      
      {showScrollTop && (
        <Button
          className="fixed bottom-8 right-8 rounded-full p-3"
          onClick={scrollToTop}
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
