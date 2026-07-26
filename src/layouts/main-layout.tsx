'use client';
import { Header } from "../components/molecules/header";
import {
    HeroUIProvider
} from "@heroui/react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {

    return <>
        <HeroUIProvider>
            <Header />
            <div id="content-container" className="&:first-child-[p-10]">
                {children}
            </div>
        </HeroUIProvider>
    </>
}