'use client'
import Image from "next/image"

export default function CareerPage() {
    return <div className="flex justify-center">
        <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-16 border-1">
                <div className="">
                    <div className="font-bold text-xl">
                        (주)아이쿱
                    </div>
                    <div>
                        2019.03 ~ 2024.12 &#40;5년 10개월&#41;
                    </div>
                    <div className="text-[#888] italic">
                        디지털 헬스케어 플랫폼 개발 및 서비스
                    </div>
                    <div className="text-[#888]">
                        BM개발 2팀 / 팀장
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className="flex items-center gap-1 cursor-pointer group">
                                <Image width={16} height={16} src="/right-arrow.png" alt="right arrow" className="group-hover:w-[20px] transition-all duration-200" />
                                테서랙트 큐브
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div >
}