import { PriceCard } from "@/components/shared/PriceCard";
import { motion } from "framer-motion";
import { Database, FileType2, Palette } from "lucide-react";

const pricingPlans = [
  {
    title: "Google Drive + Gemini",
    icon: Database,
    tiers: [
      { name: "1TB", price: 239000 },
      { name: "2TB", price: 479000 },
      { name: "5TB", price: 719000 },
      { name: "10TB", price: 839000 },
      { name: "20TB", price: 1079000 },
      { name: "30TB", price: 1199000 }
    ],
    features: [
      "Lưu trữ không giới hạn",
      "Tìm kiếm bằng AI",
      "Chia sẻ file nâng cao",
      "Sao lưu tự động",
      "Hỗ trợ 24/7"
    ]
  },
  {
    title: "Office 365",
    icon: FileType2,
    price: 1199000,
    period: "năm",
    features: [
      "Word, Excel, PowerPoint",
      "1TB lưu trữ OneDrive",
      "Email doanh nghiệp",
      "Teams hợp tác",
      "Ứng dụng di động"
    ],
    popular: true
  },
  {
    title: "Adobe Creative Suite",
    icon: Palette,
    price: 1919000,
    period: "năm",
    features: [
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "Tất cả ứng dụng Adobe"
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
            Bảng Giá Đơn Giản, Minh Bạch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu của bạn. Tất cả các gói đều được bảo đảm hoàn tiền 100%.
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