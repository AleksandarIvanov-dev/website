import React from "react";
import CodeEditor from '../CodeEditor'
import HomePageHeader from "../../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../../HomePage/FooterHomePage";
import { Link } from "react-router-dom";

export default function Loops() {
    return (
        <div>
            <HomePageHeader />
            <div className="min-h-screen bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Цикли в Python
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Циклите в Python се използват за ефективно повтаряне на действия.
                        Основните видове са for цикли (изброяване на елементи) и while цикли (базирани на условия).
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">While цикъл в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        В Python, цикълът while се използва за повторно изпълнение на блок от оператори, докато дадено условие е удовлетворено.
                        Когато условието стане грешно, се изпълнява редът веднага след цикъла в програмата.
                        Всички оператори, отместени с един и същи брой символни интервали (TAB) след програмен конструктор, се считат за част от един блок код.
                        Python използва отместване като метод за групиране на оператори.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`counter = 0
while(counter < 3):
    counter = counter + 1
    print("Hello World")`}
                        </pre>
                    </div>


                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Използване на оператор else с цикъл While в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Клаузата else се изпълнява само когато условието на while стане грешно.
                        Ако излезем от цикъла или ако бъде хвърлена изключителна ситуация, тя няма да бъде изпълнена.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`counter = 0
while (counter < 3):
    counter = counter + 1
    rint("Hello World")
else:
    print("Hello from else block")`}
                        </pre>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Кодът отпечатва "Hello World" три пъти, използвайки цикъл 'while', и след това след цикъла отпечатва
                            "Hello from the else block", защото има блок "else", свързан с цикъла 'while'.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Цикъл For в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Циклите for се използват за последователно обхождане. Например: обхождане на списък, низ или масив и т.н.
                        В Python има цикъл "for in", който е подобен на цикъла foreach в други езици.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`counter = 4
for i in range(0, counter):
    print(i)`}
                        </pre>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Този код отпечатва числата от 0 до 3 (включително) използвайки цикъл for, който итерира над обхват от 0 до n-1 (където n = 4).
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Оператор break в Python</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Операторът break в Python се използва за излизане или "прекъсване" на цикъла (или цикъл for, или цикъл while) преждевременно,
                        преди цикъла да е итерирал през всичките си елементи или да е достигнал своето условие. Когато операторът break се изпълни,
                        програмата веднага излиза от цикъла и контролът се премества към следващия ред код след цикъла.
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded">
                        <pre className="mt-2 bg-white p-3 rounded text-sm text-black font-mono">
                            {`for i in range(10):
    print(i)
    if i == 6:
        break`}
                        </pre>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Този код ще итерира от числото 0 до 10 като принтира числото и след това проверява да ли даденото число е равно на 6.
                            Ако е равно на 6 цикълът приключва и програмата продължава към следващият ред код.
                        </p>
                    </div>

                    <div className="mt-12">
                        <CodeEditor height="120px" initialCode={`for i in range(10):
    print(i)
    if i == 6:
        break`} />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Следващ урок е <Link to={"/tutorials/python/functions"} className="text-blue-600 underline">Създаване на функции в Python</Link>
                    </p>
                </div>
            </div>
            <FooterHomePage />
        </div>
    )
}