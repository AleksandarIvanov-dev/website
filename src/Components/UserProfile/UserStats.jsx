import React, { useEffect, useState } from 'react';
import HomePageHeader from '../HomePageLoggedIn/HomePageHeader';
import FooterHomePage from '../HomePage/FooterHomePage';

export default function UserStats() {
    const [userData, setUserData] = useState(null);
    const [challenges, setChallenges] = useState([]);
    const [exams, setExams] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch("http://localhost:5000/getuserinfo", {
                    credentials: "include",
                });
                const data = await response.json();

                setUserData(data.userData);
                setChallenges(data.challenges || []);
                setExams(data.exams || []);
                console.log(data)
            } catch (err) {
                console.error("Грешка при зареждане на потребителските данни:", err);
            }
        }

        fetchUserData();
    }, []);

    if (!userData) {
        return <div className="p-4 text-blue-600">Зареждане...</div>;
    }

    return (
        <div>
            <HomePageHeader />
            <div className="mt-6 p-6 max-w-6xl mx-auto bg-white text-gray-800 shadow rounded">
                <h1 className="text-4xl font-bold mb-6 text-blue-700">Табло на потребителя</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 border border-blue-200 rounded-lg shadow bg-white">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Информация за потребителя</h2>
                        <p><strong>Роля:</strong> {userData.role}</p>
                        <p><strong>Ниво на напредък:</strong> {userData.progressLevel}</p>
                        <p><strong>Езици:</strong> {userData.languages.join(", ")}</p>
                    </div>

                    <div className="p-6 border border-blue-200 rounded-lg shadow bg-white">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Решени въпроси</h2>
                        {Object.entries(userData.namesOfSolvedQuiz).map(([language, quizzes]) => (
                            <li key={language}>
                                <strong>{language.charAt(0).toUpperCase() + language.slice(1)}:</strong>
                                <ul className="list-disc ml-6">
                                    {quizzes.map((q, index) => (
                                        <li key={index}>{q.quizName}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-3">
                        Предизвикателства ({userData.solvedChallenges.length})
                    </h2>
                    {challenges.length === 0 ? (
                        <p className="text-gray-500">Няма намерени предизвикателства.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {challenges.map((challenge, idx) => {
                                const solvedInfo = userData.solvedChallenges.find(c => c.challengeId === challenge._id);
                                return (
                                    <div key={idx} className="p-5 border border-blue-100 rounded-lg bg-blue-50 shadow">
                                        <h3 className="text-xl font-bold text-blue-700">{challenge.title}</h3>
                                        <p><strong>Статус:</strong> {solvedInfo?.status}</p>
                                        <p><strong>Започнато на:</strong> {new Date(solvedInfo?.solvedAt).toLocaleString()}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="mb-10">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-3">
                        Решени изпити ({userData.solvedExams.length})
                    </h2>
                    {exams.length === 0 ? (
                        <p className="text-gray-500">Няма намерени изпити.</p>
                    ) : (
                        <div className="space-y-6">
                            {userData.solvedExams.map((userExam, idx) => {
                                const examDetails = exams.find(e => e._id === userExam.examId);

                                return (
                                    <div key={idx} className="p-4 border rounded shadow bg-white">
                                        {examDetails && (
                                            <p className="text-gray-600">
                                                <strong>Език:</strong> {examDetails.language.charAt(0).toUpperCase() + examDetails.language.slice(1)}
                                            </p>
                                        )}
                                        <p><strong>Оценка:</strong> {userExam.grade ? `${userExam.grade}` : 'Няма оценка'}</p>
                                        <p><strong>Общ брой въпроси:</strong> {userExam.totalQuestions}</p>
                                        <p><strong>Верни отговори:</strong> {userExam.correctCount}</p>
                                        <p><strong>Подаден на:</strong> {new Date(userExam.submittedAt).toLocaleString()}</p>

                                        <details className="mt-2">
                                            <summary className="cursor-pointer text-blue-600">Виж отговорите</summary>
                                            <ul className="list-disc pl-5 mt-1">
                                                {userExam.allAnswers.map((ans, index) => (
                                                    <li key={index}>
                                                        {typeof ans === 'object'
                                                            ? `Въпрос: ${ans.questionId} → Отговор: ${ans.answer}`
                                                            : JSON.stringify(ans)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <FooterHomePage />
        </div>
    );
}
