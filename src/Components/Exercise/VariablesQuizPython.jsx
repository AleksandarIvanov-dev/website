import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question:
      "You can declare string variables with single or double quotes.",
    code: `x = "John"\n# is the same as\nx = 'John'`,
  },
  {
    id: 2,
    question: "Strings in Python are immutable, so trying to modify them directly will cause an error.",
    code: `name = "alice"\nalice[0] = "A"`,
  },
  {
    id: 3,
    question: "You can reassign variables to different data types in Python.",
    code: `x = 5\nx = "Hello"`,
  },
];

const VariablesQuizPython = () => {
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Answers submitted!");
  };

  return (
    <div className="min-h-screen bg-[#2c3440] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-[#2c3440] p-4 rounded-lg shadow-lg border border-gray-600"
          >
            <h3 className="text-sm font-semibold mb-3 text-center">
              {q.question}
            </h3>

            <pre className="bg-[#1e252f] text-xs font-mono p-3 rounded mb-4 whitespace-pre-wrap">
              {q.code}
            </pre>

            <div className="space-y-2">
              {["True", "False"].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-2 rounded cursor-pointer bg-[#3b444f] hover:bg-[#4a5568] ${answers[q.id] === option ? "ring-2 ring-green-400" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name={`answer-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleOptionChange(q.id, option)}
                    className="form-radio text-green-500 mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition block mx-auto"
      >
        Submit All Answers »
      </button>
    </div>
  );
};

export default VariablesQuizPython