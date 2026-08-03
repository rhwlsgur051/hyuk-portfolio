"use client";

import { useState } from "react";
import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";
import { SkillBadge } from "../atoms/skill-badge";
import { ScreenPreview } from "../molecules/screen-preview";
import { skills } from "./skills";

type PreviewImage = { src: string; alt: string };

type ListSection = {
  title: string;
  type: "list";
  items: string[];
};

type PreviewSection = {
  title: string;
  type: "preview";
  images: PreviewImage[];
};

type ContentSection = ListSection | PreviewSection;

type Project = {
  id: string;
  title: string;
  logoSrc: string;
  overlayLogoSrc?: string;
  subTitle1: string;
  subTitle2: string;
  thumbnail: string;
  techs: string[];
  summary: { label: string; value: React.ReactNode }[];
  sections: ContentSection[];
};

const tesseractRoles = [
  "프론트엔드 개발 리드",
  "프론트엔드 아키텍처 설계 및 구현",
  "공통 컴포넌트 및 페이지 개발",
  "Next.js 기반 SSR 환경 구축",
];

const tesseractAchievements = [
  "HLS 기반 스트리밍 플레이어를 구현하여 영상 URL 은닉 및 보안 강화",
  "Next.js Middleware를 활용해 PC / 모바일 도메인 분리 운영",
  "SSR 환경에서 API 연동 구조를 개선하여 초기 렌더링 안정성 확보",
  "Refresh Token 기반 인증 모듈을 구현하여 사용자 인증 보안 개선",
];

const tesseractDecisions = [
  "AWS Amplify를 활용한 테스트 환경을 구축하여 QA 사이클 단축",
  "EC2 기반 SSR 서버를 구성하여 안정적인 서버사이드 렌더링 환경 구축",
  "PC/모바일 코드를 분리 운영하여 장애 발생 시 빠른 대응이 가능하도록 설계",
];

const tesseractPreviews: PreviewImage[] = [
  {
    src: encodeURI("/projects/screenshots/tesseract/tesseractors.com_ (1).png"),
    alt: "테서랙트 큐브 메인",
  },
  {
    src: encodeURI("/projects/screenshots/tesseract/tesseractors.com_ (2).png"),
    alt: "테서랙트 큐브 화면",
  },
  {
    src: "/projects/screenshots/tesseract/tesseractors.com_lectures.png",
    alt: "테서랙트 큐브 강의 목록",
  },
  {
    src: encodeURI(
      "/projects/screenshots/tesseract/tesseractors.com_lectures (1).png",
    ),
    alt: "테서랙트 큐브 강의 상세",
  },
];

const conferenceRoles = [
  "프론트엔드 개발 및 운영",
  "React 전환(리팩토링) 주도",
  "React 사내 표준 도입 및 신규 기능 개발",
  "Node.js 기반 백엔드 개발 참여",
  "행사 당일 실시간 모니터링 및 장애 대응",
];

const conferenceAchievements = [
  "Angular 기반 서비스를 React로 리팩토링하여 유지보수성과 신규 기능 개발 생산성 향상",
  "Vimeo 기반 영상 저장·재생 구조를 설계하여 대규모 동시 시청 환경에서도 안정적인 스트리밍 제공",
  "사용자 시청 기록, 광고 클릭, 전시 데이터 조회 등 행동 데이터 산출 로직 구현",
  "고객사의 행사 후 분석 및 리포트 제공 정확도 향상",
  "관리자 페이지 리팩토링을 통해 행사 민원 처리 속도 약 80% 개선",
];

const conferenceDecisions = [
  "React를 사내 표준으로 도입하여 신규 프로젝트 생산성과 유지보수성 향상",
  "AWS ECS 기반 환경에서 부하 테스트(JMeter)를 수행하여 행사 전 안정성 검증",
  "행사 당일 실시간 모니터링 체계를 운영하여 트래픽 급증 및 장애에 신속 대응",
  "백엔드(Node.js) 개발에도 참여하여 프론트엔드와 API 간 협업 효율 향상",
];

const conferencePreviews: PreviewImage[] = [
  {
    src: "/projects/screenshots/conference/ICA2021_3.png",
    alt: "ICA 2021 세계협동조합대회",
  },
  {
    src: "/projects/screenshots/conference/ICDM2022_3.png",
    alt: "ICDM 2022 화면",
  },
  {
    src: "/projects/screenshots/conference/ICDM2022_7.png",
    alt: "ICDM 2022 상세",
  },
  {
    src: encodeURI(
      "/projects/screenshots/conference/i_SENS 당뇨인의날 행사1.png",
    ),
    alt: "i-SENS 당뇨인의날 행사",
  },
];

const projects: Project[] = [
  {
    id: "tesseract",
    title: "TESSERACT CUBE",
    logoSrc: "/images/logo-tesseract.svg",
    overlayLogoSrc: "/images/logo-tesseract-w.svg",
    subTitle1: "테서랙트 큐브",
    subTitle2: "의료인 대상 온라인 강의 플랫폼",
    thumbnail: "/projects/tesseract-cube.png",
    techs: ["Next.js", "React", "TypeScript", "React Query", "Tailwind", "AWS"],
    summary: [
      { label: "개발 기간", value: "8개월 (2023.09 - 2024.04)" },
      {
        label: "팀 구성",
        value: "프론트엔드 2 / 백엔드 1 / 퍼블리셔 1 / 디자이너 1",
      },
      { label: "기여도", value: "80%" },
      {
        label: "바로가기",
        value: (
          <a
            href="https://tesseractors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity hover:opacity-80"
          >
            테서랙트 홈페이지
          </a>
        ),
      },
    ],
    sections: [
      { title: "담당 업무", type: "list", items: tesseractRoles },
      { title: "기술적 성과", type: "list", items: tesseractAchievements },
      { title: "주요 의사결정", type: "list", items: tesseractDecisions },
      { title: "프리뷰", type: "preview", images: tesseractPreviews },
    ],
  },
  {
    id: "conference",
    title: "iKooB CONFERENCE",
    logoSrc: "/images/logo-cf.svg",
    subTitle1: "아이쿱 컨퍼런스",
    subTitle2: "대규모 온라인 학술/국제 컨퍼런스 플랫폼",
    thumbnail: "/projects/ikoob-conference.png",
    techs: ["React", "TypeScript", "React Query", "Node.js", "MongoDB", "AWS"],
    summary: [
      { label: "참여 기간", value: "2018 ~ 2024" },
      {
        label: "팀 구성",
        value: "프론트엔드 2 / 백엔드 1 / 퍼블리셔 1 / 디자이너 1",
      },
      { label: "기여도", value: "80%" },
      {
        label: "기사",
        value: (
          <a
            href="https://www.monews.co.kr/news/articleView.html?idxno=210451"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity hover:opacity-80"
          >
            국내 첫 온라인 학술대회 개최
          </a>
        ),
      },
    ],
    sections: [
      { title: "담당 업무", type: "list", items: conferenceRoles },
      { title: "기술적 성과", type: "list", items: conferenceAchievements },
      { title: "주요 의사결정", type: "list", items: conferenceDecisions },
      { title: "프리뷰", type: "preview", images: conferencePreviews },
    ],
  },
];

const ProjectDetail = ({ project }: { project: Project }) => (
  <div className="flex flex-col gap-5 sm:gap-8">
    <div className="flex flex-col gap-3 sm:gap-4">
      <img
        src={project.logoSrc}
        alt={project.title}
        className="h-7 w-auto self-start sm:h-8 md:h-10"
      />
      <div className="flex flex-col gap-1 text-base sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1 sm:text-xl md:text-[32px]">
        <span className="font-bold">{project.subTitle1}</span>
        <span className="font-light text-white/90 sm:text-inherit">
          {project.subTitle2}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech) =>
          skills[tech] ? (
            <SkillBadge key={tech} {...skills[tech]} />
          ) : (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#111C35] px-3 py-2 text-sm text-white"
            >
              {tech}
            </span>
          ),
        )}
      </div>
    </div>

    <div className="flex flex-col gap-2 rounded-sm bg-[#070B17] p-3 text-sm sm:gap-3 sm:p-[18px] sm:text-base md:text-[18px]">
      {project.summary.map((row) => (
        <div key={row.label} className="flex gap-3 font-light sm:gap-8">
          <div className="w-16 shrink-0 sm:w-20">{row.label}</div>
          <div className="min-w-0 break-words">{row.value}</div>
        </div>
      ))}
    </div>

    {project.sections.map((section) => (
      <div key={section.title} className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <div className="text-base font-bold sm:text-lg md:text-[24px]">
            {section.title}
          </div>
          {section.type === "preview" && (
            <div className="text-xs text-[#ccc]">클릭 시 확대</div>
          )}
        </div>
        {section.type === "list" ? (
          <ul className="flex flex-col rounded-sm bg-[#070B17] p-3 sm:p-[18px]">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm font-light sm:text-base md:text-[18px]"
              >
                <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-white/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ScreenPreview images={section.images} hideHeader />
        )}
      </div>
    ))}
  </div>
);

export const ProjectsSection = () => {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  return (
    <CustomContainer>
      <ContainerTitle number="04" title="Projects" className="mb-6 sm:mb-[48px]" />

      {/* md 이상: 썸네일 탭 */}
      <div className="mb-10 hidden gap-4 md:grid md:grid-cols-2">
        {projects.map((project) => {
          const isSelected = project.id === selectedId;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedId(project.id)}
              className={`group relative aspect-[720/529] cursor-pointer overflow-hidden border transition-all ${
                isSelected
                  ? "border-[#3B82F6]/50"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="size-full object-cover object-top"
              />
              {!isSelected && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#070B17]/88 transition-colors group-hover:bg-[#070B17]/40">
                  <img
                    src={project.overlayLogoSrc ?? project.logoSrc}
                    alt={project.title}
                    className="h-8 w-auto max-w-[70%] sm:h-10 md:h-12"
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* md 미만: 두 프로젝트 세로 나열 */}
      <div className="flex flex-col gap-16 md:hidden">
        {projects.map((project) => (
          <ProjectDetail key={project.id} project={project} />
        ))}
      </div>

      {/* md 이상: 선택된 프로젝트만 */}
      <div className="mt-[40px] hidden md:block">
        <ProjectDetail project={selected} />
      </div>
    </CustomContainer>
  );
};
