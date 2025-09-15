import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from "../CodeEditor"
import Quiz from "../../Exams/Quiz";
import { startTutorial, endTutorial } from "../CodeEditor";

export default function Introduction() {
    useEffect(() => {
        startTutorial("Оператори в Java", "Java");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Оператори в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Операторите в Java са специални символи, които извършват операции върху променливи или стойности.
                        Тези оператори са от съществено значение в програмирането, тъй като ви позволяват ефективно да манипулирате данни.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Видове оператори в Java</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Аритметични оператори</li>
                        <li>Унарни оператори</li>
                        <li>Оператор за присвояване</li>
                        <li>Оператори за сравнение (релационни)</li>
                        <li>Логически оператори</li>
                        <li>Троен (тернарен) оператор</li>
                        <li>Побитови оператори</li>
                        <li>Оператори за изместване (Shift оператори)</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Аритметични оператори</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Аритметичните оператори се използват за извършване на прости аритметични операции върху примитивни и непримитивни типове данни.
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>* : Умножение</li>
                        <li>/ : Деление</li>
                        <li>% : Модулно деление (остатък)</li>
                        <li>+ : Събиране</li>
                        <li>- : Изваждане</li>
                    </ul>

                    <CodeEditor height="400px" programingLanguage="java" initialCode={`import java.io.*;

class TestingOperators 
{
    public static void main (String[] args) 
    {
          
        // Arithmetic operators on integers
        int a = 10;
        int b = 3;
      
        // Arithmetic operators on Strings
        String n1 = "15";
        String n2 = "25";

        // Convert Strings to integers
        int a1 = Integer.parseInt(n1);
        int b1 = Integer.parseInt(n2);
           
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
        System.out.println("a1 + b1 = " + (a1 + b1)); 
          
    }
}`} />

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Унарните оператори</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Унарните оператори изискват само един операнд. Те се използват за увеличаване, намаляване или отрицание на дадена стойност
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>-: Отрицава стойността.</li>
                        <li>+: Показва положителна стойност (автоматично преобразува byte, char или short в int).</li>
                        <li>++: Увеличава с 1.</li>
                        <ul>
                            <li>Пост-инкремент (Post-Increment): Използва стойността първо, след това я увеличава.</li>
                            <li>Пре-инкремент (Pre-Increment): Увеличава стойността първо, след това я използва.</li>
                        </ul>
                        <li>--: Намалява с 1.</li>
                        <ul>
                            <li>Пост-декремент (Post-Decrement): Използва стойността първо, след това я намалява.</li>
                            <li>Пре-декремент (Pre-Decrement): Намалява стойността първо, след това я използва.</li>
                        </ul>
                        <li>!: Обръща булева стойност (от true на false и обратното).</li>
                    </ul>

                    <CodeEditor height="400px" programingLanguage="java" initialCode={`import java.io.*;

class TestingOperators
{
    public static void main(String[] args)
    {
        // Interger declared
        int a = 10;
        int b = 10;

        // Using unary operators
        System.out.println("Postincrement : " + (a++));
        System.out.println("Preincrement : " + (++a));

        System.out.println("Postdecrement : " + (b--));
        System.out.println("Predecrement : " + (--b));
    }
}`} />

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Оператор за присвояване</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        = Операторът за присвояване се използва за присвояване на стойност на дадена променлива. Той има асоциативност отдясно наляво,
                        т.е. стойността, дадена от дясната страна на оператора, се присвоява на променливата отляво. Поради тази причина, стойността от дясната страна
                        трябва да е декларирана преди да бъде използвана или да е константа.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В много случаи операторът за присвояване може да се комбинира с други оператори, за да се създадат съкратени съставни изрази. Например, a += 5 замества a = a + 5.
                        Често срещани съставни оператори включват:
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>+= : Събери и присвои.</li>
                        <li>-= : Извади и присвои.</li>
                        <li>*= : Умножи и присвои.</li>
                        <li>/= : Раздели и присвои.</li>
                        <li>%= : Модулно деление и присвои.</li>
                    </ul>

                    <CodeEditor height="400px" programingLanguage="java" initialCode={`import java.io.*;

class TestingOperators
{
    public static void main(String[] args)
    {
        
        // Assignment operators
        int f = 7;
        System.out.println("f += 3: " + (f += 3));
        System.out.println("f -= 2: " + (f -= 2));
        System.out.println("f *= 4: " + (f *= 4));
        System.out.println("f /= 3: " + (f /= 3));
        System.out.println("f %= 2: " + (f %= 2));
        System.out.println("f &= 0b1010: " + (f &= 0b1010));
        System.out.println("f |= 0b1100: " + (f |= 0b1100));
        System.out.println("f ^= 0b1010: " + (f ^= 0b1010));
        System.out.println("f <<= 2: " + (f <<= 2));
        System.out.println("f >>= 1: " + (f >>= 1));
        System.out.println("f >>>= 1: " + (f >>>= 1));
    }
}`} />

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Релационните оператори</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Релационните оператори се използват за проверка на зависимости като равенство, по-голямо от и по-малко от.
                        Те връщат булеви резултати след сравнението и се използват широко в циклични конструкции, както и в условни if-else конструкции.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Релационните оператори сравняват стойности и връщат булеви резултати:
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>== : Равно на</li>
                        <li>!= : Не е равно на.</li>
                        <li>{`\<`} : По-малко от.</li>
                        <li>{`\<`}= : По-малко от или равно на.</li>
                        <li>{`\>`} : По-голямо от.</li>
                        <li>{`\>`}= : По-голямо от или равно на.</li>
                    </ul>

                    <CodeEditor height="400px" programingLanguage="java" initialCode={`import java.io.*;

class TestingOperators
{
    public static void main(String[] args)
    {
        // Comparison operators
        int a = 10;
        int b = 3;
        int c = 5;

        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));
        System.out.println("a == c: " + (a == c));
        System.out.println("a != c: " + (a != c));
    }
}`} />


                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Логическите оператори</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Логическите оператори се използват за извършване на операции "логическо И" (logical AND) и "логическо ИЛИ" (logical OR),
                        подобно на логическите елементи "И" и "ИЛИ" в цифровата електроника. Те имат ефект на "късо съединение" (short-circuiting),
                        което означава, че второто условие не се оценява, ако първото е невярно.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Условните оператори са:
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>&& : Логическо И (Logical AND): връща true, когато и двете условия са верни. </li>
                        <li>|| : Логическо ИЛИ (Logical OR): връща true, ако поне едно от условията е вярно.</li>
                        <li>! : Логическо НЕ (Logical NOT): връща true, когато едно условие е невярно, и обратното.</li>
                    </ul>

                    <CodeEditor height="400px" programingLanguage="java" initialCode={`import java.io.*;

class TestingOperators
{
    public static void main (String[] args) {
      
        // Logical operators
        boolean x = true;
        boolean y = false;
      
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
    }
}`} />

                    <Quiz
                        question="Операторите се използват за:"
                        options={[
                            "Създаване на константни променливи и стойности",
                            "Извършване на операции върху променливи и стойности",
                            "Създаване на обекти и класове",
                            "Достъп до коментари за показването им на екрана"
                        ]}
                        correctAnswer={"Извършване на операции върху променливи и стойности"}
                        quizLanguage={"Java"}
                        quizName={"Оператори в Java"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/java/conditions"} onClick={() => endTutorial("Оператори в Java", "Java")} className="text-blue-600 underline">Условни оператори в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/operators-in-java/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Оператори в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}