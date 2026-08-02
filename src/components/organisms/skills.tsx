import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";
import { SkillBadge } from "../atoms/skill-badge";

type Skill = {
  name: string;
  icon: string;
  color: string;
  src?: string;
};

export const skills: Record<string, Skill> = {
  React: { name: "React", icon: "react", color: "#61DAFB" },
  "Next.js": { name: "Next.js", icon: "nextdotjs", color: "#FFFFFF" },
  TypeScript: { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  JavaScript: { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  "React Query": { name: "React Query", icon: "reactquery", color: "#FF4154" },
  Redux: { name: "Redux", icon: "redux", color: "#764ABC" },
  Zustand: {
    name: "Zustand",
    icon: "zustand",
    color: "#443E38",
    src: "/icons/zustand.png",
  },
  Tailwind: { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  "Node.js": { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
  NestJS: { name: "NestJS", icon: "nestjs", color: "#E0234E" },
  MongoDB: { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  AWS: {
    name: "AWS",
    icon: "amazonwebservices",
    color: "#FF9900",
    src: "/icons/aws.svg",
  },
};

const frontendGroup = { name: 'Frontend', skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Query", "Redux", "Zustand", "Tailwind"] }
const backendGroup = { name: 'Backend', skills: ["Node.js", "NestJS", "MongoDB"] };
const infraGroup = { name: 'Infra', skills: ["AWS"] };

const groups = [frontendGroup, backendGroup, infraGroup];

export const SkillsSection = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="03" title="Skills" />
      <div className="flex flex-col gap-[32px]">
        {groups.map((group) => (
          <div key={group.name} className="flex flex-col gap-[16px]">
            <div className="font-light text-[24px]">{group.name}</div>
            <div className="flex flex-wrap gap-[8px]">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} {...skills[skill]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </CustomContainer>
  );
};
