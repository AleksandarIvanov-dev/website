import React from "react";
import FooterHomePage from "../HomePage/FooterHomePage";
import Header from "../HeaderForTutorials/HeaderComponent";
import { Link } from "react-router-dom";

export default function ProgrammingVSCoding() {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner h-full">
            <Header />
            <h2 className="text-xl font-semibold text-blue-700 mb-4">📘 Programming vs Coding</h2>
            <p className="text-gray-700 mb-4">
                <span>
                    Think of coding as writing the actual instructions for a computer, while programming is the bigger picture
                    – it involves planning, problem-solving, and making sure everything works smoothly.
                </span>
                <br />
                <br />
                <span>
                    Coding is the process of writing instructions that a computer can understand, using a specific programming language like Python, Java, or C++.
                    Simply put, it’s like giving a computer a set of step-by-step directions to follow.
                    The coding meaning comes down to translating human ideas into a language that machines can process.
                    Computers only understand the language of ones and zeros, also known as binary, which is completely different from how we naturally communicate.
                </span>
                <br />
                <br />
                <span>
                    While coding is a big part of software development, it is not the most important part. To create a product, you need to take several additional steps.
                    They include planning, design, testing, deployment, and even maintenance.
                    Altogether, the whole process can be called programming.
                </span>
                <br />
                <span>
                    But enough about the theory, let’s get our hands dirty with some practical coding!
                </span>
            </p>
            <div className="flex justify-center mt-4">
                <Link to="/tutorials/hello-world" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Start Coding
                </Link>
            </div>
            <FooterHomePage />

        </div>
    );
}