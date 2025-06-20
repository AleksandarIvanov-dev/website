import React from "react";
import { Link } from "react-router-dom";

const BodyHomePage = () => {
return (
    <main className="p-6 text-gray-700 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Welcome to the Programing Done Easy</h2>
      <p className="mb-6 text-center max-w-xl">
        Practice writing and running code in different programming languages. Start coding now and test your skills instantly.
      </p>
      <Link
        to="/code-editor"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Code Editor
      </Link>
    </main>
  );
}

export default BodyHomePage;