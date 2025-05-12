"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export function ThemeProvider({ children, ...props }: any) {
  const { theme } = useTheme();

  useEffect(() => {
    // تغيير صورة الخلفية بناءً على الثيم
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.style.backgroundImage = "url('/png/darkb.svg')";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundImage = "url('/png/light.svg')";
    }
  }, [theme]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
