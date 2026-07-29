export const CareerIkoobConference = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 p-2">
        <div>
          <div>
            <span className="font-bold">아이쿱 컨퍼런스</span> | 대규모 온라인
            학술·국제 컨퍼런스 플랫폼
          </div>
          <div>
            사이트:{" "}
            <span className="text-[#ccc]">
              행사별 독립 도메인 운영 (예: 국제 학술 컨퍼런스 등)
            </span>
          </div>
        </div>
        <div>
          <div>역할: Angular → React 전환 개발 리드</div>
          <ul className="my-1 list-inside list-disc">
            <li>레거시 Angular(TypeScript) 프로젝트의 React 전환 주도</li>
            <li>행사 중 민원 처리 관리자 페이지 리팩토링 주도</li>
            <li>고트래픽·동시 시청 환경의 스트리밍·운영 안정성 대응</li>
          </ul>
        </div>
        <div>
          <div>기술 스택</div>
          <ul className="my-1 list-inside list-disc">
            <li>Frontend: React, TypeScript, Angular (레거시)</li>
            <li>Backend: Node.js, MongoDB</li>
            <li>Media: Vimeo 기반 영상 저장·재생 구조</li>
          </ul>
        </div>
        <div>
          <div>역할 / 의사결정 / 과정</div>
          <ul className="my-1 list-inside list-disc">
            <li>
              Angular 기반 레거시를 React로 전환하는 마이그레이션 전략 수립 및
              개발 리드
            </li>
            <li>
              Vimeo 기반 영상 저장·재생 구조 설계로 동시 시청이 많은 환경에서도
              안정적인 스트리밍 제공
            </li>
            <li>
              Node.js·MongoDB 백엔드 작업을 포함한 풀스택 개발로 프론트엔드와
              백엔드 연동·데이터 흐름 이해
            </li>
          </ul>
        </div>
        <div>
          <div>기술적 성과</div>
          <ul className="my-1 list-inside list-disc">
            <li>
              관리자 페이지 리팩토링으로 행사 중 민원 처리 응답속도 80% 개선
            </li>
            <li>
              사용자 시청 기록, 광고 클릭·노출 데이터 등 행동 데이터 산출 로직
              구현
            </li>
            <li>대규모 온라인 행사 트래픽·운영 이슈 대응 경험 축적</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
