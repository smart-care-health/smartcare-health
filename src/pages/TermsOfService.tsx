import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold text-primary">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: July 2025</p>
          </div>
          
          <Separator />
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Smartcare Health Solutions' website and services, you accept and agree 
                to be bound by the terms and provision of this agreement. These Terms of Service apply to all 
                visitors, users, and others who access or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare Health Solutions provides digital health technology solutions including remote 
                diagnostic devices, EHR/EMR platforms, healthcare network integration, and data analytics 
                services designed to improve healthcare access across Africa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use our services only for lawful purposes</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Healthcare Disclaimers</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                <p className="text-amber-800 font-medium">Important Healthcare Notice:</p>
                <ul className="list-disc pl-6 space-y-2 text-amber-700">
                  <li>Our services are designed to support healthcare delivery but do not replace professional medical advice</li>
                  <li>Always consult qualified healthcare professionals for medical decisions</li>
                  <li>Our diagnostic tools provide information to assist healthcare providers, not direct patient diagnosis</li>
                  <li>Emergency medical situations require immediate professional medical attention</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality on our website and services are owned by 
                Smartcare Health Solutions and are protected by international copyright, trademark, 
                and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by applicable law, Smartcare Health Solutions shall not 
                be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain service availability but do not guarantee uninterrupted access. 
                Services may be temporarily unavailable due to maintenance, updates, or circumstances 
                beyond our control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant 
                changes via email or website notice. Continued use of our services after changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground font-medium">Email: info@smartcare.africa</p>
                <p className="text-foreground font-medium">Address: Lagos, Nigeria</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;