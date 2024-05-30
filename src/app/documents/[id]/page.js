import { Button } from "flowbite-react";
import Link from "next/link";
import Markdown from 'react-markdown';
import parseMarkdown from '@/app/utils/parseMarkdown';

export default async function Page({ params }) {
    async function getDocument() {
        try {
            const res = await fetch('http://localhost:3000/api/document', {
                method: 'GET'
            });

            const data = await res.json();
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }

    const id = params.id;
    const document = await getDocument();
    const documentUrl = document.html_url;
    const decodedMarkdown = atob(document.content)
    const { content, metadata } = parseMarkdown(decodedMarkdown);

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl mb-6">{metadata.title}</h1>
            <div className="mb-6">
                Author: {metadata.author}<br />
                Date: {metadata.date}
            </div>

            <div className="bg-white p-5 rounded-xl">
                <Markdown className="prose">{content}</Markdown>
            </div>
        </main>
    )
}