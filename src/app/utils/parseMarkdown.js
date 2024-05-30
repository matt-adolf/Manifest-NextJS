// Example Markdown File with Metadata
/*
---
title: Test Document
author: John Doe
date: 01-01-2023
---
# Test Document
Hello world!
*/

const parseMarkdown = markdown => {
    const metadataRegex = /^---([\s\S]*?)---/;
    const metadataMatch = markdown.match(metadataRegex);
    const markdownContent = markdown.replace(/\-\-\-([\S\s]*?)\-\-\-/gm, '');

    if (!metadataMatch) {
        return { meta: {}, content: markdownContent };
    }
    // Split the metadata into lines
    const metadataLines = metadataMatch[1].split("\n");

    const metadata = metadataLines.reduce((acc, line) => {
        // Split the line into key-value pairs
        const [key, value] = line.split(":").map(part => part.trim());
        // If the line is not empty add the key-value pair to the metadata object
        if (key) acc[key] = value;
        return acc;
    }, {});

    return { metadata: metadata, content: markdownContent };
};

export default parseMarkdown;