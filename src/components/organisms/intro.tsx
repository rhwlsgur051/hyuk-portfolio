import { CustomContainer } from "../atoms/custom-container"

export const IntroComponent = () => {
    return <div className="px-8 flex bg-[url('/bg-hero.png')] bg-cover bg-center bg-no-repeat
    h-[480px] sm:h-[640px] items-center
    ">
        <CustomContainer>
            <div className="flex flex-col gap-3">
                <div className="font-bold text-4xl sm:text-[50px]">
                    Frontend Developer<br />
                    고진혁
                </div>
                <div className="text-[#ccc] text-sm">
                    사용자 경험을 고민하고, <div className="block sm:hidden"></div>더 나은 내일을 만드는 개발자
                </div>
            </div>
        </CustomContainer>
    </div>
}