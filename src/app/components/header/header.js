import Link from "next/link";

import Navigation from "../navigation";

export default function Header() {
    return (
        <div className="container mx-auto">
            <header className="py-12">
                <div className="flex items-center">
                    <div className="flex-none w-64">
                        [LOGO]
                    </div>
                    <Navigation />
                </div>
            </header>
        </div>
    )
}