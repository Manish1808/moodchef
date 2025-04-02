import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Header from "./Header";
import Background from "./Background";
import { useNavigate } from "react-router-dom";
import "./css/Login.css"; // Ensure you create this CSS file with your provided sty=> 
  export default function Logins(){
    const navigate = useNavigate();
  return (
    <>
    <Background
      backgroundImage="https://as2.ftcdn.net/v2/jpg/01/03/44/23/1000_F_103442398_egouQ0FOh40HbV8nYlEmEeZ5raPdbUZ5.jpg"
      
    >
    <Header/>
    <div className="container1">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">
              <FaUser />
            </label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>

          <div className="input-group">
            <label htmlFor="password">
              <FaLock />
            </label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="forgot-links">
            Forgot your password? <a href="#">Click Here</a><br />

            Don’t have an account? <a href="#" onClick={() => navigate("/register")}>Register</a>
          </div>
        </form>
      </div>
    </div>
    </Background>
    </>
  );
};


