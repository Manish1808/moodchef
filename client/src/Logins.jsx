// Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import "./css/Login.css";
import Header from "./Header";
import Background from "./Background";


export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/auth/login",
                formData,
                { withCredentials: true }
            );

            alert("Login Successful");
            navigate("/home");
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <>
            <Background backgroundImage="https://as2.ftcdn.net/v2/jpg/01/03/44/23/1000_F_103442398_egouQ0FOh40HbV8nYlEmEeZ5raPdbUZ5.jpg">
                <Header />
                <div className="container1">
                    <div className="login-box">
                        <h2>LOGIN</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FaUser className="icon" />
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    value={formData.fullname}
                                />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                            </div>
                            <button className="login-btn" type="submit">Login</button>
                        </form>
                        <div className="forgot-links">
                            <p>
                                Not having an account?{" "}
                                <Link to="/register" className="link-button">
            Register
        </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    );
}
