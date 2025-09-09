import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Database, Eye } from "lucide-react";

const DataProtection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold text-primary">Data Protection</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>
          
          <Separator />
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Our Commitment to Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare Health Solutions is committed to maintaining the highest standards of data protection 
                and security. We understand the critical importance of safeguarding health information and 
                personal data in our healthcare technology solutions.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Healthcare Data Security Standards</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg">HIPAA-Equivalent Standards</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We implement data protection standards equivalent to HIPAA requirements, 
                    ensuring healthcare information is protected with industry-leading practices.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg">End-to-End Encryption</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    All data transmission and storage uses advanced encryption protocols 
                    to ensure information remains secure and confidential.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Database className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg">Secure Data Storage</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Data is stored in secure, compliant cloud infrastructure with 
                    regular backups and disaster recovery procedures.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-lg">Access Controls</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Strict role-based access controls ensure only authorized personnel 
                    can access sensitive health information.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Patient Data Handling</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Data Minimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect only the minimum amount of data necessary to provide our healthcare services 
                  effectively. Unnecessary data collection is avoided to reduce privacy risks.
                </p>

                <h3 className="font-semibold text-lg">Purpose Limitation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Health data is used solely for the purposes of providing healthcare services, 
                  improving patient outcomes, and supporting healthcare providers. Data is not 
                  used for marketing or other unrelated purposes without explicit consent.
                </p>

                <h3 className="font-semibold text-lg">Data Retention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We retain health data only as long as necessary for treatment continuity, 
                  legal compliance, or as required by healthcare regulations. Secure deletion 
                  procedures are followed when data is no longer needed.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Compliance & Regulations</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Compliance with local African data protection laws and regulations</li>
                <li>Adherence to international healthcare data standards</li>
                <li>Regular security audits and compliance assessments</li>
                <li>Staff training on data protection and privacy requirements</li>
                <li>Incident response procedures for any potential data breaches</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Third-Party Data Sharing</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                <p className="text-amber-800 font-medium">Data Sharing Policy:</p>
                <ul className="list-disc pl-6 space-y-2 text-amber-700">
                  <li>Patient data is never sold or shared for commercial purposes</li>
                  <li>Data sharing occurs only with explicit consent or legal requirement</li>
                  <li>All third-party partners must meet our data protection standards</li>
                  <li>Data processing agreements are in place with all service providers</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Patient Rights</h2>
              <p className="text-muted-foreground leading-relaxed">As a patient or healthcare user, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal health information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Object to certain data processing activities</li>
                <li>Receive a copy of your data in a portable format</li>
                <li>Lodge complaints with relevant data protection authorities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Data Protection Officer</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any data protection concerns or to exercise your rights, please contact our 
                Data Protection Officer:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground font-medium">Email: dpo@smartcare.africa</p>
                <p className="text-foreground font-medium">Phone: +234 (0) 810 925 2120</p>
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

export default DataProtection;