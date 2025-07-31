import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

export default function UserDetails() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("http://localhost:5000/getuserprofile", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await response.json();
                console.log(data)
                if (response.ok) {
                    setUser(data);
                } else {
                    console.error("Failed to load user data:", data.message);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (isLoading) return <p className="text-gray-500">Loading profile...</p>;
    if (!user) return <p className="text-red-500">No user data available.</p>;

    return <UserProfile user={user} />;
}