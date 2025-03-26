import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FacebookIcon, YoutubeIcon } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { ReactNode } from "react";

const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://facebook.com/chipandchillstore",
    color: "bg-[#1877F2] hover:bg-[#0e65d0]",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    url: "https://youtube.com/@minproducer_yt",
    color: "bg-[#FF0000] hover:bg-[#d90000]",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    url: "https://tiktok.com/@minproducer_tiktok",
    color: "bg-[#000] hover:bg-[#333]",
  },
];

interface SocialDialogProps {
  children: ReactNode;
  buttonText?: string;
}

export function SocialDialog({
  children,
  buttonText = "Đăng ký ngay",
}: SocialDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Theo dõi Chip & Chill Store</DialogTitle>
          <DialogDescription>
            Kết nối với chúng tôi trên các mạng xã hội để nhận thông tin mới
            nhất và ưu đãi độc quyền!
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
              <Button className={`w-full ${social.color} text-white`} size="lg">
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