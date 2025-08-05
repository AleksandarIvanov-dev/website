import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DataVariablesExam() {
    const { language } = useParams();
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);

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

    const handleAnswer = (questionId, optionKey) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: optionKey }));
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
                language,
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
                        const selected = userAnswers[q._id] === optionKey;
                        return (
                            <label
                                key={optionKey}
                                className={`block cursor-pointer p-2 rounded-md border transition
                                    ${selected ? "bg-blue-600 border-blue-400" : "bg-gray-700 border-gray-600 hover:bg-gray-600"}
                                    ${submitted ? "opacity-60 cursor-not-allowed" : ""}
                                `}
                            >
                                <input
                                    type="radio"
                                    name={q._id}
                                    value={optionKey}
                                    onChange={() => handleAnswer(q._id, optionKey)}
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
                <p className="text-green-400 font-medium mt-4">
                    ✅ Exam submitted. You got {calculateScore()} / {questions.length} correct.
                </p>
            )}
        </form>
    );
}
