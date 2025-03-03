import { PriceCard } from "@/components/shared/PriceCard";
import { motion } from "framer-motion";
import { Database, FileType2, Palette } from "lucide-react";

const pricingPlans = [
  {
    title: "Google Drive + Gemini",
    icon: Database,
    tiers: [
      { name: "1TB", price: 9.99 },
      { name: "2TB", price: 19.99 },
      { name: "5TB", price: 29.99 },
      { name: "10TB", price: 34.99 },
      { name: "20TB", price: 44.99 },
      { name: "30TB", price: 49.99 }
    ],
    features: [
      "Unlimited file storage",
      "AI-powered search",
      "Advanced file sharing",
      "Automatic backup",
      "24/7 support"
    ]
  },
  {
    title: "Office 365",
    icon: FileType2,
    price: 49.99,
    period: "year",
    features: [
      "Word, Excel, PowerPoint",
      "1TB OneDrive storage",
      "Email hosting",
      "Teams collaboration",
      "Mobile apps access"
    ],
    popular: true
  },
  {
    title: "Adobe Creative Suite",
    icon: Palette,
    price: 79.99,
    period: "year",
    features: [
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "All Adobe apps"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our 100% satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PriceCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
