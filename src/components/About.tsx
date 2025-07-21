import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Users, 
  Lightbulb, 
  Target,
  ArrowRight,
  Building2
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      metric: "25+",
      description: "Healthcare Technology Experts",
      detail: "Policy, product, and clinical specialists"
    },
    {
      icon: Building2,
      metric: "3",
      description: "Countries Active",
      detail: "Nigeria, Ghana, and expanding"
    },
    {
      icon: Target,
      metric: "5+",
      description: "Years Experience",
      detail: "In African healthcare innovation"
    },
    {
      icon: Lightbulb,
      metric: "50+",
      description: "Healthcare Partnerships",
      detail: "Across public and private sectors"
    }
  ];

  const whatWeDo = [
    {
      title: "Extend clinical reach through connected diagnostics",
      description: "Handheld diagnostic devices that bring clinical-grade assessments to remote areas",
      icon: "🩺"
    },
    {
      title: "Support data-driven care with scalable infrastructure",
      description: "EHR/EMR platforms designed for African healthcare systems and workflows",
      icon: "📊"
    },
    {
      title: "Enable real-time insights for planning, prevention, and evaluation",
      description: "Analytics and reporting tools that help healthcare systems make informed decisions",
      icon: "📈"
    },
    {
      title: "Bridge gaps between communities, caregivers, and policymakers",
      description: "Integrated platforms that connect all levels of healthcare delivery",
      icon: "🌉"
    }
  ];

  const currentProjects = [
    "Deployment of handheld diagnostic devices across PHCs",
    "Partnerships with state governments, HMOs, and telecom providers",
    "Early-stage development of an integrated EHR platform"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏢 About Us
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Who We Are
          </h2>
        </div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              Lagos-Based Healthcare Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're a Lagos-based healthcare technology company focused on transforming the way primary healthcare is delivered across Africa. Combining policy-level insight with product innovation, we work across the value chain — from diagnostics to data platforms — to help unlock better health for all.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h4 className="font-heading font-semibold text-lg text-foreground">
                  Based in Lagos, Nigeria
                </h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Strategically located at the heart of West Africa's largest economy, with deep understanding of regional healthcare challenges and opportunities.
              </p>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-heading font-bold text-3xl text-foreground mb-2">
                    {stat.metric}
                  </div>
                  <div className="font-medium text-foreground text-sm mb-1">
                    {stat.description}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.detail}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-3xl text-foreground text-center mb-12">
            What We Do
          </h3>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We deploy tools and platforms that transform healthcare delivery across Africa:
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {whatWeDo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white/50 rounded-xl border border-border">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Current Projects */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <h4 className="font-heading font-semibold text-xl text-foreground mb-6 text-center">
              Current Projects Include:
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                <div key={index} className="bg-white/50 p-4 rounded-lg text-center">
                  <div className="w-2 h-2 bg-accent rounded-full mx-auto mb-3"></div>
                  <p className="text-sm text-foreground font-medium">
                    {project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white">
            <h3 className="font-heading font-bold text-3xl mb-4">
              Join Our Mission
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're a healthcare provider, government agency, investor, or technology partner, there are many ways to collaborate with us in transforming African healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Explore Partnerships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;