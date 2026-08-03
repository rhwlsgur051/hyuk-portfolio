const stats = [
  { value: "6+", label: "경력" },
  { value: "10+", label: "프로젝트" },
];

export const AboutStats = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-[24px]">
      {stats.map((s) => (
        <div
          key={s.label}
          className="
            flex h-[120px] w-[140px] flex-col items-center justify-center gap-3
            sm:h-[140px] sm:w-[170px] sm:gap-5
            lg:h-[167px] lg:w-[200px] lg:gap-[26px]
            backdrop-blur-md
          "
        >
          <div className="text-lg font-normal text-white lg:text-[#3E5DB2] sm:text-xl lg:text-[26px]">
            {s.label}
          </div>
          <div className="text-3xl font-bold sm:text-4xl lg:text-[40px]">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
};
