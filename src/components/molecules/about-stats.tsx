const stats = [
  { value: "6+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Passion" },
];

export const AboutStats = () => {
  return (
    <div className="grid grid-cols-3 rounded-xl border border-white/10 bg-[#111C35] px-16 py-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-1">
          <div className="text-3xl font-bold text-[#3B82F6]">{s.value}</div>
          <div className="text-sm text-[#ccc]">{s.label}</div>
        </div>
      ))}
    </div>
  );
};
