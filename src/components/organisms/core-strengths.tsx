import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";

const strengths = [
  {
    emoji: "🚀",
    title: "Product Mindset",
    lines: ["SI가 아닌 플랫폼", "서비스를 개발"],
  },
  {
    emoji: "⚡",
    title: "Full Stack",
    lines: ["React + Node.js", "MongoDB 경험"],
  },
  {
    emoji: "💡",
    title: "Problem Solving",
    lines: ["사용자 경험과", "유지보수를 고려"],
  },
];

export const CoreStrengthsWrapper = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="02" title="Core Strengths" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {strengths.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/10 bg-[#111C35] p-6"
          >
            <div className="mb-3 text-lg font-bold text-white">
              <span className="mr-2">{item.emoji}</span>
              {item.title}
            </div>
            <div className="space-y-0.5 text-sm text-[#ccc]">
              {item.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CustomContainer>
  );
};
