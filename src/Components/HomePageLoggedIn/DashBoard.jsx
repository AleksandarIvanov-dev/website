import React from "react";
import { useEffect, useState } from "react";

export default function DashboardStats() {
    const [userProgress, setUserProgress] = useState({
        completedTutorials: 0,
        completedChallenges: 0,
        completedExams: 0
    });
    const [countChallenges, setCountChallenges] = useState(0);

    useEffect(() => {
        async function fetchUserProgress() {
            try {
                const response = await fetch("http://localhost:5000/getuserinfo", {
                    credentials: "include"
                });

                const data = await response.json();

                // Get the count of completed challenges
                const completedChallengesCount = data.userData.solvedChallenges?.filter(c => c.status === "completed").length || 0;

                setCountChallenges(data.allChallengesByLanguage.length);

                const completedExams = data.exams.filter(exam => exam.isCompleted === true).length;

                const completedTutorials = data.userData.progressTutorial.reduce((total, langEntry) => {
                    // Count tutorials in this language with endedAt not null
                    const completedInLang = langEntry.tutorials.filter(t => t.endedAt !== null).length;
                    return total + completedInLang;
                }, 0);

                // Store the count directly in the state
                setUserProgress({ completedChallenges: completedChallengesCount, completedExams, completedTutorials });
            } catch (err) {
                console.error("Failed to fetch user progress:", err);
            }
        }

        fetchUserProgress();
    }, []);

    // Calculate progress percentage, ensuring we don't divide by zero
    const progressPercentage = countChallenges > 0
        ? (userProgress.completedChallenges / countChallenges) * 100
        : 0;

    return (
        <div className="bg-blue-100 border border-blue-300 rounded p-4 mb-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">Вашият напредък</h2>

            {/* --- Progress Bar Section --- */}
            <div className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700">Общ напредък</span>
                    <span className="text-sm font-medium text-blue-700">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            {/* --- End Progress Bar Section --- */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded p-3 shadow text-center">
                    <p className="text-sm text-gray-600">Завършени уроци</p>
                    <p className="text-xl font-bold">{userProgress.completedTutorials}</p>
                </div>
                <div className="bg-white rounded p-3 shadow text-center">
                    <p className="text-sm text-gray-600">Решени предизвикателства</p>
                    {/* Updated to use the count directly from state */}
                    <p className="text-xl font-bold">{userProgress.completedChallenges} / {countChallenges}</p>
                </div>
                <div className="bg-white rounded p-3 shadow text-center">
                    <p className="text-sm text-gray-600">Направени изпити</p>
                    <p className="text-xl font-bold">{userProgress.completedExams}</p>
                </div>
            </div>
        </div>
    );
}