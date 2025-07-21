import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Globe2 } from "lucide-react";

const Mission = () => {
  const beliefs = [
    {
      icon: Heart,
      title: "Access to quality care is a right, not a privilege",
      description: "We believe healthcare should be accessible to every community, regardless of location or economic status."
    },
    {
      icon: Target,
      title: "Technology must serve people, not the other way around",
      description: "Our solutions are designed with users at the center, prioritizing simplicity and effectiveness."
    },
    {
      icon: Users,
      title: "Local innovation creates lasting solutions",
      description: "By building with local insight and cultural understanding, we create sustainable impact."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎯 Our Mission
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Solving Africa's Healthcare 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Delivery Challenges</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission Statement */}
          <div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are a health technology company focused on solving Africa's most pressing healthcare delivery challenges. Our goal is to design tools that enable universal access to quality primary healthcare — powered by local insight, digital innovation, and strong partnerships.
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <Globe2 className="h-6 w-6 text-primary" />
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground">
                A connected healthcare ecosystem where every African has access to quality primary care, supported by digital tools that enhance rather than complicate the delivery of healthcare.
              </p>
            </div>
          </div>

          {/* Mission Image Placeholder */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <div className="bg-white/50 p-8 rounded-xl">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                Healthcare for All
              </h4>
              <p className="text-sm text-muted-foreground">
                Bridging the gap between communities and quality healthcare through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* What We Believe */}
        <div>
          <h3 className="font-heading font-bold text-3xl text-foreground text-center mb-12">
            What We Believe
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl w-fit mx-auto mb-4">
                    <belief.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {belief.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;