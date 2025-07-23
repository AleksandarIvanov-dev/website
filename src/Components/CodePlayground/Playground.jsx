import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";
import ChallengeDescription from "./ChallengeDescription";
import CodeEditorForChallenge from "./PlaygroundCodeEditor";
import DropDownTheme from "../CodeEditor/DropDownTheme";


export default function Playground() {
    const { challengeId } = useParams();
    const [challenge, setChallenge] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('vs');

    // Fetch challenge data from the server
    useEffect(() => {
        async function fetchChallenge() {
            try {
                const res = await fetch(`http://localhost:5000/challenge/${challengeId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                });

                const data = await res.json();
                setChallenge(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchChallenge();
    }, [challengeId]);

    if (loading) return <p className="p-8">Loading...</p>;
    if (!challenge) return <p className="p-8 text-red-600">Challenge not found</p>;

    console.log(challenge.language)

    return (
        <div className="flex flex-col min-h-screen">
            <HomePageHeader />

            <main className="flex-1 bg-gray-100 p-4 md:p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6 overflow-auto">
                        <ChallengeDescription challenge={challenge} />
                    </div>

                    <div className="bg-white rounded-lg shadow p-6 overflow-auto">
                        <DropDownTheme selectedTheme={theme} onSelect={setTheme} />
                        <CodeEditorForChallenge
                            height="400px"
                            initialCode={challenge.starterCode}
                            programingLanguage={challenge.language}
                            challengeId={challenge._id}
                        />
                        <script src="https://static.elfsight.com/platform/platform.js" async></script>
                        <div class="elfsight-app-30425757-dbb3-4271-9a6c-9b0de79fc125" data-elfsight-app-lazy></div>
                    </div>
                </div>
            </main>

            <FooterHomePage />
        </div>
    );
}