import Link from "next/link"
import React from "react";

interface Props {
    href: string;
    children: React.ReactNode
    colorClasses: string;
}

export const CircledLink = ({ ...props }: Props) => {
    return <Link className={`flex justify-center items-center w-[100px] h-[100px] p-2 rounded-full border-[#888] border-1 ${props.colorClasses} hover:bg-white hover:text-black hover:border-[#ddd] transition-all duration-300`} href={props.href}>
        {props.children}
    </Link>
}