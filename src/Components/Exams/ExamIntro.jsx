import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";

export default function DataVariablesExamIntro() {
    return (
        <div className="w-full min-h-screen bg-white-100 p-6 rounded-lg shadow-inner">
            <HomePageHeader />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Изпит</h2>
            <p className="text-gray-700 mb-6">
                Този изпит има за цел да провери основните ти познания по програмиране.
                Въпросите са подбрани така, че да отразяват ключовите теми, които вече сте изучавали, и ще ви помогнат да разберете колко добре сте ги усвоили.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Структурата на изпита</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Въпроси с избираем отговор</li>
                <li>Всеки изпит има <strong>определено време</strong>, за което трябва да го решите</li>
                <li>Ако изпита не бъде предаден и времето е изтекло, <strong>системата автоматично ще предаде изпита</strong></li>
                <li>След натискането на бутона "Избери изпит" ще ви се покажат всички изпити. За да започнете трябва да изберете един</li>
                <li>Времето стартира <strong>след</strong> натискане на бутона започни изпит</li>
            </ul>
            <Link to="/exams/choose" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Избери изпит
            </Link>

            <Link to="/exams/code/choose" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Избери изпит
            </Link>
        </div>
    );
}