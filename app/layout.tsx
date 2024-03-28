import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "800", "900"],
  subsets: ["devanagari"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aabhushan Gautam",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[inter.className, poppins.className, "bg-black"].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
