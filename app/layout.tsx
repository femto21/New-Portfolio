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
        {/* <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-purple-400/30 opacity-20 blur-3xl"></div>
          <div className="absolute right-[-10rem] bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-400/30 opacity-20 blur-3xl"></div>
          <div className="absolute left-[50%] top-[50%] h-[40rem] w-[40rem] -translate-x-3/12 -translate-y-7/12 rounded-full bg-pink-400/30 opacity-20 blur-[100px]"></div>
        </div> */}
        {/* <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#FFB457] via-[#FF705B] to-[#A855F7] opacity-90"></div> */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 40%),
      radial-gradient(rgb(192, 132, 252) 30%, rgb(244, 114, 182), rgba(244, 114, 182, 0.4) 41%, transparent 52%),
      radial-gradient(rgb(147, 51, 234) 37%, transparent 46%),
      linear-gradient(155deg, transparent 65%, rgb(59, 130, 246) 95%),
      linear-gradient(45deg, rgb(99, 102, 241), rgb(139, 92, 246))
    `,
            backgroundPosition:
              "left bottom, 109% 68%, 109% 68%, center center, center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "200% 200%, 285% 500%, 285% 500%, cover, cover",
            opacity: 0.17,
          }}
        ></div>

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
