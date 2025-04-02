import { useNavigate } from "react-router-dom";
import "./css/Question.css";
import Multiple from "./Multiple";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

export default function Questions({ question, optionsList, nextPath }) {
    const navigate = useNavigate(); // Hook to navigate between pages

    return (
        <>
            <Background
                backgroundImage="https://img.freepik.com/premium-photo/seamless-pattern-with-various-food-items-picnic-lunch_14117-1090742.jpg"
               
            >
                <Header />
                <main className="main-content">
                    <section className="preference">
                        <h1 className="question-title">{question}</h1>
                        {optionsList.map((options, index) => (
                            <div key={index}>
                                <Multiple options={options} />
                            </div>
                        ))}
                        {/* Skip Button */}
                        {nextPath && ( // Show button only if nextPath exists
                            <button className="skip-button" onClick={() => navigate(nextPath)}>
                                Skip
                            </button>
                        )}
                    </section>
                </main>
                <Footer />
            </Background>
        </>
    );
}
