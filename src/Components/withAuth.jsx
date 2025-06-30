import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
    return function AuthenticatedComponent(props) {
        const [isLoading, setLoading] = useState(true);
        const [isAuthenticated, setAuthenticated] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            fetch("http://localhost:5000/checkToken", {
                credentials: "include" // Important to send cookies
            })
                .then(res => {
                    if (res.status === 200) {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Auth check failed:", err);
                    setAuthenticated(false);
                    setLoading(false);
                });
        }, []);

        useEffect(() => {
            if (!isLoading && !isAuthenticated) {
                navigate("/logIn");
            }
        }, [isLoading, isAuthenticated, navigate]);

        if (isLoading) {
            return <div>Loading...</div>;
        }

        // Only render protected component if authenticated
        if (!isAuthenticated) {
            return null;
        }

        return <ComponentToProtect {...props} />;
    };
}