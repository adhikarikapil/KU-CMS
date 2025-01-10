import React from "react";

// Styles
import "./DashboardStyles.css";

// Images
import Logo from "/KU-CMS.webp";

// Routes
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <> 
      {/* Header Section */}
      <header className="header">
        <img src={Logo} alt="KU-CMS Logo" className="logo"></img>
        <h1>Welcome to KU-CMS - Teacher Dashboard</h1>
      </header>

      {/* Navbar Section */}
      <nav className="navbar">
        <Link to="/TeacherUploadPage">Upload Notes</Link>
        <Link to="/AssignmentPage">Assignments</Link>
        <Link to="/TeacherGradingPage">Grade</Link>
        <Link to="/NoticePage">Notices</Link>
      </nav>

      {/* Welcome Section */}
      <section className="welcome">
        <h2>Welcome Teacher</h2>
        <p>Manage your classes and students efficiently.</p>
      </section>
      <div className="flex">

      {/* Dashboard Section */}
      <section className="dashboard">
        <Link to="/TeacherUploadPage">
          <div className="card">
            <h3>Upload Notes</h3>
            <p>Manage Notes for students.</p>
          </div>
        </Link>
        <Link to="/AssignmentPage">
          <div className="card">
            <h3>Assignments</h3>
            <p>Grade Assignments and give feedback</p>
          </div>
        </Link>
        <Link to="/TeacherGradingPage">
          <div className="card">
            <h3>Grades</h3>
            <p>Overall grades</p>
          </div>
        </Link>
        <Link to="/NoticePage">
          <div className="card">
            <h3>Notices</h3>
            <p>Give important notices to your students.</p>
          </div>
        </Link>
      </section>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <p>&copy; 2024 KU-CMS. All rights reserved.</p>
      </footer>
    </>
  );
};

export default TeacherDashboard;