import { useState } from "react";

const BREVO_FORM_URL = "https://27493079.sibforms.com/serve/MUIFAPs1FPaxIFkUM6FMMihidGY71t9STqvrauFDIzaY3mRzPoMOspnBtXVxJl3OztKCb3XklYkkr3d1z0CUkAbgGe0EvS7OSkyhfgkL8td2Ibsl6cc2WlUpCOrGJmLvdh8s81pBg9pq0QDgJdpzM8dcPYUuLBZdQO5YRSIs7poIBzzjuv3fAE7awD8NDQwlzIsoverw5Dpp6xLbw==";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !optIn) return;

    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("EMAIL", email);
      formData.append("OPT_IN", "1");
      formData.append("email_address_check", "");
      formData.append("locale", "en");

      const response = await fetch(BREVO_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // With no-cors, we can't read the response, but if fetch doesn't throw, assume success
      setStatus("success");
      setEmail("");
      setOptIn(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-6 rounded-lg bg-white/10 p-4">
        <p className="text-sm text-green-300 font-medium">
          ✓ Your subscription has been successful!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
      <div>
        <label htmlFor="newsletter-email" className="text-sm font-medium text-white/80 block mb-1">
          Enter your email address to subscribe
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-white/80 block mb-1">Kindly Confirm</label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            required
            className="mt-0.5 h-4 w-4 rounded border-white/40 accent-accent"
          />
          <span className="text-xs text-white/70 leading-relaxed">
            I agree to receive your newsletters and agree to the data privacy policy. I can unsubscribe at any time.
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-300">Subscription failed. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "SUBSCRIBING..." : "SUBSCRIBE"}
      </button>
    </form>
  );
};

export default NewsletterForm;
