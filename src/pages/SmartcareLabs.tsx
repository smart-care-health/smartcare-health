import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Hospital,
  Stethoscope,
  Building2,
  Microscope,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SmartcareLabs = () => {
  const audiences = [
    {
      icon: FlaskConical,
      title: "Laboratories",
      description:
        "For medical laboratories that want to improve the speed, structure, and consistency of result interpretation services.",
    },
    {
      icon: Hospital,
      title: "Hospitals and Clinics",
      description:
        "For provider organisations looking to support better review and communication of laboratory findings within patient care workflows.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Professionals",
      description:
        "For qualified professionals who need clearer, more accessible interpretation support as part of routine decision-making.",
    },
    {
      icon: Building2,
      title: "Institutional and Strategic Partners",
      description:
        "For health agencies, professional bodies, insurers, and ecosystem partners interested in expanding access to high-quality diagnostic support infrastructure.",
    },
  ];

  const supportedUsers = [
    "Medical laboratories seeking a more efficient interpretation workflow",
    "Hospitals and clinics that want faster, more structured result support",
    "Healthcare practitioners who need clearer interpretation outputs",
    "Institutional and ecosystem partners exploring scalable diagnostic support tools",
  ];

  const smarterFeatures = [
    "AI-powered interpretation support for laboratory results",
    "Structured, easy-to-read outputs",
    "A platform suitable for laboratories, healthcare providers, and institutional partners",
    "A more efficient workflow for reviewing and communicating diagnostic information",
  ];

  const benefits = [
    "Better communication around laboratory findings",
    "Improved operational efficiency",
    "Broader access to quality diagnostic support",
    "Stronger digital health capacity across care settings",
  ];

  const practicalFocus = [
    "How laboratories and healthcare professionals actually work",
    "How onboarding and support are managed in practice",
    "How trust is built through credible local partnerships",
    "How digital tools can fit into real healthcare workflows in Nigeria and other African markets",
  ];

  const partnerBenefits = [
    "Local coordination and market familiarity",
    "Structured onboarding and support",
    "A credible implementation approach",
    "A platform designed for growth across multiple healthcare use cases",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              🧪 Smartcare Labs
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
              Smartcare{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Labs
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-6 font-medium">
              AI-powered lab interpretation for laboratories and healthcare professionals
            </p>
            <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
              Smartcare Labs helps laboratories and healthcare professionals generate clear,
              structured, and accessible interpretations of laboratory results through an
              AI-powered platform designed for real-world healthcare environments.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Built for use in Nigeria and across Africa, Smartcare Labs supports better
              communication of results, improved workflow efficiency, and more consistent
              interpretation support for laboratories, clinicians, and health system partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/?inquiry=labs#contact">
                  Request Access <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              A smarter way to support{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                lab result interpretation
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Laboratory results are essential to clinical decision-making, but interpretation
              can be inconsistent, delayed, or difficult to communicate clearly across different
              care settings.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Smartcare Labs is designed to help address that gap by providing:
            </p>
            <ul className="space-y-3 mb-6">
              {smarterFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-4 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              Smartcare Labs is part of Smartcare's broader vision to strengthen healthcare
              delivery through practical, locally relevant digital health solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              What Smartcare Labs does
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Smartcare Labs enables participating users to submit laboratory result data
              through a secure digital platform and receive structured interpretation outputs
              that can support professional review, workflow efficiency, and clearer
              communication.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Depending on the user context, the platform can support:
            </p>
            <ul className="space-y-3 mb-6">
              {supportedUsers.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 mr-3 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              The goal is not simply digitisation, but better access to useful interpretation
              support within everyday healthcare practice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Who Smartcare Labs is for
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {audiences.map((aud, idx) => (
              <Card
                key={idx}
                className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mb-4">
                    <aud.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground">
                    {aud.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{aud.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Why this matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Across many healthcare settings, access to timely and well-structured lab
              interpretation remains uneven. This can affect workflow, turnaround time, and
              the clarity with which results are communicated to clinicians and patients.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Smartcare Labs is built around a simple idea: useful digital health tools should
              be practical, credible, and relevant to the realities of healthcare delivery in
              our environment.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              By making interpretation support more accessible and more structured, Smartcare
              Labs aims to contribute to:
            </p>
            <ul className="space-y-3">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-4 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Built for practical use in our context
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Smartcare Labs is introduced with a strong focus on local relevance, usability,
              and partner-driven implementation.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              That means paying attention not only to technology, but also to:
            </p>
            <ul className="space-y-3 mb-6">
              {practicalFocus.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-4 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground mb-10">
              Our approach is grounded in implementation, not theory.
            </p>

            {/* Mid-page CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-border/50">
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center w-full">
                <Button asChild variant="hero" size="lg">
                  <Link to="/?inquiry=labs#contact">
                    Request Access <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#contact">Partner With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Why partner with Smartcare
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Smartcare brings local market understanding, healthcare ecosystem engagement,
              and implementation support to the deployment of practical digital health
              solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              For Smartcare Labs, that means partners benefit from:
            </p>
            <ul className="space-y-3 mb-6">
              {partnerBenefits.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 mr-3 shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              Whether you are a laboratory, professional association, healthcare provider, or
              institutional stakeholder, we welcome conversations on how Smartcare Labs can
              support your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white text-center max-w-5xl mx-auto">
            <Microscope className="h-12 w-12 mx-auto mb-6 text-white/90" />
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Building practical, scalable health technology
            </h3>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
              Smartcare Labs is part of our commitment to building practical, scalable health
              technology solutions that improve access, quality, and coordination across
              African healthcare systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/?inquiry=labs#contact">
                  Request Access <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link to="/#contact">Partner With Us</Link>
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
