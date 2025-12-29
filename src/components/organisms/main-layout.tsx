'use client';
import { Header } from "../molecules/header";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    HeroUIProvider
} from "@heroui/react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return <>
        <HeroUIProvider>
            <Header />
            <div id="content-container" className="&:first-child-[p-10]">
                {children}
            </div>
        </HeroUIProvider>
    </>
}