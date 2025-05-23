import { ServiceCard } from "@/components/shared/ServiceCard";
import { motion } from "framer-motion";
import { Cloud, Palette, FileText } from "lucide-react";

const services = [
  {
    title: "Lưu Trữ Đám Mây",
    description: "Lưu trữ đám mây an toàn với dung lượng lên đến 30TB. Sao lưu tự động và chia sẻ file dễ dàng.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
  },
  {
    title: "Bộ Công Cụ Sáng Tạo",
    description: "Truy cập đầy đủ Adobe Creative Suite với các tính năng và cập nhật mới nhất.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2"
  },
  {
    title: "Công Cụ Văn Phòng",
    description: "Microsoft Office 365 với Word, Excel, PowerPoint và nhiều ứng dụng khác.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-gray-50/50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tất cả những gì bạn cần cho lưu trữ và sáng tạo trong một nơi duy nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-16">
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