export const CareerTesseractCube = () => {
    return <div>
        <div className="p-2 gap-3 flex flex-col">
            <div>
                <div><span className="font-bold">테서랙트 큐브</span> | 의료인 대상 온라인 강의 플랫폼</div>
                <div>개발 기간: 2023.09 ~ 2024.04 (8개월)</div>
                <div>사이트: <a href="https://tesseractors.com" target="_blank" className="text-blue-500 underline hover:text-blue-800 transition-all duration-500">https://tesseractors.com</a></div>
            </div>
            <div>
                <div>역할: 프론트엔드 개발 리드 (팀장)</div>
                <ul className="list-disc list-inside my-1">
                    <li>프론트엔드 전반 설계 및 개발</li>
                    <li>개발 문서 작성 및 BM개발2팀 일정·협업 관리</li>
                    <li>핵심 기술: Next.js · HLS · SSR · 결제</li>
                </ul>
            </div>
            <div>
                <div>기술 스택</div>
                <ul className="list-disc list-inside my-1">
                    <li>Frontend: Next.js, React, TypeScript, TanStack Query, TailwindCSS</li>
                    <li>Media / Realtime: HLS.js, Socket.IO</li>
                    <li>Infra: AWS (EC2, Amplify)</li>
                </ul>
            </div>
            <div>
                <div>역할/의사결정/과정</div>
                <ul className="list-disc list-inside my-1">
                    <li>프론트엔드 개발 리드로서 일정 관리 및 타 팀(기획, 디자인)과의 협업 주도</li>
                    <li>AWS Amplify를 활용한 테스트 환경 구축으로 QA 사이클 단축</li>
                    <li>EC2 기반 SSR 웹 서버 배포를 통해 Next.js 서버사이드 렌더링 안정화</li>
                </ul>
            </div>
            <div>
                <div>기술적 성과</div>
                <ul className="list-disc list-inside my-1">
                    <li>HLS.js 기반 스트리밍 재생 구현으로 유료 강의 영상 원본 URL 은닉 및 보안 강화</li>
                    <li>Next.js Middleware를 활용해 PC / 모바일 도메인 분기 (m.tesseractors.com)</li>
                    <li>PC·모바일 코드 분리 운영으로 장애 발생 시 빠른 대응 가능</li>
                    <li>SSR 환경에서 API 데이터 은닉 처리로 보안성 향상</li>
                    <li>Refresh Token 인증 모듈 구현으로 사용자 인증 보안 개선</li>
                </ul>
            </div>
            <div>
                <div>팀 구성</div>
                <div>백엔드 1, 프론트엔드 2, 퍼블리셔 1, UX/UI 디자이너 1</div>
            </div>
        </div>
    </div>
}