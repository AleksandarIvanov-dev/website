import React from "react";
import { useNavigate } from "react-router-dom";

export default function TutorialCard({ tutorial }) {
    const navigate = useNavigate();

  const handleStart = () => {
    navigate(tutorial.link);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-300 rounded overflow-hidden">
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-gray-800">{tutorial.text}</div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
}