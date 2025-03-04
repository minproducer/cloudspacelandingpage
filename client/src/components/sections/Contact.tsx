import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Facebook, Mail, MessageSquare, Phone, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com",
    color: "bg-[#1877F2] hover:bg-[#0e65d0]"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "bg-gradient-to-r from-[#fd5949] to-[#d6249f] hover:from-[#e04c3e] hover:to-[#c01e8f]"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "bg-[#1DA1F2] hover:bg-[#0c85d0]"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "bg-[#0A66C2] hover:bg-[#0856a2]"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com",
    color: "bg-[#FF0000] hover:bg-[#d90000]"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kết Nối Với Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật thông tin mới nhất và nhận hỗ trợ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Mạng Xã Hội</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Button
                    className={`w-full ${social.color} text-white`}
                    size="lg"
                  >
                    <social.icon className="h-5 w-5 mr-2" />
                    {social.name}
                  </Button>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</h3>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Điện Thoại</h3>
                  <p className="text-muted-foreground">(028) 1234-5678</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">hotro@cloudspace.com</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Chat Trực Tuyến</h3>
                  <p className="text-muted-foreground">Hỗ trợ 24/7</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}