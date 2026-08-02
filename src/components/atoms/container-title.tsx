export const ContainerTitle = ({ number, title, className }: { number: string, title: string, className?: string }) => {
    return <div className={`flex flex-col gap-[16px] mb-[32px] ${className}`}>
        <div className="font-light text-[24px] text-[rgb(255,255,255,0.5)]">{number}</div>
        <div className="text-[32px] font-bold">{title}</div>
    </div>
}