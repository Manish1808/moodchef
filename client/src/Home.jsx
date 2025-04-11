import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/Home.css"; 
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

export default function Home() {
  const [mood, setMood] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  // Mood options
  const moods = [
    { name: "Happy", emoji: "😀", src: "/happy.webp" },
    { name: "Sad", emoji: "😔", src: "/sad.webp" },
    { name: "Irritated", emoji: "😒", src: "/irritated.jpg" },
    { name: "Angry", emoji: "😠", src: "/angry.png" }
  ];

  // Function to update input field with clicked mood
  const handleMoodClick = (emoji) => {
    setMood(emoji);
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    if (mood.trim() !== "") {
      navigate("/diet-survey", { state: { mood } }); // Pass mood to the next page
    }
  };

  return (
    <>
        <Header />
        <main className="main-content">
          <div className="text-container">
            <h3>Start cooking for your happiness with MoodChef today!</h3>
            <h2>What's your current mood?</h2>
          </div>

          {/* Mood Options */}
          <div className="mood-options">
            {moods.map((item, index) => (
              <div key={index} className="mood" onClick={() => handleMoodClick(item.emoji)}>
                <img src={item.src} alt={item.name} className="img" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          {/* Mood Input */}
          <div className="input-section">
            <input
              type="text"
              placeholder="Type your mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
            <button type="button" className="submit-btn" onClick={handleSubmit}>➔</button>
          </div>
        </main>
        <Footer />
      
    </>
  );
}
