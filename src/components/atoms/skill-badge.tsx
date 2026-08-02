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
    <div className="inline-flex items-center gap-2 rounded-sm border border-[#0F1830] bg-[#070B17] px-3 py-2">
      <img
        src={iconSrc}
        alt=""
        width={16}
        height={16}
        className="size-4 shrink-0 object-contain"
        loading="lazy"
      />
      <span className="text-sm whitespace-nowrap">{name}</span>
    </div>
  );
};
