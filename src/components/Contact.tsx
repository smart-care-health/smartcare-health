import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Calendar, Send, MessageSquare, Building2, Users, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const renderWidget = useCallback(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: "0x4AAAAAACnuw5pi2ptqYO_p",
        theme: "light",
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
      });
    }
  }, []);

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Check if the Turnstile script is already being loaded by another component
    const existingScript = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile"]'
    );

    if (existingScript) {
      // Script exists but turnstile not ready yet — poll until available
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 100);
      return () => {
        clearInterval(interval);
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => renderWidget();
    document.head.appendChild(script);
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      toast({
        title: "Please complete the verification",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await fetch("https://smartcare-site-api.royal-union-6758.workers.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          organization: data.organization || "",
          inquiryType: data.inquiryType,
          message: data.message,
          website: website || "",
          turnstileToken,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      toast({
        title: "Thank you — your message has been received. We will respond shortly.",
      });

      reset();
      setWebsite("");
      setTurnstileToken(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch (error: any) {
      toast({
        title: "Message submission failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
  const offices = [{
    city: "Lagos, Nigeria",
    address: "Plot 1234, Tiamiyu Savage Street, Victoria Island",
    role: "Headquarters & R&D Center",
    status: "Primary"
  }, {
    city: "Abuja, Nigeria",
    address: "Central Business District, Federal Capital Territory",
    role: "Government Relations Office",
    status: "Regional"
  }, {
    city: "Accra, Ghana",
    address: "East Legon, Greater Accra Region",
    role: "West Africa Operations",
    status: "Regional"
  }];
  return <section id="contact" className="py-20 bg-muted/30">
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
          {/* Contact Form */}
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
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-500">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input 
                        id="organization" 
                        placeholder="Your Organization"
                        {...register("organization")}
                      />
                      {errors.organization && (
                        <p className="text-sm text-red-500">{errors.organization.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select onValueChange={(value) => setValue("inquiryType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare-facility">Healthcare Facility or Provider Interest</SelectItem>
                        <SelectItem value="government">Government or Public Sector Partnership</SelectItem>
                        <SelectItem value="technology">Technology or Implementation Partnership</SelectItem>
                        <SelectItem value="research">Research or Academic Collaboration</SelectItem>
                        <SelectItem value="investment">Investment or Strategic Interest</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.inquiryType && (
                      <p className="text-sm text-red-500">{errors.inquiryType.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, partnership interest, or how we can help..." 
                      rows={5}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Honeypot field */}
                  <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Turnstile widget */}
                  <div ref={turnstileRef} className="flex justify-center" />

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
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
                {contactMethods.map((method, index) => <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <method.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">{method.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-sm text-foreground">{method.contact}</p>
                    </div>
                  </div>)}
              </CardContent>
            </Card>

            {/* Inquiry Types */}
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardHeader>
                
              </CardHeader>
              <CardContent className="space-y-4">
                {inquiryTypes.map((type, index) => <div key={index} className="flex items-start space-x-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <type.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{type.title}</h4>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  </div>)}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        

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
    </section>;
};
export default Contact;
