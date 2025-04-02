import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const RecipeResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe || "No recipe available";

  // Extracting Ingredients and Instructions
  const [ingredients, instructions] = recipe.includes("**Instructions:**")
    ? recipe.split("**Instructions:**")
    : [recipe, "No instructions available."];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Generated Recipe</h1>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
        {/* Ingredients Section */}
        <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>Ingredients</h2>
        <div style={{ background: "#ecf0f1", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
          <ReactMarkdown>{ingredients.trim()}</ReactMarkdown>
        </div>

        {/* Instructions Section */}
        <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #e74c3c", paddingBottom: "5px" }}>Instructions</h2>
        <div style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          <ReactMarkdown>{instructions.trim()}</ReactMarkdown>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px",
          width: "100%",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default RecipeResult;
