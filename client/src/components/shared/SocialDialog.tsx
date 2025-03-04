
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { ReactNode } from "react";

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

interface SocialDialogProps {
  children: ReactNode;
  buttonText?: string;
}

export function SocialDialog({ children, buttonText = "Đăng ký ngay" }: SocialDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Theo dõi Chip&Chill Store</DialogTitle>
          <DialogDescription>
            Kết nối với chúng tôi trên các mạng xã hội để nhận thông tin mới nhất và ưu đãi độc quyền!
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
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
      </DialogContent>
    </Dialog>
  );
}
