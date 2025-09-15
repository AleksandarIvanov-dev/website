import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import ForStatement from '../Images/Java/ForLoop.webp'
import WhileBlock from '../Images/Java/WhileLoop.webp'
import DoWhileBlock from '../Images/Java/Do-While-Loop.webp'
import Quiz from "../../Exams/Quiz";
import { Link } from "react-router-dom";
import { startTutorial, endTutorial } from "../CodeEditor";

export default function JavaLoops() {
    useEffect(() => {
        startTutorial("Цикли в Java", "Java");
    }, []);

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Цикли в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Циклите в програмирането позволяват набор от инструкции да се изпълняват многократно въз основа на дадено условие. В Java има три вида цикли, които са обяснени по-долу.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Цикъл for</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът for се използва, когато знаем броя на итерациите (знаем колко пъти искаме да повторим дадена задача). Операторът for включва инициализацията, условието и инкремента/декремента на един ред.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.io.*;

class ForTest {
    public static void main(String[] args)
    {
        for (int i = 0; i <= 10; i++) {
            System.out.print(i + " ");
        }
    }
}`}
                            programingLanguage="java" />
                    </div>


                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={ForStatement}
                                alt="Блок на for оператор"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        При изпълнението, контролът на програмата влиза в if блока. Потокът на изпълнение преминава към условието (Condition), което се тества.
                        Ако условието върне вярна стойност (true), се изпълнява if блокът или тялото във вътрешността му.
                        След приключване на изпълнението на if блока, потокът на програмата излиза от него. Ако условието върне невярна стойност (false),
                        if блокът се пропуска и потокът на програмата директно излиза от него.
                    </p>


                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Условие за инициализация : Тук инициализираме използваната променлива. Това маркира началото на for цикъл. Може да се използва вече декларирана променлива или да се декларира променлива, локална само за цикъла.</li>
                        <li>Тестване на условие: Използва се за тестване на условието за изход от цикъл. Трябва да върне булева стойност. Също така е и контролен цикъл за влизане, тъй като условието се проверява преди изпълнението на операторите на цикъла.</li>
                        <li>Изпълнение на оператори : След като условието бъде оценено като истина, операторите в тялото на цикъла се изпълняват.</li>
                        <li>Инкремент/декремент : Използва се за актуализиране на променливата за следващата итерация.</li>
                        <li>Прекратяване на цикъла : Когато условието стане невярно, цикълът се прекратява, отбелязвайки края на жизнения си цикъл.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Подобрен for цикъл (for each цикъл)</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Този цикъл се използва за итерация през масиви или колекции.
                    </p>


                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`
import java.io.*;

class ForEachTest {
    public static void main(String[] args)
    {
        String[] names = { "Sweta", "Gudly", "Amiya" };

        for (String name : names) {
            System.out.println("Name: " + name);
        }
    }
}`}
                            programingLanguage="java" />
                    </div>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Цикъл while</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикъл while се използва, когато искаме да проверим условието преди изпълнение на тялото на цикъла.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`
import java.io.*;

class Geeks {
    public static void main(String[] args)
    {
        int i = 0;
        while (i <= 10) {
            System.out.print(i + " ");
            i++;
        }
    }
}}`}
                            programingLanguage="java" />
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={WhileBlock}
                                alt="Блок на while"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>


                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Цикълът While започва с проверка на булево условие. Ако то се оцени като true, тогава се изпълняват операторите на тялото на цикъла, в противен случай се изпълнява първият оператор след цикъла. Поради тази причина той се нарича още цикъл за контрол на входа</li>
                        <li>След като условието бъде оценено като истина, операторите в тялото на цикъла се изпълняват. Обикновено операторите съдържат актуализирана стойност за променливата, която се обработва за следващата итерация.</li>
                        <li>Когато условието стане невярно, цикълът се прекратява, което бележи края на жизнения му цикъл.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Цикъл do while</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Цикълът do-while гарантира, че блокът от код се изпълнява поне веднъж, преди да се провери условието.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`
import java.io.*;

class Geeks {
    public static void main(String[] args)
    {
        int i = 0;
        do {
            System.out.print(i + " ");
            i++;
        } while (i <= 10);
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={DoWhileBlock}
                                alt="Блок на do while"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Цикълът do while започва с изпълнението на оператора. Няма проверка на никое условие за първи път.</li>
                        <li>След изпълнението на операторите и актуализирането на стойността на променливата, условието се проверява за стойност true или false. Ако се оцени като true, започва следващата итерация на цикъла.</li>
                        <li>Когато условието стане невярно, цикълът се прекратява, което бележи края на жизнения му цикъл.</li>
                        <li>Важно е да се отбележи, че цикълът do-while ще изпълни своите оператори поне веднъж, преди да се провери някое условие и следователно е пример за цикъл за управление на изхода.</li>
                    </ul>

                    <Quiz
                        question="Каква е разликата между while цикъл и do while цикъл?"
                        options={["Цикълът do-while ще се изпълни поне веднъж, докато цикълът while може изобщо да не се изпълни.", "Цикълът „while“ ще се изпълни поне веднъж, докато цикълът „do-while“ може изобщо да не се изпълни.", "Никаква", "Цикълът „do-while“ не може да има оператори if..else."]}
                        correctAnswer={"Цикълът „do-while“ ще се изпълни поне веднъж, докато цикълът „while“ може изобщо да не се изпълни."}
                        quizLanguage={"Java"}
                        quizName={"Цикълът „do-while“ ще се изпълни поне веднъж, докато цикълът „while“ може изобщо да не се изпълни."}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/arrays"} onClick={() => endTutorial("Цикли в Java", "Java")} className="text-blue-600 underline">Масиви в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/loops-in-java/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Цикли в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}