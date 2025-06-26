import React from "react";


export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Programin'DE</a>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/home" className="hover:underline">Home</a></li>
                        <li><a href="/signUp" className="hover:underline">Options</a></li>
                        <li><a href="/tutorials" className="hover:underline">All Tutorials</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}