import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/molecules/header";
import Image from "next/image";

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
        <div className="p-4 max-md:p-8">
          <div className="flex gap-1 items-center mb-1">
            <div className="flex flex-col">
              <div className="text-2xl font-bold">고진혁</div>
              <div className="text-[#aaa]">6년차 프론트엔드 개발자</div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
