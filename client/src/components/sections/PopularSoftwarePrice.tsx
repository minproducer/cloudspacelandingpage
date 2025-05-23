import { PriceCard } from "@/components/shared/PriceCard";
import { motion } from "framer-motion";

const popularSoftwarePlans = [
    {
        title: "Capcut Pro",
        price: 499000,
        period: "1 Năm / 1 Thiết bị",
        image: "https://taphoammo.net/img/nang-cap-tai-khoan-capcut-pro-chinh-chu-gia-re-24-7_259178777.png",
        imageSize: "large",
        popular: true,
        features: [
          "Chỉnh sửa video chuyên nghiệp",
          "Hiệu ứng và bộ lọc đa dạng",
          "Xuất video chất lượng cao",
          "Hỗ trợ nhiều định dạng video",
        ],
      },
      {
        title: "Capcut Pro",
        price: 699000,
        period: "1 Năm / 2 Thiết bị",
        image: "https://taphoammo.net/img/nang-cap-tai-khoan-capcut-pro-chinh-chu-gia-re-24-7_259178777.png",
        imageSize: "large",
        popular: false,
        features: [
          "Chỉnh sửa video chuyên nghiệp",
          "Hiệu ứng và bộ lọc đa dạng",
          "Xuất video chất lượng cao",
          "Hỗ trợ nhiều định dạng video",
          "Sử dụng trên 2 thiết bị",
        ],
      },
      {
        title: "Canva Pro",
        price: 299000,
        period: "Năm",
        image: "https://phanrangsoft.com/wp-content/uploads/2025/02/Canva-Pro.png",
        imageSize: "large",
        popular: false,
        features: [
          "Thiết kế đồ họa dễ dàng",
          "Mẫu thiết kế đa dạng",
          "Thư viện hình ảnh và font chữ phong phú",
          "Công cụ cộng tác",
        ],
      },
      {
        title: "Canva Pro",
        price: 459000,
        period: "2 Năm",
        image: "https://phanrangsoft.com/wp-content/uploads/2025/02/Canva-Pro.png",
        imageSize: "large",
        popular: false,
        features: [
          "Thiết kế đồ họa dễ dàng",
          "Mẫu thiết kế đa dạng",
          "Thư viện hình ảnh và font chữ phong phú",
          "Công cụ cộng tác",
          "Sử dụng trong 2 năm",
        ],
      },
      {
        title: "Chat GPT Plus",
        price: 259000,
        period: "tháng / Share",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        imageSize: "large",
        popular: false,
        features: [
          "Trò chuyện với AI thông minh",
          "Tạo nội dung sáng tạo",
          "Dịch thuật ngôn ngữ",
          "Hỗ trợ viết code",
        ],
      },
      {
        title: "Chat GPT Plus",
        price: 499000,
        period: "tháng / Riêng",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        imageSize: "large",
        popular: false,
        features: [
          "Trò chuyện với AI thông minh",
          "Tạo nội dung sáng tạo",
          "Dịch thuật ngôn ngữ",
          "Hỗ trợ viết code",
          "Tài khoản riêng tư",
        ],
      },
      {
        title: "Sadesign Retouch Panel",
        price: 299000,
        period: "Năm",
        image: "https://yt3.googleusercontent.com/I3pibh0Ru3TuvwTEnguH4XmdS4NowJ6WOQieZ4oCsmc-paEs0xpIWyv-Ixj5dtAZyAJafjy11A=s900-c-k-c0x00ffffff-no-rj",
        imageSize: "large",
        popular: false,
        features: [
          "Chỉnh sửa ảnh chuyên nghiệp",
          "Công cụ chỉnh sửa da",
          "Hiệu ứng làm đẹp",
          "Tích hợp với Photoshop",
        ],
      },
      {
        title: "Sadesign Retouch Panel",
        price: 499000,
        period: "2 Năm",
        image: "https://yt3.googleusercontent.com/I3pibh0Ru3TuvwTEnguH4XmdS4NowJ6WOQieZ4oCsmc-paEs0xpIWyv-Ixj5dtAZyAJafjy11A=s900-c-k-c0x00ffffff-no-rj",
        imageSize: "large",
        popular: false,
        features: [
          "Chỉnh sửa ảnh chuyên nghiệp",
          "Công cụ chỉnh sửa da",
          "Hiệu ứng làm đẹp",
          "Tích hợp với Photoshop",
          "Sử dụng trong 2 năm",
        ],
      },
      {
        title: "Office 365",
        price: 299000,
        period: "Năm",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Office_365_logo_%282013-2019%29.png",
        imageSize: "large",
        popular: false,
        features: [
          "Bộ ứng dụng văn phòng",
          "Word, Excel, PowerPoint",
          "Lưu trữ đám mây OneDrive",
          "Email và lịch",
        ],
      },
      {
        title: "Key Windows 10/11 Pro",
        price: 399000,
        period: "Vĩnh viễn",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png",
        imageSize: "large",
        popular: false,
        features: [
          "Hệ điều hành Windows",
          "Giao diện hiện đại",
          "Bảo mật nâng cao",
          "Hiệu năng ổn định",
        ],
      },
      {
        title: "Zoom Pro",
        price: 1499000,
        period: "Năm",
        image: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxtPV1zYJfBPveATOCg5xpTtcE7fzqgizmcGxqPO4fk1ndAlOqaHqkMaUXp6EMwXAz8ISM18MpDKZpiGwOJ43r5s-&format=source",
        imageSize: "large",
        popular: false,
        features: [
          "Họp trực tuyến",
          "Chia sẻ màn hình",
          "Ghi âm cuộc họp",
          "Tích hợp lịch",
        ],
      },
      {
        title: "Youtube Premium",
        price: 499000,
        period: "Năm",
        image: "https://brandlogos.net/wp-content/uploads/2022/08/youtube_premium-logo_brandlogos.net_lmczv.png",
        imageSize: "extra-large",
        popular: false,
        features: [
          "Xem video không quảng cáo",
          "Phát video nền",
          "Tải video ngoại tuyến",
          "YouTube Music Premium",
        ],
      },
      {
        title: "Elsa Speak Pro",
        price: 699000,
        period: "Năm",
        image: "https://88mobile.vn/wp-content/uploads/2023/09/elsa-88mobile.png",
        imageSize: "large",
        popular: false,
        features: [
          "Luyện phát âm tiếng Anh",
          "Nhận phản hồi AI",
          "Bài học tương tác",
          "Theo dõi tiến độ",
        ],
      },
      {
        title: "Retouch4me (Win/Mac)",
        price: 999000,
        period: "Vĩnh viễn",
        image: "https://3dlutcreator.com/products/102.png",
        imageSize: "large",
        popular: false,
        features: [
          "Chỉnh sửa ảnh chân dung",
          "Loại bỏ khuyết điểm",
          "Làm mịn da",
          "Tự động hóa quy trình",
        ],
      },
      {
        title: "Freepik",
        price: 1099000,
        period: "Năm / 2 Thiết bị",
        image: "https://play-lh.googleusercontent.com/ssrpBT94LnMy6mgyNbbEj_9SONp8h4lK8HWrN4qR67dyfwIjgNTYJZOSY4ZOL2yC60uY",
        imageSize: "large",
        popular: false,
        features: [
          "Truy cập thư viện tài nguyên thiết kế",
          "Hình ảnh, vector, PSD",
          "Font chữ và icon",
          "Mẫu thiết kế",
        ],
      },
      {
        title: "Capture One",
        price: 1499000,
        period: "Năm / Máy",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Capture_One_New_Logo_.png",
        imageSize: "large",
        popular: false,
        features: [
          "Phần mềm chỉnh sửa ảnh chuyên nghiệp",
          "Xử lý ảnh RAW",
          "Quản lý màu sắc",
          "Công cụ chỉnh sửa nâng cao",
        ],
      },
      {
        title: "Autodesk Full App",
        price: 1099000,
        period: "Năm",
        image: "https://cdn.chiaki.vn/unsafe/0x500/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/news/content/2023/11/ban-quyen-autodesk-all-apps-chinh-chu-chiaki-png-1699499290-09112023100810.png",
        imageSize: "large",
        popular: false,
        features: [
          "Bộ phần mềm thiết kế 3D",
          "AutoCAD, 3ds Max, Maya",
          "Revit, Inventor",
          "Tạo mô hình, dựng hình, animation",
        ],
      },
];

export function PopularSoftwarePricing() {
    return (
        <section id="popularsoftwarepricing" className="py-32 md:py-40">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                        Giá ưu đãi sản phẩm mua Combo (Giá Siêu Rẻ)
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {/* Thêm nội dung mô tả nếu cần */}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-16">
                    {popularSoftwarePlans.map((plan, index) => (
                        <motion.div
                            key={plan.title + index} // Đảm bảo key là duy nhất
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