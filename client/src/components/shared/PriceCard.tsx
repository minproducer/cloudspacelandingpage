import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { SocialDialog } from "@/components/shared/SocialDialog";

interface PriceTier {
  name: string;
  price: number;
  period?: string;
}

interface PriceCardProps {
  title: string;
  icon: LucideIcon;
  image?: string;
  imageSize?: 'small' | 'medium' | 'large'; // Thêm tùy chọn kích thước
  price?: number;
  period?: string;
  tiers?: PriceTier[];
  features: string[];
  popular?: boolean;
}

// Helper function to format price in VND
function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN').format(price);
}

export function PriceCard({ 
  title, 
  icon: Icon, 
  image,
  imageSize = 'medium',
  price, 
  period = "tháng",
  tiers,
  features,
  popular
}: PriceCardProps) {
  return (
    <Card className={`relative transition-all duration-300 hover:border-primary/50 ${popular ? 'border-primary shadow-xl scale-[1.02]' : 'hover:shadow-lg'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
          Phổ Biến Nhất
        </div>
      )}

      <CardHeader className="text-center pb-6">
        {image ? (
          <div className="flex justify-center mb-6">
            <img 
              src={image} 
              alt={title} 
              className={`w-auto object-contain transition-transform hover:scale-105 ${
                imageSize === 'small' ? 'h-14' : 
                imageSize === 'large' ? 'h-24' : 
                imageSize === 'extra-large' ? 'h-30' : 'h-20'
              }`} 
            />
          </div>
        ) : (
          <div className="flex justify-center mb-6">
            <div className={`p-3 rounded-xl ${popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
              <Icon className="h-8 w-8" />
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      </CardHeader>

      <CardContent>
        {tiers ? (
          <div className="space-y-4 mb-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
              >
                <span className="font-medium text-lg">{tier.name}</span>
                <span className="text-primary font-bold text-lg">
                  {formatPrice(tier.price)}đ
                  <span className="text-sm text-muted-foreground">/{tier.period || period}</span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-primary">
              {formatPrice(price || 0)}đ
              <span className="text-xl text-muted-foreground ml-1">/{period}</span>
            </div>
          </div>
        )}

        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className={`p-0.5 rounded-full ${popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                <Check className="h-4 w-4" />
              </div>
              <span className="text-muted-foreground text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        <SocialDialog>
          <Button
            className={`w-full h-12 text-lg font-medium ${popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
          >
            Đăng Ký Ngay
          </Button>
        </SocialDialog>
      </CardContent>
    </Card>
  );
}