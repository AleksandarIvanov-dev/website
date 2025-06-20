import React from "react";


const HeaderHomePage = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Programin'DE</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/logIn" className="hover:underline">Log In</a></li>
            <li><a href="/signUp" className="hover:underline">Sign up</a></li>
            <li><a href="/tutorials" className="hover:underline">Tutorials</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderHomePage;