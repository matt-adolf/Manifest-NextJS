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
                        <Link href="/">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}