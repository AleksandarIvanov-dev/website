import React from "react";


const HeaderHomePage = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Programin'DE</a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/logIn" className="hover:underline">Log In</a></li>
            <li><a href="/signUp" className="hover:underline">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderHomePage;