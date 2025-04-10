import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/FrontPage.css";
import Background from "./Background";

export default function Home() {
const navigate = useNavigate();

return (
    <Background
        backgroundImage="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayColor="rgba(255, 255, 255, 0.2)"
    >
        <div className="container2">
        <div className="im">
            <img src="C:/Users/sanas/Downloads/moodchef_files/t(1).webp" alt="MoodChef Logo" />
        </div>
        <div className="img-content">
            <h1>Welcome to MoodChef</h1>
            <h2>Where Mood meets Flavor</h2>
            <button className="btn" onClick={() => navigate("/Register")}>
            <span>Let's Dive in</span>
            </button>
        </div>
        </div>
    </Background>
    );
}
