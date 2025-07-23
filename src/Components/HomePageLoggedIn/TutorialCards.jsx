import React from "react";

export default function TutorialCard({ tutorial }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <img src={tutorial.image} alt={tutorial.title} className="w-full h-auto object-contain rounded-t-lg"/>
      <h3 className="text-xl font-semibold">{tutorial.title}</h3>
      <p className="text-gray-600">{tutorial.text}</p>

      <div className="flex justify-between items-center mt-2">
        <a href={tutorial.link + `/${tutorial._id}`} className="text-blue-600 underline">Go to tutorial</a>
        {tutorial.status === "completed" && (
          <span className="text-green-700 font-medium">✔ Completed</span>
        )}
        {tutorial.status === "started" && (
          <span className="text-yellow-600 font-medium">⏳ In progress</span>
        )}
      </div>
    </div>
  );
}