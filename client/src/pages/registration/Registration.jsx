import React from "react";
import Logo from "/KU-CMS.webp";
import "./RegistrationStyles.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import {useForm} from 'react-hook-form'
>>>>>>> origin/master
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    department: "",
    program: "",
    rank: "",
  });

  // const emailRef = React.useRef();
  // const passwordRef = React.useRef();
  // const fullNameRef = React.useRef();
  // const departmentRef = React.useRef();
  // const programRef = React.useRef();

  const navigate = useNavigate();

  const handleTeacherToggle = () => {
    const container = document.getElementById("register-container");
    container.classList.add("active");
  };

  const handleStudentToggle = () => {
    const container = document.getElementById("register-container");
    container.classList.remove("active");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleSubmit = async (e, rank) => {
    e.preventDefault();
    console.log(rank);
    setMessage({
      text: "",
      type: "",
    });
    if (rank === "teacher") {
      formData.rank = "teacher";
    } else {
      formData.rank = "student";
    }
    // const data = {
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    //   fullName: fullNameRef.current.value,
    //   department: departmentRef.current.value,
    //   program: programRef.current.value,
    // };
    try {
      const response = await axios.post("http://127.0.0.1:8000/register/", {
        ...formData,
      });

      if (response.status === 201) {
        setMessage({
          text: "Registration successful! Redirecting...",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setMessage({
        text: "Invalid email or password",
        type: "error",
      });
      console.log("Login Error: ", error);
    }
  };

  return (
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
            minWidth: "300px",
          }}
        >
          {message.text}
        </div>
      )}
      <div className="registerContainer" id="register-container">
        <div className="form-container sign-up">
          <div className="form">
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Teacher Registration</h2>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(e, "teacher");
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
            <div className="button-group">
              <button type="submit">Register</button>
              <Link to="/login">
                <button className="secondary">Back to Login</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <div className="form">
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Student Registration</h2>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(e, "student");
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Program/Major"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            />
            <div className="button-group">
              <button type="submit">Register</button>
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
                Create your student account to access courses and track your
                academic progress.
              </p>
              <button className="hidden" onClick={handleStudentToggle}>
                Register as Student
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Want to Register as Teacher?</h2>
              <p>
                Create your teacher account to manage courses and connect with
                students.
              </p>
              <button className="hidden" onClick={handleTeacherToggle}>
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
