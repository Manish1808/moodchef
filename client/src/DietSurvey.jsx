import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const DietSurvey = () => {
  const location = useLocation();
  const mood = location.state?.mood || "";

  const [answers, setAnswers] = useState({
    preference: "",
    hotFood: "",
    coldFood: "",
    dietaryRestriction: "",
    dietaryPreferences: "",
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    { id: "preference", question: "Do you prefer Hot or Cold?", options: ["Hot", "Cold"], type: "radio" },
    { id: "hotFood", question: "What kind of hot food do you prefer?", options: ["Soups and Stews", "Pizzas and Flatbreads", "Grains and Rice Dishes", "Curries and Spicy Dishes", "Pastas", "Snacks"], type: "radio" },
    { id: "coldFood", question: "What kind of cold food do you prefer?", options: ["Salads", "Cold Appetizers", "Desserts", "Cold Seafood Dishes", "Cold Beverages", "Starters", "Smoothies"], type: "radio" },
    { id: "dietaryRestriction", question: "Do you have any dietary restrictions?", options: ["Yes", "No"], type: "radio" },
    { id: "dietaryPreferences", question: "What are your dietary preferences?", options: ["Gluten-Free", "Sugar-Free", "Fat-free", "Dairy-free", "Vegan", "Vegetarian"], type: "radio" },
  ];

  const navigate = useNavigate();

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const generateRecipe = async () => {
    const prompt = `Generate a recipe based on the user's preferences:
      - Preference: ${answers.preference}
      - Hot Food Choice: ${answers.hotFood}
      - Cold Food Choice: ${answers.coldFood}
      - Dietary Restriction: ${answers.dietaryRestriction}
      - Dietary Preferences: ${answers.dietaryPreferences}
      - The user is feeling ${mood}, so the recipe should be comforting and mood-boosting.`;

    try {
      const response = await axios.post("http://localhost:5000/api/generate-recipe", { prompt });

      if (response.data.recipe) {
        navigate("/recipe-result", { state: { recipe: response.data.recipe } });
      } else {
        alert("Recipe not found!");
      }
    } catch (error) {
      console.error("Error generating recipe:", error);
      alert("Failed to generate recipe. Check console for details.");
    }
  };

  return (
    <div style={{
      padding: "40px 20px",
      maxWidth: "600px",
      margin: "-50px auto",
      backgroundColor: "#fff8f0",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ textAlign: "center", color: "#4c0b0b", marginBottom: "-10px" }}>🍽️ Diet Survey</h1>

      <p style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "18px",
        marginBottom: "20px",
        color: "#555"
      }}>
        Mood: <span style={{ color: "#d35400" }}>{mood}</span>
      </p>

      <div style={{
        marginBottom: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "15px",
        backgroundColor: "#fff",
        boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)"
      }}>
        <p style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>
          {questions[currentQuestionIndex].question}
        </p>

        {questions[currentQuestionIndex].options.map((option) => (
          <label key={option} style={{
            display: "block",
            marginBottom: "10px",
            fontSize: "15px",
            cursor: "pointer"
          }}>
            <input
              type="radio"
              name={questions[currentQuestionIndex].id}
              value={option}
              checked={answers[questions[currentQuestionIndex].id] === option}
              onChange={(e) => handleChange(questions[currentQuestionIndex].id, e.target.value)}
              style={{ marginRight: "10px" }}
            />
            {option}
          </label>
        ))}
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {currentQuestionIndex > 0 && (
          <button onClick={prevQuestion} style={{
            padding: "12px 25px",
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}>
            ⬅ Previous
          </button>
        )}

        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={nextQuestion} style={{
            padding: "12px 25px",
            backgroundColor: "#4c0b0b",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer",
            marginLeft: "auto",
            transition: "background 0.3s ease"
          }}>
            Next ➡
          </button>
        ) : (
          <button onClick={generateRecipe} style={{
            padding: "12px 25px",
            backgroundColor: "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer",
            marginLeft: "auto",
            transition: "background 0.3s ease"
          }}>
            🍳 Generate Recipe
          </button>
        )}
      </div>
    </div>
  );
};

export default DietSurvey;
