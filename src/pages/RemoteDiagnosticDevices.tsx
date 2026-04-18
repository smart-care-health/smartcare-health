import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Activity,
  Network,
  Users,
  Scan,
  FlaskConical,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const RemoteDiagnosticDevices = () => {
  const capabilities = [
    "Support data capture at the point of care",
    "Enable remote clinical review",
    "Improve workflow efficiency",
    "Enhance access to medical expertise",
  ];

  const focusAreas = [
    { icon: Activity, label: "Point-of-care capture" },
    { icon: Stethoscope, label: "Clinical diagnostics" },
    { icon: Network, label: "Connected platforms" },
    { icon: Users, label: "Specialist access" },
  ];

  const futureCategories = [
    {
      icon: Scan,
      title: "Imaging",
      description:
        "Portable and connected imaging tools designed for primary and community healthcare settings.",
    },
    {
      icon: FlaskConical,
      title: "Laboratory Diagnostics",
      description:
        "Decentralised laboratory technologies to support faster, more accessible testing.",
    },
    {
      icon: Activity,
      title: "Point-of-Care Tools",
      description:
        "Additional connected devices that extend diagnostic capability where care is delivered.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4">
        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#solutions">Solutions</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Remote Diagnostic Devices</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              🩺 Remote Diagnostic Devices
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Remote{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Diagnostic Devices
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-6 font-medium">
              Expanding access to clinical diagnostics through connected medical
              technologies
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Smartcare deploys and integrates remote diagnostic technologies that
              enable healthcare providers capture and share clinical data for
              improved medical decision-making.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              These solutions are designed to support healthcare delivery in
              real-world settings, particularly where access to specialist care is
              limited.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/solutions/higo-device">
                Explore Higo Device and App{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Practical diagnostic solutions for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  real healthcare environments
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our approach focuses on identifying and deploying diagnostic
                technologies that can be effectively integrated into healthcare
                systems across Nigeria and other African markets.
              </p>
            </div>

            <Card className="border-0 bg-white/50 backdrop-blur-sm mb-10">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  We work with leading global partners to introduce solutions that:
                </p>
                <ul className="space-y-3">
                  {capabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm"
                >
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mx-auto mb-3">
                    <area.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {area.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Current Deployment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-health-success/10 text-health-success px-4 py-2 rounded-full text-sm font-medium mb-4">
                Now Available
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Current deployment:{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Higo Device and App
                </span>
              </h2>
            </div>

            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-heading text-2xl text-foreground">
                  Higo Device and App
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Smartcare's first deployment in this category is the{" "}
                  <strong className="text-foreground">Higo Device and App</strong>,
                  a connected diagnostic system that enables healthcare providers
                  capture clinical data and access remote physician review.
                </p>
                <p className="text-lg text-muted-foreground">
                  This deployment is currently being introduced through structured
                  implementation programmes across selected locations.
                </p>
                <Button asChild variant="hero" size="lg">
                  <Link to="/solutions/higo-device">
                    Explore Higo Device and App{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Looking Ahead */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Building a broader{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  diagnostic ecosystem
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Smartcare is focused on expanding this category to include
                additional diagnostic technologies across multiple areas of
                healthcare, including imaging, laboratory diagnostics, and other
                point-of-care tools.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our goal is to build a connected ecosystem of practical solutions
                that improve access, quality, and efficiency in healthcare
                delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {futureCategories.map((cat, idx) => (
                <Card
                  key={idx}
                  className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-muted p-3 rounded-xl">
                        <cat.icon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full font-medium bg-primary/10 text-primary">
                        Coming Soon
                      </span>
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {cat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white text-center max-w-5xl mx-auto">
            <Activity className="h-12 w-12 mx-auto mb-6 text-white/90" />
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Connected diagnostics, deployed locally
            </h3>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
              Discover how Smartcare is bringing practical diagnostic
              technologies to healthcare providers across Nigeria and West
              Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/solutions/higo-device">
                  Explore Higo Device and App{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RemoteDiagnosticDevices;
