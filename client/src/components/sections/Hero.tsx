import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Cloud Storage & Creative Tools at{" "}
              <span className="text-primary">Unbeatable Prices</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get 30TB storage, Gemini AI, Office 365, and Adobe Creative Suite - all starting from just $49/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1561736778-92e52a7769ef"
              alt="Cloud Computing"
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
