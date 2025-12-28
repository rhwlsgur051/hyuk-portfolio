import Link from "next/link"
import React from "react";

interface Props {
    href: string;
    children: React.ReactNode
    active?: boolean;
}

export const BlinkLink = ({ ...props }: Props) => {
    return <Link href={props.href} className={`text-[#aaa] hover:text-[#333] transition-all duration-300`} style={{ color: props.active ? '#333' : '' }}>{props.children}</Link>
}