import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import Loop from "../Images/JavaScript/loop.png"
import Loop1 from "../Images/JavaScript/Loop1.png"
import Loop2 from "../Images/JavaScript/loop3.png"
import { Link } from "react-router-dom";


export default function JavaScriptStrings() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Символни низове в JavaScript
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        JavaScript низът е поредица от символи, обикновено използвана за представяне на текст.
                        В JavaScript няма тип символ (подобно на Python и различно от C, C++ и Java), така че когато ни е необходим символ, се използва низ от един символ.
                        Подобно на Java и Python, низовете в JavaScript са непроменяеми .
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създаване с помощта на литерали</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да използваме единични или двойни кавички, за да създадем низ. Можем да използваме и двете, но е препоръчително да бъдете последователни в избора си в целия код.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = "abcd";
console.log(s2);`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Многоредови низове (ES6 и по-нови версии)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можете да създадете многоредов низ, използвайки обратни бележки (``) с шаблонни литерали. Обратните бележки ви позволяват да разпрострете низа през няколко реда, запазвайки разделянето на редовете в самия низ.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Базови операции със символни низове</h2>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Намиране на дължината на низ</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можете да намерите дължината на низ, използвайки свойството length.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let s1 = "Hello";
let len = s1.length;

console.log(len);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Кокатинация на низове</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можете да комбинирате два или повече низа, използвайки оператора +.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let s1 = "Java";
let s2 = "Script";
let result = s1 + s2

console.log(result)`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Преобразуване на низове в главни и малки букви</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Преобразувайте низ в главни и малки букви, използвайки методите toUpperCase() и toLowerCase()
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let str = "JavaScript";
let upCase = str.toUpperCase();
let lowCase = str.toLowerCase();

console.log(upCase);
console.log(lowCase);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Премахване на празно пространство от низ</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Премахнете началните и крайните интервали, използвайки метода trim().
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let s1 = "       Learn        Java     Script";
let s2 = s1.trim();

console.log(s2)`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Достъп до символи в низ</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Достъп до отделни символи в низ, използвайки нотация в скоби и метода charAt().
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let s1 = 'Learn JavaScript';
let s2 = s1[6];
console.log(s2);

s2 = s1.charAt(6);
console.log(s2);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Намиране на подниз на низ</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да извлечем част от низ, използвайки метода substring().
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);

console.log(s2);`}
                            programingLanguage="java" />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/javascript-strings/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Символни низове в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}