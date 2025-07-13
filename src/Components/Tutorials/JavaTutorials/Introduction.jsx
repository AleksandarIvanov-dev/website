import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import JavaCodeExecution from "../Images/Java/How-java-code-Executes.webp";
import CodeEditor from "../CodeEditor";

export default function Introduction() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Въведение в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Java е високониво, обектно-ориентиран език за програмиране, разработен от Sun Microsystems през 1995 г.
                        Той е платформено независим, което означава, че можем да напишем код веднъж и да го стартираме навсякъде, използвайки
                        Java виртуална машина (JVM). Java се използва предимно за изграждане на десктоп приложения, уеб приложения, приложения за Android и корпоративни системи.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Какво можем да правим с Java?</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Разработка на мобилни приложения: Java е основният език за Android разработка, използвайки среда като Android Studio.</li>
                        <li>Уеб разработка: Използва се с мощни фреймуърци като Spring Boot и Jakarta EE за създаване на динамични уебсайтове и приложения.</li>
                        <li>Десктоп GUI приложения: С библиотеки като JavaFX и Swing могат да се изграждат интуитивни потребителски интерфейси за настолни компютри.</li>
                        <li>Корпоративни приложения (Enterprise Applications): Java е в основата на голяма част от банковия и бизнес софтуер, осигурявайки надеждност и мащабируемост.</li>
                        <li>Разработка на игри: Чрез игрови енджини като LibGDX, Java се използва за създаване на различни видове игри.</li>
                        <li>Big Data технологии: Играе ключова роля в технологии като Hadoop и Apache Kafka за обработка и анализ на големи обеми данни.</li>
                        <li>Облачно-базирани приложения: Java се използва широко в услугите на големи облачни платформи като AWS, Azure и Google Cloud.</li>
                        <li>Научни приложения: Прилага се в инструменти, които обработват и анализират огромни количества научни данни.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни характеристики на Java</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Платформена независимост: Java е известна с функцията си "Напиши веднъж, стартирай навсякъде" (WORA). Това означава, че можете да напишете своя Java код веднъж и той ще работи на всяко устройство или операционна система, без да е необходимо да променяте нищо.</li>
                        <li>Обектно-ориентиран: Java следва обектно-ориентираното програмиране. Това прави кода чист и повторно използваем.</li>
                        <li>Сигурност: Java не поддържа указатели и включва вградени защити, за да предпази вашите програми от често срещани проблеми като изтичане на памет.</li>
                        <li>Многонишковост (Multithreading): Java програмите могат да извършват много неща едновременно, използвайки множество нишки. Това е полезно за обработка на сложни задачи като обработка на транзакции.</li>
                        <li>Just-In-Time (JIT) компилатор: Java използва JIT компилатор. Той подобрява производителността, като преобразува байткода в машинно четим код по време на изпълнение.</li>
                    </ul>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <p className="font-semibold">
                            Вашата първа Java програма
                        </p>
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`}
                        </pre>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        public class HelloWorld дефинира клас с име HelloWorld. В Java всяка програма трябва да е в рамките на клас.{`\n`}
                        public static void main(String[] args) е началната точка на всяко Java приложение. Тя казва на JVM (Java Virtual Machine) откъде да започне изпълнението на програмата.{`\n`}
                        System.out.println("Hello, World!"); отпечатва съобщението на конзолата.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={JavaCodeExecution}
                                alt="Илюстрация на изпълнение на Java код"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Опитайте сами!</h2>
                        <CodeEditor height="80px" initialCode={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`} programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Защо да изберете Java?</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Платформена независимост – Java приложенията могат да работят на всяка операционна система, благодарение на JVM.</li>
                        <li>Стабилност и мащабируемост – Java е предпочитан избор за големи корпоративни системи и приложения, които изискват надеждност.</li>
                        <li>Голяма общност и богата екосистема – Има огромен брой библиотеки, инструменти и ресурси, както и активна общност, която помага при решаване на проблеми.</li>
                        <li>Високо търсене на пазара на труда – Java програмистите са сред най-търсените специалисти в ИТ индустрията.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/io"} className="text-blue-600 underline">Входни и изходни данни!</Link>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}