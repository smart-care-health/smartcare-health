import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PilotNav from "@/components/pilot/PilotNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Stethoscope, TrendingUp, ArrowRight } from "lucide-react";

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PilotNav />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤝 For Providers & Partners
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            For Healthcare Providers{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">& Partners</span>
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Overview</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            The Smartcare Higo Pilot is designed to demonstrate how technology can strengthen healthcare delivery
            at scale.
          </p>
          <p className="text-muted-foreground text-lg mb-4">We are open to engaging with:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Healthcare providers",
              "Pharmacy networks",
              "Hospitals",
              "Public health agencies",
              "Implementation partners",
              "Strategic partners",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Pilot Demonstrates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">What This Pilot Demonstrates</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Scalable remote diagnostics" },
              { icon: Users, title: "Improved doctor-to-patient coverage" },
              { icon: Stethoscope, title: "Integration into existing healthcare workflows" },
              { icon: Building2, title: "Better access to care at the point of service" },
            ].map((item) => (
              <Card key={item.title} className="border-0 shadow-md bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Opportunities for Collaboration</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Organizations outside the pilot locations are welcome to contact us if they are interested in:
          </p>
          <div className="space-y-3 mb-10">
            {[
              "Exploring pilot deployments within their institutions",
              "Evaluating the technology in their care environment",
              "Discussing implementation or partnership opportunities",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-center">
            <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
              Let's Explore a Partnership
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Reach out to discuss how the Smartcare Higo Pilot can work for your organisation.
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
            >
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
