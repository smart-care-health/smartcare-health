import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Send,
  MessageSquare,
  Building2,
  Users
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "partnerships@smartcare.health",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+234 (0) 803 123 4567",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "Victoria Island, Lagos, Nigeria",
      action: "Get Directions"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      contact: "Available weekdays 9AM-5PM WAT",
      action: "Book Meeting"
    }
  ];

  const inquiryTypes = [
    {
      icon: Building2,
      title: "Government Partnerships",
      description: "Ministry of Health collaborations and policy integration"
    },
    {
      icon: Users,
      title: "Healthcare Provider Integration",
      description: "Hospital and clinic technology implementations"
    },
    {
      icon: MessageSquare,
      title: "Investor Relations",
      description: "Funding opportunities and growth partnerships"
    }
  ];

  const offices = [
    {
      city: "Lagos, Nigeria",
      address: "Plot 1234, Tiamiyu Savage Street, Victoria Island",
      role: "Headquarters & R&D Center",
      status: "Primary"
    },
    {
      city: "Abuja, Nigeria",
      address: "Central Business District, Federal Capital Territory",
      role: "Government Relations Office",
      status: "Regional"
    },
    {
      city: "Accra, Ghana",
      address: "East Legon, Greater Accra Region",
      role: "West Africa Operations",
      status: "Regional"
    }
  ];

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
            Interested in partnering, piloting, or supporting our work? Use our form below and we'll get back to you within 48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  📧 Email: partnerships@smartcare.health<br/>
                  📍 Based in Lagos, Nigeria
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your Organization" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <select 
                    id="inquiryType" 
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="implementation">Technology Implementation</option>
                    <option value="investment">Investment & Funding</option>
                    <option value="research">Research Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, partnership interest, or how we can help..."
                    rows={5}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
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

            {/* Inquiry Types */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">
                  What We Can Help With
                </CardTitle>
              </CardHeader>
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

        {/* Office Locations */}
        <div className="mt-16">
          <h3 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
            Our Locations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/50">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    office.status === "Primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    {office.status}
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {office.city}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {office.address}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {office.role}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Download Partnership Brief
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;