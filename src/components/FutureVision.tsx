import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Wifi, 
  Globe2, 
  Shield,
  Smartphone,
  Languages,
  ArrowRight,
  Calendar
} from "lucide-react";

const FutureVision = () => {
  const platformFeatures = [
    {
      icon: Database,
      title: "Integrated Diagnostics & Data",
      description: "Seamless integration with diagnostic tools, labs, imaging, and billing systems"
    },
    {
      icon: Wifi,
      title: "Offline-First Architecture",
      description: "Usable offline with cloud sync and local hosting options for unreliable connectivity"
    },
    {
      icon: Languages,
      title: "Multilingual & Accessible",
      description: "Support for local languages with tiered access roles for different healthcare workers"
    },
    {
      icon: Globe2,
      title: "Continuum of Care",
      description: "Link patient care across primary, secondary, and tertiary healthcare facilities"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Full compliance with NDPA and other local regulations with enterprise-grade security"
    },
    {
      icon: Smartphone,
      title: "Mobile-Optimized",
      description: "Lightweight, modular design tailored for West African healthcare realities"
    }
  ];

  const developmentTimeline = [
    {
      phase: "Q4 2024",
      title: "Platform Foundation",
      description: "Core EHR infrastructure and basic patient data management",
      status: "In Progress"
    },
    {
      phase: "Q2 2025",
      title: "Diagnostic Integration",
      description: "Integration with existing diagnostic devices and lab systems",
      status: "Planned"
    },
    {
      phase: "Q4 2025",
      title: "Pilot Launch",
      description: "Limited pilot deployment with select healthcare partners",
      status: "Planned"
    },
    {
      phase: "Q2 2026",
      title: "Full Platform Launch",
      description: "Complete platform with all features and nationwide availability",
      status: "Future"
    }
  ];

  return (
    <section id="future-vision" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🟣 What's Coming Next
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Building the 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> EHR Platform</span> of Tomorrow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are building a modular, scalable, and interoperable EHR/EMR platform designed for the realities of African healthcare systems. Lightweight, offline-capable, and cloud-enabled — our platform will integrate diagnostics, patient data, insurance, billing, and care pathways.
          </p>
        </div>

        {/* Platform Vision */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl text-foreground text-center mb-12">
            Platform Vision
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-health-light/30">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl text-foreground text-center mb-12">
            Development Roadmap
          </h3>
          <div className="grid lg:grid-cols-4 gap-6">
            {developmentTimeline.map((phase, index) => (
              <Card key={index} className={`border-0 shadow-md transition-all duration-300 ${
                phase.status === "In Progress" ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30" :
                phase.status === "Planned" ? "bg-gradient-to-br from-accent/5 to-primary/5" :
                "bg-muted/30"
              }`}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      phase.status === "In Progress" ? "bg-primary/20 text-primary" :
                      phase.status === "Planned" ? "bg-accent/20 text-accent" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {phase.phase}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              Why Our Platform Matters
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Designed for African Healthcare
                </h4>
                <p className="text-muted-foreground text-sm">
                  Unlike global EHR systems, our platform is built from the ground up to address the unique challenges of African healthcare infrastructure, connectivity, and workflows.
                </p>
              </div>
              <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 rounded-xl border border-border">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Interoperability at Scale
                </h4>
                <p className="text-muted-foreground text-sm">
                  Our platform enables seamless data sharing between different levels of care, ensuring patients receive coordinated treatment regardless of where they seek care.
                </p>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Sustainable & Scalable
                </h4>
                <p className="text-muted-foreground text-sm">
                  Built with sustainability in mind, our platform grows with healthcare systems, from small clinics to large hospital networks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Database className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-xl text-foreground mb-2">
                Pilot Launch Expected
              </h4>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-3xl">
                Q4 2025
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/50 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Platform Development</span>
                  <span className="text-xs text-primary">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="bg-white/50 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Integration Testing</span>
                  <span className="text-xs text-accent">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div className="bg-white/50 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Partner Onboarding</span>
                  <span className="text-xs text-primary">30%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white">
            <h3 className="font-heading font-bold text-3xl mb-4">
              Be Part of the Future
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join us in building the next generation of healthcare technology for Africa. Whether you're a healthcare provider, government agency, or technology partner, there's a place for you in our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request Platform Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Join Our Beta Program
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;