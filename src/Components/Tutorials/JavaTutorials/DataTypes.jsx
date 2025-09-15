import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { startTutorial, endTutorial } from "../CodeEditor";

export default function Introduction() {
    useEffect(() => {
        startTutorial("Типове данни в Java", "Java");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Типове данни в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Java е статично типизиран и също така силно типизиран език. Това е така, защото всеки тип данни, като например цяло число (integer),
                        символ (character), шестнадесетична стойност (hexadecimal), пакетиран десетичен знак (packed decimal) и т.н., е предварително
                        дефиниран като част от програмния език. Всички константи или променливи, дефинирани за дадена програма, трябва да бъдат
                        декларирани с техните специфични типове данни.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни типове данни</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>boolean</li>
                        <li>char</li>
                        <li>byte</li>
                        <li>short</li>
                        <li>int</li>
                        <li>long</li>
                        <li>float</li>
                        <li>double</li>
                    </ul>

                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full divide-y divide-gray-300 text-sm text-left text-gray-800">
                            <thead className="bg-blue-200 text-blue-900">
                                <tr>
                                    <th className="px-4 py-2">Тип</th>
                                    <th className="px-4 py-2">Описание</th>
                                    <th className="px-4 py-2">Стойност по подразбиране</th>
                                    <th className="px-4 py-2">Размер</th>
                                    <th className="px-4 py-2">Примери</th>
                                    <th className="px-4 py-2">Диапазон</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        type: "boolean",
                                        desc: "true или false",
                                        def: "false",
                                        size: "JVM-зависим (обикновено 1 byte)",
                                        examples: "true, false",
                                        range: "true, false",
                                    },
                                    {
                                        type: "byte",
                                        desc: "8-битов знаков тип",
                                        def: "0",
                                        size: "1 byte",
                                        examples: "-",
                                        range: "-128 до 127",
                                    },
                                    {
                                        type: "char",
                                        desc: "Unicode символ (16-битов)",
                                        def: "\\u0000",
                                        size: "2 bytes",
                                        examples: "'a', '\\u0041', '\\101', '\\\\', '\\n', 'β'",
                                        range: "0 до 65,535 (unsigned)",
                                    },
                                    {
                                        type: "short",
                                        desc: "16-битов знаков тип",
                                        def: "0",
                                        size: "2 bytes",
                                        examples: "-",
                                        range: "-32,768 до 32,767",
                                    },
                                    {
                                        type: "int",
                                        desc: "32-битов знаков тип",
                                        def: "0",
                                        size: "4 bytes",
                                        examples: "-2, 0, 1",
                                        range: "-2,147,483,648 до 2,147,483,647",
                                    },
                                    {
                                        type: "long",
                                        desc: "64-битов знаков тип",
                                        def: "0L",
                                        size: "8 bytes",
                                        examples: "-2L, 0L, 1L",
                                        range: "-9,223,372,036,854,775,808 до 9,223,372,036,854,775,807",
                                    },
                                    {
                                        type: "float",
                                        desc: "32-битов IEEE 754 плаваща запетая",
                                        def: "0.0f",
                                        size: "4 bytes",
                                        examples: "3.14f, -1.23e-10f",
                                        range: "~6-7 значими цифри",
                                    },
                                    {
                                        type: "double",
                                        desc: "64-битов IEEE 754 плаваща запетая",
                                        def: "0.0d",
                                        size: "8 bytes",
                                        examples: "3.1415d, 1.23e100d",
                                        range: "~15-16 значими цифри",
                                    },
                                ].map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="px-4 py-2 font-medium text-gray-900">{row.type}</td>
                                        <td className="px-4 py-2">{row.desc}</td>
                                        <td className="px-4 py-2">{row.def}</td>
                                        <td className="px-4 py-2">{row.size}</td>
                                        <td className="px-4 py-2">{row.examples}</td>
                                        <td className="px-4 py-2">{row.range}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">boolean</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Булевият тип данни представлява логическа стойност, която може да бъде вярна (true) или невярна (false).
                        Концептуално, той представлява един бит информация, но реалният размер, използван от виртуалната машина, зависи от
                        имплементацията и обикновено е поне един байт (осем бита). Стойностите от булев тип не се конвертират имплицитно или
                        експлицитно към друг тип чрез преобразуване (casts).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">byte</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Базовият тип данни "byte" е 8-битово цяло число със знак, представено чрез допълнителен код до две (two's complement).
                        Типът данни "byte" е полезен за спестяване на памет в големи масиви. Размер: 1 байт (8 бита).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">short</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Short е 16-битово цяло число със знак, представено чрез допълнителен код до две (two's complement).
                        Подобно на типа "byte", "short" се използва, когато икономията на памет е от значение, особено в големи масиви,
                        където пространството е ограничено. Размер: 2 байта (16 бита).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">int</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Това е 32-битово цяло число със знак, представено чрез допълнителен код до две (two's complement). Размер: 4 байта (32 бита).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">long</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Типът данни "long" е 64-битово цяло число със знак, представено чрез допълнителен код до две (two's complement).
                        Използва се, когато типът "int" не е достатъчно голям, за да побере дадена стойност, предлагайки много по-широк диапазон. Размер: 8 байта (64 бита).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">double</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Типът данни double е 64-битово число с плаваща запетая с двойна точност по стандарта IEEE 754.
                        За десетични стойности този тип данни обикновено е изборът по подразбиране. Размерът на типа данни "double" е 8 байта (64 бита).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">char</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Типът данни char представлява единичен 16-битов Unicode символ с размер 2 байта (16 бита).
                    </p>

                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded mb-6">
                        <p className="font-semibold">Забележка:</p>
                        <p className="mt-1 text-gray-800 text-base leading-relaxed">
                            За разлика от езици като C или C++, които използват набора от символи ASCII, Java използва набора от символи Unicode за поддръжка на интернационализация.
                            Unicode изисква повече от 8 бита за представяне на широк спектър от символи от различни езици, включително латински, гръцки, кирилица, китайски, арабски и други.
                            В резултат на това Java използва 2 байта за съхранение на "char", което гарантира, че може да представи всеки Unicode символ.
                        </p>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/variables"} onClick={() => endTutorial("Типове данни в Java", "Java")} className="text-blue-600 underline">Промелниви в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/java-data-types/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Типове данни в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}