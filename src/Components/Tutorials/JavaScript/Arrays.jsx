import React from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import Quiz from "../../Exams/Quiz";
import JavaScriptArrays from "../Images/JavaScript/JavaScript-Array.webp"
import { Link } from "react-router-dom";


export default function JavaScriptArrays() {

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Масиви в JavaScript
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В JavaScript масивът е подреден списък от стойности. На всяка стойност, известна като елемент, е присвоена числова позиция в масива, наречена индекс.
                        Индексирането започва от 0, така че първият елемент е на позиция 0, вторият на позиция 1 и т.н. Масивите могат да съдържат всякакъв тип
                        данни – като числа, низове, обекти или дори други масиви – което ги прави гъвкава и съществена част от програмирането в JavaScript.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={JavaScriptArrays}
                                alt="Масиви в JavaScript"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създаване на масив с помощта на Literal</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Създаването на масив с помощта на литерал на масив включва използването на квадратни скоби [] за дефиниране и инициализиране на масива.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = [];

console.log(a)

let b = [1, 2, 3, 4, 5]
console.log(b)}`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създайте с помощта на нова ключова дума (конструктор)</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        „Конструктор на масиви“ се отнася до метод за създаване на масиви чрез извикване на функцията конструктор на масиви.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = new Array(1, 2, 3, 4, 5)
console.log(a)`}
                            programingLanguage="java" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Основни операции с масиви в JavaScript</h2>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Достъп до елементи от масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Достъпът до всеки елемент в масива може да се осъществи чрез индексния номер. Индексът в масивите започва с 0.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"]
console.log(a[0]);
console.log(a[1]);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Достъп до първия елемент на масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Индексирането на масива започва от 0, така че можем да достъпим първия елемент от масива, използвайки индексния номер.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];
let fst = a[0];

console.log("First Item: ", fst);`}
                            programingLanguage="java" />
                    </div>


                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Достъп до последния елемент от масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да достъпим последния елемент от масива, използвайки индексния номер [array.length - 1].
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];
let lst = a[a.length - 1];

console.log("Last Item: ", lst);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Модифициране на елементите на масива</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Елементите в масив могат да бъдат променяни чрез присвояване на нова стойност на съответния им индекс.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];
console.log(a);

a[1]= "Bootstrap";
console.log(a);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Добавяне на елементи към масива</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Елементи могат да бъдат добавяни към масива, използвайки методи като push() и unshift().{`\n`}{`\n`}

                        Методът push() добавя елемента в края на масива.
                        Методът unshift() добавя елемента в началото на масива.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];

a.push("Node.js");

a.unshift("Web Development");

console.log(a);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Премахване на елементи от масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        За да премахнем елементите от масив, имаме различни методи като pop() , shift() или splice().{`\n`}{`\n`}

                        Методът pop() премахва елемент от последния индекс на масива.
                        Методът shift() премахва елемента от първия индекс на масива.
                        Методът splice() премахва или замества елемента от масива.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

let lst = a.pop();
console.log("After Removing the last: " + a);

let fst = a.shift();
console.log("After Removing the First: " + a);

a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a )`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Дължина на масива</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да получим дължината на масива, използвайки свойството array length.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`
let a = ["HTML", "CSS", "JS"];

let len = a.length;

console.log("Array Length: " + len);`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Итериране през елементи на масив</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да итерираме масив и да осъществяваме достъп до елементи от масива, използвайки циклите for и forEach.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}`}
                            programingLanguage="java" />
                    </div>


                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Конкатенация на масиви</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Чрез вградената функция .concat() могат да се съберат няколко масива в един масив. Този процес се нарича конкатенация.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS", "React"];
let b = ["Node.js", "Expess.js"];

let concateArray = a.concat(b);

console.log("Concatenated Array: ", concateArray);}`}
                            programingLanguage="java" />
                    </div>

                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">Преобразуване на масив в символен низ</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Това става с вградената функция .toString(), който преобразува масив в низ
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="300px"
                            initialCode={`let a = ["HTML", "CSS", "JS"];

console.log(a.toString());`}
                            programingLanguage="java" />
                    </div>
                    \
                    <Quiz
                        question="Кой начин не е правилен за създаване на масив?"
                        options={["const fruits = ['Orange', 'const fruits = new Array ('Orange', 'Banana', 'Apple');", "const fruits = ('Orange', 'Banana', 'Apple');"]}
                        correctAnswer={"const fruits = ('Orange', 'Banana', 'Apple');"}
                        quizLanguage={"JavaScript"}
                        quizName={"Масиви в JavaScript"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/java/func"} className="text-blue-600 underline">Създаване на Функции в Java</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/javascript/javascript-arrays/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Масиви в JavaScript
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div >
    )
}