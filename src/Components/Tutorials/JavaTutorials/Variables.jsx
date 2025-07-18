import React from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import VariableDeclaring from "../Images/Java/Variables-in-Java.webp"
import CodeEditor from "../CodeEditor"
import Quiz from "../../Exams/Quiz";

export default function Introduction() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Числа в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Java, променливите са контейнери, които съхраняват данни в паметта.
                        Разбирането на променливите играе много важна роля, тъй като то определя как се съхраняват, достъпват и манипулират данните.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни компоненти на променливите в Java</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Тип данни (Data Type): Определя вида на съхраняваните данни (напр. int, String, float).</li>
                        <li>Име на променливата (Variable Name): Уникален идентификатор, следващ правилата за именуване в Java.</li>
                        <li>Стойност (Value): Действителните данни, присвоени на променливата.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">деклариране на променливи в Java</h2>
                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={VariableDeclaring}
                                alt="Деклариране на променливи в Java"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В момента, в който декларираме дадена променлива, в RAM паметта се заделя място за нея.
                        Това място се използва за съхраняване на стойността, която ще бъде присвоена на променливата.
                        Размерът на заделената памет зависи от типа на променливата. Например, за променлива от тип int се заделят 4 байта, докато за double – 8 байта.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Видове Java променливиv</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Локални променливи (Local Variables)</li>
                        <li>Променливи на инстанцията (Instance Variables)</li>
                        <li>Статични променливи (Static Variables)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Локални променливи (Local Variables)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променлива, дефинирана в блок, метод или конструктор, се нарича локална променлива.

                        Локалната променлива се създава по време на декларирането и се унищожава, когато функцията приключи изпълнението си.
                        Обхватът на локалните променливи съществува само в рамките на блока, в който са декларирани.
                        Първо трябва да инициализираме локална променлива, преди да я използваме в нейния обхват.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Опитайте сами!</h2>
                        <CodeEditor height="300px" initialCode={`import java.io.*;

class LocalVariable {
    public static void main(String[] args)
    {
        // Declared a Local Variable
        int var = 10;

        // This variable is local to this main method only
        System.out.println("Local Variable: " + var);
    }
}`} programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Променливи на инстанцията (Instance Variables)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Статичните променливи са известни още като променливи на класа.
                        {`\n`}
                        {`\n`}
                        Тези променливи се декларират по подобен начин на променливите на инстанцията. Разликата е,
                        че статичните променливи се декларират с помощта на ключовата дума static в рамките на клас, извън метод, конструктор или блок.{`\n`}
                        За разлика от променливите на инстанцията, можем да имаме само едно копие на статична променлива за всеки клас, независимо колко обекта създаваме.{`\n`}
                        Статичните променливи се създават в началото на изпълнението на програмата и се унищожават автоматично, когато изпълнението приключи.
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Статични променливи (Static Variables)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Променливите на инстанцията (Instance variables), известни още като не-статични
                        променливи, се декларират в клас, но извън методи, конструктори или блокове.
                        {`\n`}
                        {`\n`}
                        Тези променливи се създават, когато се създаде обект на класа, и се унищожават, когато обектът бъде унищожен.{`\n`}
                        За разлика от локалните променливи, можем да използваме спецификатори за достъп (като public, private, protected)
                        за променливите на инстанцията. Ако не укажем такъв, ще се използва спецификаторът за достъп по подразбиране (default).{`\n`}
                        Инициализацията на променлива на инстанцията не е задължителна. Нейната стойност по подразбиране зависи от типа данни на променливата:
                        например null за String и Wrapper класове като Integer, 0.0f за float, 0 за int и т.н.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Статични променливи (Static Variables) vs Променливи на инстанцията (Instance Variables)</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>
                            Копиране и памет: Всеки обект ще има собствено копие на променлива на инстанцията.
                            От друга страна, за статичните променливи имаме само едно копие на клас, независимо от броя на създадените обекти.
                            Поради това статичните променливи са по-добри за управление на паметта.
                        </li>
                        <li>
                            Влияние на промените: Промените, направени в променлива на инстанцията чрез един обект, няма да се отразят на други обекти,
                            тъй като всеки обект има свое собствено копие. В случай на статична променлива, промените ще се отразят на всички други обекти,
                            тъй като статичните променливи са общи за всички обекти от даден клас.
                        </li>
                        <li>
                            Достъп: Достъп до променливи на инстанцията може да се осъществи чрез референции към обекти,
                            докато статичните променливи могат да бъдат достъпвани директно чрез името на класа.
                        </li>
                        <li>
                            Жизнен цикъл: Променливите на инстанцията се създават, когато се създаде обект с помощта на ключовата дума new, и се унищожават,
                            когато обектът бъде унищожен. Статичните променливи се създават, когато програмата стартира, и се унищожават, когато програмата спре.
                        </li>
                    </ul>

                    <Quiz
                        question="Коя от следните променливи е достъпна само в метода, в който е декларирана?"
                        options={[
                            "Локална променлива (Local Variable)",
                            "Променлива на инстанцията (Instance Variable)",
                            "Статична променлива (Static Variable)",
                            "Глобална променлива (Global Variable)"
                        ]}
                        correctAnswer="Локална променлива (Local Variable)"
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/numbers"} className="text-blue-600 underline">Числа в Java</Link>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}