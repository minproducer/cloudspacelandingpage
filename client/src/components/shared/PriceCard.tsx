import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface PriceTier {
  name: string;
  price: number;
}

interface PriceCardProps {
  title: string;
  icon: LucideIcon;
  price?: number;
  period?: string;
  tiers?: PriceTier[];
  features: string[];
  popular?: boolean;
}

export function PriceCard({ 
  title, 
  icon: Icon, 
  price, 
  period = "month",
  tiers,
  features,
  popular
}: PriceCardProps) {
  return (
    <Card className={`relative ${popular ? 'border-primary shadow-lg' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </CardHeader>

      <CardContent>
        {tiers ? (
          <div className="space-y-3 mb-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium">{tier.name}</span>
                <span className="text-primary font-bold">
                  ${tier.price}/{period}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-6">
            <div className="text-4xl font-bold">
              ${price}
              <span className="text-lg text-muted-foreground">/{period}</span>
            </div>
          </div>
        )}

        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
