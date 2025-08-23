import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

export default function CodeExam() {
    const [exam, setExam] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [code, setCode] = useState("");
    const [examResult, setExamResult] = useState(null); // ✅ store exam result
    const [running, setRunning] = useState(false); // New state to manage the running state of the exam
    let navigate = useNavigate();
    const { id } = useParams();

    const startTimer = (durationMs) => setTimeLeft(durationMs);

    // Submit exam
    const submitExam = useCallback(
        (auto = false) => {
            if (!exam || !code) return;

            fetch("http://localhost:5000/coding-exam/results", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    clientId: "740b7e52c332bbbce02cdf69cb87461d",
                    clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
                    examId: exam._id,
                    code,
                    language: handleLanguageBeforePost(
                        handleProgrammingLanguage(exam.language)
                    ),
                    versionIndex: "5",
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(auto ? "Auto-submitted:" : "Manually submitted:", data);
                    if (data.examResult) {
                        setExamResult(data); // ✅ store backend response
                    }
                    setRunning(false); // Stop the running state after submission
                })
                .catch((err) => {
                    console.error("Error submitting exam:", err);
                    setRunning(false); // Stop the running state in case of an error
                });
        },
        [exam, code]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitted) return;
        setSubmitted(true);
        submitExam(false);
    };

    // Fetch exam on mount
    useEffect(() => {
        const fetchExam = async () => {
            try {
                const res = await fetch(`http://localhost:5000/get/code-exam/${id}`, {
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                if (data && data._id) {
                    setExam(data);
                    setCode(data.starterCode || "");
                    startTimer(data.time);
                } else {
                    console.error("No exam found:", data);
                }
            } catch (err) {
                console.error("Error fetching exam:", err);
            }
        };
        fetchExam();
    }, [id]);

    // Timer countdown
    useEffect(() => {
        if (timeLeft === null || timeLeft <= 0 || submitted) return;
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft, submitted]);

    // Auto-submit
    useEffect(() => {
        if (timeLeft !== null && timeLeft <= 0 && !submitted) {
            console.log("Time is up! Auto-submitting...");
            setSubmitted(true);
            submitExam(true);
        }
    }, [timeLeft, submitted, submitExam]);

    const handleProgrammingLanguage = (e) => {
        if (e === "Python") return "python";
        if (e === "Java") return "java";
        if (e === "JavaScript") return "javascript";
        if (e === "C++") return "cpp";
        if (e === "C#") return "csharp";
    };

    const handleLanguageBeforePost = (e) => {
        if (e === "python") return "python3";
        if (e === "java") return "java";
        if (e === "javascript") return "nodejs";
        if (e === "cpp") return "cpp";
        if (e === "csharp") return "csharp";
    };

    const formatTime = (ms) => {
        if (ms <= 0) return "00:00";
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const handleRunCode = () => {
        if (running) return; // Prevent running the code again while it's already running
        setRunning(true);
        submitExam(); // Trigger the exam submission logic to run the code and get results
    };

    if (!exam) {
        return <div className="text-white p-6">Loading exam...</div>;
    }

    return (
        <form
            onSubmit={(e) => e.preventDefault()} // prevent full page reload
            className="bg-white text-gray-900 p-6 min-h-screen flex flex-col gap-6"
        >
            {timeLeft !== null && (
                <div className="text-xl font-bold text-blue-600 mb-4">
                    Оставащо време: {formatTime(timeLeft)}
                </div>
            )}

            <p className="text-sm text-gray-700">
                Language: <span className="font-semibold text-blue-700">{exam.language}</span> | Difficulty:{" "}
                <span className="font-semibold text-blue-700">{exam.difficulty}</span>
            </p>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* LEFT SIDE: exam details */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-blue-800 mb-2">{exam.title}</h1>
                        <p className="text-gray-600 mb-4">{exam.description}</p>
                    </div>
                </div>

                {/* RIGHT SIDE: code editor */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 flex flex-col">
                    <Editor
                        height={300}
                        defaultLanguage={handleProgrammingLanguage(exam.language)}
                        value={code}
                        onChange={(val) => setCode(val || "")}
                        options={{ fontSize: 14, minimap: { enabled: false } }}
                        theme="light" // switched to light theme for white style
                    />

                    <button
                        type="button"
                        onClick={handleRunCode}
                        disabled={running}
                        className="mt-4 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md font-semibold text-white self-start disabled:opacity-50 transition"
                    >
                        {running ? "Running..." : "▶ Run Code"}
                    </button>
                </div>
            </div>

            {/* Results section - full width below */}
            {examResult && !running && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 shadow">
                    <p
                        className={`font-bold text-lg ${examResult.status === "passed" ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {examResult.status === "passed"
                            ? "✅ Успешно преминахте изпита!"
                            : "❌ Неуспешен опит"}
                    </p>

                    <div className="mt-4">
                        <h3 className="font-semibold text-blue-800">Резултати от тестовете:</h3>
                        <ul className="mt-2 space-y-2">
                            {examResult.testResults.map((t, i) => (
                                <li key={i} className="p-2 rounded bg-white border border-blue-100 shadow-sm">
                                    <p className="text-sm text-blue-900">
                                        🔹 <span className="font-semibold">Test {i + 1}</span>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Input: <code>{t.input}</code>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Expected: <code>{t.expectedOutput}</code>
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Output: <code>{t.output}</code>
                                    </p>
                                    <p
                                        className={`font-semibold ${t.passed ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {t.passed ? "✔ Passed" : "✘ Failed"}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex gap-4">
                            <button
                                type="button"
                                onClick={() => navigate("/home")}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                ⬅️ Назад
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate(`/exam/code/answers/${id}`)}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Провери резултата си!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );

}
