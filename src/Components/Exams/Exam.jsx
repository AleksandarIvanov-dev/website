import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function QuestionExam() {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null); // Initial state is null
    const [examId, setExamId] = useState(null);
    const [language, setLanguage] = useState("")
    let navigate = useNavigate();
    const { id } = useParams();

    // Helper function to start the timer by setting the initial duration
    const startTimer = (durationMs) => {
        console.log(durationMs)
        setTimeLeft(durationMs);
    };

    // Corrected score calculation for multi-select questions
    const calculateScore = useCallback(() => {
        let score = 0;
        for (const questionId in correctAnswers) {
            const userAns = (userAnswers[questionId] || []).slice().sort();
            const correctAns = (correctAnswers[questionId] || []).slice().sort();

            // Compare sorted arrays to check for equality
            if (JSON.stringify(userAns) === JSON.stringify(correctAns) && userAns.length > 0) {
                score++;
            }
        }
        return score;
    }, [userAnswers, correctAnswers]); // Dependencies for useCallback

    // Memoized submitExam function
    const submitExam = useCallback((auto = false) => {
        const correctCount = calculateScore();
        fetch("http://localhost:5000/exam/results", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                examId: examId,
                answers: userAnswers,
                questions: questions.map(q => q._id),
                language,
                correctCount,
                totalQuestion: questions.length,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(auto ? "Auto-submitted:" : "Manually submitted:", data);
            })
            .catch(err => console.error("Error submitting exam:", err));
    }, [examId, userAnswers, language, questions, calculateScore]); // Dependencies for useCallback

    useEffect(() => {
        const addTime = async () => {
            try {
                const response = await fetch("http://localhost:5000/update-jwt", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        examId: id
                    })
                })

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }

        }
        addTime()
    }, [id])

    // Effect to fetch questions on mount
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch(`http://localhost:5000/exam/start/${id}`, {
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });

                // Make sure the response is JSON
                if (!res.ok) {
                    throw new Error(`Server error: ${res.status}`);
                }

                const data = await res.json();
                console.log("Fetched exam:", data);

                if (data) {
                    setExamId(data._id);
                    setQuestions(data.questions || []);
                    setCorrectAnswers(
                        Object.fromEntries((data.questions || []).map(q => [q._id, q.correctAnswers || []]))
                    );
                    startTimer(data.time);
                    setLanguage(data.language);
                } else {
                    console.error("No questions found for this exam:", data);
                }
            } catch (err) {
                console.error("Error fetching questions:", err);
            }
        };
        fetchQuestions();
    }, [id]);


    // Effect for the countdown timer logic
    useEffect(() => {
        // Don't start the interval until timeLeft has been set by the fetch
        if (timeLeft === null || timeLeft <= 0 || submitted) {
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1000);
        }, 1000);

        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, [timeLeft, submitted]);

    // Effect to handle auto-submission when time runs out
    useEffect(() => {
        if (timeLeft !== null && timeLeft <= 0 && !submitted) {
            console.log("Time is up! Auto-submitting...");
            setSubmitted(true);
            submitExam(true);
        }
    }, [timeLeft, submitted, submitExam]);

    // Handler for selecting/deselecting an answer
    const handleMultiSelect = (questionId, optionKey) => {
        setUserAnswers(prev => {
            const currentSelections = prev[questionId] || [];
            const updatedSelections = currentSelections.includes(optionKey)
                ? currentSelections.filter(key => key !== optionKey)
                : [...currentSelections, optionKey];
            return {
                ...prev,
                [questionId]: updatedSelections
            };
        });
    };

    // Handler for manual form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitted) return;
        setSubmitted(true);
        submitExam(false);
    };

    // Utility to format milliseconds into MM:SS format
    const formatTime = (ms) => {
        if (ms <= 0) return "00:00";
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
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
                    <p className="text-green-700 font-medium mb-4">✅ Изпитът е изпратен успешно.</p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate("/home")}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            ⬅️ Назад
                        </button>
                        <button
                            onClick={() => navigate(`/mystats/exam/${id}`)}
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