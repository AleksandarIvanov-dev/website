import React, { useEffect } from "react";
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import Quiz from "../../Exams/Quiz";
import FooterHomePage from "../../HomePage/FooterHomePage";
import CodeEditor from '../CodeEditor'
import { startTutorial, endTutorial } from "../CodeEditor";
import { Link } from "react-router-dom";

export default function Dictionaries() {
    useEffect(() => {
        startTutorial("Речници в Python", "Python");
    }, []);
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Python Речници
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Речникът в Python е структура от данни, която съхранява стойности във формат ключ:стойност.
                        Стойностите в речника могат да бъдат от всякакъв тип данни и могат да се повтарят, докато ключовете не могат да се повтарят
                        и трябва да са неизменими (immutable).
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Създаване на речник</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Речниците се създават с помощта на фигурни скоби <code>{'{' + '}'}</code> или чрез конструктора <code>dict()</code>. Всеки елемент е двойка ключ:стойност.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`my_dict = {"name": "Ivan", "age": 25, "city": "Sofia"}
another_dict = dict(language="Python", version=3.10)`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Достъпване на стойности в речник</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Достъпът до стойностите става чрез посочване на ключа в квадратни скоби или с метода <code>get()</code>.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`print(my_dict["name"])
print(my_dict.get("age"))`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Добавяне и обновяване на елементи</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да добавим нова двойка ключ:стойност или да обновим съществуваща, като използваме оператора <code>[]</code>.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`my_dict["email"] = "ivan@example.com"
my_dict["age"] = 26`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Премахване на елементи от речник</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да премахнем елемент чрез <code>del</code>, метода <code>pop()</code> или <code>popitem()</code>.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`del my_dict["city"]
age = my_dict.pop("age")
item = my_dict.popitem()`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Обхождане на речници</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Можем да обхождаме ключовете, стойностите или двойките ключ:стойност с помощта на <code>for</code> цикъл.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`for key in my_dict:
print(key, my_dict[key])

for value in my_dict.values():
    print(value)

for key, value in my_dict.items():
    print(key, value)`}
                        </pre>
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Полезни методи за речници</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Python речниците предоставят различни полезни методи за работа с данните:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><code>keys()</code> – връща списък с всички ключове</li>
                        <li><code>values()</code> – връща списък със всички стойности</li>
                        <li><code>items()</code> – връща списък с двойки (ключ, стойност)</li>
                        <li><code>update()</code> – добавя елементи от друг речник</li>
                        <li><code>clear()</code> – изтрива всички елементи</li>
                        <li><code>copy()</code> – създава копие на речника</li>
                    </ul>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`print(my_dict.keys())
print(my_dict.values())
print(my_dict.items())
my_dict.update({"country": "Bulgaria"})
my_dict.clear()`}
                        </pre>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Вложени речници</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Речниците могат да съдържат други речници като стойности. Това е полезно за представяне на по-сложни структури от данни.
                    </p>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`students = {
    "Ivan": {"age": 25, "city": "Sofia"},
    "Maria": {"age": 22, "city": "Plovdiv"}
}
print(students["Ivan"]["city"])  # Sofia`}
                        </pre>
                    </div>

                    <div className="mt-12">
                        <CodeEditor height="150px" initialCode={`thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])` } programingLanguage="python" />
                    </div>

                    <Quiz
                        question="Могат ли речниците да съдържат едни и същи ключове с различни стойности?"
                        options={["Да", "Не"]}
                        correctAnswer={"Не"}
                        quizLanguage={"Python"}
                        quizName={"Речници в Python"}
                    />

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок <Link to={"/tutorials/python/functions"} onClick={() => endTutorial("Речници в Python", "Python")} className="text-blue-600 underline">Създаване на функции в Python</Link>
                    </p>
                    <p className="text-sm text-gray-500 italic text-right mt-6">
                        Източник: <a href="https://www.geeksforgeeks.org/python/python-dictionary/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                            Geeks for Geeks - Речници в Python
                        </a>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}