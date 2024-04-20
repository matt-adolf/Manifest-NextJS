import Link from "next/link";

export default function Navigation() {
    return (
        <div className="grow">
            <nav>
                <ul className="flex">
                    <li className="flex-1">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="flex-1">
                        <Link href="/">Documents</Link>
                    </li>
                    <li className="flex-1">
                        <Link href="/">Create</Link>
                    </li>
                    <li className="flex-1">
                        <Link href="/" className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}