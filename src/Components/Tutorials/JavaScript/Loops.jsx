import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import Loop from "../Images/JavaScript/loop.png"
import Loop1 from "../Images/JavaScript/Loop1.png"
import Loop2 from "../Images/JavaScript/loop3.png"
import { Link } from "react-router-dom";


export default function JavaScriptLoops() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Цикли в JavaScript
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Циклите в JavaScript се използват за намаляване на повтарящите се задачи чрез многократно изпълнение на блок от код, стига да е вярно определено условие.
                        Това прави кода по-сбит и ефективен. Да предположим, че искаме да отпечатаме „Hello World“ пет пъти.
                        Вместо ръчно да пишем оператора print многократно, можем да използваме цикъл, за да автоматизираме задачата и да я изпълним въз основа на даденото условие.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`for (let i = 0; i < 5; i++) {
    console.log("Hello World!");
}`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">For цикъл</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът for повтаря блок от код определен брой пъти. Той съдържа инициализация, условие и инкремент/декремент в един ред.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`за (инициализация; условие; увеличение/намаляване) {
    // Код за изпълнение
}`}
                        </pre>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={Loop}
                                alt="Цикъл For"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`for (le i = 0; i <= 3; i++){
	console.log("Count: ", i);
}`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">While цикъл</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът while се изпълнява, докато условието е вярно. Може да се разглежда като повтарящ се if оператор.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`while (условие) { 
    // Код за изпълнение 
}`}
                        </pre>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={Loop1}
                                alt="Цикъл While"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}`}
                            programingLanguage="java" />
                    </div>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">do-while цокъл</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът do-while е подобен на цикъла while, с изключение на това, че изпълнява блока с код поне веднъж, преди да провери условието.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`do { 
    // Код за изпълнение 
} while (условие);`}
                        </pre>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={Loop2}
                                alt="Цикъл While"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 3);}`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">for in цикъл</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът for...in се използва за итерация върху свойствата на обект. Той итерира само върху ключове на обект, чието свойство enumerable е зададено на „true“.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`for (let key in object) {
    // Code to execute
}`}
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">for of цикъл</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът for...of се използва за итериране върху итерируеми обекти като масиви, низове или множества. Той директно итерира стойността и има по-сбит синтаксис от цикъла for.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Синтаксис</h3>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`for (let value of iterable) {
    // Code to execute
}`}
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = [1, 2, 3, 4, 5];
for (let val of a) {
    console.log(val);
}`}
                            programingLanguage="java" />
                    </div>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">for of цикъл</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Използвайте цикъл for , когато броят на итерациите е известен.</li>
                        <li>Използвайте цикъла while , когато условието зависи от динамични фактори.</li>
                        <li>Използвайте цикъла do-while, за да гарантирате, че блокът ще се изпълни поне веднъж.</li>
                        <li>Използвайте цикъла for...in за итерация през свойствата на обекта.</li>
                        <li>Използвайте цикъла for...of за итериране през итерируеми обекти.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/loops-in-javascript/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Цикли в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}