type SkillBadgeProps = {
  name: string;
  icon: string;
  color: string;
  src?: string;
};

export const SkillBadge = ({ name, icon, color, src }: SkillBadgeProps) => {
  const iconSrc =
    src ?? `https://cdn.simpleicons.org/${icon}/${color.replace("#", "")}`;

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111C35] px-3 py-2">
      <img
        src={iconSrc}
        alt=""
        width={16}
        height={16}
        className="size-4 shrink-0 object-contain"
        loading="lazy"
      />
      <span className="text-sm text-white whitespace-nowrap">{name}</span>
    </div>
  );
};
