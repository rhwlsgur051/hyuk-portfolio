import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";
import { AboutStats } from "../molecules/about-stats";

export const AboutMeSection = () => {
  return (
    <section className="relative mt-[26px] h-[620px] overflow-x-hidden">
      <CustomContainer className="h-full">
        <div className="relative z-10 flex h-full lg:gap-[100px]">
          <div className="w-full max-w-[720px]">
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

          <div className="hidden max-w-[595px] shrink-0 self-center lg:block">
            <img
              src="/images/about-me.svg"
              alt=""
              className="h-auto w-full max-w-none"
            />
          </div>
        </div>
      </CustomContainer>

      {/* 모바일/태블릿: PC와 동일 595px, 화면 중앙 */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:hidden">
        <img
          src="/images/about-me.svg"
          alt=""
          className="h-auto w-80 max-w-[595px] brightness-50"
        />
      </div>
    </section>
  );
};
