import Link from "next/link"

export const Header = () => {
    return <div>
        <nav className="flex gap-[20px] text-xl">
          <Link href="/">고진혁</Link>
          <Link href="/career">Career</Link>
        </nav>
    </div>
}
