import { useState, useEffect, useRef, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PilotNewsletterCTA = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Please enter your email", variant: "destructive" });
      return;
    }
    if (!turnstileToken) {
      toast({ title: "Please complete the verification", variant: "destructive" });
      return;
    }
    setIsSubscribing(true);
    try {
      const res = await fetch("https://smartcare-site-api.royal-union-6758.workers.dev/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, turnstileToken }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({ title: "Thanks — you're subscribed. 🎉" });
      setEmail("");
      setTurnstileToken(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      toast({ title: "Subscription failed — please try again.", variant: "destructive" });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Stay Updated</h3>
        <p className="text-muted-foreground mb-6">
          Get the latest updates on the Smartcare Higo Pilot and our healthcare initiatives.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{ position: "absolute", left: "-5000px" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubscribing}
              className="flex-1 px-4 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isSubscribing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-1" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
          <div ref={turnstileRef} className="flex justify-center" />
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to receive updates from Smartcare Health Solutions. You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default PilotNewsletterCTA;
