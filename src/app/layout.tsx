import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shorter Link",
  description: "Shorter Link is a simple URL shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-adsense-account" content="ca-pub-2654090019837491" /></head>  
      <body
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
