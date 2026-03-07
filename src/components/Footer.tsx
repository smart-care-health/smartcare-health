import { Activity, Mail, Phone, MapPin, Linkedin, Twitter, Loader2 } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}
const Footer = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const { toast } = useToast();

  const renderWidget = useCallback(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: "0x4AAAAAACnuw5pi2ptqYO_p",
        theme: "dark",
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

    const existingScript = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile"]'
    );

    if (existingScript) {
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
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "Email address is required to subscribe to our newsletter.",
        variant: "destructive"
      });
      return;
    }
    setIsSubscribing(true);
    try {
      if (!turnstileToken) {
        toast({
          title: "Please complete the verification",
          variant: "destructive",
        });
        setIsSubscribing(false);
        return;
      }
      const res = await fetch("https://smartcare-site-api.royal-union-6758.workers.dev/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, turnstileToken }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Thanks — you're subscribed. 🎉",
      });
      setEmail("");
      setTurnstileToken(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      toast({
        title: "Subscription failed — please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };
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
            
            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h5 className="font-semibold mb-2 text-sm">Stay Updated</h5>
              <p className="text-white/80 text-xs mb-3">
                Get the latest updates on our projects and partnerships.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} style={{ position: 'absolute', left: '-5000px' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="flex space-x-2">
                  <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} disabled={isSubscribing} className="flex-1 px-3 py-1.5 text-sm bg-white/20 border border-white/30 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50" />
                  <button type="submit" disabled={isSubscribing} className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white text-sm rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                    {isSubscribing ? <>
                        <Loader2 className="h-3 w-3 animate-spin mr-1" />
                        <span className="hidden sm:inline">Subscribing...</span>
                      </> : "Subscribe"}
                  </button>
                </div>
                <div ref={turnstileRef} className="mt-2" />
              </form>
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