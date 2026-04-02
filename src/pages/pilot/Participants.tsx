import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PilotNav from "@/components/pilot/PilotNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const Participants = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PilotNav />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            👤 For Participants
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Information for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Patients</span>
          </h1>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-6">What to Expect</h2>
          <p className="text-muted-foreground text-lg mb-6">If you visit a participating facility:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "You will be attended to by a trained healthcare worker",
              "Your medical information may be captured using the Higo device",
              "A doctor may review your case remotely",
              "You will receive medical guidance based on the review",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voluntary */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Is Participation Mandatory?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No. Participation in the pilot is completely voluntary. If you choose not to participate, you will
            still receive care.
          </p>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Who Can Participate</h2>
          <div className="space-y-3">
            {[
              { icon: Users, text: "Adults and children above 3 years" },
              { icon: Stethoscope, text: "Patients with mild to moderate symptoms" },
              { icon: CheckCircle, text: "Individuals presenting at participating locations in Lagos or Akwa Ibom" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Conditions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Types of Conditions Covered</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The pilot focuses on common, non-emergency conditions such as respiratory symptoms,
            ear/nose/throat complaints, and general medical concerns.
          </p>
        </div>
      </section>

      {/* Privacy Note + CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Your Privacy</h3>
                <p className="text-muted-foreground">
                  Your personal and medical information will be handled securely and responsibly.
                </p>
              </div>
              <Button variant="hero" asChild>
                <Link to="/higo-pilot/privacy">Read Privacy Notice</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Participants;
