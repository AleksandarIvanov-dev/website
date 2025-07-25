import React from "react";
//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { data } from "react-router-dom";


export default function DataVariablesExam() {
    const [language, setLanguage] = useState("");
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState({});

    useEffect(() => {
        if (!language) return;

        const fetchQuestions = async () => {
            try {
                const res = await fetch(`http://localhost:5000/get-exam/${language}`, {
                    credentials: "include",
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });

                const data = await res.json();
                setQuestions(data.questions);  // expects { questions: [...] } from server
                setCorrectAnswers(
                    data.questions.reduce((acc, q) => {
                        acc[q._id] = q.correctAnswers;
                        return acc;
                    }, {})
                );
            } catch (err) {
                console.error("Error fetching questions:", err);
            }
        };

        fetchQuestions();
    }, [language]);

    // Handle answer change
    // This function updates the user's answer for a specific question
    const handleChange = (questionId, selectedKey) => {
        setUserAnswers((prev) => ({ ...prev, [questionId]: selectedKey }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        console.log("Submitting answers:", { language, userAnswers });

        // Validate answers
        let correctCount = 0;
        Object.entries(userAnswers).forEach(([id, answer]) => {
            const correct = correctAnswers[id];
            if (Array.isArray(correct) && correct.includes(answer)) {
                correctCount++;
            }
        });

        // Fetch method to submit answers and get back the results
        // /* 
        fetch("http://localhost:5000/exam/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include", // Sends JWT cookie
            body: JSON.stringify({
                language,
                answers: userAnswers,
                correctCount,
                totalQuestions: questions.length
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Exam result submitted:", data);
                // Optionally show grade or redirect to a summary page
            })
            .catch((err) => {
                console.error("Error submitting exam result:", err);
            });
        // */
    };

    if (!language) {
        return (
            <div className="bg-[#0F172A] text-white min-h-screen p-6 flex flex-col items-start gap-4">
                <h2 className="text-xl font-semibold">Select Programming Language</h2>
                <select
                    className="bg-gray-800 border border-gray-600 rounded-md p-2 text-white"
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="">-- Choose Language --</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="csharp">C#</option>
                    <option value="cpp">C++</option>
                </select>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#0F172A] text-white p-6 min-h-screen flex flex-col gap-6"
        >
            {questions.map((q, index) => (
                <div key={q._id || index} className="mb-6">
                    <h3 className="font-semibold mb-2">
                        {index + 1}. {q.questionText}
                    </h3>

                    {q.options.map((opt, keyIndex) => {
                        const key = String.fromCharCode(65 + keyIndex); // A, B, C, D...

                        return (
                            <label
                                key={key}
                                className={`block cursor-pointer p-2 rounded-md border ${userAnswers[q._id] === key
                                    ? "bg-blue-600 border-blue-400"
                                    : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={q._id}
                                    value={key}
                                    onChange={() => handleChange(q._id, key)}
                                    className="hidden"
                                />
                                {key}: {opt}
                            </label>
                        );
                    })}
                </div>
            ))}


            <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md font-semibold self-start"
            >
                Submit Answers
            </button>

            {submitted && (
                <p className="text-green-400 font-medium mt-4">✅ Answers submitted successfully.</p>
            )}
        </form>
    );
};