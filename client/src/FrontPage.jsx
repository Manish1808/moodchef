import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/FrontPage.css";
import Background from "./Background";

export default function Home() {
const navigate = useNavigate();

return (
   
        <div className="container2">
        <div className="im">
        </div>
        <div className="img-content">
            <h1>Welcome to MoodChef</h1>
            <h2>Where Mood meets Flavor</h2>
            <button className="btn" onClick={() => navigate("/Register")}>
            <span>Let's Dive in</span>
            </button>
        </div>
        </div>
   
    );
}
