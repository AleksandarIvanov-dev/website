import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";

export default function DataVariablesExamIntro() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 rounded-lg shadow-inner">
            <HomePageHeader />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Изпит</h2>
            <p className="text-gray-700 mb-6">
                Този изпит има за цел да провери основните ти познания по програмиране.
                Въпросите са подбрани така, че да отразяват ключовите теми, които вече сте изучавали, и ще ви помогнат да разберете колко добре сте ги усвоили.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Структурата на изпита</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Въпроси с избираем отговор</li>
                <li>Разполагате с 30 минути, за да завършите изпита</li>
                <li>Времето стартира след натискане на бутона започни изпит</li>
            </ul>
            <Link to="/exams/choose" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Избери изпит
            </Link>
            <FooterHomePage />
        </div>
    );
}