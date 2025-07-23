import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, TrendingUp, ExternalLink } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Rural Health Initiative - Northern Nigeria",
    location: "Kano, Kaduna, Katsina States",
    duration: "2023 - 2025",
    beneficiaries: "150,000+ patients",
    status: "Active",
    description: "Deploying remote diagnostic devices in 45 primary healthcare centers across three northern states, serving predominantly rural communities with limited healthcare access.",
    impact: ["40% reduction in emergency referrals", "60% faster diagnosis time", "85% patient satisfaction rate", "24/7 specialist consultation access"],
    partners: ["Federal Ministry of Health", "WHO", "Gates Foundation"],
    image: "🏥"
  }, {
    title: "Urban Health Network - Lagos State",
    location: "Lagos, Nigeria",
    duration: "2024 - 2026",
    beneficiaries: "300,000+ patients",
    status: "Expanding",
    description: "Comprehensive EHR integration across 25 public hospitals and 100+ primary health centers, creating Africa's largest integrated health network.",
    impact: ["Unified patient records system", "Real-time bed availability tracking", "Automated referral pathways", "Population health analytics"],
    partners: ["Lagos State Government", "USAID", "African Development Bank"],
    image: "🌆"
  }, {
    title: "Cross-Border Health Monitoring",
    location: "Nigeria, Ghana, Kenya",
    duration: "2024 - 2027",
    beneficiaries: "500,000+ patients",
    status: "Pilot",
    description: "Multi-country pilot program establishing standardized health data exchange protocols and epidemic surveillance systems across West and East Africa.",
    impact: ["Regional disease surveillance", "Cross-border patient tracking", "Standardized health metrics", "Early warning systems"],
    partners: ["ECOWAS", "Africa CDC", "World Bank"],
    image: "🌍"
  }];
  const metrics = [{
    value: "75+",
    label: "Healthcare Facilities",
    description: "Across 3 countries"
  }, {
    value: "500K+",
    label: "Patient Records",
    description: "Digitized and secured"
  }, {
    value: "95%",
    label: "Uptime",
    description: "System reliability"
  }, {
    value: "2.5M",
    label: "Consultations",
    description: "Enabled through our platform"
  }];
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
            Active Projects & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real deployments across Africa, delivering measurable health outcomes and building sustainable healthcare infrastructure.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">
                {metric.value}
              </div>
              <div className="font-medium text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {project.location}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Users className="w-3 h-3 mr-1" />
                          {project.beneficiaries}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      Key Impact Metrics
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((impact, impactIndex) => (
                        <li key={impactIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Implementation Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, partnerIndex) => (
                        <Badge key={partnerIndex} variant="outline" className="text-xs">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;