import React from "react";
import Header from "../HeaderForTutorials/HeaderComponent";
import { Link } from "react-router-dom";

export default function AllTutorials() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Header />
            <h1 className="text-3xl font-bold text-blue-700 mb-6">All Tutorials</h1>
            <p className="text-lg text-gray-700 mb-4">
                Explore our comprehensive tutorials to enhance your programming skills.
            </p>
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                    {/* Example tutorial links */}
                    <li>
                        <Link to="/tutorials/programming-vs-coding">Programming VS Coding</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/hello-world">Your first line of code</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/variables">Variables and Data Types</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/operators">Operators</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/integer">Type: Integers</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/float">Type: Float</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/string">Type: String</Link>
                    </li>
                    <li>
                        <Link to="/tutorials/bool">Type: Boolean</Link>
                    </li>
                    <li>
                        <Link to="/exams">Exam</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/home">Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}