import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { SocialDialog } from "@/components/shared/SocialDialog";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from 'lucide-react'; // Added import for icons
import { useTheme } from '@/context/ThemeContext'; // Placeholder import


const navItems = [
  { href: "services", label: "Dịch Vụ" },
  { href: "pricing", label: "Bảng Giá Phổ Biến" },
  { href: "pricingtable", label: "AdobeApp"},
  { href: "popularsoftwarepricing", label: "Combo"},
  { href: "guarantees", label: "Cam Kết" },
  { href: "contact", label: "Liên Hệ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const scrollTo = useSmoothScroll();
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  // Scrolled background
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault();
    setTimeout(() => {
      scrollTo(elementId);
      setIsOpen(false);
    }, 100);
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <motion.a
          key={item.href}
          href={`#${item.href}`}
          className="relative text-foreground/70 hover:text-foreground transition-colors font-medium px-2 py-1 rounded-md hover:bg-accent group"
          onClick={(e) => handleNavClick(e, item.href)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="transition-colors duration-300 ease-in-out">{item.label}</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          <div className="absolute -inset-x-2 -inset-y-1 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </motion.a>
      ))}
    </>
  );

  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-primary tracking-tight hover:text-primary/90 transition-colors group">
          <motion.div
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            CC
          </motion.div>
          <span className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors duration-300">Chip & Chill Store</span>
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] flex flex-col gap-6 pt-12">
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="flex flex-col space-y-4 mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={`#${item.href}`}
                        className="text-foreground/80 hover:text-primary px-4 py-2 -mx-4 rounded-md hover:bg-primary/10 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          setTimeout(() => {
                            scrollTo(item.href);
                            setIsOpen(false);
                          }, 100);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                    <div className="mt-6 flex flex-col gap-3"> {/* Added div for theme toggle */}
                      <Button
                        variant="outline"
                        onClick={toggleTheme}
                        className="flex items-center justify-center gap-2"
                      >
                        {theme === 'dark' ? (
                          <>
                            <Sun className="h-5 w-5" />
                            <span>Chế độ sáng</span>
                          </>
                        ) : (
                          <>
                            <Moon className="h-5 w-5" />
                            <span>Chế độ tối</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-8">
            <NavLinks />
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="mr-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <SocialDialog>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 px-6 font-medium"
                    size="lg"
                  >
                    Đăng Ký Ngay
                  </Button>
                </motion.div>
              </SocialDialog>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}