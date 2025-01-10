import React from 'react'


// Images
import Logo from "/KU-CMS.webp";

// Routes
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='bg-red-200'> 
   <header className="header">
           <img src={Logo} alt="KU-CMS Logo" className="logo"></img>
           <h1>Welcome to KU-CMS - Teacher Dashboard</h1>
         </header>
   
         {/* Navbar Section */}
         <nav className="navbar">
           <Link to="/TeacherUploadPage">Upload Notes</Link>
           <Link to="/AssignmentPage">Assignments</Link>
           <Link to="/TeacherGradingPage">Grade</Link>
           <Link to="/notices">Notices</Link>
         </nav>
    </div>
  )
}

export default Navbar