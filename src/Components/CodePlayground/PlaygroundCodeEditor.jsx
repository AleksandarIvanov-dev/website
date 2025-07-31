import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditorForChallenge({ height, initialCode, programingLanguage, challengeId, theme }) {
    const [code, setCode] = useState(initialCode);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const hasStartedRef = useRef(false);

    const startChallenge = async () => {
        try {
            const response = await fetch("http://localhost:5000/start-challenge", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    challengeId
                })
            });

            const data = await response.json();
            //console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    const endChallenge = async () => {
        try {
            const response = await fetch("http://localhost:5000/end-challenge", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    challengeId,
                    code: code
                })
            });

            const data = await response.json();
            //console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            startChallenge();
        }
    }, [challengeId]);

    const runAllTestCases = async () => {
        setLoading(true);

        if (programingLanguage === "python") programingLanguage = "python3"
        if (programingLanguage === "javascript") programingLanguage = "nodejs"

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
                setResults(data.testResults);

                const allPassed = data.testResults.every(test => test.passed);
                if (allPassed) {
                    await endChallenge();
                }
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
                defaultLanguage={programingLanguage}
                value={code}
                onChange={(val) => setCode(val || "")}
                options={{ fontSize: 14, minimap: { enabled: false } }}
                theme={theme}
            />

            <button
                onClick={runAllTestCases}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={loading}
            >
                {loading ? "Изпълняване..." : "Изпълни"}
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
