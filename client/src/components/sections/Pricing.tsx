import { PriceCard } from "@/components/shared/PriceCard";
import { motion } from "framer-motion";
import { Database, FileType2, Palette } from "lucide-react";

const pricingPlans = [
  {
    title: "Google One",
    icon: Database,
    image:
      "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/176/Google_One_logo-512.png",
    imageSize: "large", // Added imageSize
    tiers: [
      { name: "1TB", price: 99000, period: "năm" },
      { name: "2TB", price: 199000, period: "năm" },
      { name: "5TB", price: 299000, period: "năm" },
      { name: "10TB", price: 349000, period: "năm" },
      { name: "20TB", price: 449000, period: "năm" },
      { name: "30TB", price: 499000, period: "năm" },
    ],
    features: [
      "Drive dung lượng cao",
      "Gemini Advance độc quyền",
      "Tìm kiếm bằng AI",
      "Chia sẻ file nâng cao",
      "Sao lưu tự động",
      "Hỗ trợ 24/7",
    ],
    popular: true,
  },
  {
    title: "Office 365",
    icon: FileType2,
    price: 499000,
    period: "năm",
    image:
      "https://download.logo.wine/logo/Office_365/Office_365-Logo.wine.png",
    imageSize: "extra-large", // Added imageSize
    features: [
      "Word, Excel, PowerPoint",
      "1TB lưu trữ OneDrive",
      "Cài đặt trực tiếp hoặc online",
      "Bảo hành trọn đời",
      "Hỗ trợ kỹ thuật 24/7",
    ],
  },
  {
    title: "Adobe Creative Suite",
    icon: Palette,
    price: 199000,
    period: "phần mềm",
    imageSize: "small",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png", // Added imageSize
    features: [
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "Cập nhật phiên bản mới nhất",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Bảng Giá Các Dịch Vụ Phổ Biến
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chọn gói dịch vụ phù hợp với nhu cầu của bạn. Tất cả các gói đều
            được bảo đảm hoàn tiền 100%.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <PriceCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
