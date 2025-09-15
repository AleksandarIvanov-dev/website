import React, { useEffect, useState } from "react";
import TutorialCard from "./TutorialCards";

export default function TutorialList() {
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    useEffect(() => {
        async function fetchTutorials() {
            try {
                const response = await fetch("http://localhost:5000/get-tutorial", {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch tutorials');
                }

                const data = await response.json();
                setTutorials(data);
                if (data.length > 0) {
                    setSelectedLanguage(data[0].language);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTutorials();
    }, [selectedLanguage]);

    if (loading) return <p>Loading tutorials...</p>;
    if (error) return <p>Error: {error}</p>;
    if (tutorials.length === 0) return <p>No tutorials available.</p>;

    // Determine the heading text based on the language
    const getHeadingText = () => {
        if (selectedLanguage.toLowerCase() === "other") {
            return "Започни с тези уроци";
        } else {
            return `Продължи ${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}`;
        }
    };

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">{getHeadingText()}</h2>
            <div className="space-y-4">
                {tutorials.map(tutorial => (
                    <TutorialCard key={tutorial._id} tutorial={tutorial} />
                ))}
            </div>
        </section>
    );
}