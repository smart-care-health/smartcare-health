import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ChevronRight,
  FileBarChart,
  MessageSquare,
  Stethoscope,
  Repeat,
  Sparkles,
  Inbox,
  Database,
  Brain,
  Send,
  FileCheck2,
  Users,
  TrendingUp,
  Award,
  Layout,
  Plug,
  ServerCog,
  GitBranch,
  CheckCircle2,
  FlaskConical,
  Network,
  Hospital,
  Building2,
  Layers,
  Handshake,
  CircuitBoard,
} from "lucide-react";

const SmartcareLabsHowItWorks = () => {
  const platformDoes = [
    { icon: FileBarChart, title: "Clearer result communication", description: "Move beyond raw values to structured, readable outputs." },
    { icon: MessageSquare, title: "Better patient understanding", description: "Outputs designed to make results easier to interpret." },
    { icon: Stethoscope, title: "Easier professional review", description: "Consistent summaries that support clinician workflows." },
    { icon: Repeat, title: "Follow-up testing pathways", description: "Support intelligent repeat-testing recommendations." },
    { icon: Sparkles, title: "Stronger digital service delivery", description: "A more modern reporting experience for laboratories." },
  ];

  const workflow = [
    {
      icon: Inbox,
      title: "Results come in from existing workflows",
      description:
        "The platform is designed to work with multiple input types, including PDF lab reports, scanned or paper-based reports, HL7 feeds, CSV and structured data inputs, and connected LIS, EHR, or EMR workflows where relevant.",
    },
    {
      icon: Database,
      title: "Data is normalized and prepared",
      description:
        "Once a result is ingested, the system structures the information into a usable format, helping standardize test names, units, and output formats for downstream use.",
    },
    {
      icon: Brain,
      title: "Structured interpretation is generated",
      description:
        "The interpretation layer is designed to produce outputs that are more useful than a raw lab sheet alone, including patient-facing explanations, clinician-oriented summaries, trend views, and follow-up testing recommendations.",
    },
    {
      icon: Send,
      title: "Outputs are delivered through the lab's preferred model",
      description:
        "Results can be delivered through branded PDFs, secure portal experiences, API-based workflows, or hybrid models depending on the organization's needs.",
    },
  ];

  const enterpriseBenefits = [
    {
      icon: FileCheck2,
      title: "Better report experience",
      description: "Structured outputs can make results easier to understand and more useful to both patients and care teams.",
    },
    {
      icon: Users,
      title: "Stronger patient retention",
      description: "Where a patient's result history is visible over time, the lab relationship becomes more persistent and valuable.",
    },
    {
      icon: TrendingUp,
      title: "Improved follow-up opportunities",
      description: "The platform can support more intelligent repeat-testing pathways rather than one-off result delivery.",
    },
    {
      icon: Award,
      title: "Operational differentiation",
      description: "Labs can offer a more modern digital experience without replacing their entire existing workflow stack.",
    },
  ];

  const deployment = [
    {
      icon: Layout,
      title: "White-label portal",
      description: "A branded Smartcare Labs experience that can be adapted for lab and patient use.",
    },
    {
      icon: Plug,
      title: "API-led integration",
      description: "For organizations that want to connect interpretation outputs into their own applications, reporting systems, or digital workflows.",
    },
    {
      icon: ServerCog,
      title: "Private cloud or controlled infrastructure",
      description: "For institutions that require stronger control over hosting, data flow, and security design.",
    },
    {
      icon: GitBranch,
      title: "Phased enterprise rollout",
      description: "For labs that want to begin with a controlled implementation before broader adoption.",
    },
  ];

  const dataFlowBullets = [
    "Structured result ingestion",
    "Controlled processing workflow",
    "Audit-friendly delivery model",
    "Deployment flexibility for enterprise settings",
  ];

  const smartcareLed = [
    "Market engagement",
    "Partner relationships",
    "Onboarding and support",
    "Local deployment coordination",
    "Ecosystem alignment with laboratories and healthcare providers",
  ];

  const audience = [
    { icon: FlaskConical, title: "Enterprise laboratories" },
    { icon: Network, title: "Diagnostic chains" },
    { icon: Hospital, title: "Hospital laboratory groups" },
    { icon: Building2, title: "Healthcare organizations exploring lab digitization" },
    { icon: Layers, title: "Institutions interested in white-label deployment" },
    { icon: Handshake, title: "Partners evaluating integration or rollout options" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Abstract systems visual */}
            <div className="flex justify-center mb-10">
              <div className="relative inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-border/50">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                  <Inbox className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                  <CircuitBoard className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                  <Send className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Smartcare Labs
              </span>{" "}
              Works
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-6 font-medium">
              A deeper look at the platform behind AI-powered lab interpretation
            </p>
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-4 mb-10">
              <p>
                Smartcare Labs helps laboratories and healthcare providers turn routine lab results into clearer,
                more structured, and more useful outputs for professional review, patient communication, and
                follow-up planning.
              </p>
              <p>
                Led by Smartcare Health Solutions in Africa and powered by BloodGPT's interpretation technology,
                the platform is designed to fit into real laboratory environments, whether results come from PDFs,
                scanned reports, paper records, or connected systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/?inquiry=labs#contact">
                  Talk to Smartcare <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/?inquiry=labs#contact">Request Access</Link>
              </Button>
            </div>
            <div className="mt-6">
              <Button asChild variant="link" className="text-muted-foreground">
                <Link to="/solutions/smartcare-labs">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Smartcare Labs Overview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — What Smartcare Labs Does */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              What Smartcare Labs Does
            </h2>
            <p className="text-lg text-muted-foreground">
              Smartcare Labs is designed to help laboratories move beyond static result delivery. Instead of
              handing over raw values with little context, the platform supports the generation of structured
              interpretation outputs that create real value across the lab's reporting workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platformDoes.map((item, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10">
            For enterprise labs, this creates an opportunity to improve the value of routine lab reporting while
            supporting retention, repeat testing, and better user engagement.
          </p>
        </div>
      </section>

      {/* Section 2 — How the Platform Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              How the Platform{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A connected workflow from ingestion to delivery — built to slot into the systems labs already run.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {workflow.map((step, idx) => (
                <div key={idx} className="relative">
                  <Card className="border-0 bg-white/80 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-heading font-bold text-3xl text-primary/20">
                          0{idx + 1}
                        </span>
                      </div>
                      <CardTitle className="font-heading text-lg text-foreground leading-snug">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                  {idx < workflow.length - 1 && (
                    <>
                      <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex lg:hidden justify-center my-2 md:hidden">
                        <ArrowDown className="h-5 w-5 text-primary" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Why This Matters for Enterprise Labs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Why This Matters for Enterprise Labs
            </h2>
            <p className="text-lg text-muted-foreground">
              For larger labs, the opportunity is not only better interpretation. It is also better service design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {enterpriseBenefits.map((b, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="pt-6 flex gap-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl h-fit shrink-0">
                    <b.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm">{b.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Deployment and Integration Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Deployment and Integration Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Smartcare Labs is intended to be flexible enough for different levels of enterprise readiness.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deployment.map((d, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <d.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-lg text-foreground">{d.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{d.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Data Flow, Privacy, and Control */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Data Flow, Privacy, and Control
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For enterprise buyers, one of the most important questions is how data moves and where control
                  sits. Smartcare Labs is designed to support a controlled workflow in which laboratory result
                  data is ingested from approved sources, interpretation is generated through a structured
                  pipeline, and outputs are returned through agreed delivery channels.
                </p>
                <p>
                  Depending on deployment needs, organizations can adopt models that align with their
                  infrastructure, governance, and privacy expectations.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {dataFlowBullets.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-border/50"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Smartcare-Led Deployment in Africa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-14 border border-border/50">
            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3">
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                  Smartcare-Led Deployment in Africa
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Smartcare Labs is not just a technology layer. It is part of a broader effort to deploy
                    practical digital health infrastructure in African healthcare settings.
                  </p>
                  <p>
                    Smartcare Health Solutions leads the local implementation approach in Africa, including the
                    full scope of go-to-market, onboarding, and ecosystem coordination.
                  </p>
                  <p className="text-foreground">
                    BloodGPT powers the interpretation technology, while{" "}
                    <span className="font-semibold">Smartcare leads the regional initiative, implementation
                    pathway, and market-facing deployment strategy in Africa.</span>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <p className="font-heading font-semibold text-foreground mb-4">Smartcare leads on:</p>
                <ul className="space-y-3">
                  {smartcareLed.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Who This Page Is For */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Who This Page Is For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {audience.map((a, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="pt-6 flex items-center gap-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl shrink-0">
                    <a.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-heading font-semibold text-foreground">{a.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-14 rounded-2xl text-white text-center max-w-5xl mx-auto">
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Looking at Smartcare Labs for your laboratory network or enterprise workflow?
            </h3>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
              We welcome conversations with laboratories, diagnostic groups, and healthcare organizations that
              want a clearer view of how Smartcare Labs can fit into existing reporting, interpretation, and
              digital delivery workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/?inquiry=labs#contact">
                  Talk to Smartcare <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Link to="/?inquiry=labs#contact">Request Access</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Link to="/?inquiry=labs#contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartcareLabsHowItWorks;
