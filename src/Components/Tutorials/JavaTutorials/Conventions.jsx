import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { startTutorial, endTutorial } from "../CodeEditor";

export default function Introduction() {
    useEffect(() => {
        startTutorial("Конвенции в Java", "Java");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Конвенции в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Java е добра практика имената на класовете, променливите и методите да отговарят на това, което те всъщност трябва да правят,
                        вместо да се именуват на случаен принцип. По-долу са изброени някои конвенции за именуване в езика за програмиране Java.
                        Те трябва да се спазват при разработването на софтуер на Java за добра поддръжка и четливост на кода.
                        Java използва CamelCase (камилски стил) като практика за изписване на имената на методи, променливи, класове, пакети и константи.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        CamelCase в програмирането на Java се състои от съставни думи или фрази, така че всяка дума или съкращение започва
                        с главна буква, или първата дума е с малка буква, а всички останали са с главни.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Класове и Интерфейси</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Имената на класовете трябва да са съществителни имена, изписани със смесен регистър, като първата буква на всяка вътрешна дума е главна.
                        Имената на интерфейсите също трябва да се изписват с главна буква, точно като имената на класовете.
                        Използвайте цели думи и избягвайте акроними и съкращения.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`Classes: class Student { }
         class Integer {}
         class Scanner {}`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Методи</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Методите трябва да са глаголи, изписани със смесен регистър, като първата буква е малка, а първата буква на всяка вътрешна дума е главна.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`public static void main(String [] args)  {}`}
                        </pre>
                        Както подсказва името, методът трябва да бъде преди всичко метод, което всъщност е така, тъй като методът main() в Java е методът,
                        от който програмата започва своето изпълнение.
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Променливи</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Имената на променливите трябва да са кратки, но смислени. Трябва да са мнемонични, т.е. проектирани така, че да
                        подсказват на случайния наблюдател предназначението на тяхното използване.
                        Имена на променливи от един знак трябва да се избягват, освен за временни променливи.
                        Често срещани имена за временни променливи са i, j, k, m и n за цели числа; c, d и e за символи.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Константни променливи</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Константните променливи трябва да са изписани с главни букви, като думите са разделени с долни черти ("_").
                        Съществуват различни константи, използвани в предварително дефинирани класове като Float, Long, String и т.н.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/data-types"} onClick={() => endTutorial("Конвенции в Java", "Java")} className="text-blue-600 underline">Типове данни в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/java-naming-conventions/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Конвенции за именуване в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}