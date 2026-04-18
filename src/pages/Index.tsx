import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Partnerships from "@/components/Partnerships";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Wait briefly for sections to render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <Partnerships />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};
export default Index;
