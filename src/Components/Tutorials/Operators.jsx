import React from "react";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import FooterHomePage from "../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function Operators() {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner h-full">
            <HeaderHomePage />
            <h2 className="text-xl font-semibold text-blue-700 mb-4">📘 Operators</h2>
            <p className="text-gray-700 mb-4">
                Operators are symbols that perform operations on variables and values. They are essential in programming for manipulating data and controlling the flow of execution.
                This tutorial will cover the different types of operators, including arithmetic, comparison, logical, and assignment operators, and how to use them effectively in your code.
                <br />
                <strong>Types of Operators:</strong>
                <ul className="list-disc list-inside mb-2">
                    <li>
                        <strong>Arithmetic Operators:</strong> Used for basic math, like <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide), and <code>%</code> (remainder).
                    </li>
                    <li>
                        <strong>Comparison Operators:</strong> Used to compare values, such as <code>==</code> (equal), <code>!=</code> (not equal), <code>&gt;</code> (greater than), <code>&lt;</code> (less than).
                    </li>
                    <li>
                        <strong>Logical Operators:</strong> Used to combine conditions, like <code>&&</code> (and), <code>||</code> (or), and <code>!</code> (not).
                    </li>
                    <li>
                        <strong>Increment/Decrement Operators:</strong> Increase or decrease a value by 1, like <code>++</code> (add 1) and <code>--</code> (subtract 1).
                    </li>
                    <li>
                        <strong>Assignment Operator:</strong> Used to assign values, such as <strong><code>=</code></strong>
                    </li>
                </ul>
                <p className="mb-2">
                    <strong>Example:</strong>
                    <br />
                    <pre className="bg-gray-200 p-2 rounded">
                        <code>
                            let a = 5; <br />
                            let b = 2; <br />
                            let sum = a + b; <span className="text-gray-500">// sum is 7</span><br />
                            sum++; <span className="text-gray-500">// sum is 8</span><br />
                            sum--; <span className="text-gray-500">// sum is 7</span>
                        </code>
                    </pre>
                </p>
                <p>
                    Operators help you perform calculations, compare values, and make decisions in your code.
                    You will use operators frequently when writing programs.
                    Understanding how each operator works will help you write more efficient and readable code.
                    Practice using different operators in small code snippets to see how they affect your variables and program logic.
                </p>
            </p>
            <div className="flex justify-center mt-4">
                <Link to="/tutorials/integers" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Next: Integers
                </Link>
            </div>
            <FooterHomePage />
        </div>
    );
}