import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import Quiz from "../../Exams/Quiz";
import { startTutorial, endTutorial } from "../CodeEditor";
import { Link } from "react-router-dom";

export default function ConventionsPython() {
    useEffect(() => {
        startTutorial("Python conventions", "Python");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Конвенциите в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Python е известен със своята простота и четимост, поставя силен акцент върху писането на чист и лесен за поддръжка код.
                        Един от ключовите аспекти, допринасящи за тази четимост, е спазването на конвенциите за именуване в Python.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Какво е Naming conventions in Python?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Именуващите конвенции в Python се отнасят до правила и насоки за именуване на променливи, функции, класове и други елементи във вашия код.
                        Придържането към тези конвенции осигурява последователност, четимост и по-добро сътрудничество между разработчиците.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ще разгледаме следните Naming conventions в Python</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Основният принцип: Яснота и четимост</li>
                        <li>Променливи</li>
                        <li>Класове</li>
                        <li>Константи</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Яснота и четимост</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Като става въпрос за именуване на променливи, функции, класове и модули в Python, водещият принцип е яснота и четимост.
                        Вашият код повече се чете от колкото да се дописва, затова дайте предимство на имена, които ясно предават тяхната цел и функционалност.
                        Не забравяйте, че описателните имена правят кода ви самообясняващ се и помагат на други разработчици да го разбират без усилие.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = 5 `}<span className="text-green-700"># Bad Example</span>
                            {`\nage = 24 `}<span className="text-green-700"># Good Example</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Променливи</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Когато дефинирате променливи, придържайте се към конвенцията за използване на CamelCase с начална главна буква.
                        Тази практика помага да се разграничат типовите променливи от обикновените променливи и подобрява четимостта на кода, особено когато работите със сложни анотации на типове.
                        Тук трябва да се отбележи, че ако промеливата е <strong>глобална</strong> тя трябва да е с главни букви и с <strong>snake_case</strong>, а ако е <strong>локална</strong> с малки букви и отновно със <strong>snake_case</strong>!
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`firstName = "Ivan" `}<span className="text-green-700"># Bad Example</span>
                            {`\nfirst_name = 24 `}<span className="text-green-700"># Good Example</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Класове</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Класовете в Python трябва да следват конвенцията CapWords (или CamelCase).
                        Това означава, че първата буква на всяка дума в името на класа трябва да е главна и да няма долни черти между думите.
                        Тази конвенция помага за подобряване на четимостта и съгласуваността на кода в програмните проекти.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`myNewClass: `}<span className="text-green-700"># Bad Example</span>
                            {`\nMyNewClass: `}<span className="text-green-700"># Good Example</span>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Константи</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Константиса са стойности, които не се очаква да се променят по време на изпълнение.
                        По конвенция, имената на константите се изписват с главни букви, като думите се разделят с долни черти.
                        Дефинирането на константи на ниво модул позволява те да бъдат лесно достъпни и използвани в целия проект.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`pi = 3.1416 `}<span className="text-green-700"># Bad Example</span>
                            {`\nPI = 3.1416 `}<span className="text-green-700"># Good Example</span>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Ако следвате тези конвенции, вашият Python код ще бъде по-лесен за четене, разбиране и поддръжка както от вас, така и от други програмисти.
                        Добрата практика е да се придържате към препоръките на <Link to={"https://realpython.com/python-pep8/"} className="text-blue-600 underline">PEP 8</Link> – официалният стилов гайд за Python, който обобщава всички основни правила за писане на чист и подреден код.
                    </p>

                    <Quiz
                        question="Какъв е основният принцип за именуване на променливи в Python?"
                        options={["CamelCase", "snake_case", "PascalCase"]}
                        correctAnswer={"scake_case"}
                        quizLanguage={"Python"}
                        quizName={"Конвенции в Python"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/python/variables"} onClick={() => endTutorial("Python conventions", "Python")} className="text-blue-600 underline">Променливи в Python</Link>.
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/python-naming-conventions/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Конвенции за именуване в Python
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>

    );
}