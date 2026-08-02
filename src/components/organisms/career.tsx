import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";

const workContents = [
  {
    title: "프로젝트 관리",
    items: ["기획 및 디자인 부서 업무 조율", "프로젝트 일정 조율"],
  },
  {
    title: "개발팀 리드",
    items: ["프로젝트 별 팀원 업무조율", "기술방향 리딩"],
  },
  {
    title: "부서 협업",
    items: ["요구사항 조율 및 서비스 개선 방향 협의"],
  },
];

const Hairline = () => (
  <div className="mx-0 hidden w-px shrink-0 self-stretch bg-[#3E5DB2] opacity-40 md:mx-6 md:block" />
);

export const CareerSection = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="02" title="Career" />
      <div className="flex flex-col">
        <div className="mb-8 flex flex-col gap-3 text-lg sm:mb-[45px] sm:gap-4 sm:text-2xl">
          <div className="font-light">(주)아이쿱</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-bold">
            <div>2019.03-2024.12</div>
            <div className="font-light text-[#3E5DB2]">5년 10개월</div>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-2 text-base sm:mb-8 md:mb-[32px] md:flex-row md:gap-0 md:text-2xl">
          <div className="shrink-0 font-bold md:min-w-[124px]">부서 및 직급</div>
          <Hairline />
          <div className="font-light text-white/90 md:text-inherit">
            BM개발 2팀 팀장 - 대리
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-0">
          <div className="shrink-0 text-base font-bold sm:text-lg md:min-w-[124px] md:text-2xl">
            업무내용
          </div>
          <Hairline />
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[95px]">
            {workContents.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <div className="text-base font-bold sm:text-lg md:text-2xl">
                  {section.title}
                </div>
                <ul className="flex flex-col gap-2 sm:gap-[10px]">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-thin sm:text-base md:text-[18px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};
