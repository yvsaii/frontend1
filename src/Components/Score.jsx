import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// --- Single-File CSS Block (Replaces Score.css) ---
const styles = `
.app-container {
    min-height: 100vh;
    background-color: #f9fafb;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.content-wrapper {
    width: 100%;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
}
.header-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 1.5rem;
    text-align: center;
}
.header-subtitle {
    text-align: center;
    color: #4b5563;
    margin-bottom: 2.5rem;
}
.input-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),
                0 10px 10px -5px rgba(0,0,0,0.04);
    border-top: 4px solid rgb(132,179,73);
    margin-bottom: 2.5rem;
}
.card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
}
.activity-textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    resize: none;
    color: #1f2937;
}
.submit-button {
    margin-top: 1.5rem;
    width: 100%;
    padding: 0.75rem 2rem;
    background-color: rgb(132,179,73);
    color: white;
    font-weight: 700;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
}
`;

export default function App() {

    const userId = 1; // change if needed
    const [activityText, setActivityText] = useState('');

    const [result, setResult] = useState(null);

    // --------- CALL BACKEND API TO CALCULATE SCORE ----------
    const calculateScore = async () => {
        if (!activityText.trim()) {
            alert("Please enter activity details!");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8080/GreenScore/calculateScore/${userId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ text: activityText })
                }
            );

            const data = await response.json();
            if (response.ok) {
                setResult(data);
            } else {
                alert(data.message);
            }

        } catch (err) {
            alert("Server error!");
        }
    };

    return (
        <div>
            <Header />
            <div className="app-container">
                <style>{styles}</style>

                <div className="content-wrapper">

                    <h1 className="header-title">Weekly Activity Input</h1>
                    <p className="header-subtitle">Enter your weekly accomplishments below.</p>

                    <div className="input-card">
                        <h2 className="card-title">What I Did This Week</h2>

                        <textarea
                            value={activityText}
                            onChange={(e) => setActivityText(e.target.value)}
                            rows="8"
                            placeholder="e.g., planted trees, recycled waste, used bicycle..."
                            className="activity-textarea"
                        ></textarea>

                        <button onClick={calculateScore} className="submit-button">
                            Submit Activity
                        </button>
                    </div>

                    {/* ----------- SHOW SCORE RESULT --------------- */}
                    {result && (
                        <div
                            style={{
                                background: "white",
                                padding: "18px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                textAlign: "center"
                            }}
                        >
                            <h2 style={{ marginBottom: "12px", color: "green" }}>
                                Eco Score Updated!
                            </h2>

                            <p><b>Previous Score:</b> {result.previousScore}</p>
                            <p><b>New Score:</b> {result.newScore}</p>
                            <p><b>Final Score:</b> {result.finalScore}</p>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    );
}
