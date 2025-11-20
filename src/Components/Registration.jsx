import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/GreenScore/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setMessage(data.message || "✅ User registered successfully!");
        setMsgColor("green");

        // Clear inputs
        setEmail("");
        setName("");
        setPassword("");

        // Redirect after 2 seconds
        setTimeout(() => navigate("/login"), 2000);
      } else if (response.status === 409) {
        setMessage(data.message || "❌ User already exists with this email!");
        setMsgColor("red");
        setTimeout(() => setMessage(""), 2000);
      } else {
        setMessage(data.message || "⚠️ Something went wrong");
        setMsgColor("orange");
        setTimeout(() => setMessage(""), 2000);
      }
    } catch (error) {
      setMessage("⚠️ Server not reachable");
      setMsgColor("red");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="loginForm">
        {/* LEFT FORM */}
        <div className="form">
          <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>
            Create Your Green Score Account
          </h1>
          <p>Enter your details below to join us</p>

          {/* MESSAGE */}
          {message && (
            <p
              style={{
                color: msgColor,
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "10px",
                transition: "0.3s",
              }}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="password"
              placeholder="Create Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="signup-button" type="submit">
              Create Account
            </button>
          </form>

          {/* Navigate to Login */}
          <p
            className="forgot-password"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "blue", marginTop: "10px" }}
          >
            Already have an account? Sign In
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="formimage">
          <h1 style={{textAlign:"center",}}>Welcome, Future Hero!</h1>
          <p>Enter your details and start your journey with us!</p>
          <button
            className="signin-prompt-button"
            onClick={() => navigate("/login")}
          >
            Existing User? Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
