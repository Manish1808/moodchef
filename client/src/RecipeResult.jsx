import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const RecipeResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe || "No recipe available";

  const [ingredients, instructions] = recipe.includes("**Instructions:**")
    ? recipe.split("**Instructions:**")
    : [recipe, "No instructions available."];

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: "30px 20px",
        marginTop: "-90px",
        boxSizing: "border-box",
        background: "#f5f7fa",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2c3e50",
            fontSize: "32px",
            marginBottom: "30px"
          }}
        >
          🍲 Generated Recipe
        </h1>

        {/* Ingredients Section */}
        <h2
          style={{
            color: "#27ae60",
            fontSize: "24px",
            marginBottom: "10px",
            borderBottom: "2px solid #2ecc71",
            paddingBottom: "5px"
          }}
        >
          🧂 Ingredients
        </h2>
        <div
          style={{
            background: "#eafaf1",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "25px"
          }}
        >
          <ReactMarkdown>{ingredients.trim()}</ReactMarkdown>
        </div>

        {/* Instructions Section */}
        <h2
          style={{
            color: "#c0392b",
            fontSize: "24px",
            marginBottom: "10px",
            borderBottom: "2px solid #e74c3c",
            paddingBottom: "5px"
          }}
        >
          👨‍🍳 Instructions
        </h2>
        <div
          style={{
            background: "#fff4f4",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "16px",
            lineHeight: "1.6"
          }}
        >
          <ReactMarkdown>{instructions.trim()}</ReactMarkdown>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "30px",
            padding: "12px",
            width: "100%",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.background = "#2980b9")}
          onMouseOut={(e) => (e.target.style.background = "#3498db")}
        >
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
};

export default RecipeResult;
