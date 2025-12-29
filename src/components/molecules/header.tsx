'use client';
import { usePathname } from "next/navigation";

export const Header = () => {
  return <nav className="px-6 py-3 bg-[#ffffff] flex font-bold text-base sticky w-full top-0 z-10 border-b-[1px] border-[#ddd]">
    <div className="flex gap-1 mb-1">
      <div className="flex flex-col">
        <div className="text-xl font-bold">고진혁</div>
        <div className="text-sm text-[#aaa]">6년차 프론트엔드 개발자</div>
      </div>
    </div>
  </nav>
}

