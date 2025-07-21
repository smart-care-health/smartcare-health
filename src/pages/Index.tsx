import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Partnerships from "@/components/Partnerships";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <Projects />
      <Partnerships />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
