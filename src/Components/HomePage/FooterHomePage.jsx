import React from "react";

const FooterHomePage = () => { 
    return (
        <footer className="bg-gray-800 text-white p-4 mt-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Coding Self-Learning Platform. All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Made with ❤️ by Sahkobg
            </p>
        </div>
        </footer>
    );
}

export default FooterHomePage;