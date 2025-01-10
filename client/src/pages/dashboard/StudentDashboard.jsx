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
     
          <div className='bg-red-200'> 
           <header className="header">
                   <img src={Logo} alt="KU-CMS Logo" className="logo"></img>
                   <h1>Welcome to KU-CMS - Student Dashboard</h1>
                 </header>
           
                 {/* Navbar Section */}
                 <nav className="navbar">
                   <Link to="/NotesPage">Download Notes</Link>
                   <Link to="/AssignmentPage">Assignments</Link>
                   <Link to="/StudentGradesPage">Grades</Link>
                   <Link to="/NoticePage">Notices</Link>
                 </nav>
            </div>
       

        {/* Welcome Messages */}
        <section className="welcome">
          <h3>Hello, Student</h3>
          <p>Here are your latest updates!!!</p>
        </section>

        {/* Dashboard Section */}
        <div>
        <section className="dashboard ">
          <Link to="/NotesPage">
            <div className="card">
              <h3>My Notes</h3>
              <p>View all your Notes.</p>
            </div>
          </Link>
          <Link to="/AssignmentPage">
            <div className="card">
              <h3>My Assignments</h3>
              <p>Check your all Assignments.</p>
            </div>
          </Link>
          <Link to="/StudentGradesPage">
            <div className="card">
              <h3>My Grades</h3>
              <p>Stay updated with your Grades.</p>
            </div>
          </Link>
          <Link to="/NoticePage">
            <div className="card">
              <h3>My Notice</h3>
              <p>Stay updated with your recent Notices.</p>
            </div>
          </Link>
        </section></div>

        {/* Footer Section */}
        <footer className="footer">
          <p>&copy; 2024 KU-CMS. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default StudentDashboard;