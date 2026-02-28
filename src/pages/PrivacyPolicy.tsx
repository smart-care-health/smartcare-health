import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl font-bold text-primary">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </div>
          
          <Separator />
          
          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare Health Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our healthcare technology solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare leads digital health innovation across Africa through cutting-edge technology and 
                strategic partnerships that improve healthcare access for all. We deploy remote diagnostics 
                and comprehensive Electronic Health and Medical Record (EHR/EMR) platforms connecting primary, 
                secondary and tertiary healthcare providers to ensure a seamless continuum of care across the continent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are firmly committed to safeguarding the privacy rights of our users ("Data Subjects"). 
                This Privacy Policy outlines our practices regarding the processing of personal data by 
                Smartcare, including our healthcare solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy outlines our practices regarding the collection, use, and protection of 
                personal data in compliance with Section 37 of the Constitution of the Federal Republic of 
                Nigeria (CFRN) 1999 (as amended), the Nigeria Data Protection Act (NDP Act) 2023, its 
                subsequent General Application and Implementation Directive (GAID) 2025, and other relevant 
                legal instruments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy does not apply to services not owned or controlled by Smartcare but 
                applies to all forms of systems, operations and processes within the Smartcare infrastructure 
                and environment that involve the processing of personal data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may change this Privacy Policy from time to time. If we make changes, we will notify you 
                by revising the date at the top of this policy. If we make material changes, we will provide 
                you with additional notice (such as by adding a statement to the Website, or sending you a 
                notification). We encourage you to review this Privacy Policy regularly to stay informed about 
                our information practices and the choices available to you.
              </p>
            </section>

            {/* 2. Guiding Principles */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Our Guiding Principles on Data Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                In processing your personal data, we adhere strictly to the principles set out under Section 24 
                of the NDP Act. Our obligations include ensuring that personal data is:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Processed in a fair, lawful, and transparent manner;</li>
                <li>Collected for specified, explicit, and legitimate purposes, and not further processed in a way incompatible with these purposes;</li>
                <li>Adequate, relevant, and limited to the minimum necessary for the purposes for which it was collected;</li>
                <li>Retained for no longer than necessary to achieve the lawful bases for which it was collected;</li>
                <li>Accurate, complete, not misleading, and, where necessary, kept up to date; and</li>
                <li>Processed in a manner that ensures appropriate security, including protection against unauthorised or unlawful processing, access, loss, destruction, damage, or any form of data breach.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We are also committed to ensuring accountability through responsible data processing activities, 
                demonstrating duty of care to you, and upholding data confidentiality, integrity, and availability. 
                Rest assured, we handle your data professionally and ethically to prevent any harm.
              </p>
            </section>

            {/* 3. Scope of Data Processing */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Scope of Data Processing</h2>
              <h3 className="font-semibold text-lg text-foreground">Data Collection and Processing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your interaction with us and the choices you make, we may collect and process 
                various types of personal data for different purposes and lawful bases, including:
              </p>
              
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">S/N</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Type of Data</TableHead>
                      <TableHead>Lawful Basis</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell className="font-medium">Contractual Matters</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Name, email, system ID, IP address, role, access logs, other information stored on or available regarding the devices you allow us access to when you visit our Platforms</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Contractual necessity to engage medical operators to provide a service. Legal obligation: to comply with industry obligations and standards</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell className="font-medium">Provision of Healthcare</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Name, surname, DOB, gender, written consent, UUID, medical images (ear, skin, throat), audio (heart, lung, cough), temperature, medical history</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Consent: allowing us to provide and maintain our services. Legitimate Interest: Research (aggregated and anonymised data)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell className="font-medium">Contractual Matters</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Name, Contact Details, Vendor Details, Vendor Payment Information</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Contractual necessity to manage our business relationships with third parties</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell className="font-medium">Professional</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Job title, organisation</TableCell>
                      <TableCell className="text-muted-foreground text-sm">To vet prospective employees</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell className="font-medium">Push Notifications</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Name, Phone, Email Address, Communication preferences</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Consent: to inform you about updates or changes to our services and to communicate with you about our products and services via newsletters or other forms of communication</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell className="font-medium">Data Analytics</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Cookies, Usage data, IP Address</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Consent and Legitimate Interest: to improve our website, services and user experience</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell className="font-medium">Security</TableCell>
                      <TableCell className="text-muted-foreground text-sm">IP Address, Device Information</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Legal obligation to ensure the security of our platforms and services</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Please note that these categories are not exhaustive, and we may process additional data as 
                required by law or best practices, always ensuring your rights as a data subject are protected.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In addition, you are free to revoke consent at any given time, however this may affect your 
                ability to use our telehealth device.
              </p>
            </section>

            {/* 4. Rights of Data Subjects */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Rights of Data Subjects</h2>
              <p className="text-muted-foreground leading-relaxed">
                We uphold your privacy rights, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Right to be Informed</li>
                <li>Right to Access Information</li>
                <li>Right to Rectification</li>
                <li>Right to Object to Processing</li>
                <li>Right to Restriction of Processing</li>
                <li>Right to Data Portability</li>
                <li>Right to be Forgotten</li>
                <li>Right to Object to Automated Decision Making (entitling you to human intervention)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You also have the right to lodge a complaint with the Nigeria Data Protection Commission as 
                outlined in Part VI of the NDP Act and schedule 9 of the GAID, detailed below.
              </p>

              <h3 className="font-semibold text-lg text-foreground">Data Subject's Standard Notice to Address Grievance (SNAG)</h3>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to use the Standard Notice to Address Grievance (SNAG) if you believe your 
                data privacy rights have been violated. The SNAG is a standardised template that allows you to 
                formally request internal resolution from us. You can submit a SNAG directly or through someone 
                acting on your behalf, including civil society organisations. We will track these notices, and if 
                unresolved, the Nigeria Data Protection Commission (NDPC) may initiate an investigation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To submit a SNAG, please fill out the form available in Schedule 9 of GAID on the NDPC's website 
                or send an email to{" "}
                <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                  compliance@smartcare.africa
                </a>{" "}
                with 'SNAG' in the subject line, outlining the details of your grievance. You can also serve a 
                SNAG via our physical address, as outlined in Section 13 of this Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To exercise any of your rights as a data subject, email our Data Protection Officer at{" "}
                <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                  compliance@smartcare.africa
                </a>.
              </p>
            </section>

            {/* 5. Transfer of Data */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Transfer of Data to Third Parties and Countries</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare is committed to safeguarding your privacy. To provide our services effectively, 
                we may engage third-party service providers in the following areas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Data Analytics:</strong> Processing user interactions and feedback to enhance our services and user experience</li>
                <li><strong>Digital Marketing:</strong> Promoting our services through various online channels to reach and inform potential users</li>
                <li><strong>Web Development:</strong> Maintaining and improving our website to ensure a seamless user experience</li>
                <li><strong>Cybersecurity:</strong> Protecting our platform and user data from unauthorised access and potential threats through the use of Cloudflare</li>
                <li><strong>Medical service providers:</strong> Deploying Smartcare to healthcare providers (hospitals, pharmacies, laboratories and health networks) ensures constant clinical validation, whereas HMOs and insurance providers drive coverage expansion and facilitate cost-effective care delivery</li>
                <li><strong>Government agencies:</strong> Partnering with NPHCDA and other health ministries across Africa to integrate policies and deploy en masse</li>
                <li><strong>Telehealth device:</strong> Using the Higosense (device and app) advanced diagnostic equipment to achieve remote monitoring solutions. Note: Higo support staff may access non-personal data for troubleshooting purposes</li>
                <li><strong>Telecommunications partner:</strong> Leveraging MTN for connectivity infrastructure to support the digital platform integration</li>
                <li><strong>Cloud and API SaaS providers:</strong> Storing our data on secure Microsoft Azure cloud storage servers in the Netherlands and transferring data through secure API integration</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                In transferring your data to these third parties, and in some instances third countries, we 
                comply with the Nigeria Data Protection Act (NDP Act) 2023 and subsequent GAID, ensuring that 
                appropriate safeguards are in place to protect your data.
              </p>
            </section>

            {/* 6. Disclosure of Information */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Disclosure of Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We disclose the categories of information described above as follows:
              </p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">Vendors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We disclose information to vendors, service providers, contractors, and consultants that need 
                  this information to provide services to us, such as companies that assist us with web and app 
                  hosting, payment processing, customer service, analytics, and marketing and advertising.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">Regulatory Authorities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may disclose information to Regulatory Authorities and others for compliance purposes. In 
                  certain instances, disclosure is in accordance with, or required by, any applicable law, legal 
                  process, or legal obligation including lawful requests by public authorities to meet law 
                  enforcement requirements.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">Affiliates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to disclose information between and among Smartcare entities, contractors, 
                  and any current or future parents, affiliates, subsidiaries, and other companies under common 
                  control and ownership. These transfers will be governed by IntraGroup Agreements with data 
                  sharing clauses to ensure adherence to applicable data protection legislation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may disclose information when we have your explicit consent.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                We may also disclose de-identified information that cannot reasonably be used to identify you. 
                This is particularly true for research purposes, to assist in the development of machine learning 
                models that train on African population health data to drive more accurate diagnostics and 
                treatment recommendations. When data is shared with research partners, it is aggregated and anonymised.
              </p>
            </section>

            {/* 7. Technical Information and Cookies */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Technical Information and Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website collects certain technical information, such as your IP address and browser details, 
                to enhance your user experience. We also use cookies — small text files stored on your device — to 
                remember your preferences and provide personalised services. These cookies are secured and not 
                vulnerable to misuse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website, you consent to our use of cookies in accordance with this Privacy Policy. 
                When cookies are used on our website, you will be presented with a cookie banner requesting your 
                consent. You have the right to accept or decline cookies.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site, improving user experience.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements based on your interactions with our services.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can manage your cookie preferences at any time by adjusting your browser settings or using 
                our cookie management tool available on the website.
              </p>
            </section>

            {/* 8. Data Security and Integrity */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Data Security and Integrity</h2>
              <p className="text-muted-foreground leading-relaxed">
                We employ industry-standard technical, administrative, and organisational measures to safeguard 
                Personal Data from loss, misuse, and unauthorised access, disclosure, alteration, or destruction. 
                This includes data encryption, role-based access control, backups, data resilience amongst others.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a data breach, Smartcare will notify the Nigeria Data Protection Commission within 
                72 hours of discovery, as well as affected data subjects without undue delay if their rights and 
                freedoms are impacted by the breach.
              </p>
            </section>

            {/* 9. Purpose and Storage Limitation */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Purpose and Storage Limitation</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect and store personal data only as long as necessary to fulfill the purposes for which 
                it was collected, in accordance with legal requirements and best practices. This ensures your 
                privacy rights are respected under the NDP Act, GAID and other applicable data protection legislation.
              </p>
            </section>

            {/* 10. Data Retention */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your Personal Data for only as long as we need in order to provide our Services to you, 
                or for other legitimate business purposes such as resolving disputes, safety and security reasons, 
                or complying with our legal obligations. How long we retain Personal Data is defined in our Data 
                Retention Schedule, and depends on a number of factors, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Our purpose for processing the data (such as whether we need to retain the data to provide our Services);</li>
                <li>The amount, nature, and sensitivity of the information.</li>
              </ul>
            </section>

            {/* 11. Children */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Children</h2>
              <p className="text-muted-foreground leading-relaxed">
                Although our Services are not directly aimed at children under the age of 13, they are permitted 
                to use them without consequence. We do not knowingly collect Personal Data from children under 13. 
                If you have reason to believe that a child under 13 has provided Personal Data to Smartcare without 
                being appropriately informed, nor with sufficient parental consent, please email us at{" "}
                <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                  compliance@smartcare.africa
                </a>. 
                We will investigate any notification and, if appropriate, delete the Personal Data from our systems.
              </p>
            </section>

            {/* 12. Alteration of Privacy Policy */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Alteration of Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smartcare reserves the right to amend this Privacy Policy to enhance data privacy rights, serve the 
                public interest, or comply with legal directives, in line with the safeguards under the NDP Act 
                and the 1999 Constitution of the Federal Republic of Nigeria.
              </p>
            </section>

            {/* 13. Contact Information */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions or concerns regarding this Privacy Policy or our data processing practices, 
                please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-1">
                <p className="text-foreground font-medium">
                  Email:{" "}
                  <a href="mailto:compliance@smartcare.africa" className="text-primary hover:underline">
                    compliance@smartcare.africa
                  </a>
                </p>
                <p className="text-foreground font-medium">Address: Lagos, Nigeria</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Effective Date: February 2026
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
