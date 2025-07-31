import React from "react";
import { useEffect, useState } from "react";

export default function DashboardStats() {
    const [userProgress, setUserProgress] = useState({
        completedTutorials: 0,
        completedChallenges: 0,
        completedExams: 0
    });

    useEffect(() => {
        async function fetchUserProgress() {
            try {
                const response = await fetch("http://localhost:5000/getuserprofile", {
                    credentials: "include"
                });

                const data = await response.json();
                const completedChallenges = data.solvedChallenges?.filter(c => c.status === "completed").length || 0;
                const completedExams = data.solvedExams?.length || 0;
                const completedTutorials = Object.values(data.namesOfSolvedQuiz || {}).flat().length || 0;

                setUserProgress({ completedChallenges, completedExams, completedTutorials });
            } catch (err) {
                console.error("Failed to fetch user progress:", err);
            }
        }

        fetchUserProgress();
    }, []);

    return (
        <div className="bg-blue-100 border border-blue-300 rounded p-4 mb-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">Вашият напредък</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded p-3 shadow text-center">
                    <p className="text-sm text-gray-600">Решени уроци</p>
                    <p className="text-xl font-bold">{userProgress.completedTutorials}</p>
                </div>
                <div className="bg-white rounded p-3 shadow text-center">
                    <p className="text-sm text-gray-600">Завършени предизвикателства</p>
                    <p className="text-xl font-bold">{userProgress.completedChallenges}</p>
                </div>
                <div className="bg-white rounded p-3 shadow text-center">
                    <p className="text-sm text-gray-600">Завършени изпити</p>
                    <p className="text-xl font-bold">{userProgress.completedExams}</p>
                </div>
            </div>
        </div>
    );
}
