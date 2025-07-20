import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Monitor, 
  Smartphone, 
  Database, 
  Network, 
  Shield,
  ArrowRight 
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Stethoscope,
      title: "Remote Diagnostic Devices",
      description: "Cutting-edge portable diagnostic tools designed for underserved communities, enabling real-time health assessments in remote locations.",
      features: ["AI-powered diagnostics", "Cloud connectivity", "Multi-parameter monitoring", "Battery efficient design"],
      status: "Currently Deployed"
    },
    {
      icon: Database,
      title: "Integrated EHR/EMR Platform",
      description: "Comprehensive electronic health records system tailored for African healthcare needs, ensuring seamless data management and interoperability.",
      features: ["Offline-first architecture", "Multi-language support", "Government compliance", "Scalable infrastructure"],
      status: "In Development"
    },
    {
      icon: Network,
      title: "Healthcare Network Integration",
      description: "Connect hospitals, clinics, and health workers across the continent through our unified digital ecosystem for coordinated care delivery.",
      features: ["Real-time data sharing", "Referral management", "Resource optimization", "Quality assurance"],
      status: "Pilot Phase"
    }
  ];

  const capabilities = [
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts and data analytics."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices and low-bandwidth environments."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with HIPAA compliance and local data sovereignty."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💡 Our Solutions
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Transforming Healthcare Through 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From remote diagnostics to comprehensive health information systems, we're building the future of African healthcare infrastructure.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    solution.status === "Currently Deployed" ? "bg-health-success/10 text-health-success" :
                    solution.status === "In Development" ? "bg-accent/10 text-accent" :
                    "bg-primary/10 text-primary"
                  }`}>
                    {solution.status}
                  </span>
                </div>
                <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-all mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Capabilities */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-md w-fit mx-auto">
                <capability.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                {capability.title}
              </h3>
              <p className="text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;