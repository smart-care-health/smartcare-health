import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Load Brevo form script
    const script = document.createElement('script');
    script.src = 'https://sibforms.com/forms/end-form/build/main.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const quickLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Solutions",
    href: "#solutions"
  }, {
    name: "Partnerships",
    href: "#partnerships"
  }, {
    name: "Vision",
    href: "#vision"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const solutions = ["Remote Diagnostics", "EHR/EMR Platform", "Healthcare Networks", "Data Analytics"];
  const resources = ["White Papers", "Case Studies", "Technical Documentation", "Partner Resources"];
  return <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Smartcare Health Solutions </h3>
                <p className="text-white/80 text-sm">Transforming Healthcare</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Leading digital health innovation across Africa through cutting-edge technology 
              and strategic partnerships that improve healthcare access for all.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80">info@smartcare.africa</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80">+234 (0) 810 925 2120</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-white/80">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => <li key={index}>
                  <span className="text-white/80 text-sm">
                    {solution}
                  </span>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => <li key={index}>
                  <span className="text-white/80 text-sm">
                    {resource}
                  </span>
                </li>)}
            </ul>
            
            {/* Brevo Newsletter Signup */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <div id="sib-form-container" class="sib-form-container">
                      <div id="sib-container" style="text-align:center; background-color:transparent; max-width:100%; border:none; direction:ltr">
                        <form id="sib-form" method="POST" action="https://sibforms.com/serve/muIFAF_MQHb9pGj4O3Ns6sK0_2gDSbYBOc7yKKG3i7r8TJ7PZPMhMUwP4PUiVAuLHkHV3gBzjGcFzGcHzlD6cYQsJq7Dv1m3sYM6S-r9gC4E4dqVWnRqR9oJj5E0gK7a1B2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4" data-type="subscription">
                          <div style="padding:0 0 8px 0;">
                            <p style="font-size:14px; font-weight:700; color:#FFFFFF; text-align:left; margin:0;">Stay Updated</p>
                          </div>
                          <div style="padding:0 0 8px 0;">
                            <p style="font-size:12px; color:rgba(255,255,255,0.8); text-align:left; margin:0;">Get the latest news on our projects and partnerships</p>
                          </div>
                          <div style="padding:4px 0;">
                            <input type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Enter your email address" required style="font-size:13px; padding:8px 12px; background:rgba(255,255,255,0.2); border:1px solid rgba(255,255,255,0.3); border-radius:6px; color:#fff; width:100%; box-sizing:border-box;" />
                          </div>
                          <div style="padding:6px 0; display:flex; align-items:flex-start; gap:8px;">
                            <input type="checkbox" value="1" id="OPT_IN" name="OPT_IN" style="margin-top:3px; flex-shrink:0;" />
                            <label for="OPT_IN" style="font-size:11px; color:rgba(255,255,255,0.7); cursor:pointer; text-align:left;">I agree to receive newsletters and accept the data privacy policy.</label>
                          </div>
                          <div style="padding:8px 0;">
                            <button type="submit" form="sib-form" style="font-size:13px; font-weight:600; color:#FFFFFF; background-color:hsl(142 71% 45%); border:none; border-radius:6px; padding:8px 20px; cursor:pointer; width:100%;">SUBSCRIBE</button>
                          </div>
                          <input type="text" name="email_address_check" value="" style="display:none;">
                          <input type="hidden" name="locale" value="en">
                        </form>
                      </div>
                    </div>
                  `
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">© 2025 Smartcare Health Solutions . All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/data-protection" className="text-white/60 hover:text-white transition-colors">
                Data Protection
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;