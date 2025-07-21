import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Users, 
  Building2, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const CurrentWork = () => {
  const currentProjects = [
    {
      icon: Stethoscope,
      title: "Connected Diagnostic Deployment",
      description: "Handheld diagnostic devices bringing clinical-grade data to underserved communities",
      features: [
        "Real-time health assessments",
        "Early disease detection",
        "Cloud data integration",
        "Training for frontline workers"
      ],
      status: "Active Deployment",
      coverage: "15+ Primary Health Centers"
    },
    {
      icon: Building2,
      title: "Government Partnerships",
      description: "Working with state governments to integrate digital health solutions into public healthcare systems",
      features: [
        "Policy-level integration",
        "Healthcare infrastructure support",
        "Training and capacity building",
        "Data standardization"
      ],
      status: "Ongoing",
      coverage: "3 State Governments"
    },
    {
      icon: Users,
      title: "HMO & Private Provider Network",
      description: "Partnerships with health maintenance organizations and private healthcare providers",
      features: [
        "Digital care pathways",
        "Insurance integration",
        "Quality assurance protocols",
        "Performance analytics"
      ],
      status: "Expanding",
      coverage: "8+ Healthcare Partners"
    }
  ];

  const impactMetrics = [
    {
      metric: "15K+",
      description: "Patients served through connected diagnostics",
      icon: Users
    },
    {
      metric: "25+",
      description: "Healthcare facilities equipped",
      icon: Building2
    },
    {
      metric: "120+",
      description: "Healthcare workers trained",
      icon: Stethoscope
    },
    {
      metric: "95%",
      description: "Diagnostic accuracy improvement",
      icon: CheckCircle
    }
  ];

  return (
    <section id="current-work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔵 What We're Doing Now
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Deploying Solutions 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our first deployment utilizes connected diagnostic devices to bring clinical-grade data and early detection to underserved communities. These tools empower frontline workers, extend medical reach, and help governments and private providers close gaps in care.
          </p>
        </div>

        {/* Current Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {currentProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs px-3 py-1 bg-health-success/10 text-health-success rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
                <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-accent font-medium">
                  {project.coverage}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-3xl mb-4">
              Current Impact
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Real results from our ongoing deployments across primary healthcare facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <impact.icon className="h-8 w-8 mx-auto mb-3 text-white" />
                  <div className="font-heading font-bold text-3xl lg:text-4xl mb-2">
                    {impact.metric}
                  </div>
                  <div className="text-white/90 text-sm">
                    {impact.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Focus */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              Technology That Works
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Smartphone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mobile-First Design</h4>
                  <p className="text-muted-foreground text-sm">Designed for the realities of African healthcare infrastructure with offline capabilities and low-bandwidth optimization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Frontline Worker Empowerment</h4>
                  <p className="text-muted-foreground text-sm">Tools that enhance the capabilities of community health workers and primary care providers without overwhelming them.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Proven Results</h4>
                  <p className="text-muted-foreground text-sm">Measurable improvements in diagnostic accuracy, patient outcomes, and healthcare delivery efficiency.</p>
                </div>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Learn About Our Technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border">
            <h4 className="font-heading font-semibold text-xl text-foreground mb-4">
              Current Deployment Highlights
            </h4>
            <div className="space-y-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Remote Diagnostic Accuracy</h5>
                <p className="text-sm text-muted-foreground">95% diagnostic accuracy rate compared to traditional methods, with instant data sharing to referral centers.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Healthcare Worker Adoption</h5>
                <p className="text-sm text-muted-foreground">98% user satisfaction rate among trained healthcare workers, with reduced diagnosis time by 60%.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Patient Reach Expansion</h5>
                <p className="text-sm text-muted-foreground">300% increase in patients accessing diagnostic services in rural and underserved communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWork;