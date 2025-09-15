import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import { startTutorial, endTutorial } from "../CodeEditor";
import { Link } from "react-router-dom";


export default function JavaFunctions() {
    useEffect(() => {
        startTutorial("Методи в Java", "Java");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Методи в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Методите в Java са блокове код, които изпълняват специфична задача. Методът ни позволява да използваме кода повторно,
                        подобрявайки както ефективността, така и организацията. Всички методи в Java трябва да принадлежат към клас.
                        Методите са подобни на функциите и показват поведението на обектите.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`public class Test
{
    public void printMessage() {
        System.out.println("Hello, World!");
    }
    public static void main(String[] args) {
        // Create an instance of the Method class
        Test obj = new Test();
        
        // Calling the method
        obj.printMessage(); 
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Тук първо създаваме метод, който отпечатва „Здравейте, маниаци!“.
                        printMessage() е прост метод, който отпечатва съобщение.
                        Няма параметри и не връща нищо.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Методът се състои от модификатор (Дефинира ниво на достъп), тип връщана стойност (каква е върнатата стойност или е void),
                        име (Дефинирането на името на метода следва camelCase), параметри (незадължителни входни данни) и тяло (Напишете логиката си тук).
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Типът на елемента определя типа данни на всеки елемент, който съставлява масива.
                        Подобно на масив от цели числа, можем да създадем и масив от други примитивни типове данни като char, float, double и др.
                        или потребителски дефинирани типове данни (обекти на клас).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Защо разделяме кода на методи?</h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Разделянето на кода на отделни методи помага за подобряване на четимостта, възможността за повторна употреба и поддръжката
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Многократна употреба: Пишете веднъж, използвайте многократно, без да повтаряте код, така че да се увеличи възможността за многократна употреба на кода.</li>
                        <li>Четливост: По-малките, именувани методи правят кода по-лесен за четене и разбиране.</li>
                        <li>Поддръжка: По-лесно е да се поправят грешки или да се актуализира код, когато е организиран в методи.</li>
                        <li>Тестване: Методите могат да бъдат тествани независимо, което подобрява надеждността на кода и улеснява отстраняването на грешки.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Стек за извикване на методи в Java</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Java е обектно-ориентиран и базиран на стек език за програмиране, където методите играят ключова роля в контролирането на потока на изпълнение на програмата.
                        Когато се извика метод, Java използва вътрешна структура, известна като стек за извиквания, за да управлява изпълнението, променливите и адресите за връщане.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Какво е стекът за повиквания</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Стекът от извиквания е структура от данни, използвана от програмата по време на изпълнение за управление на извиквания на методи и локални променливи.
                        Той работи по принципа „последен влязъл, първи излязъл“ (LIFO), което означава, че последният извикан метод е първият, който завършва и излиза.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Как се изпълняват методите</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Към стека за извиквания се добавя нов стеков кадър, за да се съхраняват подробности за метода.{`\n`}
                        Методът изпълнява своя код.{`\n`}
                        След изпълнение, стековият кадър се премахва и контролът се връща към извикващия метод.{`\n`}
                        Java автоматично управлява стека от повиквания, използвайки виртуалната машина на Java (JVM).
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`public class CallStackExample {

    public static void D() {
        float d = 40.5f;
        System.out.println("In Method D");
    }

    public static void C() {
        double c = 30.5;
        System.out.println("In Method C");
    }

    public static void B() {
        int b = 20;
        C(); // Calling C
        System.out.println("In Method B");
    }

    public static void A() {
        int a = 10;
        B(); // Calling B
        System.out.println("In Method A");
    }

    public static void main(String[] args) {
        A(); // Start with function A
        D(); // Then call D
    }
}}`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Видове методи в Java</h2>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Предварително дефиниран метод (вградени методи)</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Предварително дефинираните методи са методите, които вече са дефинирани в библиотеките с класове на Java.
                        Те са известни още като метод на стандартната библиотека или вграден метод. Например, методът random() , който присъства в класа
                        Math и можем да го извикаме, използвайки ClassName.methodName(), както е показано в примера по-долу.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`Math.random()
Math.PI`}
                        </pre>
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Потребителски дефиниран метод</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Методът, написан от потребителя или програмиста, е известен като потребителски дефиниран метод. Тези методи се модифицират според изискванията.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`sayHello
Greet() 
setName()`}
                        </pre>
                    </div>

                    <Quiz
                        question="Как можете да извикате метод в Java?"
                        options={["Чрез използване на масиви с точка и запетая.", "Чрез използване на специална променлива, наречена method, последвана от точка и запетая.", "Чрез използване на името на метода, последвано от две скоби и точка и запетая.", "Чрез използване на ключовата дума call и името на метода и точка и запетая."]}
                        correctAnswer={"Чрез използване на името на метода, последвано от две скоби и точка и запетая."}
                        quizLanguage={"Java"}
                        quizName={"методи в Java"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        <Link to={"/challenges"} onClick={() => endTutorial("Методи в Java", "Java")} className="text-blue-600 underline">Упражнения</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/arrays-in-java/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Методи в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}