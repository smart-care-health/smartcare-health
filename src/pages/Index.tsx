import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Partnerships from "@/components/Partnerships";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ImageGenerator from "@/components/ImageGenerator";

const Index = () => {
  const handleImageGenerated = async (imageUrl: string) => {
    try {
      // Download the generated image and save it to assets
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Create a download link to save the image
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'hero-healthcare-new.jpg';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      console.log('New hero image generated and downloaded:', imageUrl);
    } catch (error) {
      console.error('Failed to download image:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Temporary Image Generator - Remove after generating new hero image */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Generate New Hero Image</h2>
          <p className="text-center text-muted-foreground mb-6">
            Use this tool to generate a new hero image that properly captures healthcare transformation in Africa.
          </p>
          <ImageGenerator onImageGenerated={handleImageGenerated} />
        </div>
      </div>
      
      <Hero />
      <Solutions />
      {/* <Projects /> */}
      <Partnerships />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
