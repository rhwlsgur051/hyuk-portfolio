import { Header } from "../molecules/header";
export const MainLayout = ({ children }: { children: React.ReactNode }) => <>
    <Header />
    <div id="content-container" className="p-6 max-md:p-8 overflow-y-scroll">
        <div className="flex gap-1 items-center mb-1">
            <div className="flex flex-col">
                <div className="text-2xl font-bold">고진혁</div>
                <div className="text-[#aaa]">6년차 프론트엔드 개발자</div>
            </div>
        </div>
        <div className="container m-auto">
            {children}
        </div>
    </div>
</>