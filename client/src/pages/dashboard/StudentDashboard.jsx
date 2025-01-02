import React from "react";

// Images
import Logo from "/KU-CMS.webp";

// Routes
import { Link } from "react-router-dom";

// Styles
import "./DashboardStyles.css";

const StudentDashboard = () => {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="header">
          <img src={Logo} alt="KU-CMS Logo" className="logo"></img>
          <h1>Welcome to KU-CMS - Student Dashboard</h1>
        </header>

        {/* NavBar Section */}
        <nav className="navbar">
          <Link to="/notes">Notes</Link>
          <Link to="/assignments">Assignments</Link>
          <Link to="/grade">Grade</Link>
          <Link to="/notice">Notice</Link>
        </nav>

        {/* Welcome Messages */}
        <section className="welcome">
          <h3>Hello, Student</h3>
          <p>Here are your latest updates!!!</p>
        </section>

        {/* Dashboard Section */}
        <section className="dashboard">
          <Link to="/notes">
            <div className="card">
              <h3>My Notes</h3>
              <p>View all your Notes.</p>
            </div>
          </Link>
          <Link to="/assignments">
            <div className="card">
              <h3>My Assignments</h3>
              <p>Check your all Assignments.</p>
            </div>
          </Link>
          <Link to="/notice">
            <div className="card">
              <h3>My Notice</h3>
              <p>Stay updated with your recent Notices.</p>
            </div>
          </Link>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <p>&copy; 2024 KU-CMS. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default StudentDashboard;
