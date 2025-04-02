import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Questions from "./Questions";
import Question from "./Question";
import Logins from "./Logins"; 
import Register from "./Register";
import Home from "./Home";
import FrontPage from "./FrontPage";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import Explore from "./Explore";
import DietSurvey from "./DietSurvey"; // Import DietSurvey component
import RecipeResult from "./RecipeResult"; // Import RecipeResult component

import Header from "./Header";

function App() {
  const sample = ["Hot", "Cold"];
  const sample2 = ["Yes", "No"];

  const optionsList = [
    ["Soups and Stews", "Pizzas and Flatbreads", "Grains and Rice Dishes", "Curries and Spicy Dishes", "Pastas and Casseroles", "Snacks"]
  ];

  const optionsList2 = [
    ["Salads", "Cold Appetizers", "Cold Soups", "Desserts", "Cold Seafood Dishes", "Cold Beverages", "Starters", "Smoothies"]
  ];

  const optionsList3 = [
    ["Gluten-Free", "Sugar-Free", "Fat-free", "Dairy-free", "Vegan", "Vegetarian"]
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/recipe/:index" element={<RecipeDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diet-survey" element={<DietSurvey />} /> {/* New Route for DietSurvey */}
        <Route path="/recipe-result" element={<RecipeResult />} /> {/* New Route */}
        <Route path="/question1" element={<Question question={"Do you prefer Hot or Cold?"} options={sample} nextPath="/question2" />} />
        <Route path="/question2" element={<Questions question={"What kind of hot food do you prefer?"} optionsList={optionsList} nextPath="/question3" />} />
        <Route path="/question3" element={<Questions question={"What kind of cold food do you prefer?"} optionsList={optionsList2} nextPath="/question4" />} />
        <Route path="/question4" element={<Question question={"Do you have any dietary restrictions?"} options={sample2} nextPath="/question5" />} />
        <Route path="/question5" element={<Questions question={"What are your dietary preferences?"} optionsList={optionsList3} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
