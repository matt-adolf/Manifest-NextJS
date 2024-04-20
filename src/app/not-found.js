import Link from 'next/link'

export default function NotFound() {
    return (
        <div class="flex justify-center">
            <div className="w-auto">
                <h2 className="text-2xl mb-6">404 - Page Not Found</h2>
                <p className="mb-6">Could not find requested resource.</p>
                <Link href="/" className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Go Home</Link>
            </div>
        </div>
    )
}