import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Jeda - Automated Video Silence Detection & Cutting",
  description: "Jeda automatically detects and removes silent sections from your videos. Perfect for creating tight, engaging silent cuts or away messages compilations. Free download for macOS & Windows.",
  keywords: ["video editor", "silence detection", "video cutting", "automated video editing", "electron app", "macOS", "Windows"],
  authors: [{ name: "Jeda" }],
  openGraph: {
    title: "Jeda - Cut the Silence. Keep the Content.",
    description: "Automatically detect and remove silent sections from your videos. Perfect for creating tight, engaging silent cuts.",
    type: "website",
    locale: "en_US",
    siteName: "Jeda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeda - Automated Video Silence Detection & Cutting",
    description: "Automatically detect and remove silent sections from your videos. Free download for macOS & Windows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-[100dvh]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}