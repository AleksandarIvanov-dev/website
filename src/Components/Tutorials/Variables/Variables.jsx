import React from "react";
import Header from "../../HeaderForTutorials/HeaderComponent";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function Variables() {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner h-full">
            <Header />
            <h2 className="text-xl font-semibold text-blue-700 mb-4">📘 Variables in Programming</h2>
            <p className="text-gray-700 mb-4">
                Variables are fundamental building blocks in programming. They allow you to store and manipulate data within your code.
                In this tutorial, you'll learn how to declare and use variables in various programming languages.
            </p>
            <p className="text-gray-700 mb-4">
                A variable is essentially a named storage location in your program that can hold different values during execution.
                Understanding how to work with variables is crucial for writing effective code and solving problems.
                There are several types of variables, including:
                <br />
                Integers
                <pre className="bg-gray-200 p-2 rounded">
                    <code><code> int age = 24;</code></code>
                </pre>

                Floats
                <pre className="bg-gray-200 p-2 rounded">
                    <code> float pi = 3.14;</code>
                </pre>

                Strings
                <pre className="bg-gray-200 p-2 rounded">
                    <code> string name = "Alice";</code>
                </pre>

                Booleans
                <pre className="bg-gray-200 p-2 rounded">
                    <code> bool isActive = true;</code>
                </pre>
                <br />
                Each programming language has its own syntax for declaring variables, but the concept remains the same.
                For example, in JavaScript, you can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>:

                <pre className="bg-gray-200 p-2 rounded">
                    <code>let age = 25;
                        const name = "Bob";
                        var isStudent = false;</code>
                </pre>

                It's important to choose meaningful variable names and use the appropriate type for your data. Variables help make your code readable, maintainable, and flexible.
            </p>
            <div className="flex justify-center mt-4">
                <Link to="/tutorials/integers" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Next: Operators
                </Link>
            </div>
            <FooterHomePage />
        </div>
    );
}