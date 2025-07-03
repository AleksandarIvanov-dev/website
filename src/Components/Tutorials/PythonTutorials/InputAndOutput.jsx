import React from "react";
import CodeEditor from '../CodeEditor';
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function InputOutputPython() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Вход и изход в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Работата с входни и изходни данни е основна част от всяка програма. В Python можем лесно да отпечатваме информация на екрана с помощта на функцията <code className="bg-gray-200 px-1 rounded">print()</code>, както и да приемаме вход от потребителя чрез <code className="bg-gray-200 px-1 rounded">input()</code>.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Функцията print()</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        <code className="bg-gray-200 px-1 rounded">print()</code> се използва за извеждане на текст или стойности на екрана. Можем да отпечатаме низове (текст), числа и други променливи.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`print("Hello, World!")\nprint(42)\nname = "Sahko"\nprint(name)`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Функцията input()</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        <code className="bg-gray-200 px-1 rounded">input()</code> позволява на потребителя да въведе данни по време на изпълнението на програмата. Въведената стойност винаги е низ (string), дори ако въведем число.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`name = input("Въведете вашето име: ")\nprint("Здравей,", name)`}
                        </pre>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Ако искаме да преобразуваме входа в число, можем да използваме функциите <code className="bg-gray-200 px-1 rounded">int()</code> за цели числа или <code className="bg-gray-200 px-1 rounded">float()</code> за дробни числа.
                    </p>

                    <div className="mt-12">
                        <CodeEditor height="150px" initialCode={`name = input();\nprint("Hello, ", name)`} />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Сега вече знаете как да комуникирате с потребителя чрез въвеждане и извеждане на данни. Това е основа за изграждане на интерактивни програми.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок е <Link to={"/tutorials/python/conventions"} className="text-blue-600 underline">Правила за писане в Python</Link>.
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>

    );
}