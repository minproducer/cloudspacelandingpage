import { ServiceCard } from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";
import { Cloud, Palette, FileText } from "lucide-react";

const services = [
  {
    title: "Cloud Storage",
    description: "Secure cloud storage with up to 30TB space. Automated backup and easy file sharing.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
  },
  {
    title: "Creative Suite",
    description: "Full Adobe Creative Suite access with latest features and updates.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2"
  },
  {
    title: "Office Tools",
    description: "Microsoft Office 365 with Word, Excel, PowerPoint and more.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for storage and creativity in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
