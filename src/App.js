import React from 'react';
import TextEditor from './Components/CodeEditor/TextEditor';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import AllTutorials from './Components/Tutorials/AllTutorials';
import ProgrammingVSCoding from './Components/Tutorials/ProgrammingVSCoding';
import HelloWorld from './Components/Tutorials/HelloWorld';
import Variables from './Components/Tutorials/Variables';
import Operators from './Components/Tutorials/Operators';
import Integer from './Components/Tutorials/Integer';
import Float from './Components/Tutorials/Float';
import DataVariablesExamIntro from './Components/Exams/DataVariablesExamIntro';
import VariablesExam from './Components/Exams/VariablesExam';
// import String from './Components/Tutorials/String';
// import Bool from './Components/Tutorials/Bool';
// import LogInPage from './Components/LogInPage/LogInPage'; // Uncomment if you have a LogInPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logIn" />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/tutorials" element={<AllTutorials />} />
        <Route path="/code-editor" element={<TextEditor />} />
        <Route path="/tutorials" element={<AllTutorials />} />
        <Route path="/tutorials/programming-vs-coding" element={<ProgrammingVSCoding />} />
        <Route path="/tutorials/hello-world" element={<HelloWorld />} />
        <Route path="/tutorials/variables" element={<Variables />} />
        <Route path="/tutorials/operators" element={<Operators />} />
        <Route path="/tutorials/integers"  element={< Integer/>}/>
        <Route path="/tutorials/float"  element={<Float />}/>
        <Route path="/tutorials/string" />
        <Route path="/tutorials/bool" />
        <Route path="/exams" element={<DataVariablesExamIntro />} />
        <Route path="/exams/start"  element={<VariablesExam/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
