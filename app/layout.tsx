import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../ui/theme-provider";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay/ClashDisplay-Variable.ttf",
  display: "swap",
  variable: "--font-clashDisplay",
});

export const metadata: Metadata = {
  title: "Arpit Gahlot",
  description: "Made by Arpit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${manrope.className}`}>
        <div className="inset-0 -z-10 background-aurora"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
