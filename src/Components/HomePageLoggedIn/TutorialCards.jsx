import React from "react";

export default function TutorialCard({ tutorial }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <img src={tutorial.image} alt={tutorial.title} className="w-full h-auto object-contain rounded-t-lg"/>
      <h3 className="text-xl font-semibold">{tutorial.title}</h3>
      <p className="text-gray-600">{tutorial.text}</p>

      <div className="flex justify-between items-center mt-2">
        <a href={tutorial.link} className="text-blue-600 underline">Към урока</a>
      </div>
    </div>
  );
}