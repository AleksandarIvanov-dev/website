import React from "react";
import CodeEditor from '../CodeEditor'
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import Quiz from "../../Exams/Quiz";
import { Link } from "react-router-dom";

export default function IntroPython() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">

                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Променливи в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python променливите се използват за съхраняване на данни, които могат да бъдат реферирани и манипулирани по време на изпълнение на програмата.
                        Променливата по същество е име, което е присвоено на стойност. За разлика от много други езици за програмиране, променливите в
                        Python не изискват изрично деклариране на тип. Типът на променливата се извежда въз основа на присвоената стойност.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променливите действат като контейнери за данни. Те ни позволяват да съхраняваме и използваме повторно стойности в нашата програма.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`age = 31 `}<span className="text-green-700"># Променливата age съдържа стойността 31 от тип integer</span>
                            {`\nname = "Sahko" `}<span className="text-green-700"># Променливата name съдържа стойността "Sahko" от тип String</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Правила за именуване на променливи</h2>
                    <p className="font-semibold">За да използваме ефективно променливите, трябва да спазваме правилата за именуване на Python:</p>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Разрешени символи: Имената на променливи могат да съдържат само букви, цифри и долни черти (_).</li>
                        <li>Начален символ: Името на променлива не може да започва с цифра.</li>
                        <li>Чувствителност към регистъра: Имената на променливи са чувствителни към регистъра (т.е. myVar и myvar са различни променливи).</li>
                        <li>Запазени думи (ключови думи): Избягвайте да използвате ключови думи на Python (като if, else, for) като имена на променливи.</li>
                    </ul>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            <span className="text-green-700"># Правилно създадени променливи</span>
                            {`\nage = 31 `}
                            {`\nfirst_name = "Sahko" `}
                            {`\n_color = "green" \n\n`}
                            <span className="text-green-700"># Грешно създадени променливи</span>
                            {`\n1name = "Error"`} <span className="text-green-700"># Започва с число</span>
                            {`\nclass = 10`} <span className="text-green-700"># Думата class е резервирана</span>
                            {`\nuser-name = "Doe"`} <span className="text-green-700"># Съдържа тире</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Преобразуване на тип на променлива (Type Casting)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Преобразуване на тип (Type casting) се отнася до процеса на конвертиране на стойността от един тип данни в друг.
                        Python предоставя няколко вградени функции за улесняване на това преобразуване, включително int(), float() и str(), наред с други.

                    </p>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>int() – Преобразува съвместими стойности в цяло число.</li>
                        <li>float() – Преобразува стойности в числа с плаваща запетая (десетични числа).</li>
                        <li>str() – Преобразува всеки тип данни в низ (текст).</li>
                    </ul>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = "31" `}
                            {`\ncount = 5`}
                            {`\nage = int(a) `} <span className="text-green-700"># Преобразуване от string към integer</span>
                            {`\nfloat_number = float(count)`} <span className="text-green-700"># Преобразуване от integer към string</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Получаване на типа на променлива</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python можем да определим типа на променлива, използвайки функцията type(). Тази вградена функция връща типа на обекта, подаден като аргумент.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`n = 42 `}
                            {`\nf = 3.14`}
                            {`\ns = "Hello, World!" `}
                            {`\nprint(type(n))`} <span className="text-green-700"># Ще се покаже {`<class 'int'>`}</span>
                            {`\nprint(type(f))`} <span className="text-green-700"># Ще се покаже {`<class 'float'>`}</span>
                            {`\nprint(type(s))`} <span className="text-green-700"># Ще се покаже {`<class 'str'>`}</span>
                        </pre>
                    </div>


                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Пробвай сам!</h2>
                        <CodeEditor height="150px" initialCode={`n = 42\nf = 3.14\ns = "Hello, World!"\nprint(type(n))\nprint(type(f))\nprint(type(s))`} programingLanguage="python" theme="vs" />
                    </div>

                    <Quiz
                        question="Може ли число от тип int да бъде преобразувано в тип str?"
                        options={["Да", "Не"]}
                        correctAnswer={"Да"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/python/numbers"} className="text-blue-600 underline">Числа в Python</Link>

                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/python-variables/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Python променливи
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>

    )
}