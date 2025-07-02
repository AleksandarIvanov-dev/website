import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import OperatorsImage from '../Images/OperatorsInPython.png'
import { Link } from "react-router-dom";

export default function Operators() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Оператори в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Операторите като цяло се използват за извършване на операции върху стойности и променливи.
                        Това са стандартни символи, използвани за логически и аритметични операции. В тази статия ще разгледаме различните типове оператори в Python.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        ОПЕРАТОРИ: Това са специалните символи. Напр. +, *, /, и т.н.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        ОПЕРАНД: Това е стойността, върху която се прилага операторът.

                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={OperatorsImage}
                                alt="Наличните оператори в Python"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Аритметични оператори</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Аритметичните оператори в Python се използват за извършване на основни математически операции като събиране, изваждане, умножение и деление.
                        В Python 3.x резултатът от делението е число с плаваща запетая, докато в Python 2.x делението на 2 цели числа беше цяло число.
                        xЗа да се получи цяло число като резултат в Python 3.x, се използва операторът за целочислено деление (//).
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 10`}
                            {`\nb = 3`}
                            {`\nprint(a + b)`} <span className="text-green-700"># Резултатът е 13</span>
                            {`\nprint(a - b)`} <span className="text-green-700"># Резултатът е 7</span>
                            {`\nprint(a * b)`} <span className="text-green-700"># Резултатът е 30</span>
                            {`\nprint(a / b)`} <span className="text-green-700"># Резултатът е 3.333...</span>
                            {`\nprint(a % b)`} <span className="text-green-700"># Резултатът е 1</span>
                            {`\nprint(a ** b)`} <span className="text-green-700"># Резултатът е 1000</span>
                            {`\nprint(a // b)`} <span className="text-green-700"># Резултатът е 3</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператори за сравнение</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python операторите за сравнение (релационни оператори) сравняват стойностите. Те връщат True или False в зависимост от условието.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 13`}
                            {`\nb = 33`}
                            {`\nprint(a > b)`} <span className="text-green-700"># Резултатът е False</span>
                            {`\nprint(a < b)`} <span className="text-green-700"># Резултатът е True</span>
                            {`\nprint(a == b)`} <span className="text-green-700"># Резултатът е False</span>
                            {`\nprint(a != b)`} <span className="text-green-700"># Резултатът е True</span>
                            {`\nprint(a >= b)`} <span className="text-green-700"># Резултатът е False</span>
                            {`\nprint(a <= b)`} <span className="text-green-700"># Резултатът е True</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Логически оператори</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python логическите оператори извършват операции Логическо И (AND), Логическо ИЛИ (OR) и Логическо НЕ (NOT).
                        Те се използват за комбиниране на условни изрази.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = True`}
                            {`\nb = False`}
                            {`\nprint(a and b)`} <span className="text-green-700"># Резултатът е False</span>
                            {`\nprint(a or b)`} <span className="text-green-700"># Резултатът е True</span>
                            {`\nprint(not a)`} <span className="text-green-700"># Резултатът е False</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Битови оператори</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python битовите оператори действат върху битове и извършват операции бит по бит.
                        Те се използват за опериране с двоични числа.
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Битово НЕ (Bitwise NOT)</li>
                        <li>Битово изместване (Bitwise Shift)</li>
                        <li>Битово И (Bitwise AND)</li>
                        <li>Битово ИЗКЛЮЧВАЩО ИЛИ (Bitwise XOR)</li>
                        <li>Битово ИЛИ (Bitwise OR)</li>
                    </ul>

                    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 10`}
                            {`\nb = 4`}
                            {`\nprint(a & b)`} <span className="text-green-700"># Резултатът е 0</span>
                            {`\nprint(a | b)`} <span className="text-green-700"># Резултатът е 14</span>
                            {`\nprint(~a)`} <span className="text-green-700"># Резултатът е -11</span>
                            {`\nprint(a ^ b)`} <span className="text-green-700"># Резултатът е 14</span>
                            {`\nprint(a >> b)`} <span className="text-green-700"># Резултатът е 2</span>
                            {`\nprint(a << b)`} <span className="text-green-700"># Резултатът е 40</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператори за присвояване</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Операторите за присвояване в Python се използват за присвояване на стойности на променливите.
                        Този оператор се използва за присвояване на стойността от дясната страна на израза на операнда от лявата страна.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 10`}
                            {`\nb = a`}
                            {`\nprint(b)`} <span className="text-green-700"># Резултатът е 10</span>
                            {`\nb += a`}
                            {`\nprint(b)`} <span className="text-green-700"># Резултатът е 20</span>
                            {`\nb -= a`}
                            {`\nprint(b)`} <span className="text-green-700"># Резултатът е 10</span>
                            {`\nb *= a`}
                            {`\nprint(b)`} <span className="text-green-700"># Резултатът е 100</span>
                            {`\nb <<= a`}
                            {`\nprint(b)`} <span className="text-green-700"># Резултатът е 102400</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператори за идентичност</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python, is и is not са оператори за идентичност; и двата се използват, за да се провери дали две стойности са разположени в една и съща част от паметта.
                        Две променливи, които са равни, не означават, че са идентични.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 10`}
                            {`\nb = 20`}
                            {`\nc = a`}
                            {`\nprint(a is not b)`} <span className="text-green-700"># Резултатът е True</span>
                            {`\nprint(a is c)`} <span className="text-green-700"># Резултатът е True</span>
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor height="120px" initialCode={`a = 10\nb = 3\nprint(a + b)\nprint(a ** b)`} />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок е <Link to={"/tutorials/python/conditions"} className="text-blue-600 underline">Условни оператори в Python!</Link>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}