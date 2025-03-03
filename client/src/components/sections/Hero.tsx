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
              Lưu Trữ Đám Mây & Công Cụ Sáng Tạo với{" "}
              <span className="text-primary">Giá Tốt Nhất</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Nhận 30TB lưu trữ, Gemini AI, Office 365, và Adobe Creative Suite - tất cả chỉ từ 1.190.000đ/tháng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Dùng Thử Miễn Phí
              </Button>
              <Button size="lg" variant="outline">
                Xem Bảng Giá
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
              alt="Điện toán đám mây"
              className="object-cover w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}