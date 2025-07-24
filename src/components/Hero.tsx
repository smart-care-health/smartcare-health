import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-healthcare-new.jpg";
const Hero = () => {

  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-health-light to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🏥 Primary Healthcare Innovation
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Revolutionizing 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Primary Healthcare</span> 
                <br />Across Africa
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">By deploying cutting-edge remote diagnostics and building comprehensive EHR/EMR platforms that connect primary healthcare to secondary and tertiary providers, ensuring seamless continuum of care across African communities.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => {
                  const element = document.querySelector('#solutions');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => {
                  const element = document.querySelector('#vision');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="African healthcare worker using digital device with patient" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-border z-30">
              <div className="text-sm font-medium text-foreground">Live Diagnostics</div>
              <div className="text-2xl font-bold text-health-success">Active</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border z-20">
              <div className="text-sm font-medium text-foreground">Remote Access</div>
              <div className="text-2xl font-bold text-primary">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;