import React, { useState } from "react";

export default function AddExamForm() {
    const [language, setLanguage] = useState("");
    const [questionCount, setQuestionCount] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [difficulty, setDifficulty] = useState("")
    const [examTime, setExamTime] = useState("")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleQuestionCountChange = (e) => {
        const count = parseInt(e.target.value);
        setQuestionCount(count);

        if (count > 30) {
            throw new Error("Не може повече от 30 въпроса");
        }

        const newQuestions = Array.from({ length: count }, (_, i) => ({
            questionText: "",
            options: ["", "", "", ""],
            correctAnswers: []
        }));
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        if (field === "questionText") {
            updated[index].questionText = value;
        } else if (field === "correctAnswers") {
            updated[index].correctAnswers = value.split(",").map((s) => s.trim());
        }
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, optIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[optIndex] = value;
        setQuestions(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            description,
            language,
            questions,
            difficulty,
            examTime: examTime * 60 * 1000 //converts from minutes to ms
        };

        try {
            const res = await fetch(`http://localhost:5000/add-exam`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            console.log("Server response:", data);
            alert(data.message || "Questions submitted");
        } catch (err) {
            console.error("Error submitting questions:", err);
        }
    };

    return (
        <div className="bg-[#0F172A] text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Add Exam Questions</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                    <select
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 text-white"
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}
                        required
                    >
                        <option value="">-- Изберете език --</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="C++">C++</option>
                    </select>

                    <select
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 text-white"
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                        required
                    >
                        <option value="">-- Choose Difficulty --</option>
                        <option value="beginner"> Ниво Начинаещи</option>
                        <option value="intermediate">Ниво Междинно</option>
                        <option value="advanced">Ниво Напреднали</option>

                    </select>
                </div>

                <div className="flex gap-4">
                    Заглавие:
                    <input
                        type="text"
                        placeholder="Заглавие на изпита"
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 text-white"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                    Описание:
                    <input
                        type="text"
                        placeholder="Описание на изпита"
                        className="bg-slate-800 p-2 rounded w-full border border-slate-600 text-white placeholder-slate-400"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>

                <div className="flex gap-4">
                    {/* Number of Questions */}
                    <div className="w-1/2">
                        <label className="block mb-2 font-semibold text-slate-300">Брой на Въпроси</label>
                        <input
                            type="number"
                            min={1}
                            max={30}
                            className="bg-slate-800 border border-slate-600 p-2 rounded w-full text-white"
                            onChange={handleQuestionCountChange}
                            value={questionCount}
                            required
                        />
                    </div>

                    {/* Exam Duration */}
                    <div className="w-1/2">
                        <label className="block mb-2 font-semibold text-slate-300">Времетраене на изпита (в минути):</label>
                        <input
                            type="number"
                            className="bg-slate-800 border border-slate-600 p-2 rounded w-full text-white"
                            value={examTime}
                            onChange={(e) => setExamTime(Number(e.target.value))}
                            required
                        />
                    </div>
                </div>


                {questions.map((q, index) => (
                    <div
                        key={index}
                        className="bg-slate-900 p-5 rounded-lg space-y-4 border border-slate-700 shadow-md"
                    >
                        <h2 className="text-xl font-bold text-slate-100">Question {index + 1}</h2>

                        <input
                            type="text"
                            placeholder="Question Text"
                            className="bg-slate-800 p-2 rounded w-full border border-slate-600 text-white placeholder-slate-400"
                            value={q.questionText}
                            onChange={(e) =>
                                handleQuestionChange(index, "questionText", e.target.value)
                            }
                            required
                        />

                        <div className="grid grid-cols-2 gap-2">
                            {q.options.map((opt, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder={`Option ${String.fromCharCode(65 + i)}`}
                                    className="bg-slate-800 p-2 rounded border border-slate-600 text-white placeholder-slate-400"
                                    value={opt}
                                    onChange={(e) =>
                                        handleOptionChange(index, i, e.target.value)
                                    }
                                    required
                                />
                            ))}
                        </div>

                        <input
                            type="text"
                            placeholder="Correct Answer(s), e.g. A or A,C"
                            className="bg-slate-800 p-2 rounded w-full border border-slate-600 text-white placeholder-slate-400"
                            value={q.correctAnswers.join(",")}
                            onChange={(e) =>
                                handleQuestionChange(index, "correctAnswers", e.target.value)
                            }
                            required
                        />
                    </div>
                ))}

                {questions.length > 0 && (
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded font-bold text-white"
                    >
                        Submit Exam
                    </button>
                )}
            </form>
        </div>
    );
}
