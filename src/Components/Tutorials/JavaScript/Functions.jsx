import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import { Link } from "react-router-dom";


export default function JavaScriptFunctions() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Функции в JavaScript
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Функциите в JavaScript са блокове код за многократна употреба, предназначени за изпълнение на специфични задачи. Те ви позволяват да организирате,
                        използвате повторно и модулирате код. Той може да приема входни данни, да извършва действия и да връща изходни данни.
                    </p>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Синаксис и работа на фунцкиие</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Дефиницията на функция понякога се нарича още декларация на функция или оператор на функция. По-долу са правилата за създаване на функция в JavaScript:{`]n`}{`]n`}

                        Започнете с функцията на ключовите думи Keyword
                        Име на функция, дефинирано от потребителя (в горния пример името е sum )
                        Списък с параметри, оградени в скоби и разделени със запетаи (В горния пример параметрите са x и y )
                        Списък от оператори, съставящи тялото на функцията, ограден в къдрави скоби { } (В горния пример операторът е "return x + y").
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Извикване на функция</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        След дефинирането на функция, следващата стъпка е да я извикаме, за да използваме функцията.
                        Можем да извикаме функция, като използваме името на функцията, разделено от стойността на параметрите, затворени в скобите.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`function welcomeMsg(name) {
    return ("Hello " + name + " welcome to Programin'DE");
}

let nameVal = "User";

// calling the function
console.log(welcomeMsg(nameVal));`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Защо да използваме функции</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Кодът на функцията, който сте написали, ще се изпълнява всеки път, когато бъде извикана.{`]n`}{`]n`}

                        Задейства се от събитие (например, щракване върху бутон от потребител).
                        Когато се извика изрично от JavaScript код.
                        Автоматично изпълнявани, например при самоизвикващи се функции.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = new Array(1, 2, 3, 4, 5)
console.log(a)`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Фунцкионален израз</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Това е подобно на декларация на функция без името на функцията. Функционалните изрази могат да се съхраняват в променлива за присвояване.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`let testFunction= function(paramA, paramB) { 

    // Набор от оператори 
}`}
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`const mul = function (x, y) {
    return x * y;
};
console.log(mul(4, 5));`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Стрелкова функция</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Стрелковите функции са кратък синтаксис за писане на функции, въведен в ES6.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`име_на_функция = (аргумент1, аргумент2,...) => израз}`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Незабавно извикан функционален израз (IIFE)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        IIFE функциите се изпълняват веднага след дефинирането им. Те често се използват за създаване на изолирани области.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Анонимни Функции</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Анонимните функции са функции без име. Те често се използват като аргументи на други функции.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`setTimeout(function () {
    console.log("Anonymous function executed!");
}, 1000);`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Вложени функции</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Функциите, дефинирани в други функции, се наричат вложени функции . Те имат достъп до променливите на родителската си функция.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Чисти функции</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Чистите функции връщат един и същ изход за едни и същи входни данни и не произвеждат странични ефекти.
                        Те не променят състояние извън обхвата си, като например модифициране на глобални променливи, промяна на състоянието на обекти,
                        предадени като аргументи, или извършване на входно/изходни операции.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3));`}
                            programingLanguage="java" />
                    </div>

                    <Quiz
                        question="Кой от посочените начини правилно създава стрелкова (arrrow) функция?"
                        options={["greeting => 'Hello World!';", "greeting = return => 'Hello World!';", "greeting = () => 'Hello World!';"]}
                        correctAnswer={"greeting = () => 'Hello World!';"}
                        quizLanguage={"JavaScript"}
                        quizName={"Функции в JavaScript"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/functions-in-javascript/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Функции в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}