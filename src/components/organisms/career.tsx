import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";

const career = {
  company: "(주)아이쿱",
  period: "2019.03 – 2024.12",
  duration: "5년 10개월",
  items: [
    "BM개발 2팀 대리 팀장",
    "프로젝트 관리, 프론트엔드 PL, 타 부서 협업",
    "반응형웹, 인터페이스",
  ],
};

export const CareerWrapper = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="04" title="Career" />
      <div className="relative pt-6">
        {/* timeline line */}
        <div className="absolute left-0 right-0 top-[11px] h-px bg-[#3B82F6]/60" />
        {/* timeline dot */}
        <div className="absolute left-8 top-[5px] size-[13px] rounded-full border-2 border-[#3B82F6] bg-[#070B17]" />

        <div className="pt-8">
          <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#111C35] p-5">
            <div className="text-lg font-bold text-white">{career.company}</div>
            <div className="mt-1 text-sm text-[#ccc]">
              {career.period}
              <span className="ml-2 text-[#3B82F6]">{career.duration}</span>
            </div>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-[#ddd]">
              {career.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};
