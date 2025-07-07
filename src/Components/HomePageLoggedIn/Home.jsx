import React from "react";
import HomePageHeader from "./HomePageHeader";
import TutorialList from "./TutorialList";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <HomePageHeader />
            <main className="max-w-4xl mx-auto p-6">
                <script src="https://static.elfsight.com/platform/platform.js" async></script>
                <div class="elfsight-app-30425757-dbb3-4271-9a6c-9b0de79fc125" data-elfsight-app-lazy></div>
                <TutorialList />
            </main>
        </div>
    );
}