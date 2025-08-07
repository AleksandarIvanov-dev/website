import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HomePageHeader() {
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState('')
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {

        handleUserDetails();

        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleUserDetails = async () => {
        try {
            const res = await fetch("http://localhost:5000/getuserprofile", {
                method: "GET",
                credentials: "include", // Required to send cookies
            });

            if (res.ok) {
                const data = await res.json();
                setUserName(data.firstName);
            } else {
                console.error("Failed to fetch user profile");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
            navigate("/login");
        }
    };

    const handleLogout = async () => {
        try {
            const res = await fetch("http://localhost:5000/logout", {
                method: "POST",
                credentials: "include",
            });

            if (res.status === 200) {
                navigate("/");
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600"><Link to={"/home"}>Programin'DE</Link></h1>

            <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
                <Link to="/challenges" className="hover:text-blue-500">Challenges</Link>
                <Link to="/tutorials" className="hover:text-blue-500">Tutorials</Link>
                <Link to="/exams" className="hover:text-blue-500">Exams</Link>
                <Link to="/playground" className="hover:text-blue-500">Playground</Link>
            </nav>

            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="bg-gray-100 px-4 py-2 rounded border text-gray-700 font-medium hover:bg-gray-200"
                >
                    Welcome, {userName}
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                        <ul className="text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to={"/myprofile"}>Profile</Link></li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to={"/mystats"}>My Stats</Link></li>
                            <li
                                className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                                onClick={handleLogout}
                            >
                                Log Out
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}