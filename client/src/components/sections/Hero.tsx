import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SocialDialog } from "@/components/shared/SocialDialog";

export function Hero() {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Lưu Trữ Đám Mây & Công Cụ Sáng Tạo với{" "}
              <span className="text-primary bg-primary/10 px-2 rounded-md">
                Giá Tốt Nhất
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Nhận 30TB lưu trữ, Gemini AI, Office 365, và Adobe Creative Suite
              - tất cả chỉ từ 1.190.000đ/năm.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <SocialDialog>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 px-8 h-14 text-lg font-medium"
                >
                  Dùng Thử Miễn Phí
                </Button>
              </SocialDialog>
              <Button
                size="lg"
                className="bg-primary/10 hover:bg-primary/20 text-primary px-8 h-14 text-lg font-medium"
                onClick={handleScrollToPricing}
              >
                Xem Bảng Giá
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1561736778-92e52a7769ef"
              alt="Điện toán đám mây"
              className="object-cover w-full h-full rounded-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
