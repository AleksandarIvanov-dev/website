import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";

export default function ExamResults() {
    const { id } = useParams();
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    console.log(id)

    useEffect(() => {
        async function fetchResults() {
            try {
                const res = await fetch(`http://localhost:5000/exam/answers/${id}`, {
                    credentials: "include",
                });
                if (!res.ok) throw new Error("Failed to fetch results");
                const data = await res.json();
                setResults(data);
                console.log(data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading results...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!results) return null;

    const calculateDuration = (startedAt, solvedAt) => {
        const start = new Date(startedAt);
        const end = new Date(solvedAt);
        const diffMs = end - start;
        const minutes = Math.floor(diffMs / 60000);
        const seconds = Math.floor((diffMs % 60000) / 1000);
        return `${minutes} минути ${seconds} секунди`;
    };

    return (
        <div>
            <HomePageHeader />
            <div className="mt-6 p-6 max-w-6xl mx-auto bg-white text-gray-800 shadow rounded">
                {/* Заглавие: Език и трудност */}
                <h1 className="text-3xl font-bold text-blue-700 mb-2">
                    Изпит по: {results.language} | Трудност: {results.difficulty}
                </h1>

                {/* Основна информация за изпита */}
                <p className="mb-2 text-gray-600">
                    Време за изпълнение: {Math.round(results.time / 60 / 1000)} мин
                </p>
                <p className="mb-2 text-gray-600">
                    Време за решаване на теста: {calculateDuration(results.startedAt, results.solvedAt)}
                </p>
                <p className="mb-2 text-gray-600">
                    Дата на предаване: {new Date(results.solvedAt).toLocaleString("bg-BG")}
                </p>
                <p className="mb-2 text-gray-600">
                    Общо въпроси: {results.totalQuestions}
                </p>
                <p className="mb-2 text-green-700 font-semibold">
                    Верни отговори: {results.correctCount}
                </p>
                <p className="mb-4 text-red-700 font-semibold">
                    Грешни отговори: {results.wrongCount}
                </p>
                <p className="mb-6 text-gray-800 font-bold">
                    Оценка: {results.grade}
                </p>

                {/* Въпроси и отговори */}
                <div className="space-y-6">
                    {results.questions.map((q, idx) => {
                        const isCorrect = JSON.stringify(q.userAnswer) === JSON.stringify(q.correctAnswers);
                        return (
                            <div
                                key={idx}
                                className={`p-4 rounded-lg border ${isCorrect
                                    ? "border-green-400 bg-green-50"
                                    : "border-red-400 bg-red-50"
                                    }`}
                            >
                                <h3 className="font-semibold mb-2">
                                    {idx + 1}. {q.questionText}
                                </h3>
                                <p>
                                    <span className="font-medium">Вашият отговор:</span>{" "}
                                    <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                                        {Array.isArray(q.userAnswer)
                                            ? q.userAnswer.join(", ")
                                            : q.userAnswer}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-medium">Правилен отговор:</span>{" "}
                                    <span className="text-green-700">
                                        {Array.isArray(q.correctAnswers)
                                            ? q.correctAnswers.join(", ")
                                            : q.correctAnswers}
                                    </span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
