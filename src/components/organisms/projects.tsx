"use client";

import { onOpenModal } from "@/stores/modal-slice";
import { useDispatch } from "react-redux";
import { ReactNode } from "react";
import { CareerTesseractCube } from "../templates/career-tesseract-cube";
import { CareerIkoobConference } from "../templates/career-ikoob-conference";
import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";

type Project = {
  title: string;
  description: string;
  techs: string[];
  bullets: string[];
  imageLabel: string;
  imageSrc?: string;
  modalTitle: string;
  modalComponent: ReactNode;
};

const projects: Project[] = [
  {
    title: "테서랙트 큐브",
    description: "의료인 대상 온라인 강의 플랫폼",
    techs: ["Next.js", "React", "TypeScript", "TanStack Query", "AWS"],
    bullets: [
      "프론트엔드 개발 리드 · SSR 아키텍처 설계",
      "HLS 스트리밍·Refresh Token으로 보안 강화",
      "회사 최초 서비스형 플랫폼으로 신규 수익 모델 기여",
    ],
    imageLabel: "Tesseract Cube",
    imageSrc: "/projects/tesseract-cube.png",
    modalTitle: "📌 프로젝트 소개",
    modalComponent: <CareerTesseractCube />,
  },
  {
    title: "아이쿱 컨퍼런스",
    description: "대규모 온라인 학술/국제 컨퍼런스 플랫폼",
    techs: ["React", "Angular", "Node.js", "MongoDB", "Vimeo"],
    bullets: [
      "Angular → React 전환 리드 · 납품 기간 약 2주 단축",
      "관리자 페이지 리팩토링으로 민원 처리 속도 80% 개선",
      "대규모 행사 스트리밍·부하 테스트·장애 대응 운영",
    ],
    imageLabel: "iKooB Conference",
    imageSrc: "/projects/ikoob-conference.png",
    modalTitle: "📌 프로젝트 소개",
    modalComponent: <CareerIkoobConference />,
  },
];

export const ProjectsWrapper = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="05" title="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </CustomContainer>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111C35] text-left transition-colors hover:border-[#3B82F6]/40"
      onClick={() =>
        dispatch(
          onOpenModal({
            title: project.modalTitle,
            component: project.modalComponent,
          }),
        )
      }
    >
      <div className="flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2744] to-[#0d1424] sm:h-52">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.title}
            className="size-full object-cover object-top"
          />
        ) : (
          <span className="text-sm font-medium tracking-wide text-white/40">
            {project.imageLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-xl font-bold text-white">{project.title}</div>
        <div className="text-sm text-[#ccc]">{project.description}</div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#94a3b8]">
          {project.techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <ul className="mt-1 space-y-1.5 text-sm text-[#ddd]">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex justify-end pt-2">
          <span className="text-lg text-[#3B82F6] transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </button>
  );
};
