import React from "react";
//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function DataVariablesExam() {
    const [language, setLanguage] = useState("");
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState({});

    // Load questions based on selected language
    // This will dynamically import the JSON file based on the selected language
    useEffect(() => {
        if (language) {
            import(`./questions/${language}.json`)
                .then((module) => setQuestions(module.default))
                .catch((err) => console.error("Error loading questions:", err));
        }
    }, [language]);

    // Load correct answers based on selected language
    useEffect(() => {
        if (language) {
            import(`./questions/answers/${language}Answers.json`)
                .then((module) => setCorrectAnswers(module.default))
                .catch((err) => console.error("Error loading answers:", err));
        }
    }, [language]);

    // Handle answer change
    // This function updates the user's answer for a specific question
    const handleChange = (id, value) => {
        setUserAnswers((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        console.log("Submitting answers:", { language, userAnswers });

        // Validate answers
        let correctCount = 0;
        Object.entries(userAnswers).forEach(([id, answer]) => {
            const isCorrect = correctAnswers[id].answer === answer;
            if (isCorrect) {
                correctCount++;
            }
        });

        // TO DO: Replace with actual user ID from authentication context or state

        // Fetch method to submit answers and get back the results
        // /* 
        fetch("http://localhost:5000/exam/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include", // 👈 Important: sends JWT cookie
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
                <div key={q.id} className="...">
                    <h3>{index + 1}. {q.question}</h3>
                    {q.code && (
                        <pre><code>{q.code}</code></pre>
                    )}
                    <div className="grid gap-2">
                        {Object.entries(q.options).map(([key, opt]) => (
                            <label
                                key={key}
                                className={`block cursor-pointer p-2 rounded-md border ${userAnswers[q.id] === key
                                    ? "bg-blue-600 border-blue-400"
                                    : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={q.id}
                                    value={key}
                                    onChange={() => handleChange(q.id, key)}
                                    className="hidden"
                                />
                                {key}: {opt}
                            </label>
                        ))}
                    </div>
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