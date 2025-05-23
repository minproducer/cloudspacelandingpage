
import React, { createContext, useContext, useEffect, useState, useRef } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Thêm biến để kiểm soát nếu người dùng đã tự chọn theme
  const [userPreference, setUserPreference] = useState<boolean>(() => {
    return localStorage.getItem("userPreferredTheme") === "true";
  });
  
  const [theme, setTheme] = useState<Theme>(() => {
    // Lấy theme từ localStorage nếu có
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) return savedTheme;
    
    // Nếu không có theme đã lưu, kiểm tra giờ hệ thống
    const currentHour = new Date().getHours();
    return currentHour >= 17 || currentHour < 6 ? "dark" : "light";
  });

  // Lưu thời gian cuối cùng kiểm tra
  const lastCheckedHour = useRef<number>(new Date().getHours());

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

  // Tự động chuyển theme dựa vào giờ hệ thống chỉ khi người dùng không tự chọn
  useEffect(() => {
    if (userPreference) return; // Không tự động chuyển nếu người dùng đã tự chọn
    
    // Kiểm tra giờ hệ thống mỗi phút
    const intervalId = setInterval(() => {
      const currentHour = new Date().getHours();
      
      // Chỉ thay đổi khi giờ thực sự thay đổi (tránh thay đổi mỗi phút)
      if (currentHour !== lastCheckedHour.current) {
        lastCheckedHour.current = currentHour;
        
        // Nếu sau 17h hoặc trước 6h sáng, chuyển sang dark mode
        if ((currentHour >= 17 || currentHour < 6) && theme !== "dark") {
          setTheme("dark");
        } else if (currentHour >= 6 && currentHour < 17 && theme !== "light") {
          setTheme("light");
        }
      }
    }, 60000); // Kiểm tra mỗi phút

    return () => clearInterval(intervalId);
  }, [theme, userPreference]);

  const toggleTheme = () => {
    // Ghi nhớ rằng người dùng đã tự chọn theme
    setUserPreference(true);
    localStorage.setItem("userPreferredTheme", "true");
    
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
