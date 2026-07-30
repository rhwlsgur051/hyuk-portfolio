"use client";

import { ScreenPreview } from "../molecules/screen-preview";

const tesseractScreenshots = [
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

export const CareerTesseractCube = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 p-2">
        <div>
          <div>
            <span className="font-bold">테서랙트 큐브</span> | 의료인 대상 온라인
            강의 플랫폼
          </div>
          <div className="font-thin">개발 기간: 2023.09 ~ 2024.04 (8개월)</div>
          <div className="font-thin">
            팀 구성: 프론트엔드 2 / 백엔드 1 / 퍼블리셔 1 / 디자이너 1
          </div>
          <div>
            사이트:{" "}
            <a
              href="https://tesseractors.com"
              target="_blank"
              className="text-blue-500 underline transition-all duration-500 hover:text-blue-800"
            >
              https://tesseractors.com
            </a>
          </div>
        </div>
        <div>
          <div>담당 업무</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>프론트엔드 개발 리드</li>
            <li>프론트엔드 아키텍처 설계 및 구현</li>
            <li>공통 컴포넌트 및 페이지 개발</li>
            <li>Next.js 기반 SSR 환경 구축</li>
          </ul>
        </div>
        <div>
          <div>핵심 기술</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>
              Frontend
              <ul className="list-inside list-disc pl-4">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>TanStack Query</li>
                <li>TailwindCSS</li>
              </ul>
            </li>
            <li>
              Infra / Media / Realtime
              <ul className="list-inside list-disc pl-4">
                <li>AWS (EC2, Amplify)</li>
                <li>HLS.js</li>
                <li>Socket.IO</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div>기술적 성과</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>
              HLS 기반 스트리밍 플레이어를 구현하여 영상 URL 은닉 및 보안 강화
            </li>
            <li>Next.js Middleware를 활용해 PC / 모바일 도메인 분리 운영</li>
            <li>
              SSR 환경에서 API 연동 구조를 개선하여 초기 렌더링 안정성 확보
            </li>
            <li>
              Refresh Token 기반 인증 모듈을 구현하여 사용자 인증 보안 개선
            </li>
          </ul>
        </div>
        <div>
          <div>주요 의사결정</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>AWS Amplify를 활용한 테스트 환경을 구축하여 QA 사이클 단축</li>
            <li>
              EC2 기반 SSR 서버를 구성하여 안정적인 서버사이드 렌더링 환경 구축
            </li>
            <li>
              PC/모바일 코드를 분리 운영하여 장애 발생 시 빠른 대응이 가능하도록
              설계
            </li>
          </ul>
        </div>
        <ScreenPreview images={tesseractScreenshots} />
      </div>
    </div>
  );
};
