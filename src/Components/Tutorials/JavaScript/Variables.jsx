import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import Loop from "../Images/JavaScript/loop.png"
import Loop1 from "../Images/JavaScript/Loop1.png"
import Loop2 from "../Images/JavaScript/loop3.png"
import { Link } from "react-router-dom";


export default function JavaScriptVariables() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        JavaScript променливи
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променливите в JavaScript могат да бъдат декларирани с помощта на var , let или const.
                        JavaScript е динамично типизиран, така че типовете променливи се определят по време на изпълнение без изрични дефиниции на типове.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ключова дума var в JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        var е ключова дума в JavaScript, използвана за деклариране на променливи, и е с обхват на
                        функцията и се използва като hoisted (изместване), което позволява повторно деклариране, но може да доведе до неочаквани грешки.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`var a = "Hello Geeks";
var b = 10;
console.log(a);
console.log(b);`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ключова дума let в JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        let е ключова дума в JavaScript, използвана за деклариране на променливи, която е с блоков обхват и не се издига най-отгоре, подходяща за променливи, които могат да се променят.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ключова дума const в JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        const е ключова дума в JavaScript, използвана за деклариране на променливи и представлява непроменяеми обвързвания с блоков обхват, които не могат да бъдат преназначени, въпреки че обектите все още могат да бъдат променяни.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`{
    let blockVar = "I am block-scoped";
    const blockConst = "I am block-scoped too";
}
console.log(blockVar); // Error: not defined`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Променлив обхват в JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Обхватът определя достъпността на променливите във вашия код. JavaScript поддържа следните типове обхват
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Глобален обхват</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променливите, декларирани извън която и да е функция или блок, са с глобален обхват. Въпреки че var, let и const могат да имат глобален обхват, когато са декларирани извън функция, поведението им е различно
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Обхват на функцията</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променливите, декларирани във функция, са достъпни само в рамките на тази функция. Това се отнася за var, let и const.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Обхват на блока</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променливите, декларирани с let или const вътре в блок (напр. вътре в { }), са с блоков обхват, което означава, че не могат да бъдат достъпни извън блока. var обаче не е с блоков обхват и ще има изтичане извън блока
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Кога да използвате var, let или const</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        const - Const се използва когато стойността на пролемливата не трябва да се променя Read-only{`\n`}
                        let - ако искаме стойността на променливата да се променя или не можем да използваме const.{`\n`}
                        Използвайте var само ако ще работите със стари браузъри.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/javascript-variables/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Променливи в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}