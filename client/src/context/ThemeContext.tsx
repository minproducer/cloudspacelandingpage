
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Lấy theme từ localStorage nếu có
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) return savedTheme;
    
    // Nếu không có theme đã lưu, kiểm tra giờ hệ thống
    const currentHour = new Date().getHours();
    return currentHour >= 17 || currentHour < 6 ? "dark" : "light";
  });

  useEffect(() => {
    // Lưu theme vào localStorage khi thay đổi
    localStorage.setItem("theme", theme);
    
    // Cập nhật class cho document.documentElement
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Tự động chuyển theme dựa vào giờ hệ thống
  useEffect(() => {
    // Kiểm tra giờ hệ thống mỗi phút
    const intervalId = setInterval(() => {
      const currentHour = new Date().getHours();
      // Nếu sau 17h hoặc trước 6h sáng, chuyển sang dark mode
      if ((currentHour >= 17 || currentHour < 6) && theme !== "dark") {
        setTheme("dark");
      } else if (currentHour >= 6 && currentHour < 17 && theme !== "light") {
        setTheme("light");
      }
    }, 60000); // Kiểm tra mỗi phút

    return () => clearInterval(intervalId);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
