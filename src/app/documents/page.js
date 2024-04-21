//'use client'

import Link from "next/link";

//import { useEffect } from "react";

export default async function Documents() {
    const DocumentsResults = ({ docs }) => {
        const items = docs.map((doc, index) => {
            const docName = doc.name.replaceAll('.md', '');
            return (
                <li key={index}>
                    <Link href={`/document/${docName}`}>{docName}</Link>
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