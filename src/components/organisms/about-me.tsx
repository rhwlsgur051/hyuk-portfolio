import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";
import { AboutStats } from "../molecules/about-stats";

export const AboutMeSection = () => {
  return (
    <CustomContainer className="mt-[26px]">
      <div className="relative flex overflow-hidden lg:gap-[100px]">
        <div className="relative z-10 w-full max-w-[720px]">
          <ContainerTitle number="01" title="About Me" />
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-[80px]">
            <div className="flex flex-col gap-4 font-light sm:gap-5 lg:gap-[20px]">
              <div className="text-lg sm:text-xl lg:text-[24px]">
                사용자 중심의 경험을 기술로 구현합니다.
              </div>
              <div className="text-sm font-thin leading-relaxed sm:text-base lg:text-[18px]">
                6년간 다양한 웹 서비스를 개발하며 사용자에게 더 나은 경험을
                제공하는 것을 목표로 해왔습니다.
                <br />
                좋은 코드와 효율적인 구조를 통해 지속 가능한 서비스를 만드는
                개발자가 되고자 합니다.
              </div>
            </div>
            <AboutStats />
          </div>
        </div>

        <div
          className="
            pointer-events-none absolute right-[-60px] top-1/2 z-0
            w-[min(520px,85vw)] -translate-y-1/2
            lg:relative lg:right-auto lg:top-auto lg:w-auto lg:translate-y-0 lg:shrink-0
          "
        >
          <img
            src="/images/about-me.svg"
            alt=""
            className="h-auto w-full max-w-none opacity-35 lg:max-w-full lg:opacity-100"
          />
          <div className="absolute inset-0 bg-[#070B17]/70 lg:hidden" />
        </div>
      </div>
    </CustomContainer>
  );
};
