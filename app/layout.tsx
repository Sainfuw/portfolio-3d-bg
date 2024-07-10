import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - oops.dev",
  description: "Created with next app + tailwind + threejs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen max-w-3xl mx-auto flex flex-col ${inter.className}`}>
          <Header />
          {children}
        </body>
    </html>
  );
}
