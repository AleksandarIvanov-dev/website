import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import JavaScriptArrays from "../Images/JavaScript/JavaScript-Array.webp"
import { Link } from "react-router-dom";


export default function JavaScriptIntro() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Въведение в JavaScript
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        JavaScript е универсален, динамично типизиран език за програмиране, който вдъхва живот на уеб страниците, като ги прави интерактивни.
                        Използва се за изграждане на интерактивни уеб приложения, поддържа както клиентска, така и сървърна разработка и се интегрира безпроблемно с
                        HTML, CSS и богата стандартна библиотека.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        JavaScript е еднонишков език, който изпълнява една задача в даден момент.
                        Това е  интерпретиран език  , което означава, че изпълнява кода ред по ред.
                        Типът данни на променливата се определя по време на изпълнение в JavaScript, поради което тя се нарича динамично типизирана.
                    </p>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Коментари в JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Коментарите са бележки във вашия код, които JavaScript интерпретаторът игнорира. Те са чудесни за обяснение на това какво прави вашият код или за целите на тестването.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни характеристики на JavaScript</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Скриптове от страна на клиента: JavaScript се изпълнява в браузъра на потребителя , така че има по-бързо време за реакция, без да е необходима комуникация със сървъра .</li>
                        <li>Универсален: JavaScript може да се използва за широк спектър от задачи, от прости изчисления до сложни сървърни приложения.</li>
                        <li>Задвижвано от събития: JavaScript може да реагира на действия на потребителя (кликвания, натискания на клавиши) в реално време.</li>
                        <li>Асинхронен: JavaScript може да обработва задачи като извличане на данни от сървъри, без да замразява потребителския интерфейс.</li>
                        <li>Богата екосистема: Съществуват множество библиотеки и рамки, изградени върху JavaScript, като React , Angular и Vue.js, които правят разработката по-бърза и по-ефективна.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Гъвкавостта на JavaScript се простира както от страна на клиента, така и от страна на сървъра, позволявайки на разработчиците
                        да създават цялостни уеб приложения. Ето как функционира във всяка среда:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        От страна на клиента:
                        <li>Включва контрол на браузъра и неговия DOM (Document Object Model).</li>
                        <li>Обработва потребителски събития като кликвания и въвеждане на данни във формуляри.</li>
                        <li>Често срещаните библиотеки включват AngularJS, ReactJS и VueJS.</li>
                    </ul>

                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        От страна на сървъра:
                        <li>Включва взаимодействие с бази данни, манипулиране на файлове и генериране на отговори.</li>
                        <li>Node.js и рамки като Express.js се използват широко за сървърен JavaScript, което позволява full-stack разработка.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Парадигми на програмиране в JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        JavaScript поддържа както императивни, така и декларативни стилове на програмиране:
                    </p>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">
                        Императивно програмиране
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Императивното програмиране е парадигма на програмиране, която се фокусира върху описанието на начина,
                        по който работи една програма, чрез предоставяне на поредица от команди или оператори, които директно манипулират състоянието на програмата.
                    </p>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">
                        Декларативно програмиране
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Декларативният език за програмиране е език за програмиране, при който програмистът определя целта или какво трябва да бъде постигнато, а не как целта трябва да бъде постигната
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ограничения на JavaScript</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Рискове за сигурността  : JavaScript може да се използва за атаки като Cross-Site Scripting (XSS), при които злонамерени скриптове се инжектират в уебсайт, за да откраднат данни чрез използване на елементи като тагове img, object или script.
                        Сложност  : За да пишат напреднал JavaScript, програмистите трябва да разбират основните концепции за програмиране, обекти и скриптове както от страна на клиента, така и от страна на сървъра, което може да бъде предизвикателство.
                        Слаба обработка на грешки и проверка на типовете  : JavaScript е слабо типизиран, което означава, че променливите не изискват явни типове. Това може да доведе до проблеми, тъй като проверката на типовете не се прилага стриктно.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/introduction-to-javascript/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Въведение в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}