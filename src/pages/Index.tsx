import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CurrentWork from "@/components/CurrentWork";
import FutureVision from "@/components/FutureVision";
import Partnerships from "@/components/Partnerships";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <CurrentWork />
      <FutureVision />
      <Partnerships />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
