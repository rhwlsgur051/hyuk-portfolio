'use client';
import { BlinkLink } from "../atoms/blink-link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const menus = [
    { href: "/", title: "About" },
    { href: "/career", title: "Career" },
    { href: "/skills", title: "Skills" }
  ];

  return <nav className="px-6 py-4 bg-[#ffffff] flex font-bold text-2xl justify-between sticky w-full top-0 z-10 border-b-[1px] border-[#ddd]">
    <div className="flex gap-8 max-md:hidden">
      {
        menus.map(menu => (
          <BlinkLink key={menu.href} href={menu.href} active={pathname === menu.href}>
            {menu.title}
          </BlinkLink>
        ))}
    </div>
    <div className="min-md:hidden">
      ---
    </div>
  </nav >
}
