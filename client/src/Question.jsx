import "./css/Question.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Background from "./Background";

export default function Question({ question, options }) {
    const navigate = useNavigate();

    return (
        <>
            <Background
                backgroundImage="https://img.freepik.com/premium-photo/seamless-pattern-with-various-food-items-picnic-lunch_14117-1090742.jpg"
                
            >
                <Header />
                <main>
                    <section className="preference">
                        <h1>{question}</h1>
                        <div className="buttons">
                            {options.map((option, index) => (
                                <Button key={index} label={option} />
                            ))}
                        </div>
                        {/* Separate Skip Button */}
                        <button className="skip-button" onClick={() => navigate(nextPath)}>
                                Skip
                            </button>
                    </section>
                </main>
                <Footer />
            </Background>
        </>
    );
}
