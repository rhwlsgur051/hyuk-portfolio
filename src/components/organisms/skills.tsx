import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";
import { SkillBadge } from "../atoms/skill-badge";

type Skill = {
  name: string;
  icon: string;
  color: string;
  src?: string;
};

const skills: Skill[] = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "#FFFFFF" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "React Query", icon: "reactquery", color: "#FF4154" },
  { name: "Redux", icon: "redux", color: "#764ABC" },
  { name: "Zustand", icon: "zustand", color: "#443E38", src: "/icons/zustand.png" },
  { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4" },
  { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
  { name: "NestJS", icon: "nestjs", color: "#E0234E" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "AWS", icon: "amazonwebservices", color: "#FF9900", src: "/icons/aws.svg" },
];

export const SkillsWrapper = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="03" title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </CustomContainer>
  );
};
