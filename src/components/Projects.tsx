import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, TrendingUp, ExternalLink } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Rural Health Initiative - Northern Nigeria",
    location: "Kano, Kaduna, Katsina States",
    duration: "2023 - 2025",
    beneficiaries: "150,000+ patients",
    status: "Active",
    description: "Deploying remote diagnostic devices in 45 primary healthcare centers across three northern states, serving predominantly rural communities with limited healthcare access.",
    impact: ["40% reduction in emergency referrals", "60% faster diagnosis time", "85% patient satisfaction rate", "24/7 specialist consultation access"],
    partners: ["Federal Ministry of Health", "WHO", "Gates Foundation"],
    image: "🏥"
  }, {
    title: "Urban Health Network - Lagos State",
    location: "Lagos, Nigeria",
    duration: "2024 - 2026",
    beneficiaries: "300,000+ patients",
    status: "Expanding",
    description: "Comprehensive EHR integration across 25 public hospitals and 100+ primary health centers, creating Africa's largest integrated health network.",
    impact: ["Unified patient records system", "Real-time bed availability tracking", "Automated referral pathways", "Population health analytics"],
    partners: ["Lagos State Government", "USAID", "African Development Bank"],
    image: "🌆"
  }, {
    title: "Cross-Border Health Monitoring",
    location: "Nigeria, Ghana, Kenya",
    duration: "2024 - 2027",
    beneficiaries: "500,000+ patients",
    status: "Pilot",
    description: "Multi-country pilot program establishing standardized health data exchange protocols and epidemic surveillance systems across West and East Africa.",
    impact: ["Regional disease surveillance", "Cross-border patient tracking", "Standardized health metrics", "Early warning systems"],
    partners: ["ECOWAS", "Africa CDC", "World Bank"],
    image: "🌍"
  }];
  const metrics = [{
    value: "75+",
    label: "Healthcare Facilities",
    description: "Across 3 countries"
  }, {
    value: "500K+",
    label: "Patient Records",
    description: "Digitized and secured"
  }, {
    value: "95%",
    label: "Uptime",
    description: "System reliability"
  }, {
    value: "2.5M",
    label: "Consultations",
    description: "Enabled through our platform"
  }];
  return;
};
export default Projects;