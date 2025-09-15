import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import JavaArrays from '../Images/Java/JavaArrays.png'
import UpdateArrayElement from '../Images/Java/update-array-element.webp'
import TraverseArray from '../Images/Java/traverse-array.webp'
import Quiz from "../../Exams/Quiz";
import { Link } from "react-router-dom";
import { startTutorial, endTutorial } from "../CodeEditor";


export default function JavaLoops() {
    useEffect(() => {
        startTutorial("Масиви в Java", "Java");
    }, []);

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Масиви в Java
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Java масивът е важна линейна структура от данни, която ни позволява да съхраняваме множество стойности от един и същи тип.
                        Масивите в Java са обекти, както всички други обекти в Java, масивите имплицитно наследяват от класа java.lang.Object.
                        Това ви позволява да извиквате методи, дефинирани в Object (като toString(), equals() и hashCode()).
                        Масивите имат вградено свойство length, което предоставя броя на елементите в масива.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`public class ArrayTest {
    public static void main(String[] args) {

        // initializing array
        int[] arr = { 40,55,63,17,22,68,89,97,89};

        // size of array
        int n = arr.length;

        // traversing array
        for (int i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
    }
}}`}
                            programingLanguage="java" />
                    </div>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Съхраняване на примитиви и обекти: Java масивите могат да съхраняват както примитивни типове (като int, char, boolean и др.), така и обекти (като String, Integer и др.).</li>
                        <li>Непрекъснато разпределение на паметта Когато използваме масиви от примитивни типове, елементите се съхраняват на съседни места. За непримитивни типове, референциите на елементите се съхраняват на съседни места.</li>
                        <li>Индексиране, базирано на нула: Първият елемент от масива е с индекс 0.</li>
                        <li>Фиксирана дължина: След създаването на масив, размерът му е фиксиран; не можем да го променяме.</li>
                    </ul>


                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={JavaArrays}
                                alt="Масиви в Java"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни операции в масиви</h2>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Деклариране на масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Общата форма на декларация на масив е:
                        {`\n`}
                        int arr[];
                        {`\n`}
                        int[] arr;
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Типът на елемента определя типа данни на всеки елемент, който съставлява масива.
                        Подобно на масив от цели числа, можем да създадем и масив от други примитивни типове данни като char, float, double и др.
                        или потребителски дефинирани типове данни (обекти на клас).
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Инициализация на масив в Java</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Когато се декларира масив, се създава само референция към масив. Използваме new, за да разпределим масив с даден размер.{`\n`}
                        int arr[] = нов int[размер];
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Типът на елемента определя типа данни на всеки елемент, който съставлява масива.
                        Подобно на масив от цели числа, можем да създадем и масив от други примитивни типове данни като char, float, double и др.
                        или потребителски дефинирани типове данни (обекти на клас).
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Декларацията на масив обикновено е статична, но ако размерът не е дефиниран, масивът е с динамичен размер.</li>
                        <li>Паметта за масиви винаги се разпределя динамично (в сегмент от heap) в Java. Това е различно от C/C++, където паметта може да бъде разпределена статично или динамично.</li>
                        <li>Елементите в масива, разпределени от new, автоматично ще бъдат инициализирани с нула (за числови типове), false (за булеви) или null (за референтни типове).</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Промяна на елемент от масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        За да промените елемент, присвойте нова стойност на специфичен индекс. Индексът започва с 0 и завършва на (общ размер на масива)-1.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={UpdateArrayElement}
                                alt="Промяна на елемент от масив."
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Дължина на масива</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да получим дължината на масив, използвайки свойството length:{`\n`}
                        int n = arr.length;
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Достъп и актуализиране на всички елементи на масива</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Всички елементи на масива могат да бъдат достъпни чрез Java for Loop.
                        Достъпът до всеки елемент в масива се осъществява чрез неговия индекс.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={TraverseArray}
                                alt="Обхождане на масив"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`class TraverseArrayTest {
    public static void main(String[] args)
    {
        // declares an Array of integers.
        int[] arr;

        // allocating memory for 5 integers.
        arr = new int[5];

        // initialize the elements of the array, first to last(fifth) element
      	arr[0] = 2;
		arr[1] = 4;
        arr[2] = 8;
        arr[3] = 12;
        arr[4] = 16;

        // accessing the elements of the specified array
        for (int i = 0; i < arr.length; i++)
            System.out.println("Element at index " + i + " : " + arr[i]);
    }
}`}
                            programingLanguage="java" />
                    </div>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Предимства на масивите в Java</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Ефективен достъп: Достъпът до елемент по неговия индекс е бърз и има постоянна времева сложност.</li>
                        <li>Управление на паметта: Масивите имат фиксиран размер, което прави управлението на паметта лесно и предвидимо.</li>
                        <li>Организация на данните: Масивите помагат за организирането на данните по структуриран начин, което улеснява управлението на свързани елементи.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Недостатъци на масивите в Java</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Фиксиран размер: След като масивът е създаден, неговият размер не може да бъде променян, което може да доведе до загуба на памет, ако размерът е надценен, или до недостатъчно място за съхранение, ако е подценен.</li>
                        <li>Хомогенност на типа: Масивите могат да съхраняват само елементи от един и същи тип данни, което може да изисква допълнителна обработка за смесени типове данни.</li>
                        <li>Вмъкване и изтриване: Вмъкването или изтриването на елементи, особено в средата на масив, може да бъде скъпо, тъй като може да изисква изместване на елементи.</li>
                    </ul>

                    <Quiz
                        question="Как може да се декларира масив от низове?"
                        options={["string[] myText;", "String[] myText;", "str[] myText;", "string = myText;"]}
                        correctAnswer={"String[] myText;"}
                        quizLanguage={"Java"}
                        quizName={"Масиви в Java"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/maps"} onClick={() => endTutorial("Масиви в Java", "Java")} className="text-blue-600 underline">Map в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/java/arrays-in-java/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Масиви в Java
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}