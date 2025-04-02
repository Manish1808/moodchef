import React from "react";
import { Link } from "react-router-dom";
import "./css/RecipeList.css";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

const recipes = [
    {
    name: "CHICKEN CURRY AND RICE",
    image: "https://tastefulventure.com/wp-content/uploads/2021/02/Spicy-Chicken-Curry-with-Cauliflower-Rice-2.jpg",
    items: ["3 tablespoons olive oil", "1 small onion, chopped", "2 cloves garlic, minced"],
    steps: ["Heat oil in a pan over medium heat.", "Add chopped onions and sauté until soft."]
    },
    {
    name: "Paneer and Broccoli Mix",
    image: "https://images.mrcook.app/recipe-image/018e829f-6bb7-723c-bf2c-49a3d3226efb",
    items: ["3 tablespoons olive oil", "1 small onion, chopped", "2 cloves garlic, minced"],
    steps: ["Heat olive oil in a pan over medium heat.", "Add cumin seeds and let them sizzle."]
    },
    {
    name: "Egg Curry",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Style-Egg-Curry-2-3.jpg",
    items: ["3 tablespoons olive oil", "1 small onion, chopped", "2 cloves garlic, minced"],
    steps: ["Heat oil in a pan and add mustard seeds.", "Add chopped onions and sauté until golden brown."]
    }
];

export default function RecipeList() {
    return (
        <>
        
        <Header/>
    <main>
    <section id="head">
    <h2>Here are some recipe suggestions...</h2>
    <div className="recipes">
        {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="recipe-info">
            <h3>{recipe.name}</h3>
            <h4>Ingredients:</h4>
            <ul>{recipe.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <Link to={`/recipe/${index}`} className="view-more">View More</Link>
            </div>
        </div>
        ))}
    </div>
    <h3 className="explore-more">
        If you don't find the recipe you are looking for... <a href="#">Explore More</a>
    </h3>
</section>

    </main>
    <Footer/>
    
    </>
    );
};


