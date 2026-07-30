"use client";

import { ScreenPreview } from "../molecules/screen-preview";

const conferenceScreenshots = [
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
    src: encodeURI("/projects/screenshots/conference/i_SENS 당뇨인의날 행사1.png"),
    alt: "i-SENS 당뇨인의날 행사",
  },
];

export const CareerIkoobConference = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 p-2">
        <div>
          <div>
            <span className="font-bold">아이쿱 컨퍼런스</span> | 대규모 온라인
            학술·국제 컨퍼런스 플랫폼
          </div>
          <div className="font-thin">
            참여 기간: 서비스 초기 개발 ~ 마지막 행사 운영 (2018 ~ 2024)
          </div>
          <div className="font-thin">
            기사: 국내 첫 온라인 학술대회 개최{" "}
            <a
              href="https://www.monews.co.kr/news/articleView.html?idxno=210451"
              target="_blank"
              className="font-normal text-blue-500 underline transition-all duration-500 hover:text-blue-800"
            >
              기사 링크
            </a>
          </div>
          <div className="font-thin">
            팀 구성: 프론트엔드 2 / 백엔드 1 / 퍼블리셔 1 / 디자이너 1
          </div>
          <div className="font-thin">기여도 : 개발 80%</div>
        </div>

        <div>
          <div className="font-bold">담당 업무</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>프론트엔드 개발 및 운영</li>
            <li>React 전환(리팩토링) 주도</li>
            <li>React 사내 표준 도입 및 신규 기능 개발</li>
            <li>Node.js 기반 백엔드 개발 참여</li>
            <li>행사 당일 실시간 모니터링 및 장애 대응</li>
          </ul>
        </div>

        <div>
          <div>핵심 기술</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>
              Frontend
              <ul className="list-inside list-disc pl-4">
                <li>React</li>
                <li>Angular</li>
                <li>TypeScript</li>
                <li>TanStack Query</li>
              </ul>
            </li>
            <li>
              Backend
              <ul className="list-inside list-disc pl-4">
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </li>
            <li>
              Realtime / Media
              <ul className="list-inside list-disc pl-4">
                <li>Socket.IO</li>
                <li>Vimeo</li>
              </ul>
            </li>
            <li>
              Infra / Test
              <ul className="list-inside list-disc pl-4">
                <li>AWS(ECS)</li>
                <li>JMeter</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <div>기술적 성과</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>
              Angular 기반 서비스를 React로 리팩토링하여 유지보수성과 신규 기능
              개발 생산성 향상
            </li>
            <li>
              Vimeo 기반 영상 저장·재생 구조를 설계하여 대규모 동시 시청
              환경에서도 안정적인 스트리밍 제공
            </li>
            <li>
              사용자 시청 기록, 광고 클릭, 전시 데이터 조회 등 행동 데이터 산출
              로직 구현
            </li>
            <li>고객사의 행사 후 분석 및 리포트 제공 정확도 향상</li>
            <li>
              관리자 페이지 리팩토링을 통해 행사 민원 처리 속도 약 80% 개선
            </li>
          </ul>
        </div>

        <div>
          <div>주요 의사결정</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>
              React를 사내 표준으로 도입하여 신규 프로젝트 생산성과 유지보수성
              향상
            </li>
            <li>
              AWS ECS 기반 환경에서 부하 테스트(JMeter)를 수행하여 행사 전 안정성
              검증
            </li>
            <li>
              행사 당일 실시간 모니터링 체계를 운영하여 트래픽 급증 및 장애에
              신속 대응
            </li>
            <li>
              백엔드(Node.js) 개발에도 참여하여 프론트엔드와 API 간 협업 효율
              향상
            </li>
          </ul>
        </div>

        <div>
          <div>대표 운영 행사</div>
          <ul className="my-1 list-inside list-disc font-thin">
            <li>삼성서울병원 국제 심포지엄</li>
            <li>ICA 2021 세계협동조합대회</li>
            <li>대한당뇨병학회 학술대회</li>
          </ul>
        </div>

        <div>
          <div>팀 구성 및 기여도</div>
          <div className="font-thin">백엔드 1명, 프론트엔드 1명, 퍼블리셔 1명</div>
          <div className="font-thin">기여도: 개발 50%</div>
        </div>

        <ScreenPreview images={conferenceScreenshots} />
      </div>
    </div>
  );
};
