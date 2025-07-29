import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from "../CodeEditor";

export default function Introduction() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Java IO - Input/Output
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Java IO (Input/Output) е основна част от стандартната библиотека на Java, която предоставя класове и методи за работа с данни,
                        които се прехвърлят между програмата и външни източници. Тези източници могат да бъдат файлове, мрежови връзки, конзолата или дори други програми.
                        ava предоставя различни потоци (Streams) в своя I/O пакет, които помагат на потребителя да извършва всички входно-изходни операции.
                        Тези потоци поддържат всички типове обекти, типове данни, символи, файлове и т.н., за да изпълнят изцяло I/O операциите.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Стандартни потоци в Java</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>System.in: Това е стандартният входен поток (System.in), който се използва за четене на символи от клавиатурата или друго стандартно входно устройство.</li>
                        <li>System.out: Това е стандартният изходен поток (System.out), който се използва за показване на резултата от програма върху изходно устройство като екрана на компютъра.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Функции за принтиране в Java</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        print():
                        Този метод в Java се използва за показване на текст на конзолата.
                        Този текст се подава като параметър на метода под формата на String. Методът отпечатва текста на конзолата и курсорът остава в края на текста на конзолата.
                        Следващият печат започва от същата позиция. {`\n`}
                        {`\n`}
                        println():
                        Този метод в Java също се използва за показване на текст на конзолата.
                        Той отпечатва текста на конзолата и курсорът се премества в началото на следващия ред на конзолата. Следващият печат започва от следващия ред.{`\n`}
                        {`\n`}
                        printf(): Този метод е най-лесният от всички, тъй като е подобен на printf в C.
                        Имайте предвид, че System.out.print() и System.out.println() приемат един аргумент, но printf() може да приема множество аргументи.
                        Той се използва за форматиране на изхода в Java.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">Някои базови параметри които примема </p>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>%s – използва се за отпечатване на текст (String).</li>
                        <li>%d – използва се за отпечатване на цели числа (int, long).</li>
                        <li>%f – използва се за отпечатване на числа с плаваща запетая (float, double).</li>
                        Може да намерите още информация <Link to={"https://www.w3schools.com/java/ref_output_printf.asp"} className="text-blue-600 underline">тук</Link>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        public class HelloWorld дефинира клас с име HelloWorld. В Java всяка програма трябва да е в рамките на клас.{`\n`}
                        public static void main(String[] args) е началната точка на всяко Java приложение. Тя казва на JVM (Java Virtual Machine) откъде да започне изпълнението на програмата.{`\n`}
                        System.out.println("Hello, World!"); отпечатва съобщението на конзолата.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Опитайте сами!</h2>
                        <CodeEditor height="500px" initialCode={`class PrintExample {
  
    public static void main(String[] args) {
        int x = 100;
      
        // Printing a simple integer
        System.out.printf("Printing simple integer: x = %d%n", x);

        // Printing a floating-point 
        // number with precision
        System.out.printf("Formatted with precision: PI = %.2f%n", Math.PI);

        float n = 5.2f;

        // Formatting a float to 4 decimal places
        System.out.printf("Formatted to specific width: n = %.4f%n", n);

        n = 2324435.3f;

        // Right-aligning and formatting a 
        // float to 20-character width
        System.out.printf("Formatted to right margin: n = %20.4f%n", n);
    }
}`} programingLanguage="java" />
                    </div>


                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/conventions"} className="text-blue-600 underline">Правила за писане в Java</Link>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}