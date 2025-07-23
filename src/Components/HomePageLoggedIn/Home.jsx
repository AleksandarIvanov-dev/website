import React from "react";
import HomePageHeader from "./HomePageHeader";
import TutorialList from "./TutorialList";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <HomePageHeader />
            <main className="max-w-4xl mx-auto p-6">
                <TutorialList />
            </main>
        </div>
    );
}