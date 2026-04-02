import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PilotNav from "@/components/pilot/PilotNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const PilotPrivacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PilotNav />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Notice
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Pilot{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Notice
            </span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl prose-style space-y-12">
          {/* Intro */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            All personal and health information collected as part of this pilot will be processed in accordance
            with Smartcare's Privacy Policy and applicable Nigerian data protection laws, including the Nigeria
            Data Protection Act (NDPA) 2023 and the General Application and Implementation Directive (GAID).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This page provides additional information specific to the Smartcare Higo Pilot.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">What Information We Collect</h2>
              <ul className="space-y-2">
                {[
                  "Basic patient information",
                  "Medical history",
                  "Diagnostic data collected using the Higo device",
                  "Clinical observations recorded during consultation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">How Your Information Is Used</h2>
              <ul className="space-y-2">
                {[
                  "To support clinical review by licensed physicians",
                  "To improve healthcare delivery at participating facilities",
                  "To evaluate and improve the pilot programme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Who Has Access to Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data may be accessed by Smartcare Health Solutions, Higo as technology platform provider,
                licensed physicians reviewing cases, and authorized healthcare personnel involved in your care.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information is stored securely using protected systems and is only accessible to authorized
                personnel.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access, correction, or raise concerns about how your data is used, in line with
                applicable law and our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Voluntary Participation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Participation in the pilot is voluntary. You will receive care whether or not you choose to
                participate.
              </p>
            </div>
          </div>

          {/* Learn More */}
          <div className="pt-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Learn More</h2>
            <p className="text-muted-foreground mb-4">
              For full details on how we handle your data, please review our main Privacy Policy.
            </p>
            <Button variant="hero" asChild>
              <Link to="/privacy-policy">View Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PilotPrivacy;
