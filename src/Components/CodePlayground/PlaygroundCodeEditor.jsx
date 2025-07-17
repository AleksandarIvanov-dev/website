import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditorForChallenge({ height, initialCode, programingLanguage, challengeId }) {
    const [code, setCode] = useState(initialCode);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const runAllTestCases = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/execute-code", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    challengeId: challengeId,
                    code: code,
                    language: programingLanguage,
                    versionIndex: "5",
                })
            });

            const data = await response.json();
            if (data.success) {
                setResults(data.testResults); // array like [{input: ..., expected: ..., output: ..., passed: true}]
            } else {
                setResults([{ output: "Error: " + data.error, passed: false }]);
            }
        } catch (err) {
            setResults([{ output: "Execution error: " + err.message, passed: false }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <Editor
                height={height}
                defaultLanguage={programingLanguage?.toLowerCase() || "python"}
                value={code}
                onChange={(val) => setCode(val || "")}
                options={{ fontSize: 14, minimap: { enabled: false } }}
            />

            <button
                onClick={runAllTestCases}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={loading}
            >
                {loading ? "Изпълняване..." : "Изпълни и провери"}
            </button>

            {results.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Резултати:</h3>
                    {results.map((res, index) => (
                        <div
                            key={index}
                            className={`p-3 mb-2 rounded ${res.passed ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"}`}
                        >
                            <p><strong>Вход:</strong> {res.input}</p>
                            <p><strong>Очакван:</strong> {res.expected}</p>
                            <p><strong>Резултат:</strong> {res.output}</p>
                            <p><strong>Статус:</strong> {res.passed ? "✔️ Успешен" : "❌ Грешка"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
