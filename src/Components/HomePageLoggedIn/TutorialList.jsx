import React from "react";
import TutorialCard from "./TutorialCards";

export default function TutorialList(){
    const tutorials = [
        { id: 1, title: "Programming VS Coding", image: "/placeholder.png", text: "Programming vs Coding. What is the difference? Why both are important for creating softwares!", link: "/tutorials/programming-vs-coding" },
        { id: 2, title: "Your first program", image: "/placeholder.png", text: "First program", link: "/tutorials/hello-world" },
        { id: 3, title: "Variables", image: "/placeholder.png", text: "Variables", link: "/tutorials/variables" },
        { id: 4, title: "Operators", image: "/placeholder.png", text: "What are Operators?", link: "/tutorials/operators" },
        { id: 5, title: "Integers", image: "/placeholder.png", text: "What is an Integer?", link: "/tutorials/integers" },
        { id: 6, title: "Float", image: "/placeholder.png", text: "What is a Float?", link: "/tutorials/float" },
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
            <div className="space-y-4">
                {tutorials.map(tutorial => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
            </div>
        </section>
    );
}