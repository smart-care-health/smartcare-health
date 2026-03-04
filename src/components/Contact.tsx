import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, MessageSquare, Building2, Users } from "lucide-react";

const Contact = () => {
  const contactMethods = [{
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "partnerships@smartcare.africa",
    action: "Send Email"
  }, {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+234 (0) 810 925 2120",
    action: "Call Now"
  }, {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "Lekki, Lagos, Nigeria",
    action: "Get Directions"
  }, {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation",
    contact: "Available weekdays 9AM-5PM WAT",
    action: "Book Meeting"
  }];

  const inquiryTypes = [{
    icon: Building2,
    title: "Government Partnerships",
    description: "Ministry of Health collaborations and policy integration"
  }, {
    icon: Users,
    title: "Healthcare Provider Integration",
    description: "Hospital and clinic technology implementations"
  }, {
    icon: MessageSquare,
    title: "Investor Relations",
    description: "Funding opportunities and growth partnerships"
  }];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            📞 Get In Touch
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Transform 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Healthcare Together?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team to explore partnership opportunities, discuss implementation strategies, 
            or learn more about our digital health solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Brevo embed placeholder */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {/* Brevo embed code will go here */}
                <p className="text-muted-foreground text-center py-8">Contact form coming soon.</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <method.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">{method.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-sm text-foreground">{method.contact}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader />
              <CardContent className="space-y-4">
                {inquiryTypes.map((type, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <type.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{type.title}</h4>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 lg:p-12 rounded-2xl text-white">
            <h3 className="font-heading font-bold text-3xl mb-4">
              Let's Build the Future of Healthcare Together
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're a government agency, healthcare provider, or investor, we're ready to explore 
              how our digital health solutions can transform healthcare in your region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
