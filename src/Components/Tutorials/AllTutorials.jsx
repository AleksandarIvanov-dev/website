import React from "react";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllTutorials() {
    const [tutorialsByLang, setTutorialsByLang] = useState({});

    useEffect(() => {
        async function getTutorialsByLanguage() {
            try {
                const response = await fetch("http://localhost:5000/get-tutorials", {
                    credentials: "include",
                    method: "POST"
                });
                if (response.ok) {
                    const data = await response.json();

                    // Group tutorials by language
                    const grouped = data.reduce((acc, tutorial) => {
                        if (!acc[tutorial.language]) {
                            acc[tutorial.language] = [];
                        }
                        acc[tutorial.language].push(tutorial);
                        return acc;
                    }, {});

                    setTutorialsByLang(grouped);
                } else {
                    console.error("Failed to fetch tutorials");
                }
            } catch (error) {
                console.error(error);
            }
        }

        getTutorialsByLanguage();
    }, []);

    return (
        <div>
            <HomePageHeader />
            <div className="flex flex-col items-center bg-gray-100 p-4 min-h-screen">
                <h1 className="text-3xl font-bold text-blue-700 mb-6">Моите уроци</h1>

                {/* Cards for each language */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {Object.keys(tutorialsByLang).map((lang) => (
                        <div key={lang} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                                {lang}
                            </h2>
                            <ul className="space-y-3">
                                {tutorialsByLang[lang].map((tutorial, index) => (
                                    <li key={index}>
                                        <Link
                                            to={tutorial.link}
                                            className="block p-3 bg-blue-50 hover:bg-blue-100 rounded transition"
                                        >
                                            {tutorial.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <FooterHomePage />
        </div>
    );
}
