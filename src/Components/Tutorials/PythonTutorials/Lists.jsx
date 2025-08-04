import React from "react";
import CodeEditor from '../CodeEditor'
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import Quiz from "../../Exams/Quiz";
import ListImage from '../Images/Python/python-list-index.png'
import { Link } from "react-router-dom";

export default function Lists() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Python Списъци
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python, списъкът е вграден тип данни, който функционира като динамично оразмеряващ се масив – автоматично нараства и се свива според нуждите.
                        В списък можем да съхраняваме всякакви видове елементи, включително и други списъци.
                        Една от ключовите характеристики на списъците е, че те могат да съдържат смесен тип елементи.
                        Това е възможно, тъй като списъкът съхранява предимно препратки на последователни места, докато самите елементи могат да
                        бъдат съхранявани на различни места в паметта. Това прави списъците изключително гъвкави и мощни за организиране на данни в Python.
                    </p>

                    <strong>Важна забележка</strong>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Всеки елемент в даден списък не се съхранява директно в структурата на самия списък.
                        Вместо това, списъкът съхранява указатели към действителните обекти в паметта.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създане на list</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4" >
                        Списъци могат да се създадът по два начина: чрез конструктора list() или без нея.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = list((1,2,3,4,5))
b = [1,2,3,4,5]`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Достъпване на елементи в списъци</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Елементите в даден списък могат да бъдат достъпвани чрез индексиране. В Python, индексите започват от 0, което означава,
                        че a[0] ще ви даде достъп до първия елемент.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={ListImage}
                                alt="Илюстрация на индексиране на списъци в Python"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = [1,2,3,4,5]
b = a[1]`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Добавяне на елементи към списъци</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да добавяме елементи към списъците чрез следните методи
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>append(): Този метод добавя един елемент в края на списъка.</li>
                        <li>extend(): Използвайте extend(), когато искате да добавите няколко елемента (например от друг списък или обект, който може да се обхожда) в края на текущия списък.</li>
                        <li>
                            insert(): Ако трябва да добавите елемент на точно определена позиция в списъка, insert() е методът за вас.
                            Той приема два аргумента: индекса, на който да се вмъкне елементът, и самия елемент.
                        </li>
                    </ul>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = []
                            
a.append(10)
print("After adding 10", a)

a.insert(0,5)
print("After .insert adding 5 at index 0", a)

a.extend([15,20,25])
print("After .extend", a)`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Обновяване на елементи в списък</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python, тъй като списъците са променливи (mutable), можем лесно да променяме стойността на даден елемент, като го достъпим чрез неговия индекс.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = [10,20,30,40,50]
a[1] = 25
print(a)`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Премахване на елементи от списък</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python имате няколко начина да премахнете елементи от списък, в зависимост от това дали знаете стойността на елемента, или неговата позиция (индекс).
                    </p>

                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>remove(): Този метод премахва първото срещане на определена стойност от списъка. Ако елементът, който се опитвате да премахнете, не присъства в списъка, ще получите грешка ValueError.</li>
                        <li>pop(): Методът pop() е по-гъвкав. Той премахва елемент на определен индекс и връща премахнатия елемент. Ако не посочите индекс, pop() по подразбиране ще премахне и върне последния елемент от списъка.</li>
                        <li> del оператор: Операторът del се използва за изтриване на елемент на посочен индекс или дори за изтриване на цели части от списъка или целия списък. Той не връща премахнатия елемент.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Oбхождане на списъци в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Oбхождането на списъци е основна операция, която ни позволява да достъпваме всеки елемент в списъка един по един. Това е изключително полезно, когато искаме да извършим някакво действие върху всеки елемент или да достъпим конкретни елементи въз основа на определени условия.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`a = ["apple", "orange", "bananna"]
for item in a:
    print(item)`}
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor height="100px" initialCode={`a = ["apple", "orange", "bananna"]
for item in a:
    print(item)`} programingLanguage="python" />
                    </div>

                    <Quiz
                        question="Как можем да достъпим даден елемент в списък в Python?"
                        code={`temp_list = [1,2,3,4,5]
a = temp_list[1]
b = temp_List[1]
c = temp_list.pop()`}
                        options={["a", "b", "c"]}
                        correctAnswer={"a"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/python/dict"} className="text-blue-600 underline">Създаване на речници в Python</Link>
                    </p>

                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/python-lists/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Списъци в Python
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}