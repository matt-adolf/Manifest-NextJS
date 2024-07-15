'use client'

import Link from "next/link";

import React, {
    useState,
    useEffect,
    useCallback,
    useRef
} from "react";
import {
    Button,
    TextInput
} from "flowbite-react";

import BundledEditor from "@/app/components/BundledEditor";
import DocumentViewer from "@/app/components/DocumentViewer";

//import { useEffect } from "react";

export default function Create() {
    const placeholder = `## Section 1 Title\n` +
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n` +
        `## Section 2 Title\n\n` +
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    console.log(placeholder)
    const [markdown, setMarkdown] = useState(placeholder);
    const [editorValue, setEditorValue] = useState("");
    const [markdownText, setMarkdownText] = useState("");

    const onEditorInputChange = (newValue, editor) => {
        setEditorValue(newValue);
        setMarkdownText(editor.getContent({ format: "text" }));
    }

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl mb-6">Create</h1>
            <div className="flex space-x-4 mb-6">
                <div className="flex-auto w-64">
                    <TextInput id="documentTitle" type="text" placeholder="my-document-title" required />
                </div>
                <div className="flex-auto w-64">
                    <Button gradientDuoTone="purpleToBlue">
                        <svg className="mr-2 h-5 w-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z" />
                        </svg>


                        Save
                    </Button>
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="flex-auto w-64">
                    <DocumentViewer markdown={markdownText} />
                </div>
                <div className="flex-auto w-64">
                    <BundledEditor
                        // tinymceScriptSrc="scripts/tinymce.min.js"
                        // onEditorChange={(newText) => console.log(newText)}
                        // onInit={(evt, editor) => editorRef.current = editor}
                        // initialValue={markdown}
                        onEditorChange={(newValue, editor) => onEditorInputChange(newValue, editor)}
                        onInit={(evt, editor) => setMarkdownText(editor.getContent({ format: "text" }))}
                        value={editorValue}
                        initialValue={placeholder.replace(/\n/g, '<br />')} //replace function fixes formatting issue
                        remove_linebreaks={false}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: 'textpattern link lists image',
                            highlight_on_focus: true,
                            text_patterns: false, //remove auto-formatting when markdown is typed
                            // text_patterns: [
                            //     { start: '*', end: '*', format: 'italic' },
                            //     { start: '**', end: '**', format: 'bold' },
                            //     { start: '#', format: 'h1', trigger: 'space' },
                            //     { start: '##', format: 'h2', trigger: 'space' },
                            //     { start: '###', format: 'h3', trigger: 'space' },
                            //     { start: '####', format: 'h4', trigger: 'space' },
                            //     { start: '#####', format: 'h5', trigger: 'space' },
                            //     { start: '######', format: 'h6, trigger: 'space' },
                            //     { start: '* ', cmd: 'InserUnorderedList' },
                            //     { start: '- ', cmd: 'InserUnorderedList' },
                            //     { start: '>', cmd: 'mceBlockQuote', trigger: 'space' },
                            //     { start: '1. ', cmd: 'InserOrderedList', value: { 'list-stle-type': 'decimal' }, trigger: 'space' },
                            //     { start: '1) ', cmd: 'InserOrderedList', value: { 'list-stle-type': 'decimal' }, trigger: 'enter' },
                            //     { start: 'a. ', cmd: 'InserOrderedList', value: { 'list-stle-type': 'lower-alpha' }, trigger: 'space' },
                            //     { start: 'a) ', cmd: 'InserOrderedList', value: { 'list-stle-type': 'lower-alpha' }, trigger: 'enter' },
                            //     { start: 'i. ', cmd: 'InserOrderedList', value: { 'list-stle-type': 'lower-roman' }, trigger: 'space' },
                            //     { start: 'i) ', cmd: 'InserOrderedList', value: { 'list-stle-type': 'lower-roman' }, trigger: 'enter' },
                            //     { start: '---', cmd: 'InsertHorizontalRule', trigger: 'space' },
                            // ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic | bullist numlist | ' +
                                'removeformat | createStep image ',
                            current_style: 'body {font - family: Helvetica, Arial, sans-serif, font-size: 14px}',
                            block_formats: 'Paragraph=p Header 1=h1; Step=H2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6, Preformatted=pre',
                            setup: function (editor) {
                                editor.ui.registry.addButton('createStep', {
                                    text: 'Step',
                                    onAction: function () {
                                        editor.focus();
                                        //editor.insertContent('<h2>' + editor.selection.getContent() + '</h2>');
                                        editor.insertContent('## ' + editor.selection.getContent());
                                    }
                                })
                            }
                        }}
                    />
                </div>
            </div>
        </main>
    );
}