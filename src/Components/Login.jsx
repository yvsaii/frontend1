import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/GreenScore/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();  // <-- IMPORTANT

            if (response.ok) {
                setMessage("✅ Login Successful!");
                setMsgColor("green");

                setTimeout(() => {
                    navigate("/home");
                }, 1500);

                return;
            }

            if (response.status === 404) {
                setMessage("❌ User not found");
                setMsgColor("red");
            } else if (response.status === 401) {
                setMessage("❌ Incorrect password");
                setMsgColor("red");
            } else {
                setMessage("⚠️ Something went wrong");
                setMsgColor("orange");
            }

            setTimeout(() => setMessage(""), 2000);

        } catch (error) {
            setMessage("⚠️ Server not responding");
            setMsgColor("red");
            setTimeout(() => setMessage(""), 2000);
        }
    };

    return (
        <div className="loginForm">

            <div className="formimage">
                <h1>Welcome Back!</h1>
                <p>Login to continue your journey toward a greener tomorrow.</p>
            </div>

            <div className="form">
                <h1>Login</h1>
                <p>Please enter your credentials</p>

                <form onSubmit={handleLogin}>
                    <input 
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                {message && (
                    <p style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginTop: "10px",
                        color: msgColor,
                        transition: "0.3s"
                    }}>
                        {message}
                    </p>
                )}

            </div>

        </div>
    );
}
