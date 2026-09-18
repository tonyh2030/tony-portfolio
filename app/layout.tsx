import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getContent } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const { profile } = getContent("ko");

export const metadata: Metadata = {
  title: `${profile.brandName} — ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
