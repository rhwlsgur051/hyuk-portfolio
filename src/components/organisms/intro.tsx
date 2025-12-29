export const IntroComponent = () => {
    return <div className="flex justify-center bg-[#fff7e5] p-10">
        {/* <div className="flex">
        <Image src="/profile.png" alt="my profile image" className="border-1 border-[#eee] rounded-full min-w-[200px] max-h-[200px] bg-white p-[10px]" width={200} height={200} />
      </div> */}
        <div className="flex flex-col gap-3 text-center">
            <div className="font-bold">
                사용자 중심으로 문제를 해결해온 React&#183;Next.js&#183;TypeScript 기반의<br />6년차 프론트엔드 개발자 고진혁입니다.
            </div>
            <div>
                <div>새로운 기술의 유행보다 서비스의 문제 해결에 적합한 선택을 우선합니다.</div>
                <div>역할에 따라 리드와 팔로우를 유연하게 전환하며, 팀의 생산성을 높이는 협업을 중요하게 생각합니다.</div>
            </div>
            <div>
                <div>코드 리팩토링과 화면 구조 개선을 통해 동시 접속자 약 2000명 규모의 학술대회 시스템을 안정적으로 운영했으며,<br />
                    의료&#183;의학 전문 콘텐츠를 공유하는 강의 플랫폼의<br />
                    프론트엔드 구조 설계와 핵심 기능 개발을 주도했습니다.
                </div>
            </div>
        </div>
    </div>
}