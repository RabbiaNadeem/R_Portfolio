import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: [
      { url: "/bg_rabbianadeem.png", sizes: "128x128", type: "image/png" }
    ],
    apple: "/bg_rabbianadeem.png",
    shortcut: "/bg_rabbianadeem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
