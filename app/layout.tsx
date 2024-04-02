import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Plus_Jakarta_Sans",
});

export const metadata: Metadata = {
  title: "Travelo",
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
      <body className={`${jakarta.variable}`}>
        <h1 className="h1-bold">this is a pice of text</h1>
        {children}
      </body>
    </html>
  );
}
