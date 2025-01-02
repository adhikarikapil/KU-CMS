import React from "react";

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/login/LoginPage"
import Registration from "./pages/registration/Registration";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";

// Components
import TeacherNoteSection from "./components/teachers/TeacherNoteSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-notes" element={<TeacherNoteSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
