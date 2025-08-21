import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

export default function CodeExam() {
    const [exam, setExam] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [code, setCode] = useState(""); 
    const [examResult, setExamResult] = useState(null); // ✅ store exam result
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
                })
                .catch((err) => console.error("Error submitting exam:", err));
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

    if (!exam) {
        return <div className="text-white p-6">Loading exam...</div>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#0F172A] text-white p-6 min-h-screen flex flex-col gap-6"
        >
            {timeLeft !== null && (
                <div className="text-xl font-bold text-yellow-300">
                    Оставащо време: {formatTime(timeLeft)}
                </div>
            )}

            <h1 className="text-2xl font-bold">{exam.title}</h1>
            <p className="text-gray-300">{exam.description}</p>
            <p className="text-sm text-gray-400">
                Language: <span className="font-semibold">{exam.language}</span> | Difficulty:{" "}
                <span className="font-semibold">{exam.difficulty}</span>
            </p>

            <Editor
                height={300}
                defaultLanguage={handleProgrammingLanguage(exam.language)}
                value={code}
                onChange={(val) => setCode(val || "")}
                options={{ fontSize: 14, minimap: { enabled: false } }}
                theme={"vs-dark"}
            />

            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold self-start disabled:opacity-50"
            >
                {submitted ? "Изпълнено" : "Изпълни"}
            </button>

            {submitted && examResult && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
                    <p className={`font-bold text-lg ${examResult.status === "passed" ? "text-green-400" : "text-red-400"}`}>
                        {examResult.status === "passed" ? "✅ Успешно преминахте изпита!" : "❌ Неуспешен опит"}
                    </p>

                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-200">Резултати от тестовете:</h3>
                        <ul className="mt-2 space-y-2">
                            {examResult.testResults.map((t, i) => (
                                <li key={i} className="p-2 rounded bg-gray-700">
                                    <p className="text-sm">🔹 <span className="font-semibold">Test {i + 1}</span></p>
                                    <p className="text-sm text-gray-300">Input: <code>{t.input}</code></p>
                                    <p className="text-sm text-gray-300">Expected: <code>{t.expectedOutput}</code></p>
                                    <p className="text-sm text-gray-300">Output: <code>{t.output}</code></p>
                                    <p className={`font-semibold ${t.passed ? "text-green-400" : "text-red-400"}`}>
                                        {t.passed ? "✔ Passed" : "✘ Failed"}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => navigate("/home")}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            ⬅️ Назад
                        </button>
                        <button
                            onClick={() => navigate(`/exam/code/answers/${id}`)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Провери резултата си!
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}
