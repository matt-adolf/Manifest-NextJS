//'use client'

import Link from "next/link";

//import { useEffect } from "react";

export default async function Documents() {
    const DocumentsResults = ({ docs }) => {
        const items = docs.map((doc, index) => {
            const docName = doc.name.replaceAll('.md', '');
            return (
                <li key={index} className="my-4">
                    <div className="flex">
                        <div class="flex-none">
                            <svg class="mr-2 h-5 w-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="flex-auto w-64">
                            <Link href={`/document/${docName}`}>{docName}</Link>
                        </div>
                    </div>
                </li>
            )
        });
        return (
            <ul>
                {items}
            </ul>
        )
    }

    async function getDocuments() {
        try {
            const res = await fetch('http://localhost:3000/api/documents', {
                method: 'GET'
            });

            const data = await res.json();
            //console.log(data.items);
            return data.items;
        }
        catch (err) {
            console.log(err);
        }
    }

    //useEffect(() => {
    const documents = await getDocuments();
    console.log(documents)
    //}, []);

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl mb-6">Documents</h1>
            <p className="mb-6">Results: {documents.length}</p>
            <DocumentsResults docs={documents} />
        </main>
    );
}