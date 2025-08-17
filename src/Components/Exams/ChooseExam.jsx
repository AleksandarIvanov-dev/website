import React, { useEffect, useState } from "react";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";
import { useNavigate } from "react-router-dom";

const AvailableExams = () => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await fetch("http://localhost:5000/get-exams", {
                    credentials: "include",
                    method: "GET",
                });
                if (!response.ok) throw new Error("Failed to fetch exams");

                const data = await response.json();
                setExams(data);
                console.log(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExams();
    }, []);

    if (loading) return <div className="text-white text-center mt-10">Зареждане на изпити...</div>;
    if (error) return <div className="text-red-500 text-center mt-10">Грешка: {error}</div>;

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white-900 py-10 px-4">
                <h1 className="text-3xl font-bold text-white text-center mb-8">
                    Всички налични изпити
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exams.map((exam) => (
                        <div
                            key={exam._id}
                            className="bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-600 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
                        >
                            <div>
                                {/* Title */}
                                <h2 className="text-2xl font-semibold text-white mb-2">
                                    {exam.title}
                                </h2>

                                {/* Description */}
                                <p className="text-slate-300 text-sm mb-4">
                                    {exam.description}
                                </p>

                                {/* Language */}
                                <p className="text-sm text-slate-400 mb-2">
                                    Език: <span className="font-medium">{exam.language}</span>
                                </p>

                                {/* Difficulty */}
                                <p className="text-sm text-slate-400 mb-4">
                                    Трудност: <span className="font-medium">{exam.difficulty}</span>
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-auto">
                                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                    Въпроси: {exam.questions.length}
                                </span>
                                <button
                                    onClick={() => navigate(`/exam/start/${exam._id}`)}
                                    className="bg-green-600 hover:bg-green-500 transition px-4 py-1 rounded text-sm text-white"
                                >
                                    Старт
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterHomePage />
        </div>
    );

};

export default AvailableExams;
