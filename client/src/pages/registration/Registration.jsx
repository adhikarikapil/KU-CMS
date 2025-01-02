import React from "react";
import Logo from "/KU-CMS.webp";
import "./RegistrationStyles.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleTeacherToggle = () => {
    const container = document.getElementById("register-container");
    container.classList.add("active");
  };

  const handleStudentToggle = () => {
    const container = document.getElementById("register-container");
    container.classList.remove("active");
  };

  return (
    <>
      <div className="registerContainer" id="register-container">
        <div className="form-container sign-up">
          <form>
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Teacher Registration</h2>
            <input type="hidden" name="userType" value='teacher' />
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="text" placeholder="Department" />
            <div className="button-group">
              <Link to="/teacher-dashboard">
                <button>Register</button>
              </Link>
              <Link to="/login">
                <button className="secondary">Back to Login</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Student Registration</h2>
            <input type="hidden" name="userType" value='student' />
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="text" placeholder="Program/Major" />
            <div className="button-group">
              <Link to="/student-dashboard">
                <button>Register</button>
              </Link>
              <Link to="/login">
                <button className="secondary">Back to Login</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Want to Register as Student?</h2>
              <p>
                Create your student account to access courses and track your academic progress.
              </p>
              <button
                className="hidden"
                onClick={handleStudentToggle}
              >
                Register as Student
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Want to Register as Teacher?</h2>
              <p>
                Create your teacher account to manage courses and connect with students.
              </p>
              <button
                className="hidden"
                onClick={handleTeacherToggle}
              >
                Register as Teacher
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav">
          <button onClick={handleStudentToggle}>Student Registration</button>
          <button onClick={handleTeacherToggle}>Teacher Registration</button>
        </div>
      </div>
    </>
  );
};

export default Registration;