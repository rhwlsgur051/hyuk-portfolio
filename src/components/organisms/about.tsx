import { ContainerTitle } from "../atoms/container-title"
import { CustomContainer } from "../atoms/custom-container"
import { AboutStats } from "../molecules/about-stats"

export const AboutWrapper = () => {
    return <CustomContainer>
        <ContainerTitle number="01" title="About Me" />
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex flex-col gap-[20px]">
                <div className="text-2xl md:text-4xl">
                    사용자 중심의 경험을<br />기술로 구현합니다.
                </div>
                <div className="text-[#bbb] text-sm md:text-md">
                    6년간 다양한 웹 서비스를 개발하며 사용자에게<br />
                    더 나은 경험을 제공하는 것을 목표로 해왔습니다.
                    <br />
                    좋은 코드와 효율적인 구조를 통해 지속 가능한<br />
                    서비스를 만드는 개발자가 되고자 합니다.
                </div>
            </div>
            <AboutStats />
        </div>
    </CustomContainer>
}
