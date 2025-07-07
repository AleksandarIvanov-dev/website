import React, { useState } from "react";

export default function Quiz({ question, code, options, correctAnswer }) {
    const [selected, setSelected] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    }


    return (
        <div className="my-6 p-4 bg-white text-black border border-gray-300 rounded shadow-sm">
            <h4 className="font-semibold mb-2">{question}</h4>

            {code && (
                <pre className="bg-blue-50 text-sm font-mono p-3 rounded mb-3 whitespace-pre-wrap text-gray-800 border border-blue-100">
                    {code}
                </pre>
            )}

            <div className="space-y-2">
                {options.map((opt) => (
                    <label
                        key={opt}
                        className={`block p-2 rounded border border-gray-200 cursor-pointer hover:bg-blue-50 ${selected === opt ? "ring-2 ring-blue-400 bg-blue-100" : ""
                            }`}
                    >
                        <input
                            type="radio"
                            className="mr-2"
                            name={`inline-${question}`}
                            checked={selected === opt}
                            onChange={() => setSelected(opt)}
                        />
                        {opt}
                    </label>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
            >
                Submit
            </button>

            {submitted && (
                <p className="mt-2 text-sm font-medium">
                    {selected === correctAnswer ? (
                        <span className="text-green-600">Правилно</span>
                    ) : (
                        <span className="text-red-500">Грешно. Правилният отговор е: {correctAnswer}</span>
                    )}
                </p>
            )}
        </div>
    );
}