import React from "react";
import Editor from '@monaco-editor/react';
import { useState, useEffect } from "react";

const SimplePythonEditor = ({ height = '100px', initialCode = `print("Hello, World!")`, programingLanguage = "python", versionIndex = "5", theme="vs" }) => {
    // 1. Use a state variable for the editor's content
    const [currentCode, setCurrentCode] = useState(initialCode); // Initialize with prop
    const [output, setOutput] = useState("");
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    // Optional: If you want the editor to update if the parent's `initialCode` prop changes
    // This is useful if the parent might update the code for the editor after initial render.
    useEffect(() => {
        setCurrentCode(initialCode);
    }, [initialCode]);
    
    const runCode = async () => {
        setLoading(true);
        setOutput("");

        if(programingLanguage === "python") programingLanguage = "python3";

        const payload = {
            clientId: "740b7e52c332bbbce02cdf69cb87461d",
            clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
            script: currentCode, // Use the state variable for execution
            stdin: input,
            language: programingLanguage,
            versionIndex: versionIndex,
            compileOnly: false,
        };

        try {
            const response = await fetch("http://localhost:5000/executeCode", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            setOutput(data.output || data.error || "No output");
        } catch (err) {
            setOutput("Execution error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <Editor
                height={height}
                defaultLanguage={programingLanguage || "python3"}// Default to Python if not specified
                value={currentCode} // Bind value to currentCode state
                theme={theme}
                onChange={(val) => setCurrentCode(val || "")} // Update state when editor content changes
                options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                }}
            />
            <button
                onClick={runCode}
                disabled={loading}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {loading ? "Изпълняване..." : "Изпълни кода"}
            </button>

            <label className="block mt-6 mb-2 text-md font-medium text-gray-700">
                Provide input (If needed):
            </label>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="1 2 3 4 5"
                rows={3}
                className="w-full font-mono p-2 text-sm border border-gray-300 rounded-md bg-white resize-none"
            />

            {output && (
                <div className="mt-4 bg-gray-900 text-white p-3 rounded whitespace-pre-wrap">
                    <strong>Резултат:</strong>
                    <pre>{output}</pre>
                </div>
            )}
        </div>
    );
};

export default SimplePythonEditor;