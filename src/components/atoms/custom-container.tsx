export const CustomContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={`w-full max-w-[1472px] px-[16px] mx-auto ${className}`}>
        {children}
    </div>
}