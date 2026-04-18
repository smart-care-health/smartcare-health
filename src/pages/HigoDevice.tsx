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
  Smartphone,
  Monitor,
  Activity,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Users,
} from "lucide-react";
import higoDevice from "@/assets/higo-device.png";

const HigoDevice = () => {
  const components = [
    {
      icon: Stethoscope,
      title: "Diagnostic Device",
      description: "Captures clinical data at the point of care.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Guides examination and structured data capture.",
    },
    {
      icon: Monitor,
      title: "Physician Platform",
      description: "Enables remote review by licensed physicians.",
    },
  ];

  const captureTypes = [
    "Heart and lung sounds",
    "Throat and ear images",
    "Basic examination data",
  ];

  const workflow = [
    {
      step: "1",
      title: "Capture",
      description:
        "A healthcare worker captures patient data using the device and app.",
    },
    {
      step: "2",
      title: "Transmit",
      description: "The data is securely transmitted to the physician platform.",
    },
    {
      step: "3",
      title: "Review",
      description: "A licensed physician reviews the case remotely.",
    },
    {
      step: "4",
      title: "Guide",
      description: "Clinical guidance is provided back to the point of care.",
    },
  ];

  const benefits = [
    "Improved access to doctor input",
    "Better-informed clinical decisions",
    "More efficient use of healthcare resources",
    "Enhanced care at the primary healthcare level",
  ];

  const smartcareRole = [
    "Local deployment and implementation",
    "Integration into healthcare workflows",
    "Training and onboarding of healthcare workers",
    "Coordination with healthcare institutions and public sector partners",
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
                <BreadcrumbLink asChild>
                  <Link to="/#solutions">Remote Diagnostic Devices</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Higo Device and App</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image first on mobile, right on desktop */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-muted/40 to-muted/70 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
                <img
                  src={higoDevice}
                  alt="Higo diagnostic device with modular attachments"
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Higo Diagnostic Device and Modular Attachments
              </p>
            </div>

            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                🩺 Remote Diagnostic Devices
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
                Higo{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Device and App
                </span>
              </h1>
              <p className="text-xl text-foreground/80 mb-6 font-medium">
                Remote diagnostic technology designed to support better clinical
                decision-making at the point of care
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The Higo system combines a smart diagnostic device, a mobile
                application, and a physician review platform to enable healthcare
                providers capture and share clinical data for remote medical review.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Smartcare Health Solutions is the Higo partner for Nigeria and West
                Africa, supporting local deployment, implementation, and integration
                into healthcare workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/higo-pilot">
                    Learn About the Pilot <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is the Higo System */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              A connected diagnostic system for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                modern healthcare delivery
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The Higo system is designed to support healthcare providers in
              capturing high-quality clinical data and enabling remote physician
              review. It consists of three core components working together to
              support a more connected and efficient approach to patient assessment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {components.map((c, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <c.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl">{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Higo Device */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                The Higo Device
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Higo device is a handheld, multi-functional diagnostic tool that
                enables trained operators to capture a range of clinical data at the
                point of care.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Depending on the use case, this may include:
              </p>
              <ul className="space-y-3 mb-6">
                {captureTypes.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-4 shrink-0" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground">
                The device is designed for use in primary care settings and supports
                consistent, structured data capture.
              </p>
            </div>
            <div className="bg-gradient-to-br from-muted/40 to-muted/70 rounded-2xl p-6 lg:p-8 shadow-lg">
              <img
                src={higoDevice}
                alt="Higo diagnostic device close-up"
                className="w-full h-auto max-h-72 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Higo System in Practice */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              The Higo System in Practice
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Higo system supports a structured workflow that enables healthcare
              providers to access medical expertise even where doctors are not
              physically present.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflow.map((w, idx) => (
              <div
                key={idx}
                className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-r from-primary to-accent text-white font-heading font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  {w.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {w.title}
                </h3>
                <p className="text-muted-foreground text-sm">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why This Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Expanding access to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                clinical expertise
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In many healthcare settings, access to timely medical review is
              limited. This can affect the quality and speed of care delivery.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The Higo system enables:
            </p>
            <ul className="space-y-3">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 mr-3 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Smartcare's Role */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Smartcare's Role
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Local implementation and integration
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Smartcare Health Solutions is the Higo partner for Nigeria and West
              Africa.
            </p>
            <p className="text-lg text-muted-foreground mb-4">Our role includes:</p>
            <ul className="space-y-3 mb-6">
              {smartcareRole.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 mr-3 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              Our focus is on ensuring that the technology is used effectively
              within the realities of healthcare delivery in our environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Current Deployment (Pilot Link) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 lg:p-12 shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-2">
                  Introducing Higo through the Smartcare Pilot
                </h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Smartcare is currently introducing the Higo system through a structured
              pilot programme in Lagos State and Akwa Ibom State.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              The pilot focuses on real-world implementation across primary
              healthcare and community-based settings.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/higo-pilot">
                Learn More About the Higo Pilot{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white text-center max-w-5xl mx-auto">
            <Activity className="h-12 w-12 mx-auto mb-6 text-white/90" />
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Part of a broader diagnostic ecosystem
            </h3>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
              The Higo Device and App is part of Smartcare's broader Remote
              Diagnostic Devices portfolio, focused on expanding access to practical,
              scalable diagnostic technologies across healthcare systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/higo-pilot">
                  Learn About the Pilot <ArrowRight className="ml-2 h-4 w-4" />
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

export default HigoDevice;
