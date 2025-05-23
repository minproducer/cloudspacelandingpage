import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, RefreshCcw, Clock, Award } from "lucide-react";
import { StatCounter } from "@/components/shared/StatCounter";

const guarantees = [
  {
    icon: Shield,
    title: "Hoàn Tiền 100%",
    description: "Không hài lòng? Hoàn tiền đầy đủ trong vòng 30 ngày, không cần lý do."
  },
  {
    icon: RefreshCcw,
    title: "Bảo Vệ Dữ Liệu",
    description: "Đền bù gấp 100 lần nếu xảy ra mất dữ liệu từ phía chúng tôi."
  },
  {
    icon: Clock,
    title: "Hỗ Trợ 24/7",
    description: "Hỗ trợ kỹ thuật 24/7 qua email, chat hoặc điện thoại."
  },
  {
    icon: Award,
    title: "Bảo Hành 1 Năm",
    description: "Bảo hành đầy đủ với chính sách thay thế ngay lập tức."
  }
];

export function Guarantees() {
  return (
    <section id="guarantees" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cam Kết Của Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến dịch vụ tốt nhất với những bảo đảm hàng đầu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <guarantee.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">
              <StatCounter end={100} suffix="%" />
            </div>
            <p className="text-muted-foreground">Tỷ Lệ Hài Lòng</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">
              <StatCounter end={50000} suffix="+" />
            </div>
            <p className="text-muted-foreground">Khách Hàng Tin Dùng</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">
              <StatCounter end={99.9} suffix="%" />
            </div>
            <p className="text-muted-foreground">Thời Gian Hoạt Động</p>
          </div>
        </div>
      </div>
    </section>
  );
}