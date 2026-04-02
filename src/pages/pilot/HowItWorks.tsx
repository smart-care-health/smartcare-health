import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PilotNav from "@/components/pilot/PilotNav";
import { MapPin, Stethoscope, Shield, UserCheck, FileText } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MapPin,
    title: "Visit a Participating Location",
    description: "Patients visit a participating PHC, pharmacy, or healthcare facility.",
  },
  {
    number: 2,
    icon: Stethoscope,
    title: "Examination by Trained Operator",
    description:
      "A trained healthcare worker uses the Higo device to capture medical data, including heart sounds, lung sounds, throat and ear images, vital signs, and relevant symptoms.",
  },
  {
    number: 3,
    icon: Shield,
    title: "Secure Data Transmission",
    description: "The information is securely transmitted to a licensed physician via the Higo platform.",
  },
  {
    number: 4,
    icon: UserCheck,
    title: "Doctor Review",
    description: "A qualified doctor reviews the case remotely using clinical-grade data.",
  },
  {
    number: 5,
    icon: FileText,
    title: "Diagnosis & Recommendation",
    description:
      "The doctor provides diagnosis or clinical guidance, including treatment recommendations or next steps.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PilotNav />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔬 How It Works
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            How the Smartcare Higo Pilot{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold text-xl text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Why This Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            In many primary care settings, access to doctors is limited. This pilot enables better decision-making
            at the point of care, more efficient use of available doctors, and improved patient outcomes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
