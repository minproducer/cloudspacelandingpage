import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export function ServiceCard({ title, description, icon: Icon, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl group border-2">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <CardHeader className="pt-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-2xl tracking-tight">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}