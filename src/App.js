import React from 'react';
import TextEditor from './Components/CodeEditor/TextEditor';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import AllTutorials from './Components/Tutorials/AllTutorials';
import ExamIntro from './Components/Exams/ExamIntro';
import Exam from './Components/Exams/Exam';
// User profile imports
import UserDetails from './Components/UserProfile/UserDetails';

//Python Tutorial imports
import IntroPython from './Components/Tutorials/PythonTutorials/Introduction';
import InputAndOutput from './Components/Tutorials/PythonTutorials/InputAndOutput'
import Conventions from './Components/Tutorials/PythonTutorials/Conventions'
import Variales from './Components/Tutorials/PythonTutorials/Variables'
import Numbers from './Components/Tutorials/PythonTutorials/Numbers'
import Strings from './Components/Tutorials/PythonTutorials/Strings'
import Operators from './Components/Tutorials/PythonTutorials/Operators';
import IFStatement from './Components/Tutorials/PythonTutorials/IFStatement'
import Loops from './Components/Tutorials/PythonTutorials/Loops';
import Functions from './Components/Tutorials/PythonTutorials/Functions'
import Lists from './Components/Tutorials/PythonTutorials/Lists'
import Dictionaries from './Components/Tutorials/PythonTutorials/Dictionaries';
// Java Tutorial imports
import JavaIntro from "./Components/Tutorials/JavaTutorials/Introduction";
import JavaIO from "./Components/Tutorials/JavaTutorials/InputAndOutput";
import JavaConventions from "./Components/Tutorials/JavaTutorials/Conventions";
import JavaDataTypes from './Components/Tutorials/JavaTutorials/DataTypes';

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
        <Route path="/tutorials/python/intro" Component={withAuth(IntroPython)} />
        <Route path="/tutorials/python/io" Component={withAuth(InputAndOutput)} />
        <Route path="/tutorials/python/conventions" Component={withAuth(Conventions)} />
        <Route path="/tutorials/python/variables" Component={withAuth(Variales)} />
        <Route path="/tutorials/python/numbers" Component={withAuth(Numbers)} />
        <Route path="/tutorials/python/string" Component={withAuth(Strings)} />
        <Route path="/tutorials/python/operators" Component={withAuth(Operators)} />
        <Route path="/tutorials/python/conditions" Component={withAuth(IFStatement)} />
        <Route path="/tutorials/python/cycles" Component={withAuth(Loops)} />
        <Route path="/tutorials/python/functions" Component={withAuth(Functions)} />
        <Route path="/tutorials/python/lists" Component={withAuth(Lists)} />
        <Route path="/tutorials/python/dict" Component={withAuth(Dictionaries)} />
        <Route path="/tutorials/java/intro" Component={withAuth(JavaIntro)} />
        <Route path="/tutorials/java/io" Component={withAuth(JavaIO)} />
        <Route path="/tutorials/java/conventions" Component={withAuth(JavaConventions)} />
        <Route path="/tutorials/java/data-types" Component={withAuth(JavaDataTypes)} />
        <Route path="/myprofile" Component={withAuth(UserDetails)} />
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
