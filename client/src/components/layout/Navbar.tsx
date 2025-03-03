import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { href: "#services", label: "Dịch Vụ" },
  { href: "#pricing", label: "Bảng Giá" },
  { href: "#guarantees", label: "Cam Kết" },
  { href: "#contact", label: "Liên Hệ" },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-primary">
          CloudSpace
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] flex flex-col gap-4 pt-10">
              <NavLinks />
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6">
            <NavLinks />
            <Button className="bg-orange-500 hover:bg-orange-600">
              Đăng Ký Ngay
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}