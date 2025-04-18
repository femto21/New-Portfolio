import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Portfolio",
  description: "Made by Arpit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-purple-950 opacity-20 blur-3xl"></div>
          <div className="absolute right-[-10rem] bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-800 opacity-10 blur-3xl"></div>
          <div className="absolute left-[50%] top-[50%] h-[40rem] w-[40rem] -translate-x-3/12 -translate-y-7/12 rounded-full bg-pink-800 opacity-10 blur-[100px]"></div>
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
