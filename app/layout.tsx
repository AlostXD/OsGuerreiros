import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Add desired font weights
});

export const metadata: Metadata = {
  title: "Os Guerreiros - Entre nesta batalha!",
  icons: {
    shortcut: "/logo.webp"
  },
  description: "Site da Streaming Network Os Guerreiros, entre nesta batalha!",
  keywords: [
    "Os Guerreiros",
    "streaming network",
    "streamers",
    "streaming",
    "games",
    "gaming",
    "comunidade",
    "comunidade gamer"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-800 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
