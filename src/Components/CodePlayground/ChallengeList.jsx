import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";

export default function ChallengeList() {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchChallenges() {
            try {
                const response = await fetch("http://localhost:5000/challenges", {
                    method: "GET",
                    credentials: "include",
                });
                const data = await response.json();
                setChallenges(data);
            } catch (err) {
                setError("Error loading challenges.");
            } finally {
                setLoading(false);
            }
        }

        fetchChallenges();
    }, []);

    if (loading) return <p className="text-center">Loading challenges...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-gray-50 p-6 md:p-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Предизвикателства за програмиране</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map((challenge) => (
                            <div
                                key={challenge._id}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                            >
                                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                                    {challenge.title}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                   Език: {challenge.languageForDisplay}
                                </p>
                                <p className="text-gray-700 mb-4">
                                  Описание: {challenge.description.length > 100
                                        ? `${challenge.description.slice(0, 100)}...`
                                        : challenge.description}
                                </p>
                                <p className="text-gray-700 mb-4">
                                   Трудност: {challenge.difficulty}
                                </p>
                                <Link
                                    to={`/playground/${challenge._id}`}
                                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                                >
                                    Start Challenge
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterHomePage />
        </div>

    );
}
