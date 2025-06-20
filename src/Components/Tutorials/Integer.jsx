import React from "react";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import FooterHomePage from "../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function Integers() {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner h-full">
            <HeaderHomePage />
            <h2 className="text-xl font-semibold text-blue-700 mb-4">📘 Integer</h2>
            <p className="text-gray-700 mb-4">
                Integers are whole numbers that can be positive, negative, or zero. They do not have any fractional or decimal parts.
                An integer varies from <strong>-2147483648</strong> to <strong> +2147483647</strong>, including all <strong>whole</strong> numbers in between.
                In programming, integers are commonly used to represent counts, indices, and other discrete values.
                This tutorial will guide you through the basics of working with integers in various programming languages.
                <br />
                <br />
                Integers are a fundamental data type in programming, used to represent whole numbers without any decimal points.
                They are sometimes called "whole numbers" or "counting numbers".
                In computer science, numbers fall into different categories like integers, floats, short, and long.
                Floats, or floating point numbers, are numbers that support decimal points.
                <strong>The size of an int (integer) data type is typically 4 bytes (32 bits)</strong>
                <pre className="bg-gray-200 p-2 rounded">
                    <code>
                        int count = 10; <br />
                        int score = -5.5; <span className="text-gray-500">// Will result in error</span><br />
                        float pi = 3.14; <br />
                        float temperature = -5.5; <br />
                        long population = 7800000000; <br />
                        short age = 30;
                    </code>
                </pre>
                Integers are numbers without a fractional component, and don't support decimal points.
                While some programming languages define these different types of numbers, others don't.
                For example, in Python, all numbers are treated as integers or floats, and the type is determined automatically based on the value assigned.
                <br />
                <strong>Example:</strong>
                <pre className="bg-gray-200 p-2 rounded">
                    <code>
                        count = 10 <br />
                        score = -5 <span className="text-gray-500">// Valid integer</span><br />
                        pi = 3.14 <span className="text-gray-500">// Valid float</span><br />
                        temperature = -5.5 <span className="text-gray-500">// Valid float</span><br />
                        population = 7800000000 <span className="text-gray-500">// Valid long</span><br />
                        age = 30 <span className="text-gray-500">// Valid short</span>
                    </code>
                </pre>
                Integers are essential in programming for tasks like counting, indexing, and performing arithmetic operations.
            </p>
            <div className="flex justify-center mt-4">
                <Link to="/tutorials/float" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Next: Float
                </Link>
            </div>
            <FooterHomePage />
        </div>
    );
}