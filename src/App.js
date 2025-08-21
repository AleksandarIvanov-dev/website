import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import ExamIntro from './Components/Exams/ExamIntro';
import Exam from './Components/Exams/Exam';
import ChoseExam from './Components/Exams/ChooseExam'
import CodeExam from './Components/Exams/CodeExam'
import ChoseCodeExam from './Components/Exams/ChooseCodeExam';
import ProgrammingVSCoding from './Components/Tutorials/ProgrammingVSCoding';
// User profile imports
import UserDetails from './Components/UserProfile/UserDetails';
import UserStats from './Components/UserProfile/UserStats';
import UserExamResults from './Components/UserProfile/UserExamResults';
import UserCodeExamResults from './Components/UserProfile/UserCodeExamResults';

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
import JavaVariables from './Components/Tutorials/JavaTutorials/Variables';
import JavaStrings from './Components/Tutorials/JavaTutorials/Strings';
import JavaOperators from './Components/Tutorials/JavaTutorials/Operators';
import JavaIfStatement from './Components/Tutorials/JavaTutorials/IFStatement';
import JavaLoops from './Components/Tutorials/JavaTutorials/Loops';
import JavaFunctions from './Components/Tutorials/JavaTutorials/Functions';
import JavaArrays from './Components/Tutorials/JavaTutorials/Arrays';


import CodePlayground from './Components/CodePlayground/CodePlayground';
import ChallengeList from './Components/CodePlayground/ChallengeList';
import AllTutorials from './Components/Tutorials/AllTutorials'
import Playground from './Components/CodePlayground/Playground';
import AddExamForm from './Components/Exams/AddExam';
import CodeExamForm from "./Components/Exams/AddCodeExam"
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
        <Route path="/tutorials/programming-vs-coding" Component={withAuth(ProgrammingVSCoding)} />
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
        <Route path="/tutorials/java/variables" Component={withAuth(JavaVariables)} />
        <Route path="/tutorials/java/strings" Component={withAuth(JavaStrings)} />
        <Route path="/tutorials/java/operators" Component={withAuth(JavaOperators)} />
        <Route path="/tutorials/java/conditions" Component={withAuth(JavaIfStatement)} />
        <Route path="/tutorials/java/cycles" Component={withAuth(JavaLoops)} />
        <Route path="/tutorials/java/func" Component={withAuth(JavaFunctions)} />
        <Route path="/tutorials/java/arrays" Component={withAuth(JavaArrays)} />
        <Route path="/challenges" Component={withAuth(ChallengeList)} />
        <Route path="/playground/:challengeId" Component={withAuth(Playground)} />
        <Route path="/playground" Component={withAuth(CodePlayground)} />
        <Route path="/myprofile" Component={withAuth(UserDetails)} />
        <Route path="/mystats" Component={withAuth(UserStats)} />
        <Route path="/mystats/exam/:id" Component={withAuth(UserExamResults)} />
        <Route path="/exam/code/answers/:id" Component={withAuth(UserCodeExamResults)} />
        <Route path="/exams" Component={withAuth(ExamIntro)} />
        <Route path="/exams/choose" Component={withAuth(ChoseExam)} />
        <Route path="/exams/code/choose" Component={withAuth(ChoseCodeExam)} />
        <Route path="/exam/start/:id" Component={withAuth(Exam)} />
        <Route path="/exam/code/start/:id" Component={withAuth(CodeExam)} />
        <Route path='/test' element={<AddExamForm />} />{/* Change the route to /add-exam */}
        <Route path='/code-test' element={<CodeExamForm />} />{/* Change the route to /add-exam */}
        <Route path='/tutorials' element={<AllTutorials />} />
        <Route path="/home" Component={withAuth(Home)} />
        <Route path="/home/lang" Component={withAuth(LanguageSelector)} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
