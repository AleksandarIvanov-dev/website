import React from "react";
import { useState } from "react";
import FooterHomePage from "../HomePage/FooterHomePage";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import { useNavigate } from "react-router-dom";


const LanguageSelector = () => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const navigate = useNavigate();

    const languages = [
        { name: 'Python', icon: '🐍' },
        { name: 'C++', icon: '➕' },
        { name: 'C#', icon: '🎮' },
        { name: 'Java', icon: '☕' },
        { name: 'JavaScript', icon: '🌐' },
    ];

    const toggleLanguage = (languageName) => {
        const exists = selectedLanguages.includes(languageName);
        setSelectedLanguages(prev =>
            exists
                ? prev.filter(lang => lang !== languageName)
                : [...prev, languageName]
        );
    };

    const handleSubmit = async () => {
        try {
            await fetch('http://localhost:5000/updateLanguage', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    languages: selectedLanguages
                })
            });
            
            navigate("/home");
        } catch (error) {
            console.error('Failed to update preferred languages:', error);
        }
    };

    return (
        <div>
            <HomePageHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Изберете езикът, с който искате да започнете:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {languages.map((language) => (
                        <div
                            key={language.name}
                            className={`
                                flex flex-col items-center justify-center p-6 rounded-lg shadow-lg cursor-pointer
                                transition-all duration-300 ease-in-out
                                ${selectedLanguages.includes(language.name)
                                    ? 'bg-blue-500 text-white transform scale-105 ring-4 ring-blue-300'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
                                }
                            `}
                            onClick={() => toggleLanguage(language.name)}
                        >
                            <span className="text-5xl mb-4">{language.icon}</span>
                            <h3 className="text-xl font-semibold">{language.name}</h3>
                        </div>
                    ))}
                </div>

                {selectedLanguages.length === 0 && (
                    <div className="mt-10 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md shadow-md">
                        <p className="text-lg">Моля, изберете поне един език за програмиране.</p>
                    </div>
                )}

                <button
                    className={`mt-10 px-6 py-3 text-white rounded-lg shadow-md transition ${
                        selectedLanguages.length > 0
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    onClick={handleSubmit}
                    disabled={selectedLanguages.length === 0}
                >
                    Continue
                </button>
            </div>
            <FooterHomePage />
        </div>
    );
};

export default LanguageSelector;