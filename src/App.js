import React from 'react';
import TextEditor from './Components/CodeEditor/TextEditor';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import AllTutorials from './Components/Tutorials/AllTutorials';
import ProgrammingVSCoding from './Components/Tutorials/ProgrammingVSCoding';
import Float from './Components/Tutorials/Variables/Float';
import ExamIntro from './Components/Exams/ExamIntro';
import Exam from './Components/Exams/Exam';
//Python Tutorial imports
import IntroPython from './Components/Tutorials/PythonTutorials/Introduction';
import InputAndOutput from './Components/Tutorials/PythonTutorials/InputAndOutput'
import Conventions from './Components/Tutorials/PythonTutorials/Conventions'
import Variales from './Components/Tutorials/PythonTutorials/Variables'
import Numbers from './Components/Tutorials/PythonTutorials/Numbers'

import DropDownMenuSettings from './Components/Settings/DropDownMenuSettings';
import LogInPage from './Components/LogInPage/LogIn';
import Home from './Components/HomePageLoggedIn/Home';
import withAuth from './Components/withAuth';
import LanguageSelector from "./Components/SignUpPage/ChooseLanguageNewUser"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/tutorials" element={<AllTutorials />} />
        <Route path="/code-editor" element={<TextEditor />} />
        <Route path="/tutorials" element={<AllTutorials />} />
        <Route path="/tutorials/programming-vs-coding" Component={withAuth(ProgrammingVSCoding)} />
        <Route path="/tutorials/python/intro" Component={withAuth(IntroPython)} />
        <Route path="/tutorials/python/io" Component={withAuth(InputAndOutput)} />
        <Route path="/tutorials/python/conventions" Component={withAuth(Conventions)} />
        <Route path="/tutorials/python/variables" Component={withAuth(Variales)} />
        <Route path="/tutorials/python/numbers" Component={withAuth(Numbers)} />
        <Route path="/tutorials/float" Component={withAuth(Float)} />
        <Route path="/tutorials/string" />
        <Route path="/tutorials/bool" />
        <Route path="/exams" Component={withAuth(ExamIntro)} />
        <Route path="/exams/start" Component={withAuth(Exam)} />
        <Route path='/settings' element={<DropDownMenuSettings />} />
        <Route path="/home" Component={withAuth(Home)} />
        <Route path="/home/lang" Component={withAuth(LanguageSelector)} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
