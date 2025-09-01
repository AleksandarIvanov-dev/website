import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";
import FooterHomePage from "../HomePage/FooterHomePage";
import DropDownTheme from "../CodeEditor/DropDownTheme";
import DropDownLanguage from "../CodeEditor/DropDownLanguage"

const CodePlayground = () => {
    const [JDoodleLanguage, setJDoodleLanguage] = useState("python3");
    const [monacoLanguage, setMonacoLanguage] = useState("python");
    const [theme, setTheme] = useState("vs"); // default theme
    const [code, setCode] = useState("");
    const [cpuTime, setCPUTime] = useState(null)
    const [memory, setMemory] = useState("")
    const [statusCode, setStatusCode] = useState(null)
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    const handleRun = async () => {
        setIsRunning(true);
        setOutput("");

        const payload = {
            clientId: "740b7e52c332bbbce02cdf69cb87461d",
            clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
            script: code, // Use the state variable for execution
            stdin: input,
            language: JDoodleLanguage,
            versionIndex: "5",
            compileOnly: false,
        };

        try {
            const response = await fetch("http://localhost:5000/executeCode", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            //console.log(data)
            setOutput(data.output);
            setCPUTime(data.cpuTime);
            setMemory(data.memory)
            setStatusCode(data.statusCode)
        } catch (error) {
            setOutput("⚠️ Грешка при изпълнение на кода.");
            console.error(error);
        }

        setIsRunning(false);
    };


    const addCodeAfterLanguageUpdate = (selectedLanguage) => {
        if (selectedLanguage === "java") {
            setCode(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`);
        }
        else if (selectedLanguage === "csharp") {
            setCode(`using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}`);
        }
        else if (selectedLanguage === "cpp") {
            setCode(`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`);
        }
        else if (selectedLanguage === "python3") {
            setCode(`print("Hello, Python!")`);
        }
        else if (selectedLanguage === "") {
            setCode(`console.log("Hello, JavaScript!");`);
        }
    };

    return (
        <div>
            <HomePageHeader />
            <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-4">🛠 Среда за писане на код</h1>

                {/* Language selector */}
                <div className="mb-4">
                    <DropDownLanguage onSelect={(value) => {
                        setJDoodleLanguage(value);
                        addCodeAfterLanguageUpdate(value);
                    }} />
                </div>

                {/* Theme selector */}
                <div className="mb-4">
                    <DropDownTheme selectedTheme={theme} onSelect={setTheme} />
                </div>

                {/* Code editor */}
                <Editor
                    height="300px"
                    language={monacoLanguage}
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    theme={theme}
                />

                {/* Input field */}
                <div className="mt-4">
                    <label className="font-medium">Входни данни (stdin):</label>
                    <textarea
                        className="w-full border rounded p-2 mt-1"
                        rows={3}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                {/* Run button */}
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {isRunning ? "Изпълняване..." : "▶ Изпълни кода"}
                </button>

                {/* Output */}
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Резултат:</h3>
                    <pre className="bg-white p-3 rounded border text-sm text-gray-900 whitespace-pre-wrap">
                        {output || "Няма изход."}
                    </pre>

                    {/* Extra info fields */}
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-gray-700">
                        <div className="bg-white p-2 rounded border">
                            <span className="font-medium">CPU време:</span>{" "}
                            {cpuTime !== null ? `${cpuTime} сек` : "N/A"}
                        </div>
                        <div className="bg-white p-2 rounded border">
                            <span className="font-medium">Памет:</span>{" "}
                            {memory ? `${memory} KB` : "N/A"}
                        </div>
                        <div className="bg-white p-2 rounded border">
                            <span className="font-medium">Статус код:</span>{" "}
                            {statusCode !== null ? statusCode : "N/A"}
                        </div>
                    </div>
                </div>
            </div>
            <FooterHomePage />
        </div>

    );
};


export default CodePlayground;
