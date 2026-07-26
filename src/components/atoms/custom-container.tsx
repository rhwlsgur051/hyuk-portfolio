export const CustomContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={`p-4 w-full max-w-[1024px] mx-auto ${className}`}>
        {children}
    </div>
}