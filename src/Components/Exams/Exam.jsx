import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DataVariablesExam() {
    const { language } = useParams();
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    let navigate = useNavigate();

    // Fetch questions on mount
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch(`http://localhost:5000/get-exam/${language}`, {
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                setQuestions(data.questions);
                setCorrectAnswers(Object.fromEntries(data.questions.map(q => [q._id, q.correctAnswers])));
                startTimer(data.time);
            } catch (err) {
                console.error("Error fetching questions:", err);
            }
        };

        if (language) fetchQuestions();
    }, [language]);

    // Timer logic
    const startTimer = (durationMs) => {
        const endTime = Date.now() + durationMs;
        const interval = setInterval(() => {
            const remaining = endTime - Date.now();
            if (remaining <= 0) {
                clearInterval(interval);
                setTimeLeft(0);
                submitExam(true); // Auto-submit
            } else {
                setTimeLeft(remaining);
            }
        }, 1000);
    };

    const handleMultiSelect = (questionId, optionKey) => {
        setUserAnswers(prev => {
            const currentSelections = prev[questionId] || [];

            const updatedSelections = currentSelections.includes(optionKey)
                ? currentSelections.filter(key => key !== optionKey)  // uncheck
                : [...currentSelections, optionKey];  // check

            return {
                ...prev,
                [questionId]: updatedSelections
            };
        });
    };

    const calculateScore = () => {
        return Object.entries(userAnswers).filter(([id, ans]) =>
            correctAnswers[id]?.includes(ans)
        ).length;
    };

    const submitExam = (auto = false) => {
        const correctCount = calculateScore();
        fetch("http://localhost:5000/exam/results", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                answers: userAnswers,
                language: language,
                questions: questions.map(q => q._id),
                correctCount,
                totalQuestion: questions.length,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(auto ? "Auto-submitted:" : "Manually submitted:", data);
            })
            .catch(err => console.error("Error submitting exam:", err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitted) return;
        setSubmitted(true);
        submitExam(false);
    };

    const formatTime = (ms) => {
        const secs = Math.floor(ms / 1000);
        const mins = String(Math.floor(secs / 60)).padStart(2, "0");
        return `${mins}:${String(secs % 60).padStart(2, "0")}`;
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#0F172A] text-white p-6 min-h-screen flex flex-col gap-6">
            {timeLeft !== null && (
                <div className="text-xl font-bold text-yellow-300">Оставащо време: {formatTime(timeLeft)}</div>
            )}

            {questions.map((q, idx) => (
                <div key={q._id} className="mb-6">
                    <h3 className="font-semibold mb-2">{idx + 1}. {q.questionText}</h3>
                    {q.options.map((opt, optIdx) => {
                        const optionKey = String.fromCharCode(65 + optIdx);
                        const selected = userAnswers[q._id]?.includes(optionKey);

                        return (
                            <label
                                key={optionKey}
                                className={`block cursor-pointer p-2 rounded-md border transition
                        ${selected ? "bg-blue-600 border-blue-400" : "bg-gray-700 border-gray-600 hover:bg-gray-600"}
                        ${submitted ? "opacity-60 cursor-not-allowed" : ""}
                    `}
                            >
                                <input
                                    type="checkbox"
                                    name={`${q._id}_${optionKey}`}
                                    value={optionKey}
                                    checked={selected || false}
                                    onChange={() => handleMultiSelect(q._id, optionKey)}
                                    className="hidden"
                                    disabled={submitted}
                                />
                                {optionKey}: {opt}
                            </label>
                        );
                    })}
                </div>
            ))}

            <button
                type="submit"
                disabled={submitted}
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold self-start disabled:opacity-50"
            >
                {submitted ? "Submitted" : "Submit Answers"}
            </button>

            {submitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
                    <p className="text-green-700 font-medium mb-2">✅ Изпитът е изпратен успешно.</p>
                    <button
                        onClick={() => navigate("/home")}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        ⬅️ Назад
                    </button>
                </div>
            )}
        </form>
    );
}
