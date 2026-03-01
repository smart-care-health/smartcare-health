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
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </div>
          
          <Separator />
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Smartcare Health Solutions ("Smartcare," "we," "our," or "us"). These Terms of 
                Service ("Terms") govern your access to and use of our website, digital health platforms, 
                remote diagnostic devices, Electronic Health and Medical Record (EHR/EMR) systems, and all 
                related services (collectively, the "Services").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms, together with our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and{" "}
                <a href="/data-protection" className="text-primary hover:underline">Data Protection Policy</a>, 
                which are incorporated herein by reference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the Federal Republic of Nigeria, including the 
                Constitution of the Federal Republic of Nigeria (CFRN) 1999 (as amended), the Nigeria Data 
                Protection Act (NDP Act) 2023, and other applicable legislation and regulations.
              </p>
            </section>

            {/* 2. Description of Services */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare Health Solutions provides digital health technology solutions designed to improve 
                healthcare access across Africa, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Remote diagnostic devices and telehealth solutions</li>
                <li>Electronic Health Record (EHR) and Electronic Medical Record (EMR) platforms</li>
                <li>Healthcare network integration connecting primary, secondary, and tertiary providers</li>
                <li>Data analytics services for healthcare improvement</li>
                <li>Push notifications and communications regarding service updates</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of the Services at any time, 
                with or without notice, subject to applicable law.
              </p>
            </section>

            {/* 3. Eligibility and Account Registration */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">3. Eligibility and Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are at least 18 years of age or have the consent of a parent or legal guardian;</li>
                <li>You have the legal capacity to enter into a binding agreement;</li>
                <li>All information you provide during registration or use of the Services is accurate, current, and complete;</li>
                <li>You will maintain the security and confidentiality of your account credentials; and</li>
                <li>You will promptly notify us of any unauthorised use of your account.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these Terms or are used 
                for fraudulent or unlawful purposes.
              </p>
            </section>

            {/* 4. User Responsibilities */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use our Services only for lawful purposes and in accordance with these Terms;</li>
                <li>Provide accurate, complete, and up-to-date information when interacting with our platforms;</li>
                <li>Comply with all applicable laws and regulations, including the NDP Act 2023;</li>
                <li>Not attempt to gain unauthorised access to any part of the Services, other accounts, or computer systems;</li>
                <li>Not use the Services to transmit any harmful, offensive, or unlawful content;</li>
                <li>Not interfere with or disrupt the integrity or performance of the Services; and</li>
                <li>Cooperate with reasonable requests from Smartcare in relation to security investigations.</li>
              </ul>
            </section>

            {/* 5. Healthcare Disclaimers */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">5. Healthcare Disclaimers</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
                <p className="text-amber-800 font-medium">Important Healthcare Notice:</p>
                <ul className="list-disc pl-6 space-y-2 text-amber-700">
                  <li>Our Services are designed to support and enhance healthcare delivery but do not replace professional medical advice, diagnosis, or treatment;</li>
                  <li>Always consult qualified healthcare professionals for medical decisions;</li>
                  <li>Our diagnostic tools provide information to assist healthcare providers and are not intended for direct patient self-diagnosis;</li>
                  <li>Emergency medical situations require immediate professional medical attention — do not rely on our Services in place of emergency services;</li>
                  <li>Medical data collected through our devices is processed in accordance with our Privacy Policy and applicable data protection legislation.</li>
                </ul>
              </div>
            </section>

            {/* 6. Intellectual Property */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, functionality, software, designs, trademarks, logos, and other materials 
                available through our Services (collectively, "Smartcare Content") are owned by or licensed to 
                Smartcare Health Solutions and are protected by Nigerian and international copyright, trademark, 
                patent, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or 
                otherwise exploit any Smartcare Content without our prior written consent. Any unauthorised use 
                may result in termination of your access and legal action.
              </p>
            </section>

            {/* 7. Data Protection and Privacy */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">7. Data Protection and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Services is also governed by our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which 
                details how we collect, use, store, and protect your personal data in compliance with the 
                NDP Act 2023 and its General Application and Implementation Directive (GAID) 2025.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our Services, you consent to the collection and processing of your data as described 
                in our Privacy Policy. You retain all rights afforded to you as a data subject under Part IV 
                of the NDP Act, including the right to access, rectify, port, and request deletion of your 
                personal data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For data protection enquiries, please contact our Data Protection Officer at{" "}
                <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                  compliance@smartcare.africa
                </a>.
              </p>
            </section>

            {/* 8. Third-Party Services */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Services may contain links to or integrations with third-party websites, applications, or 
                services that are not owned or controlled by Smartcare. These include but are not limited to 
                cloud infrastructure providers, telecommunications partners, and medical device manufacturers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are not responsible for the content, privacy practices, or terms of service of any 
                third-party services. Your use of third-party services is at your own risk, and we encourage 
                you to review their terms and privacy policies independently.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by applicable Nigerian law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Smartcare Health Solutions shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, data, 
                  use, goodwill, or other intangible losses;</li>
                <li>Our total liability for any claim arising out of or relating to these Terms or the Services 
                  shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim;</li>
                <li>We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components; and</li>
                <li>We shall not be liable for any loss or damage arising from your failure to maintain the 
                  security of your account credentials.</li>
              </ul>
            </section>

            {/* 10. Indemnification */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Smartcare Health Solutions, its officers, 
                directors, employees, agents, and partners from and against any claims, liabilities, damages, 
                losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your access to or use of the Services;</li>
                <li>Your violation of these Terms;</li>
                <li>Your violation of any third-party right, including any intellectual property or privacy right; or</li>
                <li>Any claim that your use of the Services caused damage to a third party.</li>
              </ul>
            </section>

            {/* 11. Service Availability */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">11. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to maintain continuous availability of our Services but do not guarantee uninterrupted 
                access. Services may be temporarily unavailable due to scheduled maintenance, system updates, 
                network issues, or circumstances beyond our reasonable control (force majeure).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We shall not be liable for any loss or inconvenience caused by temporary service interruptions, 
                provided we take reasonable steps to restore Services promptly.
              </p>
            </section>

            {/* 12. Termination */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">12. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to the Services immediately, without prior notice or 
                liability, for any reason, including if you breach these Terms. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your right to use the Services will immediately cease;</li>
                <li>We may delete or retain your data in accordance with our Privacy Policy and applicable law;</li>
                <li>Provisions of these Terms that by their nature should survive termination shall remain in effect, 
                  including intellectual property, limitation of liability, indemnification, and governing law.</li>
              </ul>
            </section>

            {/* 13. Modifications to Terms */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">13. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. If we make material changes, we will 
                provide notice by revising the "Last updated" date at the top of these Terms and, where 
                appropriate, providing additional notice via email or a prominent notice on our website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of the Services following the posting of revised Terms constitutes your 
                acceptance of the changes. If you do not agree to the revised Terms, you must discontinue 
                use of the Services.
              </p>
            </section>

            {/* 14. Governing Law and Dispute Resolution */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">14. Governing Law and Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Federal 
                Republic of Nigeria. Any disputes arising out of or in connection with these Terms shall be 
                resolved as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Informal Resolution:</strong> The parties shall first attempt to resolve any dispute 
                  informally by contacting us at{" "}
                  <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                    compliance@smartcare.africa
                  </a>.</li>
                <li><strong>Mediation:</strong> If informal resolution is unsuccessful within thirty (30) days, 
                  either party may initiate mediation under the rules of the Lagos Court of Arbitration.</li>
                <li><strong>Jurisdiction:</strong> Any legal proceedings shall be brought exclusively in the courts 
                  of Lagos State, Nigeria.</li>
              </ul>
            </section>

            {/* 15. Severability */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">15. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of 
                competent jurisdiction, the remaining provisions shall continue in full force and effect. The 
                invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            {/* 16. Contact Information */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions, concerns, or requests regarding these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="text-foreground font-semibold text-lg">Smartcare Health Solutions</p>
                <p className="text-muted-foreground">
                  General Enquiries:{" "}
                  <a href="mailto:info@smartcare.africa" className="text-primary hover:underline">
                    info@smartcare.africa
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Compliance & Data Protection:{" "}
                  <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                    compliance@smartcare.africa
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Partnerships:{" "}
                  <a href="mailto:partnerships@smartcare.africa" className="text-primary hover:underline">
                    partnerships@smartcare.africa
                  </a>
                </p>
                <p className="text-muted-foreground">Address: Lagos, Nigeria</p>
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