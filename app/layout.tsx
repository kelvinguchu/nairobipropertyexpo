import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nairobi Property Expo 2025",
  description:
    "Join us for the Nairobi Property Expo, the leading event for the property industry in Kenya. Discover the latest trends, innovations, and opportunities in the real estate sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`antialiased ${playfair.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        <div className='pt-16'>{children}</div>
      </body>
    </html>
  );
}
