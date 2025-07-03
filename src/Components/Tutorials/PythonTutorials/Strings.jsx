import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import StringIndexing from '../Images/Python_String_index.png'
import CodeEditor from '../CodeEditor'
import { Link } from "react-router-dom";

export default function Strings() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">

                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Низове в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Низът е последователност от символи. Python третира всичко в кавички ("") като низ. Това включва букви, цифри и символи.
                        Python няма типов данни за символ, така че единичен символ е низ с дължина 1.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`s = "Hello" `}
                            {`\nprint(s) `} <span className="text-green-700"># показва се Hello</span>
                            {`\nprint(s[0])`} <span className="text-green-700"># показва се H</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създаване на Strings</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">Низове могат да бъдат създавани както с единични (') така и с двойни (") кавички.</p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`s1 = 'Hello' `}
                            {`\ns2 = "World" `}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Достъпване на символи в низове</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Низовeте в Python са последователности от символи, така че можем да осъществяваме достъп до отделни символи, използвайки индексиране.
                        Индексирането на низове започва от 0 и от -1 отзад напред. Това ни позволява да извличаме конкретни символи от низа.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={StringIndexing}
                                alt="Илюстрация на индексиране на низове в Python"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`s = "Hello World"`}
                            {`\nprint(s[4])`} <span className="text-green-700"># показва се O</span>
                            {`\nprint(s[6])`} <span className="text-green-700"># показва се W</span>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python можете да използвате отрицателни индекси за достъп до символи от края на низове.
                        Например, -1 се отнася за последния символ, -2 за втория отзад напред и така нататък.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`print(s[-5])`} <span className="text-green-700"># показва се W</span>
                            {`\nprint(s[-11])`} <span className="text-green-700"># показва се H</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Неизменност на низовете (String Immutability)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python низовете са неизменни. Това означава, че след като един низ е създаден, неговото съдържание не може да бъде променяно.
                        Всяка операция, която изглежда, че променя низ, като конкатенация (съединяване) или замяна на символи,
                        всъщност създава нов низ в паметта с желаните промени, оставяйки оригиналния низ непокътнат.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`my_string = "hello"`}
                            {`\nmy_string[0] = "H"`} <span className="text-green-700"># Python ще предизвика TypeError</span>
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor height="100px" initialCode={`my_string = "hello"\nmy_string[0] = "H"`} />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок е <Link to={"/tutorials/python/lists"} className="text-blue-600 underline">Оператори в Python!</Link>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}