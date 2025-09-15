import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import IfStatement from '../Images/Java/If-statement.jpg'
import IfBlock from '../Images/Java/if-block.png'
import Quiz from "../../Exams/Quiz";
import { Link } from "react-router-dom";
import { startTutorial, endTutorial } from "../CodeEditor";


export default function JavaIfStatement() {
    useEffect(() => {
        startTutorial("Условни оператори в Java", "Java");
    }, []);

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Условни Оператори
                    </h1>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Операторът if</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Java if операторът е най-простият оператор за вземане на решения. Използва се, за да се определи дали дадено изречение или блок от изречения ще бъде изпълнено.
                        С други думи, ако дадено условие е вярно, блок от изречения се изпълнява; в противен случай, не се изпълнява.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`if(condition)
{
    // Statements to execute if
    // condition is true
}`}
                        </pre>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={IfStatement}
                                alt="Операторът if"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>


                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`class IFStatementTest {
    public static void main(String args[])
    {
        int i = 10;

        // using if statement
        if (i < 15)
            System.out.println("10 is less than 15");

        System.out.println("Outside if-block");

        // both statements will be printed
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        При изпълнението, контролът на програмата влиза в if блока. Потокът на изпълнение преминава към условието (Condition), което се тества.
                        Ако условието върне вярна стойност (true), се изпълнява if блокът или тялото във вътрешността му.
                        След приключване на изпълнението на if блока, потокът на програмата излиза от него. Ако условието върне невярна стойност (false),
                        if блокът се пропуска и потокът на програмата директно излиза от него.
                    </p>


                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={IfBlock}
                                alt="Блок на if оператор"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        След оценката на if оператора в Java, условието ще бъде или вярно (true), или невярно (false).
                        Java if операторът приема булеви стойности и ако стойността е вярна, той ще изпълни блока от оператори под него.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`public class IfElseExample {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;
        
        if (a) {
            System.out.println("a is true");
        } else {
            System.out.println("a is false");
        }
        
        if (b) {
            System.out.println("b is true");
        } else {
            System.out.println("b is false");
        }
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Кодът започва с декларирането на две булеви променливи, a и b, като a е зададено като true, а b като false.
                        Първият if-else оператор проверява стойността на a. Ако стойността на a е true, кодът в първия блок с фигурни скоби { }
                        се изпълнява и съобщението "a is true" се отпечатва на конзолата. Ако стойността на a е false, се изпълнява кодът във втория блок с фигурни
                        скоби { } и съобщението "a is false" се отпечатва на конзолата.Вторият if-else оператор проверява стойността на b по същия начин.
                        Ако стойността на b е true, съобщението "b is true" се отпечатва на конзолата. Ако стойността на b е false, съобщението "b is false"
                        се отпечатва на конзолата.Този код демонстрира как да използвате if-else оператор за вземане на решения въз основа на булеви стойности.
                        Чрез използването на if-else оператор можете да контролирате потока на вашата програма и да изпълнявате код само при определени условия.
                        Използването на булеви стойности в if-else оператор предоставя прост и гъвкав начин за вземане на тези решения.
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Предимства на изразът if</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Условно изпълнение: if-else операторът позволява изпълнението на код да зависи от резултата на булев израз. Това предоставя начин за вземане на решения и контрол върху потока на програмата въз основа на различни входни данни и условия.</li>
                        <li>Четливост: if-else операторът прави кода по-четлив, като ясно показва кога трябва да се изпълни определен блок от код. Това улеснява разбирането и поддръжката на кода от други хора.</li>
                        <li>Повторна използваемост: Чрез използването на if-else оператори, разработчиците могат да пишат код, който може да бъде използван повторно в различни части на програмата. Това намалява количеството код, който трябва да бъде написан и поддържан, което прави процеса на разработка по-ефективен.</li>
                        <li>Отстраняване на грешки (Debugging): if-else операторът може да помогне за опростяване на процеса на отстраняване на грешки, като улеснява проследяването на проблеми в кода. Чрез ясното посочване кога трябва да се изпълни определен блок от код, става по-лесно да се определи защо дадена част от кода не работи, както се очаква.</li>
                        <li>Гъвкавост: if-else операторът предоставя гъвкав начин за контрол върху потока на програмата. Той позволява на разработчиците да обработват различни сценарии и да реагират динамично на промени във входните данни на програмата.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Като цяло, if-else операторът е основен инструмент в програмирането, който предоставя начин за контролиране на потока на програмата въз основа на условия.
                        Той помага за подобряване на четливостта, повторната използваемост, възможността за отстраняване на грешки и гъвкавостта на кода.
                    </p>

                    <Quiz
                        question="Какъв е резултатът от изпълнението на кодът по-долу?"
                        code={`int number = 20;
if (number > 5) {
  System.out.println("По-голямо от 5");
}`}
                        options={["По-малко от 5", "По-голямо от 5", "Error", "Няма да покаже нищо"]}
                        correctAnswer={"По-голямо от 5"}
                        quizLanguage={"Java"}
                        quizName={"Условни оператори в Java"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/cycles"} onClick={() => endTutorial("Условни оператори в Java", "Java")} className="text-blue-600 underline">Цикли в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/java-if-statement-with-examples/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Условни оператори в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}