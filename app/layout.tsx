import type { Metadata } from "next";
import React from "react";
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Plus_Jakarta_Sans",
});

export const metadata: Metadata = {
  title: "Travelo | Home",
  description: "Go Everywhere",
  icons: {
    icon: "/assets/images/navBrand.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} background-light-dark200 text-dark100_light  container mx-auto overflow-x-hidden`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
