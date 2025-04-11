
import './css/Footer.css'; // Assuming you have the styles in Footer.css

export default function Footer(){
return (
    <footer className="footer">
    <div className="flex">
        <div className="footer-logo">
        <div className="img-title">
            <img src="/Mood_chef.png" alt="MoodChef Logo" />
        </div>
        <p>Elevate Your Meals, Elevate Your Mood!<br />
            Start cooking for your happiness with MoodChef today!
        </p>
        </div>

        <div className="tags">
        <div className="food-item"><a href="#">Comfort Food</a></div>
        <div className="food-item"><a href="#">Cheese</a></div>
        <div className="food-item"><a href="#">Dairy-Free</a></div>
        <div className="food-item"><a href="#">Tangy</a></div>
        <div className="food-item"><a href="#">Dessert</a></div>
        <div className="food-item"><a href="#">Breakfast</a></div>
        <div className="food-item"><a href="#">Creamy</a></div>
        <div className="food-item"><a href="#">Vegan</a></div>
        <div className="food-item"><a href="#">Chicken</a></div>
        <div className="food-item"><a href="#">Snack</a></div>
        <div className="food-item"><a href="#">Quick</a></div>
        <div className="food-item"><a href="#">Sweet</a></div>
        <div className="food-item"><a href="#">Low-Carb</a></div>
        <div className="food-item"><a href="#">Easy</a></div>
        <div className="food-item"><a href="#">Gluten-Free</a></div>
        <div className="food-item"><a href="#">Spicy</a></div>
        <div className="food-item"><a href="#">Vegetarian</a></div>
        <div className="food-item"><a href="#">Keto</a></div>
        </div>
    </div>
    <p className="copyright">
        CopyRight &copy; MoodChef 2024 • <a href="#">Terms</a> • <a href="#">Privacy</a> • <a href="#">Contact</a>
    </p>
    </footer>
);
}

