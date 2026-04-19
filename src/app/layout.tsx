import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeda - Automated Video Silence Detection & Cutting",
  description: "Desktop application for automated video silence detection and cutting. Built with Electron + React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-[100dvh]">{children}</body>
    </html>
  );
}