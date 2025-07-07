import React from "react";
import CodeEditor from '../CodeEditor'
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function IntroPython() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Въведение в програмирането с Python.
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Python е един от най-популярните, гъвкави и лесни за научаване езици за програмиране в света.
                        Благодарение на своята изключителна четимост, опростен синтаксис и огромна подкрепяща общност,
                        той е отличен избор както за начинаещи, които тепърва навлизат в света на кодирането,
                        така и за напреднали разработчици, търсещи ефективност и мощ.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        С Python можете да изграждате уеб приложения (като използвате популярни фреймуърци като Django и Flask),
                        да автоматизирате рутинни задачи, да извършвате мощен анализ на данни и визуализации,
                        да създавате игри и дори да навлезете в света на изкуствения интелект (AI), машинното обучение (ML) и науката за данни.
                        Неговата многофункционалност го прави незаменим инструмент в множество индустрии.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">
                            Вашата първа Python програма
                        </p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`print("Hello, world!")`}
                        </pre>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Когато изпълните този ред код, Python просто ще изведе "Hello, World!" на екрана. Това е отправна точка за всяко ваше бъдещо начинание в програмирането!
                    </p>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Опитайте сами!</h2>
                        <CodeEditor height="80px" initialCode={`print("Hello, World!")`} />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Ето толкова лесно е да напишете и стартирате първата си Python програма – класическият "Hello, World!"
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Защо да изберете Python?</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Лесен за учене - синтаксисът на Python е много близък до естествения език, което го прави изключително достъпен за бързо усвояване.</li>
                        <li>Гъвкав и многофункционален - както споменахме, приложенията му са безкрайни – от уеб разработка до научни изчисления.</li>
                        <li>Голяма общност и ресурси - имате достъп до хиляди библиотеки, фреймуърци и огромна общност, готова да помогне и сподели знания.</li>
                        <li>Високо търсене на пазара на труда - уменията по Python са сред най-търсените в технологичната индустрия днес.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/python/io"} className="text-blue-600 underline">Входни и изходни данни!</Link>

                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>

    )
}