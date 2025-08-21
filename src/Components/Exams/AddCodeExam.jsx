import React, { useState } from "react";

export default function AddCodeExamForm() {
    const [language, setLanguage] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [examTime, setExamTime] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [starterCode, setStarterCode] = useState("");
    const [testCases, setTestCases] = useState([{ input: "", expectedOutput: "" }]);

    const handleTestCaseChange = (index, field, value) => {
        const updated = [...testCases];
        updated[index][field] = value;
        setTestCases(updated);
    };

    const addTestCase = () => {
        setTestCases([...testCases, { input: "", expectedOutput: "" }]);
    };

    const removeTestCase = (index) => {
        const updated = testCases.filter((_, i) => i !== index);
        setTestCases(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            description,
            language,
            difficulty,
            time: examTime * 60 * 1000, // convert minutes → ms
            starterCode,
            testCases
        };

        try {
            const res = await fetch(`http://localhost:5000/add/code-exam`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            console.log("Server response:", data);
            alert(data.message || "Code Exam submitted");
        } catch (err) {
            console.error("Error submitting code exam:", err);
        }
    };

    return (
        <div className="bg-[#0F172A] text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Add Coding Exam</h1>

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
                        <option value="beginner">Ниво Начинаещи</option>
                        <option value="intermediate">Ниво Междинно</option>
                        <option value="advanced">Ниво Напреднали</option>
                    </select>
                </div>

                <div className="flex gap-4">
                    Заглавие:
                    <input
                        type="text"
                        placeholder="Заглавие на изпита"
                        className="bg-gray-800 border border-gray-600 rounded-md p-2 text-white w-1/2"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                    Описание:
                    <input
                        type="text"
                        placeholder="Описание на изпита"
                        className="bg-slate-800 p-2 rounded w-1/2 border border-slate-600 text-white placeholder-slate-400"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>

                {/* Exam Duration */}
                <div>
                    <label className="block mb-2 font-semibold text-slate-300">Времетраене (в минути):</label>
                    <input
                        type="number"
                        className="bg-slate-800 border border-slate-600 p-2 rounded w-full text-white"
                        value={examTime}
                        onChange={(e) => setExamTime(Number(e.target.value))}
                        required
                    />
                </div>

                {/* Starter Code */}
                <div>
                    <label className="block mb-2 font-semibold text-slate-300">Начален код (starterCode)</label>
                    <textarea
                        className="bg-slate-800 p-2 rounded w-full border border-slate-600 text-white placeholder-slate-400 h-40"
                        value={starterCode}
                        onChange={(e) => setStarterCode(e.target.value)}
                        placeholder="Напиши начален код..."
                    />
                </div>

                {/* Test Cases */}
                <div>
                    <h2 className="text-xl font-bold text-slate-100 mb-4">Тестови случаи</h2>
                    {testCases.map((tc, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 p-4 mb-3 rounded-lg border border-slate-700 shadow-md"
                        >
                            <input
                                type="text"
                                placeholder="Вход (input)"
                                className="bg-slate-800 p-2 rounded w-full border border-slate-600 text-white mb-2"
                                value={tc.input}
                                onChange={(e) =>
                                    handleTestCaseChange(index, "input", e.target.value)
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Очакван резултат (expectedOutput)"
                                className="bg-slate-800 p-2 rounded w-full border border-slate-600 text-white"
                                value={tc.expectedOutput}
                                onChange={(e) =>
                                    handleTestCaseChange(index, "expectedOutput", e.target.value)
                                }
                                required
                            />

                            <button
                                type="button"
                                className="mt-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white"
                                onClick={() => removeTestCase(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-white"
                        onClick={addTestCase}
                    >
                        Add Test Case
                    </button>
                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded font-bold text-white"
                >
                    Submit Code Exam
                </button>
            </form>
        </div>
    );
}
