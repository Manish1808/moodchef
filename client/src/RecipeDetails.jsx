import React from "react";
import { useParams, Link } from "react-router-dom";
import "./css/RecipeDetails.css";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

const recipes = [
    {
        name: "CHICKEN CURRY AND RICE",
        image: "https://tastefulventure.com/wp-content/uploads/2021/02/Spicy-Chicken-Curry-with-Cauliflower-Rice-2.jpg",
        items: [
            "3 tablespoons olive oil",
            "1 small onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "2 tablespoons tomato paste",
            "1 cup coconut milk",
            "2 chicken breasts, diced",
            "1 teaspoon turmeric",
            "1 teaspoon garam masala",
            "2 cups cooked rice",
            "Salt and pepper to taste",
        ],
        steps: [
            "Heat oil in a pan over medium heat.",
            "Add chopped onions and sauté until they become soft and translucent.",
            "Stir in garlic and ginger, cook for another minute until fragrant.",
            "Add turmeric, garam masala, and tomato paste, mixing well to coat the onions.",
            "Add the diced chicken, cooking until browned on all sides.",
            "Pour in coconut milk, stirring to combine all the flavors.",
            "Reduce heat and let the curry simmer for 15-20 minutes until chicken is fully cooked and the sauce thickens.",
            "Taste and adjust seasoning with salt and pepper.",
            "Serve hot with cooked rice and garnish with fresh coriander leaves.",
        ],
    },
    {
        name: "Paneer and Broccoli Mix",
        image: "https://images.mrcook.app/recipe-image/018e829f-6bb7-723c-bf2c-49a3d3226efb",
        items: [
            "3 tablespoons olive oil",
            "1 small onion, chopped",
            "2 cloves garlic, minced",
            "1 teaspoon cumin seeds",
            "1 teaspoon coriander powder",
            "1 cup paneer, cubed",
            "1 cup broccoli florets",
            "1 tablespoon soy sauce",
            "Salt and pepper to taste",
        ],
        steps: [
            "Heat olive oil in a pan over medium heat.",
            "Add cumin seeds and let them sizzle for a few seconds.",
            "Add chopped onions and garlic, sauté until golden brown.",
            "Sprinkle coriander powder and stir well.",
            "Add paneer cubes and cook until golden on all sides.",
            "Toss in broccoli florets and stir-fry for 5-7 minutes until tender yet crisp.",
            "Drizzle soy sauce and mix everything well.",
            "Season with salt and pepper to taste.",
            "Serve hot as a side dish or with chapati.",
        ],
    },
    {
        name: "Egg Curry",
        image: "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Style-Egg-Curry-2-3.jpg",
        items: [
            "3 tablespoons olive oil",
            "1 small onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "2 boiled eggs, peeled",
            "2 tablespoons tomato paste",
            "1 cup coconut milk",
            "1 teaspoon turmeric",
            "1 teaspoon red chili powder",
            "1 teaspoon mustard seeds",
            "Salt and pepper to taste",
        ],
        steps: [
            "Heat oil in a pan and add mustard seeds, letting them pop.",
            "Add chopped onions and sauté until they turn golden brown.",
            "Stir in garlic and ginger, cooking for a minute until fragrant.",
            "Mix in turmeric, red chili powder, and tomato paste, cooking for 2 minutes.",
            "Pour in coconut milk and bring the curry to a simmer.",
            "Gently add boiled eggs, making small cuts in them so they absorb the flavors.",
            "Let the curry simmer for another 5-7 minutes on low heat.",
            "Taste and adjust seasoning with salt and pepper.",
            "Serve hot with steamed rice or naan.",
        ],
    },
];

export default function RecipeDetails() {
    const { index } = useParams();
    const recipe = recipes[parseInt(index, 10)]; // Convert index to a number

    if (!recipe) return <h2>Recipe not found</h2>;

    return (
        <> 
        <Header/>
            <div className="recipe-details">
                <img src={recipe.image} alt={recipe.name} className="detail-image" />
                <h3>{recipe.name}</h3>
                <h4>Ingredients:</h4>
                <ul>{recipe.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                <h4>Steps:</h4>
                <ol>{recipe.steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
                <Link to="/recipes" className="back-button">Back to Recipes</Link>
            </div>
            <Footer />
            
        </>
    );
}
