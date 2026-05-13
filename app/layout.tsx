import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Tomo Japanese Restaurant | Atlanta",
  description: "Tomo Japanese Restaurant is an Upscale Japanese Restaurant recommended by Michelin Guide of Atlanta serving authentic Japanese cuisine using only the finest ingredients available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
