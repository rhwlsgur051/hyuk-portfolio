// import { CircledLink } from "@/components/atoms/circled-link";
import Image from "next/image";

export default function MainPage() {
  // const circledLinks = [
  //   { href: "/career", title: "Career", bgColor: "bg-[#4e9f4e]", textColor: "text-[#fff]" },
  //   { href: "/skills", title: "Skills", bgColor: "bg-[#e7af45]", textColor: "text-[#fff]" }
  // ];

  return (
    <div className="flex justify-center gap-10 mt-20 max-md:flex-col max-md:items-center">
      <div className="flex">
        <Image src="/profile.png" alt="my profile image" className="border-1 border-[#eee] rounded-full min-w-[300px] max-h-[300px] bg-white p-[10px]" width={300} height={300} />
      </div>
      <div>
        <ul className="list-disc mb-4">
          <li>헬스케어 IT 기업에서 플랫폼을 개발했습니다.</li>
          <li>능동적으로 지식을 확장하는 것을 좋아합니다.</li>
          <li><span className="text-[#e77416] font-bold">팔로워십&#40;Followership&#41;</span>을 중요하게 생각합니다.</li>
          <hr className="h-[1px] border-0 bg-[#aaa] m-2" />
          <li>동시 접속자 500명 이상의 의학 학술대회 시청 플랫폼을 개발하며<br />AWS 인프라 구축 및 배포 자동화, 트래픽 관리 등을 경험해 왔습니다.</li>
          <li>의료&#183;의학 전문 콘텐츠를 공유하는 강의 플랫폼 개발을 주도했습니다.
            <br />
            <a href="https://tesseractors.com" className="text-[#0f51df] underline" target="_blank">홈페이지 링크</a></li>
        </ul>
        {/* <div className="flex gap-10">
            {circledLinks.map(circledLink =>
              <CircledLink key={circledLink.href} href={circledLink.href} colorClasses={`${circledLink.bgColor} ${circledLink.textColor}`}
              >
                {circledLink.title}
              </CircledLink>)}
          </div> */}
      </div>
    </div>
  );
}