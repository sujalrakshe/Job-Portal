import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { FaEnvelope, FaLock, FaSignInAlt, FaUserCheck } from "react-icons/fa";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    // Store user login state in localStorage
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect to home
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <div className="login-banner">
        <div className="login-wrapper">
          <div className="login-badge">
            <FaUserCheck className="badge-icon" /> Candidate & Recruiter Portal
          </div>

          <div className="login-card-box">
            <div className="login-header">
              <h2>Welcome to Job<span>Hunt</span></h2>
              <p>Log in to discover opportunities, manage applications, and post jobs</p>
            </div>

            {error && <div className="login-alert-error">{error}</div>}

            <form onSubmit={handleLogin} className="login-main-form">
              <div className="input-field-group">
                <label htmlFor="login-email">Email Address</label>
                <div className="input-with-icon">
                  <FaEnvelope className="field-icon" />
                  <input
                    type="email"
                    id="login-email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    required
                  />
                </div>
              </div>

              <div className="input-field-group">
                <label htmlFor="login-password">Password</label>
                <div className="input-with-icon">
                  <FaLock className="field-icon" />
                  <input
                    type="password"
                    id="login-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-submit-btn">
                <span>Sign In</span>
                <FaSignInAlt />
              </button>
            </form>

            <div className="login-footer-info">
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="quick-fill-btn"
                  onClick={() => {
                    setEmail("demo@jobhunt.com");
                    setPassword("password123");
                  }}
                >
                  Fill Demo Credentials
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
