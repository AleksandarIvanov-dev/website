import React from "react";


export default function ChallengeDescription({ challenge }) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{challenge.title}</h2>
            <p className="text-gray-700 mb-4">{challenge.description}</p>
            <div>
                <h3 className="font-semibold text-gray-800 mb-2">Примирен Вход:</h3>
                <pre className="bg-gray-100 p-2 rounded">{challenge.sampleInput}</pre>
                <h3 className="font-semibold text-gray-800 mt-4 mb-2">Примерен Изход:</h3>
                <pre className="bg-gray-100 p-2 rounded">{challenge.sampleOutput}</pre>
            </div>
        </div>
    );
}
