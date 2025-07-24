import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Globe, 
  Heart, 
  Shield, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Monitor,
  Wifi
} from "lucide-react";

const Partnerships = () => {
  const partnerTypes = [
    {
      icon: Monitor,
      title: "Device Partners",
      description: "Medical device manufacturers and technology providers",
      examples: ["Higosense"],
      focus: "Advanced diagnostic equipment and remote monitoring solutions"
    },
    {
      icon: Wifi,
      title: "Technology Partners",
      description: "Telecommunications and infrastructure providers",
      examples: ["MTN"],
      focus: "Connectivity infrastructure and digital platform integration"
    },
    {
      icon: Building2,
      title: "Government Agencies",
      description: "Federal and state health ministries across Africa",
      examples: ["NPHCDA"],
      focus: "Policy integration and population-scale deployment"
    },
    {
      icon: Globe,
      title: "International Organizations",
      description: "Global health and development partners",
      examples: [],
      focus: "Funding and technical expertise for sustainable impact"
    },
    {
      icon: Heart,
      title: "Healthcare Providers",
      description: "Hospitals, Pharmacies, Laboratories, and health networks",
      examples: [],
      focus: "Clinical validation and real-world implementation"
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "HMOs and insurance providers",
      examples: [],
      focus: "Coverage expansion and cost-effective care delivery"
    }
  ];

  const benefits = [
    {
      title: "Shared Infrastructure",
      description: "Leverage our platform to reduce implementation costs and accelerate deployment timelines."
    },
    {
      title: "Technical Support",
      description: "Comprehensive training, maintenance, and ongoing technical assistance for all partners."
    },
    {
      title: "Data Insights",
      description: "Population health analytics and evidence-based insights to inform policy and practice."
    },
    {
      title: "Scalable Solutions",
      description: "Proven systems that grow with your organization and adapt to local healthcare needs."
    }
  ];

  const criteria = [
    "Commitment to improving healthcare access in underserved communities",
    "Alignment with local healthcare policies and regulatory frameworks",
    "Demonstrated capacity for implementation and long-term sustainability",
    "Willingness to participate in collaborative monitoring and evaluation"
  ];

  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            🤝 Strategic Partnerships
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Building Healthcare 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Ecosystems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with governments, NGOs, healthcare providers, and insurers to create sustainable, 
            locally-adapted digital health solutions across the African continent.
          </p>
        </div>

        {/* Partner Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {partnerTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">
                    {type.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {type.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {type.examples.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Partners</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.examples.map((example, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex items-start space-x-2">
                    <Handshake className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Focus:</strong> {type.focus}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
              Why Partner With Us?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our collaborative approach ensures mutual success and sustainable impact in healthcare transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-white/50 rounded-xl border border-border">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-fit mx-auto">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Criteria */}
        <div className="bg-white/50 rounded-2xl border border-border p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Partnership Criteria
              </h3>
              <p className="text-muted-foreground mb-6">
                We seek partners who share our commitment to transforming healthcare access 
                and are positioned to create lasting impact in their communities.
              </p>
              <div className="space-y-3">
                {criteria.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-health-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl">
              <h4 className="font-heading font-semibold text-xl text-foreground mb-4">
                Ready to Partner?
              </h4>
              <p className="text-muted-foreground mb-6">
                Join our network of healthcare innovators and help us scale digital health solutions across Africa.
              </p>
              <div className="space-y-3">
                <Button variant="hero" className="w-full">
                  Submit Partnership Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories - Hidden until we have relevant quote */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="font-heading font-bold text-2xl mb-4">
              Success Through Collaboration
            </h3>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              "Our partnership with HealthTech Africa has enabled us to digitize healthcare records for over 
              200,000 patients, improving care coordination and reducing administrative costs by 35%."
            </p>
            <div className="text-white/80 text-sm">
              — Dr. Amina Kanu, Director of Health Services, Lagos State
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Partnerships;