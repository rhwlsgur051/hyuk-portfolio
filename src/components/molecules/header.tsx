'use client';
import { useEffect } from "react"
import { BlinkLink } from "../atoms/blink-link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const menus = [
    { href: "/", title: "About" },
    { href: "/career", title: "Career" },
    { href: "/skills", title: "Skills" }
  ];

  useEffect(() => {
    console.log('in');
  }, []);


  return <nav className="px-6 py-4 bg-[#ffffff] flex font-bold text-2xl justify-between sticky w-full top-0 z-10">
    <i className="text-[#777]">고진혁 프론트엔드</i>
    <div className="flex gap-8 max-md:hidden">
      {
        menus.map(menu => (
          <BlinkLink key={menu.href} href={menu.href} active={pathname === menu.href}>
            {menu.title}
          </BlinkLink>
        ))}
    </div>
    <div className="min-md:hidden">
      hi.
    </div>
  </nav >
}
