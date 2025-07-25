import React from "react";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllTutorials() {
    const [data, setData] = useState([]);
    const [language, setLanguage] = useState('')
    useEffect(() => {
        async function getTutorialsByLanguage() {
            try {
                const response = await fetch("http://localhost:5000/get-tutorials", {
                    credentials: "include",
                    method: "POST"
                });
                if (response.ok) {
                    const data = await response.json();
                    setData(data)
                    setLanguage(data[0].language)
                } else {
                    console.error("Failed to fetch user profile");
                }
            } catch (error) {

            }
        }

        getTutorialsByLanguage()

    }, [])
    return (
        <div>
            <HomePageHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-blue-700 mb-6">Уроци за {language}</h1>
                <p className="text-lg text-gray-700 mb-4">
                </p>
                <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
                    <ul className="space-y-4">
                        {data.map((tutorial, index) => (
                            <li key={index}>
                                <Link to={tutorial.link} className="text-blue-600 hover:underline">
                                    {tutorial.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <FooterHomePage />
        </div>
    );
}