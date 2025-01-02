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
        <Link to="/teacher-notes">Upload Notes</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/grade">Grade</Link>
        <Link to="/notices">Notices</Link>
      </nav>

      {/* Welcome Section */}
      <section className="welcome">
        <h2>Welcome Teacher</h2>
        <p>Manage your classes and students efficiently.</p>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard">
        <Link to="/teacher-notes">
          <div className="card">
            <h3>Upload Notes</h3>
            <p>Manage Notes for students.</p>
          </div>
        </Link>
        <Link to="/assignments">
          <div className="card">
            <h3>Assignments</h3>
            <p>Grade Assignments and give feedback</p>
          </div>
        </Link>
        <Link to="/notice">
          <div className="card">
            <h3>Notices</h3>
            <p>Give important notices to your students.</p>
          </div>
        </Link>
      </section>

      {/* Footer section */}
      <footer className="footer">
        <p>&copy; 2024 KU-CMS. All rights reserved.</p>
      </footer>
    </>
  );
};

export default TeacherDashboard;
