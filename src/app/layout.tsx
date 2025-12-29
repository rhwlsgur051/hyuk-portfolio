import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/organisms/main-layout";
import { ReduxProvider } from "@/stores/redux-provider";
import { ModalContainer } from "@/components/modals";

const NotoSans = Noto_Sans();

export const metadata: Metadata = {
  title: "고진혁 포트폴리오",
  description: "6년차 프론트엔드 개발자입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
          <body
            className={`${NotoSans.className} antialiased text-sm font-[500]`}
          >
            <MainLayout>
              {children}
            </MainLayout>
            <ModalContainer />
          </body>
      </ReduxProvider>
    </html>
  );
}
