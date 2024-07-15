'use client'

import React from "react";
import Markdown from 'react-markdown';

function DocumentViewer({ markdown }) {
    return (
        // wrapping div uses Tailwind typography to re-apply styling
        // reference: https://stackoverflow.com/questions/75706164/problem-with-tailwind-css-when-using-the-react-markdown-component
        <div className="bg-white p-5 rounded-xl">
            <div className="prose lg:prose-xl">
                <Markdown>{markdown}</Markdown>
            </div>
        </div>
    );
}

export default DocumentViewer;