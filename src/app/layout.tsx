import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/layouts/main-layout";
import { ReduxProvider } from "@/stores/redux-provider";
import { ModalContainer } from "@/components/modals";

const NotoSans = Noto_Sans();

export const metadata: Metadata = {
  title: "고진혁 | 프론트엔드 개발자",
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
            className={`${NotoSans.className} antialiased font-[500]`}
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
