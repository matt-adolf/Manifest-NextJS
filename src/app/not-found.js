import { Button } from "flowbite-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center">
            <div className="w-auto">
                <h2 className="text-2xl mb-6">404 - Page Not Found</h2>
                <p className="mb-6">Could not find requested resource.</p>
                <Button as={Link} href="/" color="gray">Go Home</Button>
            </div>
        </div>
    )
}