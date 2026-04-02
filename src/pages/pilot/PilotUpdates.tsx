import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PilotNav from "@/components/pilot/PilotNav";
import PilotNewsletterCTA from "@/components/pilot/PilotNewsletterCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface UpdateEntry {
  date: string;
  title: string;
  summary: string;
  image?: string;
}

// ────────────────────────────────────────────────
// Add new updates at the top of this array.
// ────────────────────────────────────────────────
const updates: UpdateEntry[] = [
  {
    date: "2025-04-01",
    title: "Early Progress Update",
    summary:
      "Initial data from participating facilities shows positive engagement from both healthcare workers and patients. We continue to monitor and refine the process.",
  },
  {
    date: "2025-03-15",
    title: "First Sites Activated",
    summary:
      "The first participating primary healthcare centres and pharmacies have begun using the Higo device to capture and transmit patient data for remote review.",
  },
  {
    date: "2025-02-20",
    title: "Training Completed",
    summary:
      "Healthcare workers at selected facilities in Lagos and Akwa Ibom have completed training on using the Higo smart diagnostic device.",
  },
  {
    date: "2025-01-10",
    title: "Pilot Launch Announced",
    summary:
      "Smartcare Health Solutions formally announced the Higo Pilot in partnership with state health authorities in Lagos and Akwa Ibom.",
  },
];

const PilotUpdates = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PilotNav />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            📢 Pilot Updates
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Pilot{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Follow the progress of the Smartcare Higo Pilot as we work with partners to improve healthcare
            delivery across Nigeria.
          </p>
        </div>
      </section>

      {/* Updates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {updates.map((update) => (
              <Card key={update.title} className="border-0 shadow-md bg-white/70 backdrop-blur-sm overflow-hidden">
                {update.image && (
                  <div className="h-40 bg-muted">
                    <img src={update.image} alt={update.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time>{update.date}</time>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{update.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{update.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <PilotNewsletterCTA />

      <Footer />
    </div>
  );
};

export default PilotUpdates;
