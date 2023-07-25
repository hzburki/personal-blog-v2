import "./globals.css";
import type { Metadata } from "next";

// Importing Google Fonts
import { Nunito } from "next/font/google";

const nunito = Nunito({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "hzburki",
  description: "Personal website and blog of Haseeb Zia Burki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito`}>{children}</body>
    </html>
  );
}
