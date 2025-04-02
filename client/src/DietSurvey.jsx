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
    { id: "hotFood", question: "What kind of hot food do you prefer?", options: ["Soups and Stews", "Pizzas and Flatbreads", "Grains and Rice Dishes", "Curries and Spicy Dishes", "Pastas and Casseroles", "Snacks"], type: "radio" },
    { id: "coldFood", question: "What kind of cold food do you prefer?", options: ["Salads", "Cold Appetizers", "Cold Soups", "Desserts", "Cold Seafood Dishes", "Cold Beverages", "Starters", "Smoothies"], type: "radio" },
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
      const response = await axios.post("http://localhost:8002/api/generate-recipe", { prompt });

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
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Diet Survey</h1>
      <p><strong>Your current mood:</strong> {mood}</p>

      <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <p><strong>{questions[currentQuestionIndex].question}</strong></p>
        {questions[currentQuestionIndex].options.map((option) => (
          <label key={option} style={{ display: "block", marginBottom: "5px" }}>
            <input
              type="radio"
              name={questions[currentQuestionIndex].id}
              value={option}
              checked={answers[questions[currentQuestionIndex].id] === option}
              onChange={(e) => handleChange(questions[currentQuestionIndex].id, e.target.value)}
            />{" "}
            {option}
          </label>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {currentQuestionIndex > 0 && (
          <button onClick={prevQuestion} style={{ padding: "10px", background: "gray", color: "white", border: "none", borderRadius: "5px" }}>
            Previous
          </button>
        )}

        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={nextQuestion} style={{ padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
            Next
          </button>
        ) : (
          <button onClick={generateRecipe} style={{ padding: "10px", background: "green", color: "white", border: "none", borderRadius: "5px" }}>
            Generate Recipe
          </button>
        )}
      </div>
    </div>
  );
};

export default DietSurvey;
