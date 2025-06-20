import React from "react";
import { Link } from "react-router-dom";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import FooterHomePage from "../HomePage/FooterHomePage";

export default function DataVariablesExamIntro() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 rounded-lg shadow-inner">
            <HeaderHomePage />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">📚 Data Variables Exam</h2>
            <p className="text-gray-700 mb-6">
                This exam will test your understanding of data variables, their types, and how to use them effectively in programming.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Exam Structure</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Multiple choice questions on variable types</li>
                <li>Short answer questions on variable declaration</li>
                <li>Code snippets to analyze and correct</li>
            </ul>
            <Link to="/exams/start" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Start Exam
            </Link>
            <FooterHomePage />
        </div>
    );
}