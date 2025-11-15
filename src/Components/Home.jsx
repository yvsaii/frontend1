import React from 'react';
import './Home.css';
import Footer from './Footer';
import Header from './Header';
import Bannerimage from '../Assets/bannerimage.jpg';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <Header />

            <div className='home'>
                {/* Banner Section with Text Overlay */}
                <div className="banner">
                    <img src={Bannerimage} alt="Green Landscape" className="banner-image" />
                    <div className="banner-overlay">
                        <div className="banner-content">
                            <h1>
                                We're making <span className="highlight-green">Carbon Offset</span> Accessible to Everyone
                            </h1>
                            <p>
                                Be the change you want to see in the world - <span className="highlight-green">Be EcoHero</span>
                            </p>
                            <div className="banner-buttons">

                                {/* 👇 GO TO ALL USERS PAGE */}
                                <button 
                                    className="solution-button business"
                                    onClick={() => navigate("/score")}
                                >
                                    Check Score
                                </button>

                                {/* 👇 GO TO TOP SCORE USERS PAGE */}
                                <button 
                                    className="solution-button personal"
                                    onClick={() => navigate("/topscore")}
                                >
                                    Top Score Users
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Subscription Section */}
                <div className="sub">
                    <h1>
                        Why <span style={{ color: "rgba(132, 179, 73)" }}>Subscribe?</span>
                    </h1>
                    <div className="subdivs">
                        <div className="div">
                            <h1>Exclusive Updates</h1>
                            <p>Be the first to know about the latest trends, news, and advancements in carbon offsetting and sustainability.</p>
                        </div>
                        <div className="div">
                            <h1>Practical Tips</h1>
                            <p>Receive actionable advice on reducing your carbon footprint, both as an individual and as a business.</p>
                        </div>
                        <div className="div">
                            <h1>Success Stories</h1>
                            <p>Get inspired by stories of change-makers and eco-friendly businesses making a real impact.</p>
                        </div>
                        <div className="div">
                            <h1>Special Offers</h1>
                            <p>Enjoy exclusive access to offers, events, and initiatives by EcoHero.</p>
                        </div>
                    </div>
                </div>

                {/* Instructions Section */}
                <div className="instruction-section">
                    <h2>
                        Follow These <span style={{ color: "rgba(132, 179, 73)" }}>Rules</span> to Get Started!
                    </h2>
                    <p>Please read carefully and follow the steps below to ensure a smooth experience.</p>

                    {/* Video Section */}
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Demo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
