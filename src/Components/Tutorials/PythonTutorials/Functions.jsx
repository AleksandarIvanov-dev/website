import React, { useEffect } from "react";
import CodeEditor from '../CodeEditor'
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import DeclaringFunction from '../Images/Python/DeclaringFunction.png';
import Quiz from "../../Exams/Quiz";
import { startTutorial, endTutorial } from "../CodeEditor";
import { Link } from "react-router-dom";

export default function Loops() {
    useEffect(() => {
        startTutorial("Python functions", "Python");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Функции в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Функциите в Python представляват блок от оператори, които изпълняват конкретна задача.
                        Идеята е да се обединят някои често или повторно изпълнявани задачи и да се създаде функция,
                        така че вместо да пишем един и същ код отново и отново за различни входове,
                        можем да извикваме функцията, за да използваме кода, съдържан в нея, многократно.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Защо функциите са полезни?</h2>
                    <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
                        <li>Повторно използване на код (Code Reuse)</li>
                        <li>Намалена дължина на кода (Reduced code length)</li>
                        <li>Повишена четимост на кода (Increased readability of code)</li>
                    </ul>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={DeclaringFunction}
                                alt="Създаване на функция в Python"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Видове функции в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Вградени библиотечни функции (Built-in library function): Това са стандартни функции в Python, които са налични за използване.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Дефинирани от потребителя функции (User-defined function): Можем да създаваме свои собствени функции въз основа на нашите изисквания.
                    </p>



                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създаване на функция в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да дефинираме функция в Python, използвайки ключовата дума def. Към нея можем да добавим всякакъв вид функционалности и свойства, както изискваме.
                        Чрез следващия пример можем да разберем как да напишем функция в Python. По този начин създаваме
                        дефиниция на Python функция, използвайки ключовата дума def.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`def greed():
    print("Hello User")`}
                        </pre>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        След като създадем функция в Python, можем да я извикаме, като използваме името на функцията, последвано от скоби, съдържащи параметрите на
                        тази конкретна функция.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`def greed():
    print("Hello User")
    
    
hello()`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Аргументи на функция в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Аргументите са стойностите, които се подават в скобите на функцията. Една функция може да има произволен брой аргументи, разделени със запетая.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`def evenOdd(x):
    if(x % 2 == 0):
        return "Even"
    else:
        return "Odd"
        
        
print(evenOdd(14))
print(evenOdd(7))`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператор return в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        return операторът на функция се използва за излизане от функция и връщане към извикващата функция, като връща указаната стойност или елемент от данни към извикващия.
                        Операторът return може да съдържа променлива, израз или константа, които се връщат в края на изпълнението на функцията.
                        Ако нищо от изброеното не присъства заедно с оператора return, се връща обект от тип None.
                    </p>

                    <div className="mt-12">
                        <CodeEditor height="200px" initialCode={`def evenOdd(x):
    if(x % 2 == 0):
        return "Even"
    else:
        return "Odd"
        
        
print(evenOdd(14))
print(evenOdd(7))`} programingLanguage="python" />
                    </div>

                    <Quiz
                        question="Какъв е операторът, който се използва за връщане на стойност от функция в Python?"
                        options={["return", "break", "continue"]}
                        correctAnswer={"return"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/challenges"} onClick={() => endTutorial("Python functions", "Python")} className="text-blue-600 underline">Упражнения</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/python-functions/"  target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Функции в Python
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}