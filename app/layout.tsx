import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { SEO_DEFAULTS } from "@/lib/constants";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.title,
    template: `%s | ${SEO_DEFAULTS.title}`,
  },
  description: SEO_DEFAULTS.description,
  keywords: [
    "SaaS",
    "Starter Kit",
    "AI",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://yourwebsite.com",
    },
  ],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO_DEFAULTS.url,
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    siteName: SEO_DEFAULTS.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
