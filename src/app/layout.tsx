import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caliber6",
  description: "Empowering Businesses Through Strategic Digital Solutions",
};
const CustomCursor = dynamic(
  () => {
    return import("@/components/CustomCursor");
  },
  { ssr: false }
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body className={inter.className + "w-full  lg:pl-24 lg:pr-24"}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
