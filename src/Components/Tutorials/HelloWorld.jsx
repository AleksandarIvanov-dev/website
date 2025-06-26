import React from "react";
import Header from "../HeaderForTutorials/HeaderComponent";
import FooterHomePage from "../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function HelloWorld() {
    return (
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner h-full">
            <Header />
            <h2 className="text-xl font-semibold text-blue-700 mb-4">📘 Hello World</h2>
            <p className="text-gray-700 mb-4">
                The "Hello, World!" program is a simple program that outputs the text "Hello, World!" to the screen.
                It is often used as a first program for beginners to learn the syntax of a programming language.
                This tutorial will guide you through writing your first "Hello, World!" program in various programming languages.
                Writing your first line of code is an important step in learning any programming language.
                <br />
                <br />
                Typically, this line is a simple instruction that tells the computer to display a message on the screen.
                The purpose is to familiarize you with the basic structure of a program, how to write statements, and how to run your code.
                Even though it seems simple, this first step helps you understand how code is written, saved, and executed, building your confidence to explore more complex concepts as you continue learning.
            </p>
            <div className="flex justify-center mt-4">
                <Link to="/tutorials/variables" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Next: Variables
                </Link>
            </div>
            <FooterHomePage />
        </div>
    );
}