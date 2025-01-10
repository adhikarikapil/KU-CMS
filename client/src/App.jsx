import React from "react";

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
//views

// Pages
import LoginPage from "./pages/login/LoginPage";
import Registration from "./pages/registration/Registration";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";

// Components
<<<<<<< HEAD
import NotesPage from "./components/students/NotesPage";
import TeacherUploadPage from "./components/teachers/TeacherUploadPage";
import TeacherGradingPage from "./components/teachers/TeacherGradingPage";
import StudentGradesPage from "./components/students/StudentGradesPage";
=======

import NotesPage from "./components/student/NotesPage";
import TeacherUploadPage from "./components/teachers/TeacherUploadPage";
import TeacherGradingPage from "./components/teachers/TeacherGradingPage";
import StudentGradesPage from "./components/student/StudentGradesPage";
>>>>>>> origin/master
import Userlayout from "./components/Userlayout";
import NoticePage from "./components/NoticePage";
import AssignmentPage from "./components/teachers/AssignmentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-notes" element={<TeacherNoteSection />} />
          <Route path="/NotesPage" element={<NotesPage/>}/>
          <Route path="/TeacherUploadPage" element={<TeacherUploadPage/>}/>
          <Route path="/TeacherGradingPage" element={<TeacherGradingPage/>}/>
          <Route path="/StudentGradingPage" element={<StudentGradingPage/>}/> */}

          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />

          <Route path="/NoticePage" element={<NoticePage />} />
          <Route path="/AssignmentPage" element={<AssignmentPage />} />
          <Route path="/StudentGradesgPage" element={<StudentGradesPage />} />
          <Route path="/" element={<Userlayout />}>
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/NotesPage" element={<NotesPage />} />
            <Route path="/TeacherUploadPage" element={<TeacherUploadPage />} />
            <Route
              path="/TeacherGradingPage"
              element={<TeacherGradingPage />}
            />
            {/* <Route path="/StudentGradesgPage" element={<StudentGradesPage/>}/> */}
            <Route path="/NoticePage" element={<NoticePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;