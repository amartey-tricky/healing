import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </NextThemeProvider>
  );
};
