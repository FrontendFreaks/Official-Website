"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface File {
    name: string;
    language: string;
    value: string;
}

const files: Record<string, File> = {
    "index.html": {
        name: "index.html",
        language: "html",
        value: `<!-- Your HTML code goes here -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, HTML!</h1>\n</body>\n</html>`,
    },
    "style.css": {
        name: "style.css",
        language: "css",
        value: `/* Your CSS code goes here */\nbody { background-color: #f0f0f0; }`,
    },
    "script.js": {
        name: "script.js",
        language: "javascript",
        value: `// Your JavaScript code goes here\nconsole.log('Hello, JavaScript!');`,
    },

};


export default function CodeEditor() {
    const [fileName, setFileName] = useState("index.html");
    const [htmlCode, setHtmlCode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [jsCode, setJsCode] = useState("");
    const [outputVisible, setOutputVisible] = useState(false);

    useEffect(() => {
        const runBtn = document.getElementById("runCode");
        const clsBtn = document.getElementById("closeWindow");

        runBtn?.addEventListener("click", () => {
            setHtmlCode(files["index.html"].value);
            setCssCode(files["style.css"].value);
            setJsCode(files["script.js"].value);

            setOutputVisible(true);
        });

        clsBtn?.addEventListener("click", () => {
            setOutputVisible(false);
        });
    }, []);

    const file = files[fileName];

    const handleEditorChange: import("@monaco-editor/react").OnChange = (value) => {
        if (value !== undefined) {
            files[fileName].value = value;
        }
    };

    return (
        <>
            <div className="bg-gray-900 bg-opacity-90 p-4 flex gap-4">
                {Object.keys(files).map((fileKey) => (
                    <button
                        key={fileKey}
                        className={`px-2 py-1 rounded ${fileName === fileKey
                            ? "bg-gray-500 cursor-not-allowed text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-white"
                            }`}
                        disabled={fileName === fileKey}
                        onClick={() => setFileName(fileKey)}
                    >
                        <div className="flex items-center">
                            <div className="mr-2">
                                {file.language === "javascript" && <FontAwesomeIcon icon={faJs} />}
                                {file.language === "css" && <FontAwesomeIcon icon={faCss3} />}
                                {file.language === "html" && <FontAwesomeIcon icon={faHtml5} />}
                            </div>
                            <div>{fileKey}</div>
                        </div>
                    </button>
                ))}
                <button
                    className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                    id="runCode"
                >
                    <div className="mr-2">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    Run
                </button>
            </div>

            <Editor
                height="70vh"
                theme="vs-dark"
                saveViewState={true}
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
                onChange={handleEditorChange}
                value={file.value}
            />

            {outputVisible && (
                <div className="fixed min-h-[40vh] min-w-[40vh] inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-white relative p-4 rounded-lg shadow-lg text-center">
                        <button
                            className="absolute top-1 right-1 px-1 rounded-2xl bg-gray-400"
                            id="closeWindow"
                            onClick={() => setOutputVisible(false)}
                        >
                            <div>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </div>
                        </button>
                        <iframe
                            title="output"
                            srcDoc={`
                <html>
                  <body>${htmlCode}</body>
                  <style>${cssCode}</style>
                  <script>${jsCode}</script>
                </html>
              `}
                            className="w-full h-96 py-5 mx-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
