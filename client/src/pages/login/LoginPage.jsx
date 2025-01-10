import React, { useState } from "react";

// Images
import Logo from "/KU-CMS.webp";

// Styles
import "./LoginStyles.css";

// Routes
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({
    text: "",
    type: ""
  });

  const navigate = useNavigate();

  const handleTeacherToggle = () => {
    const container = document.getElementById("container");
    container.classList.add("active");
  };

  const handleStudentToggle = () => {
    const container = document.getElementById("container");
    container.classList.remove("active");
  };

  const handleSubmit = async (e, rank) => {
    e.preventDefault();
    setMessage({
      text: "",
      type: ""
    })

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email,
        password,
      });

      if (response.status === 200) {
        const rank = response.data.rank;
        localStorage.setItem("rank", rank);
        setMessage({
          text: "Login successful! Redirecting...",
          type: "success"
        })
        setTimeout(() => {
          if (rank === "teacher") {
            navigate("/teacher-dashboard");
          } else {
            navigate("/student-dashboard");
          }
        }, 2000);
      }
    } catch (error) {
      setMessage({
        text: "Invalid email or password",
        type: "error"
      })
      console.log("Login Error: ", error);
    }
  };

  return (
<<<<<<< HEAD
    <>
    {message.text && (
          <div
            className={`message ${message.type}`}
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "4px",
              textAlign: "center",
              backgroundColor: message.type === "success" ? "#4CAF50" : "#f44336",
              color: "white",
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
              minWidth: "300px"
            }}
          >
            {message.text}
          </div>
        )}
      <div className="loginContainer" id="container">
=======
    <div className="w-full h-full flex items-center justify-center">
      <div className=" max-h-[100px] loginContainer" id="container">
>>>>>>> origin/master
        <div className="form-container sign-up">
          <div className="form">
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Teacher Login</h2>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(e, "teacher");
            }}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="button-group">
              <button type="submit">Login</button>
              <Link to="/register">
                <button className="secondary">Register</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <div className="form">
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Student Login</h2>
          </div>
          <form onSubmit={(e) => handleSubmit(e, "student")}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="button-group">
              <button type="submit">Login</button>
              <Link to="/register">
                <button className="secondary">Register</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Are you a student?</h2>
              <p>
                Login your student account to access your courses and
                assignments.
              </p>
<<<<<<< HEAD
              <button className="hello" onClick={handleStudentToggle}>
=======
              <button className="" onClick={handleStudentToggle}>
>>>>>>> origin/master
                Login as Student
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Are you a Teacher?</h2>
              <p>
                Login your teacher account to manage your classes and students.
              </p>
<<<<<<< HEAD
              <button className="hello" onClick={handleTeacherToggle}>
=======
              <button className="" onClick={handleTeacherToggle}>
>>>>>>> origin/master
                Login as Teacher
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav">
          <button onClick={handleStudentToggle}>Student Login</button>
          <button onClick={handleTeacherToggle}>Teacher Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
