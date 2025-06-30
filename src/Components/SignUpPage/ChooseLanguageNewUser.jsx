import React from "react";
import { useState } from "react";
import FooterHomePage from "../HomePage/FooterHomePage";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import { useNavigate } from "react-router-dom";


const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const navigate = useNavigate();

    const languages = [
        { name: 'Python', icon: '🐍' },
        { name: 'C++', icon: '➕' },
        { name: 'C#', icon: '🎮' },
        { name: 'Java', icon: '☕' },
        { name: 'JavaScript', icon: '🌐' },
    ];

    const handleSelectLanguage = (languageName) => {
        let selectedLang = languageName.toLowerCase();
        console.log(selectedLang)
        console.log(languageName)
        setSelectedLanguage(languageName);
        navigate(`/home?lang=${encodeURIComponent(selectedLang)}`);
    };

    return (
        <div>
            <HomePageHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Which programming language do you want to start with?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {languages.map((language) => (
                        <div
                            key={language.name}
                            className={`
              flex flex-col items-center justify-center p-6 rounded-lg shadow-lg cursor-pointer
              transition-all duration-300 ease-in-out
              ${selectedLanguage === language.name
                                    ? 'bg-blue-500 text-white transform scale-105 ring-4 ring-blue-300'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
                                }
            `}
                            onClick={() => handleSelectLanguage(language.name)}
                        >
                            <span className="text-5xl mb-4">{language.icon}</span>
                            <h3 className="text-xl font-semibold">{language.name}</h3>
                        </div>
                    ))}
                </div>

                {selectedLanguage && (
                    <div className="mt-10 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md shadow-md">
                        <p className="text-lg">
                            You've chosen to start with <span className="font-bold">{selectedLanguage}</span>! Great choice!
                        </p>
                    </div>
                )}

                {!selectedLanguage && (
                    <div className="mt-10 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md shadow-md">
                        <p className="text-lg">
                            Please select a language to get started.
                        </p>
                    </div>
                )}
            </div>
            <FooterHomePage />
        </div>
    );
};

export default LanguageSelector;