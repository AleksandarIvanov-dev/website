import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import HashMap from "../Images/Java/HashMap-java.jpg"
import { startTutorial, endTutorial } from "../CodeEditor";
import { Link } from "react-router-dom";


export default function JavaMaps() {
    useEffect(() => {
        startTutorial("Java Maps", "Java");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Maps в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Java, Map Interface е част от пакета java.util и представлява колекция от двойки ключ-стойност, където:
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Стойностите могат да бъдат дубликати.</li>
                        <li>Ключовете са уникални (дубликатите не се допускат).</li>
                        <li>Всеки ключ съответства на точно една стойност.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни характеристики на Map</h2>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Без дубликати в ключовете: Ключовете трябва да са уникални, но стойностите могат да се дублират.</li>
                        <li>Обработка на нулеви стойности: Позволява един нулев ключ в реализации като HashMap и LinkedHashMap и множество нулеви стойности в повечето реализации.</li>
                        <li>Алтернативи, безопасни за нишки: Използвайте ConcurrentHashMap за безопасни за нишки операции. Също така, обгръщайте съществуваща карта, използвайки Collections.synchronizedMap() за синхронизиран достъп.</li>
                    </ul>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Трите основни класа, които реализират тези интерфейси, са: HashMap, TreeMap и LinkedHashMap
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.util.HashMap;
import java.util.Map;

public class HashMapTest {
    public static void main(String[] args) {
        
        // Create a Map using HashMap
        Map<String, Integer> m = new HashMap<>();

        // Adding key-value pairs to the map
        m.put("Geek1", 1);
        m.put("Geek2", 2);
        m.put("Geek3", 3);

        System.out.println("Map elements: " + m);
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={HashMap}
                                alt="HashMap"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>



                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създаване на картографски обекти</h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Тъй като Map е интерфейс , не могат да се създават обекти от тип map. Винаги ни е необходим клас, който имплементира този map интерфейс,
                        за да създадем обект. Освен това, след въвеждането на Generics в Java 1.5, е възможно да се ограничи типът обект, който може да се съхранява в Map.
                    </p>


                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.util.*;
class Test {

    public static void main(String args[])
    {
        // Creating an empty HashMap
        Map<String, Integer> hm
            = new HashMap<String, Integer>();

        // Inserting pairs in above Map using put() method
        hm.put("a", new Integer(100));
        hm.put("b", new Integer(200));
        hm.put("c", new Integer(300));
        hm.put("d", new Integer(400));

        // Traversing through Map using for-each loop
        for (Map.Entry<String, Integer> me :
             hm.entrySet()) {

            System.out.print(me.getKey() + ":");
            System.out.println(me.getValue());
        }
    }
}`}
                            programingLanguage="java" />
                    </div>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Реализирани класове на интерфейса на картата</h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        HashMap: HashMap е въведен в Java 1.2 и е основна имплементация на Map интерфейса, която съхранява данни в двойки ключ-стойност. Използва хеширане, за да преобразува големи низове в по-къси за ефективно индексиране и по-бързо търсене.

                        LinkedHashMap: LinkedHashMap е подобен на HashMap, но запазва реда на вмъкване на елементите. Той поддържа бързо вмъкване, търсене и изтриване, като същевременно следи реда, в който са добавени ключовете.
                        TreeMap: TreeMap имплементира Map и NavigableMap, съхранявайки двойки ключ-стойност в сортиран ред, или чрез естествено подреждане на ключове, или чрез персонализиран Comparator. Подреждането трябва да е съвместимо с equals(), ако не се използва персонализиран Comparator.
                    </p>


                    <h2 >Операции върху map с помощта на HashMap</h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Сега нека видим как да извършим няколко често използвани операции върху карта (Map), използвайки широко използвания клас HashMap.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Добавяне на елементи</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        За да добавим елемент към картата, можем да използваме метода put(). Редът на вмъкване не се запазва в хеш картата. Вътрешно, за всеки елемент се генерира отделен хеш и елементите се индексират въз основа на този хеш, за да се подобри ефективността.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.util.*;

class Test {
    public static void main(String args[])
    {
        // Default Initialization of a Map
        Map<Integer, String> hm1 = new HashMap<>();

        // Initialization of a Map using Generics
        Map<Integer, String> hm2
            = new HashMap<Integer, String>();

        // Inserting the Elements
        hm1.put(1, "Geeks");
        hm1.put(2, "For");
        hm1.put(3, "Geeks");

        hm2.put(new Integer(1), "Geeks");
        hm2.put(new Integer(2), "For");
        hm2.put(new Integer(3), "Geeks");

        System.out.println(hm1);
        System.out.println(hm2);
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Променяне на елемент</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        След добавяне на елементите, ако искаме да променим елемента, това може да стане чрез повторно добавяне на елемента с метода put() . Елементите в картата се индексират с помощта на ключовете, стойността на ключа може да се промени чрез просто вмъкване на актуализираната стойност за ключа, който искаме да променим.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.util.*;

class Test {
    public static void main(String args[])
    {

        // Initialization of a Map using Generics
        Map<Integer, String> hm1
            = new HashMap<Integer, String>();

        // Inserting the Elements
        hm1.put(new Integer(1), "Geeks");
        hm1.put(new Integer(2), "Geeks");
        hm1.put(new Integer(3), "Geeks");

        System.out.println("Initial Map: " + hm1);

        hm1.put(new Integer(2), "For");

        System.out.println("Updated Map: " + hm1);
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Премахване на елементи</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        За да премахнем елемент от картата (Map), можем да използваме метода remove(). Този метод приема стойността на ключа и премахва съпоставянето на ключ от тази карта, ако такъв е наличен в нея.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.util.*;

class Test {

    public static void main(String args[])
    {

        // Initialization of a Map using Generics
        Map<Integer, String> hm1
            = new HashMap<Integer, String>();

        // Inserting the Elements
        hm1.put(new Integer(1), "Geeks");
        hm1.put(new Integer(2), "For");
        hm1.put(new Integer(3), "Geeks");
        hm1.put(new Integer(4), "For");

        System.out.println(hm1);

        hm1.remove(new Integer(4));

        System.out.println(hm1);
    }
}`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Итериране през картата</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Има няколко начина за итерация през картата (Map). Най-известният начин е чрез използване на цикъл for-each и получаване на ключовете. Стойността на ключа се намира с помощта на метода getValue() .
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`import java.util.*;

class Test {
    public static void main(String args[])
    {

        // Initialization of a Map using Generics
        Map<Integer, String> hm1
            = new HashMap<Integer, String>();

        // Inserting the Elements
        hm1.put(new Integer(1), "Geeks");
        hm1.put(new Integer(2), "For");
        hm1.put(new Integer(3), "Geeks");

        for (Map.Entry mapElement : hm1.entrySet()) {
            int key = (int)mapElement.getKey();

            // Finding the value
            String value = (String)mapElement.getValue();

            System.out.println(key + " : " + value);
        }
    }
}`}
                            programingLanguage="java" />
                    </div>



































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
                        <Link to={"/challenges"} onClick={() => endTutorial("Java functions", "Java")} className="text-blue-600 underline">Упражнения</Link>
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