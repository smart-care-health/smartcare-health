import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PilotNav from "@/components/pilot/PilotNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Users, Stethoscope, Clock, TrendingUp, Building2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const PilotLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PilotNav />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏥 Smartcare Higo Pilot
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Improving Access to Quality{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Healthcare in Nigeria
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            The Smartcare Higo Pilot is a healthcare initiative designed to support primary care facilities
            with remote diagnostic capabilities—connecting patients to qualified doctors using smart medical devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/higo-pilot/how-it-works">
                How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/higo-pilot/participants">For Participants</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/higo-pilot/updates">Pilot Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About the Pilot */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">About the Pilot</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              The Smartcare Higo Pilot is being implemented in partnership with state health authorities in Lagos
              and Akwa Ibom to improve access to timely and accurate medical care.
            </p>
            <p>
              Using the Higo smart diagnostic device, trained healthcare workers can capture clinical data such as
              heart sounds, lung sounds, throat images, and other vital information. This data is securely shared
              with licensed physicians, who review and provide medical guidance remotely.
            </p>
            <p>
              The goal is simple: ensure more patients are reviewed by a doctor—faster, and with better information.
            </p>
          </div>
        </div>
      </section>

      {/* Where */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">Where the Pilot Is Taking Place</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {["Lagos State", "Akwa Ibom State"].map((state) => (
              <Card key={state} className="border-0 shadow-md bg-white/70 backdrop-blur-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-heading font-semibold text-lg text-foreground">{state}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground bg-accent/10 p-4 rounded-lg">
            The pilot is currently restricted to selected locations in Lagos and Akwa Ibom.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">Who This Is For</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Users, text: "Adults and children above 3 years" },
              { icon: Heart, text: "Patients with non-emergency conditions" },
              { icon: Stethoscope, text: "Individuals seeking medical consultation" },
              { icon: Building2, text: "Healthcare providers and institutions interested in digital diagnostics" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Clock, title: "Faster access to doctors", desc: "Reduce wait times by enabling remote physician review." },
              { icon: Stethoscope, title: "Improved diagnostic support", desc: "Better clinical data at the primary care level." },
              { icon: TrendingUp, title: "Reduced unnecessary referrals", desc: "More conditions managed at the point of care." },
              { icon: Heart, title: "Better quality of care", desc: "Technology-enhanced decision-making for providers." },
            ].map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-md bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg shrink-0">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Note */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-muted-foreground text-lg">
            This pilot is being implemented by{" "}
            <span className="font-semibold text-foreground">Smartcare Health Solutions</span> in collaboration
            with <span className="font-semibold text-foreground">Higo</span> and relevant state health authorities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-center">
            <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
              Interested in Learning More?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Whether you're a healthcare provider, government agency, or potential partner, we'd love to hear from you.
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

export default PilotLanding;
