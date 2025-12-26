import Link from "next/link"
import React from "react";

interface Props {
    href: string;
    children: React.ReactNode
    active?: boolean;
}

export const BlinkLink = ({ ...props }: Props) => {
    return <Link href={props.href} className="text-[#aaa]" style={{ color: props.active ? '#333' : '', transition: 'all 0.5s' }}>{props.children}</Link>
}