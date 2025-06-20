import React, { useState } from 'react';
//import axios from 'axios';
import DropMenu from './DropDownLanguage';
import VersionOptions from './DropDownVersion';
import Editor from '@monaco-editor/react';
import DropDownTheme from './DropDownTheme';

const TextEditor = () => {
  // State variables to hold code, stdin, output, language, and loading status
  // code: The code written by the user
  // stdin: Input provided by the user for the code execution
  // output: The result of the code execution
  // language: The programming language selected by the user
  // loading: A boolean to indicate if the code is currently being executed
  const [code, setCode] = useState('');
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState(''); // Default language
  const [version, setVersion] = useState(''); // Default version index
  const [loading, setLoading] = useState(false);
  const [theme, setTheame] = useState('vs')// Default theme for the editor
  // The code editor component uses the Monaco Editor for syntax highlighting and code editing

  // Function to handle code execution
  // This function will send the code to the backend for execution
  const handleRunCode = async () => {
    setLoading(true);
    setOutput(''); // Reset previous output

    // Create an object with the code, stdin, language, and version
    // This object will be sent to the backend for execution
    const obj = [
      {
        Id: 1,
        clientId: "740b7e52c332bbbce02cdf69cb87461d",
        clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
        script: code,
        stdin: stdin,
        language: language,
        versionIndex: version,
        compileOnly: false
      },
      {
        Id: 2,
        clientId: "740b7e52c332bbbce02cdf69cb87461d",
        clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
        script: code,
        stdin: "5", // Make sure input is string
        language: language,
        versionIndex: version,
        compileOnly: false
      },
      {
        Id: 3,
        clientId: "740b7e52c332bbbce02cdf69cb87461d",
        clientSecret: "3b2d3849be5207c8e9354bb38d51100b12867d1f9a94d3e5540b7b821cc91b43",
        script: code,
        stdin: "6", // Make sure input is string
        language: language,
        versionIndex: version,
        compileOnly: false
      }
    ];
    
    // Prepare the request body with the code, stdin, language, and version
    // The request body is an array of objects, each representing a code execution request
    try {
      const results = await Promise.all(
        obj.map(async (object) => {
          const response = await fetch('http://localhost:5000/executeCode', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(object),
          });

          const data = await response.json();
          return { id: object.Id, output: data.output || data.error };
        })
      );

      const finalOutput = results
        .map(result => `Output for input ${result.id}:\n${result.output}`)
        .join('\n\n');

      setOutput(finalOutput);
    } catch (error) {
      setOutput("Error executing code:\n" + (error.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Tutorial Section */}
        <div className="md:w-1/2 w-full p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-r border-gray-200 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Tutorial</h2>
          <p className="text-gray-700 mb-4">
            Welcome to the Code Editor! Select your programming language, version, and theme. Write your code in the editor, provide any required input, and click <span className="font-semibold">Run Code</span> to see the output.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Choose a language and version from the dropdowns.</li>
            <li>Pick your preferred editor theme.</li>
            <li>Write or paste your code in the editor.</li>
            <li>Enter input if your code needs it.</li>
            <li>Click <span className="font-semibold">Run Code</span> to execute.</li>
            <li>See the output below the editor.</li>
          </ul>
        </div>
        {/* Editor Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col">
          <div className="w-full max-w-5xl mx-auto mt-8">
            <DropMenu onSelect={setLanguage} />
            <VersionOptions selectedLanguage={language} onSelect={setVersion} />
            <DropDownTheme selectedTheme={theme} onSelect={setTheame} />

            <label className="block mb-2 mt-6 text-lg font-medium text-gray-700">
              Write your code:
            </label>
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <Editor
                height="350px"
                language={language === 'python3' ? 'python' : language}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={theme}
                options={{
                  suggestOnTriggerCharacters: true,
                  quickSuggestions: true,
                  wordBasedSuggestions: true,
                  tabCompletion: "on",
                  fontSize: 14,
                }}
                defaultValue="// Write your code here"
              />
            </div>

            <label className="block mt-6 mb-2 text-md font-medium text-gray-700">
              Provide input (If needed):
            </label>
            <textarea
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              placeholder="1 2 3 4 5"
              rows={3}
              className="w-full font-mono p-2 text-sm border border-gray-300 rounded-md bg-white resize-none"
            />

            <button
              onClick={handleRunCode}
              disabled={loading}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? 'Running...' : 'Run Code'}
            </button>

            {output && (
              <div className="mt-6 bg-gray-900 text-white p-4 rounded-md whitespace-pre-wrap">
                <h2 className="font-bold mb-2">Output:</h2>
                <pre>{output}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;