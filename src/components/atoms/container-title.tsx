export const ContainerTitle = ({ number, title }: { number: string, title: string }) => {
    return <div
        className="
    text-2xl md:text-4xl
    font-bold
    text-[#3B82F6]
    mb-6 md:mb-8">
        <div className="flex gap-4">
            <div className="bg-[#111C35] rounded-md px-[6px]">{number}</div>
            <div>{title}</div>
        </div>
    </div>
}