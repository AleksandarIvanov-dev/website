import React from "react";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserProfile({ user }) {
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        progressLevel: user.progressLevel,
        languages: user.languages,
        solvedChallenges: user.solvedChallenges,
        tutorialProgress: user.tutorialProgress,
        solvedExams: user.solvedExams
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        // TODO: Send update request to backend
        console.log("Submitted:", formData);
    };

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-8 flex justify-center items-start">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-6">Потребителски профил</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Име</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Фамилия</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-1">Имейл адрес</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Ниво на напредък</label>
                        <input
                            type="text"
                            value={formData.progressLevel}
                            disabled
                            className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Избрани езици за учене</label>
                        <input
                            type="text"
                            value={formData.languages?.join(', ')}
                            disabled
                            className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800"
                        />
                        <Link className="text-blue-600" to={"/home/lang"}>Добави други програмни ецизи</Link>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Брой решени предизвикателства</label>
                        <input
                            type="text"
                            value={formData.solvedChallenges?.filter(c => c.status === "completed").length || 0}
                            disabled
                            className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Прогрес по уроци</label>
                        <input
                            type="text"
                            value={formData.tutorialProgress?.filter(t => t.status === "completed").length || 0}
                            disabled
                            className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-1">Брой предадени изпити</label>
                        <input
                            type="text"
                            value={formData.solvedExams?.length || 0}
                            disabled
                            className="w-full px-3 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-800"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
                    >
                        Запази промените
                    </button>
                </div>
            </div>
            <FooterHomePage />
        </div>
    );
}