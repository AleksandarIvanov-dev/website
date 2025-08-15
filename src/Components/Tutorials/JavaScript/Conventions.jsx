import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { Link } from "react-router-dom";


export default function JavaScriptConventions() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Правила за именуване на промнливи в JavaScript
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Когато именуваме променливи в JavaScript , трябва да спазваме определени правила. Всяка променлива трябва да има име,
                        което я идентифицира по подходящ начин. Вашият JavaScript код става по-лесен за разбиране и работа, когато използвате подходящи имена на променливи.
                        Изключително важно е да именувате променливите правилно.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Следните правила са за именуване на променливи в JavaScript</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>В имената на променливите не са позволени интервали.</li>
                        <li>В имената на променливите са разрешени само букви, цифри, долни черти и знаци за долар.</li>
                        <li>Регистърът и главните букви имат значение, когато става въпрос за имена на променливи.</li>
                        <li>Буква (азбука), долна черта (_) или знак за долар ($) трябва да бъдат първият символ в името на променлива, други специални символи не трябва да се приемат.</li>
                        <li>Някои термини, като например резервирани думи в JavaScript, не трябва да се използват за именуване на променливи.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        JavaScript e case sensiive. Това означава, че Имената на променливите са чувствителни към главни и малки букви, което означава, че главните букви като „A“ и малките букви като „a“ се третират различно.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Още няколко конвенции за добри практики</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Добре е да се избере един случай и да се продължи през целия код. Например: случай „камила“. Кодът изглежда елегантен и правилен.</li>
                        <li>Наименувайте променливата си с повече от една дума. Това ще провери дали името на променливата е точно.</li>
                        <li>Препоръчително е да не се използват твърде кратки имена на променливи. Те нямат правилния смисъл.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/what-are-the-variable-naming-conventions-in-javascript/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Правила за именуване на промнливи в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}