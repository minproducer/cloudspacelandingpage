import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Vui lòng nhập email hợp lệ"),
  phone: z.string().min(10, "Vui lòng nhập số điện thoại hợp lệ"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({
      title: "Đã Gửi Tin Nhắn",
      description: "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!",
    });
    form.reset();
  };

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
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bạn có thắc mắc? Chúng tôi luôn sẵn sàng hỗ trợ mọi nhu cầu về lưu trữ và sáng tạo của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Họ Tên</FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập họ tên của bạn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số Điện Thoại</FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập số điện thoại của bạn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tin Nhắn</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Bạn cần hỗ trợ gì?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Gửi Tin Nhắn
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
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