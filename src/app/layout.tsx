import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/molecules/header";

const NotoSans = Noto_Sans();

export const metadata: Metadata = {
  title: "고진혁 이력서",
  description: "6년차 프론트엔드 개발자입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSans.className} antialiased text-lg font-[500]`}
      >
        <Header />
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
