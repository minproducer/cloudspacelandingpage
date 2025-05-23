import { PriceCard } from "@/components/shared/PriceCard";
import { motion } from "framer-motion";
import { Database, FileType2, Palette } from "lucide-react";

const pricingPlans = [
    {
        title: "AdobeApp Bản Quyền Full 20 App - Cá Nhân (1 Năm)",
        icon: Palette, // Ví dụ: sử dụng Palette icon
        price: 999000,
        period: "năm",
        imageSize: "large", // Thêm imageSize nếu cần
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        features: ["VIP PRO Không lỗi, không Out", "Full App", "Cấp tài khoản mới", "250GB Cloud", "1 Thiết bị"],
        popular: true,
    },
    {
        title: "AdobeApp Bản Quyền Full 20 App - Cá Nhân (2 Năm)",
        icon: Palette,
        price: 1499000,
        period: "2 năm",
        imageSize: "large",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        features: ["VIP PRO Không lỗi, không Out", "Full App", "Cấp tài khoản mới", "250GB Cloud", "1 Thiết bị"],
        popular: false,
    },
    {
        title: "AdobeApp Bản Quyền VIP - Cá Nhân (1 Năm)",
        icon: Palette,
        price: 650000,
        period: "năm",
        imageSize: "large",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        features: ["VIP Không lỗi, không Out", "Full App", "Cài trực tiếp hoặc online", "Không Cloud", "1 Thiết bị"],
        popular: false,
    },
    {
        title: "AdobeApp Bản Quyền Full 20 App - Doanh Nghiệp (1 Năm)",
        icon: Palette,
        price: 1099000,
        period: "năm",
        imageSize: "large",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        features: ["VIP PRO Không lỗi, không Out", "Full App", "Cấp tài khoản mới", "250GB Cloud", "1 Thiết bị"],
        popular: false,
    },
    {
        title: "AdobeApp Bản Quyền Full 20 App - Doanh Nghiệp (2 Năm)",
        icon: Palette,
        price: 1999000,
        period: "2 năm",
        imageSize: "large",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        features: ["VIP PRO Không lỗi, không Out", "Full App", "Cấp tài khoản mới", "250GB Cloud", "1 Thiết bị"],
        popular: false,
    },
    {
        title: "AdobeApp Bản Quyền VIP - Doanh Nghiệp (1 Năm)",
        icon: Palette,
        price: 750000,
        period: "năm",
        imageSize: "large",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        features: ["VIP Không lỗi, không Out", "Full App", "Cài trực tiếp hoặc online", "Không Cloud", "Không Thiết bị"],
        popular: false,
    },
];

export function PricingTable() { // Thay đổi export function
    return (
        <section id="pricingtable" className="py-32 md:py-40">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                        Bảng Giá Adobe App Bản Quyền
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Chọn gói dịch vụ phù hợp với nhu cầu của bạn.
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