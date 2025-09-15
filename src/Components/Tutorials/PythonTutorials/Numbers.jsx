import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import Quiz from "../../Exams/Quiz";
import { startTutorial, endTutorial } from "../CodeEditor";
import { Link } from "react-router-dom";

export default function NumbersPython() {
    useEffect(() => {
        startTutorial("Числа в Python", "Python");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">

                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Числа в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python числата са основен тип данни, който е от съществено значение за извършване на аритметични операции и изчисления. Python поддържа три типа числа:
                    </p>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Цели числа (integers): Това са цели числа, положителни или отрицателни, без десетична запетая (напр. 5, −100, 0).</li>
                        <li>Числа с плаваща запетая (floating-point numbers): Това са числа с десетична запетая, представляващи реални числа (напр. 3.14, −0.001, 2.0).</li>
                        <li>Комплексни числа (complex numbers): Това са числа с реална и имагинерна част, записани във формата a+bj, където 'a' е реалната част, 'b' е имагинерната част, а 'j' е имагинерната единица (√−1​) (напр. 1+2j, −3j).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Python Integer</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">В Python, int е цяло число, което включва както положителни, така и отрицателни стойности, но не и дроби. Няма ограничение за дължината или големината на дадено цяло число в Python.</p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`x = 31 `} <span className="text-green-700"># x съдържа позитивна стойност</span>
                            {`\ny = -21 `} <span className="text-green-700"># y съдържа негативна стойност</span>
                            {`\nz = 0`} <span className="text-green-700"># 0 също е считана за integer</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Python Float</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Това е реално число с представяне с плаваща запетая (floating-point). То се указва чрез десетична запетая.
                        По желание може да бъде добавена буквата e или E, последвана от положително или отрицателно цяло число,
                        за да се укаже научно представяне (scientific notation). Някои примери за числа, които се представят като float, са 0.5 и -7.823457.
                        Те могат да бъдат създадени директно чрез въвеждане на число с десетична запетая или чрез използване на операции като деление върху цели числа.
                        Допълнителните нули в края на числото автоматично се игнорират.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 3.14`} <span className="text-green-700"># a съдържа позитивна стойност</span>
                            {`\nb = -0.99`} <span className="text-green-700"># b съдържа негативна стойност</span>
                            {`\nc = 0.0`} <span className="text-green-700"># float стойност, която представлява нула</span>
                        </pre>
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Python Complex</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Комплексното число е число, което се състои от реална и имагинерна част.
                        Например, 2 + 3j е комплексно число, където 2 е реалната компонента, а 3, умножено по j, е имагинерна част.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 3 + 3j`}
                            {`\nb = 5 + 25j`}
                            {`\nc = 4 + 0j`}
                        </pre>
                    </div>

                    <Quiz
                        question="Може ли число от тип int да бъде с плаваща запетая?"
                        options={["Да", "Не"]}
                        correctAnswer={"Не"}
                        quizLanguage={"Python"}
                        quizName={"Числа в Python"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/python/string"} onClick={() => endTutorial("Числа в Python", "Python")} className="text-blue-600 underline">String в Python!</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/python-numbers/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Числа в Python
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}