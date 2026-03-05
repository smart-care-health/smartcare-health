import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
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
                <h3 className="font-heading font-bold text-xl">Smartcare Health Solutions </h3>
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

          {/* Resources & Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => <li key={index}>
                  <span className="text-white/80 text-sm">
                    {resource}
                  </span>
                </li>)}
            </ul>
            
            {/* Brevo Newsletter Form */}
            <div className="mt-6 brevo-footer-form" dangerouslySetInnerHTML={{ __html: `
              <div id="sib-form-container" class="sib-form-container">
                <div id="error-message" class="sib-form-message-panel" style="font-size:14px; text-align:left; display:none;">
                  <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                    <span class="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
                  </div>
                </div>
                <div id="success-message" class="sib-form-message-panel" style="font-size:14px; text-align:left; display:none;">
                  <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                    <span class="sib-form-message-panel__inner-text">Your subscription has been successful.</span>
                  </div>
                </div>
                <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; border:none; max-width:100%; direction:ltr;">
                  <form id="sib-form" method="POST" action="https://27493079.sibforms.com/serve/MUIFAPs1FPaxIFkUM6FMMihidGY71t9STqvrauFDIzaY3mRzPoMOspnBtXVxJl3OztKCb3XklYkkr3d1z0CUkAbgGe0EvS7OSkyhfgkL8td2Ibsl6cc2WlUpCOrGJmLvdh8s81pBg9pq0QDgJdpzM8dcPYUuLBZdQO5YRSIs7poIBzzjuv3fAE7awD8NDQwlzIsoverw5Dpp6xLbw==" data-type="subscription">
                    <div style="padding: 6px 0;">
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row">
                            <label class="entry__label" for="EMAIL" data-required="*" style="font-size:14px;">Enter your email address to subscribe</label>
                          </div>
                          <div class="entry__field">
                            <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="padding: 6px 0;">
                      <div class="sib-optin sib-form-block" data-required="true">
                        <div class="form__entry entry_mcq">
                          <div class="form__label-row">
                            <label class="entry__label" for="OPT_IN" data-required="*" style="font-size:14px;">Kindly Confirm</label>
                          </div>
                          <div class="entry__choice" style="">
                            <label>
                              <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                              <span class="checkbox checkbox_tick_positive" style="margin-left:0"></span>
                              <span style="font-size:13px;">I agree to receive your newsletters and agree to the data privacy policy. I can unsubscribe at any time.</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="padding: 6px 0;">
                      <div class="g-recaptcha-v3" data-sitekey="6LdTDoAsAAAAAChxrzLMFNj7Aj0enHnuVs5C04B7" style="display: none;"></div>
                    </div>
                    <div style="padding: 6px 0;">
                      <div class="sib-form-block" style="text-align: left;">
                        <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:14px; font-weight:700; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
                          SUBSCRIBE
                        </button>
                      </div>
                    </div>
                    <input type="text" name="email_address_check" value="" class="input--hidden" />
                    <input type="hidden" name="locale" value="en" />
                  </form>
                </div>
              </div>
            ` }} />
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
