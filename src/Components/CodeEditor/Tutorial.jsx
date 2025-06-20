import React from "react";

const tutorialSteps = [
  "Step 1: Select a programming language.",
  "Step 2: Pick a version.",
  "Step 3: Write your code.",
  "Step 4: Provide input (optional).",
  "Step 5: Run the code and see output below.",
];

const TutorialPanel = () => {
  return (
    <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner h-full">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">📘 Tutorial</h2>
      <ul className="space-y-3 list-disc list-inside text-gray-700 text-sm">
        {tutorialSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialPanel;