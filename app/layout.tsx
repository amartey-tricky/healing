import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/themeProvider";
import { inter } from "@/components/fonts";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Ambrose Togobo",
  description: "Website for Dr. Ambrose Togobo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
