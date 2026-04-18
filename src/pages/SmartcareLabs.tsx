import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Brain,
  Zap,
  Target,
  Network,
  Globe2,
  Upload,
  Cpu,
  FileText,
  Stethoscope,
  CheckCircle2,
  FlaskConical,
  Hospital,
  Video,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import smartcareLabsLogo from "@/assets/smartcare-labs-logo.jpeg";

const SmartcareLabs = () => {
  const whyCards = [
    {
      icon: Brain,
      title: "Powered by BloodGPT",
      description: "Advanced AI built for biomarker interpretation at scale.",
    },
    {
      icon: Zap,
      title: "Faster Turnaround Times",
      description: "Reduce delays in clinical decision-making.",
    },
    {
      icon: Target,
      title: "Improved Diagnostic Accuracy",
      description: "Structured, consistent interpretation outputs.",
    },
    {
      icon: Network,
      title: "Scalable Across Systems",
      description: "From single labs to national healthcare networks.",
    },
    {
      icon: Globe2,
      title: "Built for African Healthcare",
      description: "Practical, deployable, and reliable in real-world settings.",
    },
  ];

  const steps = [
    {
      icon: Upload,
      title: "Submit Results",
      description: "Upload or input laboratory results.",
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description: "Results are processed by the BloodGPT clinical intelligence engine.",
    },
    {
      icon: FileText,
      title: "Structured Output",
      description: "A clear interpretation is generated instantly.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Action",
      description: "Clinicians review and act with confidence.",
    },
  ];

  const orgBenefits = [
    "Reduce diagnostic bottlenecks",
    "Improve clinician efficiency",
    "Standardize interpretation quality across teams",
    "Enable remote and distributed care models",
    "Strengthen data-driven decision-making",
  ];

  const useCases = [
    { icon: FlaskConical, title: "Diagnostic Laboratories" },
    { icon: Hospital, title: "Hospitals & Clinics" },
    { icon: Video, title: "Telemedicine Platforms" },
    { icon: ShieldCheck, title: "Health Insurance Providers" },
    { icon: Building2, title: "Public Health Programs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl shadow-sm p-6 inline-flex items-center justify-center">
                <img
                  src={smartcareLabsLogo}
                  alt="Smartcare Labs powered by BloodGPT"
                  loading="eager"
                  className="max-w-sm w-full h-auto"
                />
              </div>
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-4">
              Smartcare{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Labs
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-6 font-medium">
              AI-Powered Diagnostic Intelligence for Modern Healthcare
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Smartcare Labs is a digital diagnostics platform powered by BloodGPT, enabling
              laboratories, hospitals, and healthcare providers to interpret results faster,
              improve diagnostic accuracy, and scale clinical decision-making with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/?inquiry=labs#contact">
                  Request Access to Smartcare Labs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/?inquiry=labs#contact">Partner with Smartcare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smartcare Labs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Why Smartcare Labs
            </h2>
            <p className="text-lg text-muted-foreground">
              Built to deliver speed, accuracy, and scale across modern healthcare systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyCards.map((card, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              From Data to Decision —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                In Minutes
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="border-0 bg-white/70 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-heading font-bold text-3xl text-primary/20">
                        0{idx + 1}
                      </span>
                    </div>
                    <CardTitle className="font-heading text-lg text-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means for Your Organization */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                What This Means for Your Organization
              </h2>
              <p className="text-lg text-muted-foreground">
                Operational impact across teams, workflows, and care delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {orgBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-border/50"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Who It's For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {useCases.map((uc, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="pt-8 pb-6 flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl mb-4">
                    <uc.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-heading font-semibold text-foreground">{uc.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-2xl lg:text-3xl text-foreground leading-relaxed">
              Smartcare Labs combines Smartcare's healthcare infrastructure approach with the
              intelligence of{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                BloodGPT
              </span>{" "}
              to deliver scalable, high-quality diagnostics across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-14 rounded-2xl text-white text-center max-w-5xl mx-auto">
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Ready to Transform Diagnostic Delivery?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join the laboratories, hospitals, and partners scaling diagnostic intelligence
              with Smartcare Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/?inquiry=labs#contact">
                  Request Access to Smartcare Labs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link to="/?inquiry=labs#contact">Partner with Smartcare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartcareLabs;
