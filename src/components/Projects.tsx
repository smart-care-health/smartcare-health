import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, TrendingUp, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rural Health Initiative - Northern Nigeria",
      location: "Kano, Kaduna, Katsina States",
      duration: "2023 - 2025",
      beneficiaries: "150,000+ patients",
      status: "Active",
      description: "Deploying remote diagnostic devices in 45 primary healthcare centers across three northern states, serving predominantly rural communities with limited healthcare access.",
      impact: [
        "40% reduction in emergency referrals",
        "60% faster diagnosis time",
        "85% patient satisfaction rate",
        "24/7 specialist consultation access"
      ],
      partners: ["Federal Ministry of Health", "WHO", "Gates Foundation"],
      image: "🏥"
    },
    {
      title: "Urban Health Network - Lagos State",
      location: "Lagos, Nigeria",
      duration: "2024 - 2026",
      beneficiaries: "300,000+ patients",
      status: "Expanding",
      description: "Comprehensive EHR integration across 25 public hospitals and 100+ primary health centers, creating Africa's largest integrated health network.",
      impact: [
        "Unified patient records system",
        "Real-time bed availability tracking",
        "Automated referral pathways",
        "Population health analytics"
      ],
      partners: ["Lagos State Government", "USAID", "African Development Bank"],
      image: "🌆"
    },
    {
      title: "Cross-Border Health Monitoring",
      location: "Nigeria, Ghana, Kenya",
      duration: "2024 - 2027",
      beneficiaries: "500,000+ patients",
      status: "Pilot",
      description: "Multi-country pilot program establishing standardized health data exchange protocols and epidemic surveillance systems across West and East Africa.",
      impact: [
        "Regional disease surveillance",
        "Cross-border patient tracking",
        "Standardized health metrics",
        "Early warning systems"
      ],
      partners: ["ECOWAS", "Africa CDC", "World Bank"],
      image: "🌍"
    }
  ];

  const metrics = [
    {
      value: "75+",
      label: "Healthcare Facilities",
      description: "Across 3 countries"
    },
    {
      value: "500K+",
      label: "Patient Records",
      description: "Digitized and secured"
    },
    {
      value: "95%",
      label: "Uptime",
      description: "System reliability"
    },
    {
      value: "2.5M",
      label: "Consultations",
      description: "Enabled through our platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-health-success/10 text-health-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Current Projects
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Deploying Solutions 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> At Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world implementations demonstrating measurable impact across diverse healthcare environments and populations.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
                <div className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-primary to-accent p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <CardTitle className="font-heading text-2xl text-foreground">
                        {project.title}
                      </CardTitle>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {project.beneficiaries}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Metrics */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-health-success" />
                        Key Impact Metrics
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.impact.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-health-success rounded-full mr-3" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Partners */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Partners</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.partners.map((partner, idx) => (
                          <Badge key={idx} variant="secondary">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Ready to Transform Healthcare in Your Region?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our growing network of healthcare partners implementing scalable digital health solutions across Africa.
            </p>
            <Button variant="hero" size="lg">
              Discuss Partnership Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;