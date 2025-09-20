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
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Submitting contact form:', data);
      
      const { data: response, error } = await supabase.functions.invoke('submit-contact-form', {
        body: data
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (response?.error) {
        throw new Error(response.error);
      }

      console.log('Contact form submission successful:', response);
      
      toast({
        title: "Message sent successfully! ✉️",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });

      // Reset form
      reset();
      
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
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
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="implementation">Technology Implementation</SelectItem>
                        <SelectItem value="investment">Investment & Funding</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
    </section>;
};
export default Contact;