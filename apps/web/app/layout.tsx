import type { Metadata } from "next";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import localFont from "next/font/local";
import "./globals.css";
import AppLayout from "./components/AppLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pilot Study CMS",
  description: "Content Management System for Ayurvedic Medicine Database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <AppLayout>{children}</AppLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
