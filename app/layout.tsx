// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  metadataBase: new URL("https://www.mirrrofilms.com"),

  title: "Mirrro Films",
  description: "Cinema • Stories • Visual Poetry",

  alternates: {
    canonical: "https://www.mirrrofilms.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
