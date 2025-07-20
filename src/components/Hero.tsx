import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-health-light to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🌍 Transforming African Healthcare
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Bridging Healthcare 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Gaps</span> 
                <br />Across Africa
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We're pioneering digital health innovation with cutting-edge remote diagnostics and integrated EHR/EMR platforms, 
                working alongside governments, NGOs, and healthcare institutions to build scalable, locally-adapted solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="font-heading font-bold text-3xl text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Healthcare Partners</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-health-success">12</div>
                <div className="text-sm text-muted-foreground">Countries Active</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="Healthcare professional using diagnostic device" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-border">
              <div className="text-sm font-medium text-foreground">Live Diagnostics</div>
              <div className="text-2xl font-bold text-health-success">Active</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border">
              <div className="text-sm font-medium text-foreground">Remote Monitoring</div>
              <div className="text-2xl font-bold text-primary">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;