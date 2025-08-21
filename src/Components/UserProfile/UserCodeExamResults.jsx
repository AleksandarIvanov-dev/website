import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserCodeExamResults() {
    const { id } = useParams();
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const res = await fetch(`http://localhost:5000/exam/code/answers/${id}`, {
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();

                if (res.ok) {
                    setSubmissions(data.submissions);
                } else {
                    setError(data.error || "Failed to fetch submissions");
                }
            } catch (err) {
                setError("Server error: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, [id]);

    if (loading) return <div className="p-6 text-white">Loading submissions...</div>;
    if (error) return <div className="p-6 text-red-500">{error}</div>;
    if (submissions.length === 0)
        return <div className="p-6 text-yellow-300">No submissions found for this exam.</div>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen space-y-6">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Submissions for Exam</h1>

            {submissions.map((sub, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-blue-200 shadow-md space-y-3"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-semibold text-xl text-blue-700">{sub.title}</h2>
                        <span
                            className={`px-3 py-1 rounded font-semibold text-white ${sub.status === "passed" ? "bg-green-600" : "bg-red-600"
                                }`}
                        >
                            {sub.status.toUpperCase()}
                        </span>
                    </div>

                    {/* Submission info */}
                    <p className="text-gray-600 text-sm">
                        <strong>Submitted At:</strong> {new Date(sub.submittedAt).toLocaleString()}
                    </p>
                    <p className="text-gray-600 text-sm">
                        <strong>Test Cases Passed:</strong> {sub.testCasesPassed} / {sub.totalTestCases}
                    </p>

                    {/* Code */}
                    <div>
                        <h3 className="font-medium text-blue-700 mb-1">Code:</h3>
                        <pre className="bg-gray-50 p-3 rounded overflow-x-auto text-sm border border-blue-100">
                            {sub.code}
                        </pre>
                    </div>

                    {/* Output */}
                    <div>
                        <h3 className="font-medium text-blue-700 mb-1">Output / Test Results:</h3>
                        <pre className="bg-gray-50 p-3 rounded overflow-x-auto text-sm border border-blue-100">
                            {sub.output}
                        </pre>
                    </div>
                </div>
            ))}
        </div>
    );

}
