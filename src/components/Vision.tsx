import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Brain, Wifi, Users, Globe2, TrendingUp, ArrowRight, Lightbulb } from "lucide-react";
const Vision = () => {
  const visionPoints = [{
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description: "Advanced machine learning algorithms trained on African population data, providing culturally and medically relevant diagnostic insights.",
    timeline: "2025-2026"
  }, {
    icon: Wifi,
    title: "Offline-First Architecture",
    description: "Robust systems that function seamlessly in low-connectivity environments, with intelligent data synchronization when connectivity is restored.",
    timeline: "2024-2025"
  }, {
    icon: Globe2,
    title: "Continental Interoperability",
    description: "Standardized protocols enabling seamless health data exchange across African borders, supporting patient mobility and coordinated care.",
    timeline: "2026-2027"
  }, {
    icon: Users,
    title: "Community Health Integration",
    description: "Comprehensive platform connecting community health workers, traditional healers, and formal healthcare systems for holistic care delivery.",
    timeline: "2025-2026"
  }];
  const futureCapabilities = [{
    category: "Clinical Intelligence",
    features: ["Predictive analytics for disease outbreaks", "Personalized treatment recommendations", "Population health risk stratification", "Clinical decision support systems"]
  }, {
    category: "Operational Excellence",
    features: ["Automated resource allocation", "Real-time supply chain optimization", "Intelligent appointment scheduling", "Performance dashboard analytics"]
  }, {
    category: "Patient Engagement",
    features: ["Multi-language patient portals", "SMS-based health reminders", "Telemedicine integration", "Community health education platforms"]
  }];
  const impacts = [{
    metric: "10M+",
    description: "Patients connected to digital health records by 2027"
  }, {
    metric: "50%",
    description: "Reduction in diagnostic delays across rural areas"
  }, {
    metric: "15",
    description: "African countries with integrated health systems"
  }, {
    metric: "85%",
    description: "Healthcare facilities digitized and connected"
  }];
  return <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔮 Future Vision
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            The Future of 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> African Healthcare</span>
          </h2>
          
        </div>

        {/* Vision Timeline */}
        

        {/* Future Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed to address the unique challenges of African healthcare systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {futureCapabilities.map((capability, index) => <div key={index} className="bg-muted/50 p-8 rounded-xl border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h4 className="font-heading font-semibold text-xl text-foreground">
                    {capability.category}
                  </h4>
                </div>
                <div className="space-y-3">
                  {capability.features.map((feature, idx) => <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>

        {/* Projected Impact */}
        <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-3xl mb-4">
              Projected Impact by 2027
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our vision extends beyond technology to create measurable improvements in health outcomes across Africa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <div className="font-heading font-bold text-3xl lg:text-4xl mb-2">
                    {impact.metric}
                  </div>
                  <div className="text-white/90 text-sm">
                    {impact.description}
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Innovation Focus */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              Locally-Adapted Innovation
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cultural Sensitivity</h4>
                  <p className="text-muted-foreground text-sm">Healthcare solutions designed with deep understanding of local customs, languages, and traditional healing practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Scalable Architecture</h4>
                  <p className="text-muted-foreground text-sm">Cloud-native platforms that scale from single clinics to entire national health systems without compromising performance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Regional Collaboration</h4>
                  <p className="text-muted-foreground text-sm">Cross-border health initiatives that strengthen regional health security and knowledge sharing.</p>
                </div>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Join Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <h4 className="font-heading font-semibold text-xl text-foreground mb-4">
              Research & Development Focus
            </h4>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">AI Training on African Data</h5>
                <p className="text-sm text-muted-foreground">Building machine learning models trained specifically on African population health data for more accurate diagnostics and treatment recommendations.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Sustainable Technology</h5>
                <p className="text-sm text-muted-foreground">Developing energy-efficient hardware and software solutions that operate reliably in challenging infrastructure environments.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Community Integration</h5>
                <p className="text-sm text-muted-foreground">Creating platforms that seamlessly integrate formal healthcare with community health workers and traditional healing practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Vision;