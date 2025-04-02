import React from "react";
import "./css/Register.css";
import Header from "./Header";
import Background from "./Background";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    return (
    <>
    <Header />
      <div className="page-content"> {/* This pushes the form down */}
        <Background
            backgroundImage="https://as2.ftcdn.net/v2/jpg/01/03/44/23/1000_F_103442398_egouQ0FOh40HbV8nYlEmEeZ5raPdbUZ5.jpg"
        >
        <div className="container">
            <section className="register-form">
            <h1>REGISTER</h1>
            <form>
                <div className="input-group1">
                    <span className="icon">&#128100;</span>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-group1">
                    <span className="icon">&#128274;</span>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="input-group1">
                    <span className="icon">&#128274;</span>
                    <input type="password" placeholder="Confirm your password" />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <a href="#" onClick={() => navigate("/login")}>Login</a>
            </p>
            </section>
        </div>
        
        </Background>
    </div>
    </>
);
}
