export const CareerIkoobConference = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 p-2">
                <div>
                    <div>
                        <span className="font-bold">아이쿱 컨퍼런스</span> | 대규모 온라인
                        학술·국제 컨퍼런스 플랫폼
                    </div>
                    <div className="font-thin">서비스 기간: 2018 ~ 2024</div>
                    <div className="font-thin">기사: 국내 첫 온라인 학술대회 개최 <a href="https://www.monews.co.kr/news/articleView.html?idxno=210451" target="_blank" className="font-normal text-blue-500 underline hover:text-blue-800 transition-all duration-500">기사 링크</a></div>
                </div>

                <div>
                    <div className="font-bold">역할: 풀스택 개발 및 운영</div>
                    <ul className="my-1 list-inside list-disc font-thin">
                        <li>
                            복잡하게 얽힌 기존 로직을 컴포넌트 단위로 재설계
                        </li>
                        <li>
                            React 사내 표준 도입을 추진해 신규 기능 개발 생산성 향상
                        </li>
                        <li>
                            서비스 출시 전 부하 테스트(JMeter)를 통해 트래픽 병목 사전 분석
                        </li>
                        <li>
                            AWS ECS 기반 컨테이너 환경에서 확장성 및 안정성 검증
                        </li>
                        <li>
                            행사 당일 실시간 모니터링 및 트래픽·장애 대응 담당
                        </li>
                        <li>
                            백엔드(Node.js) 개발에도 직접 참여
                        </li>
                    </ul>
                </div>

                <div>
                    <div>기술 스택</div>
                    <ul className="font-thin my-1 list-inside list-disc">
                        <li>Frontend: React, Angular, TypeScript, TanStack Query</li>
                        <li>Realtime / Media: Socket.IO, Vimeo</li>
                        <li>Backend: Node.js, MongoDB</li>
                        <li>Infra / Test: AWS(ECS), JMeter</li>
                    </ul>
                </div>

                <div>
                    <div>기술적 성과</div>
                    <ul className="my-1 list-inside list-disc font-thin">
                        <li>
                            Vimeo 기반 영상 저장·재생 구조를 설계해 대규모 동시 시청 환경에서도
                            안정적인 스트리밍 제공
                        </li>
                        <li>
                            사용자 시청 기록, 광고 클릭, 전시 데이터 조회 등 행동 데이터 산출
                            로직 구현
                        </li>
                        <li>고객사의 행사 사후 분석 및 리포트 제공 정확도 향상에 기여</li>
                        <li>
                            다수의 의료·국제 학술 행사 운영 경험을 통해 대규모 이벤트형 서비스
                            안정성 확보
                        </li>
                        <li>
                            Angular → React 리팩토링 개발을 주도하여 고객사 납품까지의 개발
                            기간을 기존 최소 1개월 → 약 2주로 단축
                        </li>
                        <li>
                            관리자 페이지 리팩토링을 통해 행사 민원 처리 속도 80% 향상
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
            </div >
        </div >
    );
};
