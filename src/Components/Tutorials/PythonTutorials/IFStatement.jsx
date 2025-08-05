import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import IfStatement from '../Images/Python/if-statement.webp'
import IfElseStatement from '../Images/Python/if-else-statement.webp'
import NestedStatements from '../Images/Python/Nested-statement.webp'
import { startTutorial, endTutorial } from "../CodeEditor";
import Quiz from "../../Exams/Quiz";
import { Link } from "react-router-dom";


export default function IFStatement() {
    useEffect(() => {
        startTutorial("Python If statement", "Python");
    }, []);

    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Условни Оператори
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python, If-Else е фундаментален условен оператор, използван за вземане на решения в програмирането.
                        If-Else операторът позволява изпълнението на специфични блокове код в зависимост от това дали условието е вярно (True) или невярно (False).
                    </p>



                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператор if</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        If операторът е най-простият оператор за вземане на решения. Ако условието се оцени като вярно (True), блокът код в if оператора се изпълнява.
                    </p>

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
                            height="120px"
                            initialCode={`a = 10
if a < 20:
    print("a is smaller than 20")

print("I'm not in if statement")`}
                            programingLanguage="python" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператор if...else</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        if...else операторът е контролен оператор, който помага при вземането на решения въз основа на конкретни условия.
                        Когато условието в if израза е невярно (False), тогава ще се изпълни else блокът.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={IfElseStatement}
                                alt="Операторът if-else"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <CodeEditor
                            height="120px"
                            initialCode={`a = 30
if a < 20:
    print("a is smaller than 20")
else:
    print("a is bigger than 20")` }
                            programingLanguage="python" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Логически Оператори с If...Else</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да комбинираме множество условия, използвайки логически оператори като and (И), or (ИЛИ) и not (НЕ).
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="160px"
                            initialCode={`i = 20

 # Checking if i is greater than 0
if (i > 0):
    print("i is positive")
else:
    print("i is 0 or Negative")`}
                            programingLanguage="python" />
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Вложени If...Else Оператори</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Вложен If...Else оператор възниква, когато дадена if...else структура е поставена в друг if или else блок.
                        Вложените if...else оператори позволяват изпълнението на специфични кодови блокове въз основа на поредица от условни проверки.
                    </p>

                    <div className="flex justify-center mb-10">
                        <div className="bg-blue-100 border-l-4 border-blue-500 rounded shadow-md p-4">
                            <img
                                src={NestedStatements}
                                alt="Вложени if оператори"
                                className="w-full max-w-xl rounded-md h-auto"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">If...Elif...Else Оператор</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        If-elif-else операторът в Python се използва за вземане на решения с множество възможности.
                        Той ни позволява да проверяваме няколко условия последователно и да изпълним специфичен блок код, когато дадено условие е вярно (True).
                        Ако нито едно от условията не е вярно, тогава се изпълнява else блокът.
                    </p>

                    <div className="mt-12">
                        <CodeEditor
                            height="370px"
                            initialCode={`i = 25

# Checking if i is equal to 10
if i == 10:
    print("i is 10")

# Checking if i is equal to 15
elif i == 15:
    print("i is 15")

# Checking if i is equal to 20
elif i == 20:
    print("i is 20")

# If none of the above conditions are true
else:
    print("i is not present")
    `
                            }
                            programingLanguage="python" />
                    </div>

                    <Quiz
                        question="Какъв е операторът, който се използва за проверка на условие в Python?"
                        options={["else", "elif", "if"]}
                        correctAnswer={"if"}
                        quizLanguage={"Python"}
                        quizName={"If statements in Python"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed mt-6">
                        Следващ урок <Link to={"/tutorials/python/cycles"} onClick={() => endTutorial("Python If statement", "Python")} className="text-blue-600 underline">Цикли в Python</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/conditional-statements-in-python/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Условни оператори
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}