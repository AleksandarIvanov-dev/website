import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditorForChallenge({ height, initialCode, programingLanguage, challengeId, theme, saveProgress }) {
    const [code, setCode] = useState(initialCode);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [customInput, setCustomInput] = useState('');
    const hasStartedRef = useRef(false);


    const startChallenge = async () => {
        try {
            await fetch("http://localhost:5000/start-challenge", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    challengeId
                })
            });

            //const data = await response.json();
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

    // const loadProgress = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5000/get/challenge-progress", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             credentials: "include",
    //             body: JSON.stringify({ id: challengeId }),
    //         });

    //         const data = await response.json();
    //         console.log(data);

    //         if (data.challenges && data.challenges.length > 0) {
    //             setCode(data.challenges[0].userCode); // Set editor code to saved code
    //         }

    //     } catch (error) {
    //         console.error("Failed to load progress:", error);
    //     }
    // };


    useEffect(() => {
        if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            startChallenge();
        }

        //loadProgress()
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
                    clientId: "740b7e52c332bbbce02cdf69cb87461d",
                    clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
                    challengeId: challengeId,
                    code: code,
                    userInput: customInput,
                    language: programingLanguage,
                    versionIndex: "5",
                })
            });

            const data = await response.json();

            if (data.success) {
                setResults(data.testResults);
                //console.log("Received Data: ", data)

                const allPassed = data.testResults.every(test => test.passed);
                if (allPassed) {
                    await endChallenge();
                }
            } else {
                //console.log("setResults in Else: ", data.testResults)
                setResults(data.testResults);
            }
        } catch (err) {
            setResults([{ output: "Execution error: " + err.message, passed: false }]);
        } finally {
            setLoading(false);
        }
        console.log(results)
    };

    // use UseEffect to pass up the code to the Parent node
    useEffect(() => {
        saveProgress(code)
    }, [code, saveProgress]);

    return (
        <div className="bg-white p-4 rounded shadow">
            <Editor
                height={height}
                defaultLanguage={programingLanguage}
                value={code}
                onChange={(val) => setCode(val)}
                options={{ fontSize: 14, minimap: { enabled: false } }}
                theme={theme}
            />

            <div className="mt-4">
                <label htmlFor="customInput" className="block text-sm font-medium text-gray-700 mb-1">
                    Потребителски вход (по избор):
                </label>
                <textarea
                    id="customInput"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Въведете входни данни за тестване..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                />
            </div>

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
                        //console.log(res),
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
