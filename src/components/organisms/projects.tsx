import { onOpenModal } from "@/stores/modal-slice"
import { useDispatch } from "react-redux"
import { CareerTesseractCube } from "../templates/career-tesseract-cube";
import { ReactNode } from "react";
import { CareerIkoobConference } from "../templates/career-ikoob-conference";

export const ProjectsWrapper = () => {
    return <div className="p-14">
        <ProjectsHeadline />

        <CompanyBox compNm="(주)아이쿱" period="2019.03 ~ 2024.12 (5년 10개월)" desc="디지털 헬스케어 서비스 개발" dept="개발2팀" />

        <div className="flex flex-col gap-10">
            <ProjectBox prjNm="테서랙트 큐브 | 의료인 대상 온라인 강의 플랫폼" descList={['프론트엔드 개발 리드', 'Next.js · React · TypeScript', '스트리밍 · 결제 · 보안']} modalTitle="테서랙트 큐브" modalComponent={<CareerTesseractCube />} />
            <ProjectBox prjNm="아이쿱 컨퍼런스 | 대규모 온라인 학술·국제 컨퍼런스 플랫폼" descList={['Angular > React 전환 개발 리드', '스트리밍 · 트래픽 대응 · 운영 안정성']} modalTitle="아이쿱 컨퍼런스" modalComponent={<CareerIkoobConference />} />
        </div>
    </div >
}

const ProjectsHeadline = () => <div className="text-3xl font-bold text-[#ffb300] mb-12 text-center">Projects</div>

// 회사 박스
const CompanyBox = ({ compNm, period, desc, dept }: { compNm: string, period: string, desc: string, dept: string }) => <div className="flex flex-col gap-2">
    <div><b>{compNm}</b></div>
    <div><b>{period}</b></div>
    <div>{desc}</div>
    <div>{dept}</div>
</div>

// 프로젝트 박스
const ProjectBox = ({ prjNm, descList, modalTitle, modalComponent }: { prjNm: string, descList: string[], modalTitle: string, modalComponent: ReactNode }) => <div className="flex flex-col gap-1 border border-[#ccc] rounded-lg p-5 max-w-[400px]">
    <div>{prjNm}</div>
    <ul className="list-disc list-inside mb-1">
        {descList.map(desc => <li>{desc}</li>)}
    </ul>
    <BtnReadmore title={modalTitle} component={modalComponent} />
</div>

// 프로젝트 상세보기 버튼
const BtnReadmore = ({ title, component }: { title: string, component: ReactNode }) => {
    const dispatch = useDispatch();
    return <button className="bg-[#ffb300] w-[100px] self-center text-white border rounded-lg p-1 hover:bg-[#c18701] transition-all duration-500 cursor-pointer" onClick={() => {
        dispatch(onOpenModal({ title, component }))
    }}>READ MORE</button>
}