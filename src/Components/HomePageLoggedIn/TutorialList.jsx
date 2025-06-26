import React, { useEffect, useState } from "react";
import TutorialCard from "./TutorialCards";

export default function TutorialList() {
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTutorials() {
            try {
                const response = await fetch('http://localhost:5000/alltutorials', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tutorials');
                }

                const data = await response.json();
                setTutorials(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTutorials();
    }, []); // empty dependency = run once on mount

    if (loading) return <p>Loading tutorials...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
            <div className="space-y-4">
                {tutorials.map(tutorial => (
                    <TutorialCard key={tutorial._id} tutorial={tutorial} />
                ))}
            </div>
        </section>
    );
}