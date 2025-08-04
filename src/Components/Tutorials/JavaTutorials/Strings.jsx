import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import JavaStrings from "../Images/Java/String-in-Java.png"
import CodeEditor from "../CodeEditor"
import Quiz from "../../Exams/Quiz";

export default function Introduction() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Символни низове в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Java, String е тип обект, който може да съхранява поредица от символи, оградени в двойни кавички,
                        като всеки символ се съхранява в 16 бита, т.е. използвайки UTF 16-битово кодиране. Един низ действа по същия начин като масив от символи.
                        Java предоставя стабилен и гъвкав API за работа с низове, позволяващ различни операции като конкатенация, сравнение и манипулация.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={JavaStrings}
                                alt="Пример на символен низ в Java"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Начини за създаване на Java String</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Низ (String) литерал</li>
                        <li>Използване на ключовата дума</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Низ литерал (статична памет)</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        За да направи Java по-ефективна по отношение на паметта (тъй като не се създават нови обекти, ако низът вече съществува в "string constant pool").
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`String tempString = Hello, World!; `}
                        </pre>
                    </div>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Използване на ключовата дума new (Heap памет)</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В дадения пример ще бъде създаден само един обект. Първоначално JVM няма да намери обект от тип String със стойност "Welcome" в string constant pool,
                        така че ще създаде нов обект. След това, когато намери низа със стойност "Welcome" в пула, няма да създава нов обект,
                        а ще върне препратка към същата инстанция.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">Пример:</p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`String tempString = new String ("Hello, World!"); `}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Неизменими (Immutable) String обекти в Java</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Java, string обектите са неизменими (immutable). Неизменимо просто означава непроменяемо или немодифицируемо.
                        След като един string обект е създаден, неговите данни или състояние не могат да бъдат променяни, но се създава нов string обект.
                    </p>

                    <CodeEditor height="400px" programingLanguage="java" initialCode={`import java.io.*;

class Geeks
{
    public static void main(String[] args)
    {
        String s = "Sachin";
    
        // concat() method appends
        // the string at the end
        s.concat(" Tendulkar");
    
        // This will print Sachin
        // because strings are
        // immutable objects
        System.out.println(s);
    }
}`} />

                    <Quiz
                        question="Символните низове (Strings) в Java се използват са:"
                        options={[
                            "Съхраняват числа",
                            "Съхраняват единични символи",
                            "Съхраняват текст",
                            "Всички отговори са верни"
                        ]}
                        correctAnswer="Съхраняват текст"
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/operators"} className="text-blue-600 underline">Оператори в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/strings-in-java/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Символни низове в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}