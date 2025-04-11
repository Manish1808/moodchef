// Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import "./css/Register.css";
import Header from "./Header";
import Background from "./Background";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullname, password, confirmPassword } = formData;

        if (!fullname || !password || !confirmPassword) {
            alert("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5000/api/auth/register",
                { fullname, password, confirmPassword },
                { withCredentials: true }
            );

            alert("Registration Successful");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <>
           
            <div className="page-content">
                <Background backgroundImage="https://as2.ftcdn.net/v2/jpg/01/03/44/23/1000_F_103442398_egouQ0FOh40HbV8nYlEmEeZ5raPdbUZ5.jpg">
                    <Header/>
                    <div className="container">
                        <section className="register-form">
                            <h1>REGISTER</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group1">
                                    <FaUser className="icon" />
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        value={formData.fullname}
                                    />
                                </div>
                                <div className="input-group1">
                                    <FaLock className="icon" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        value={formData.password}
                                    />
                                </div>
                                <div className="input-group1">
                                    <FaLock className="icon" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        onChange={handleChange}
                                        value={formData.confirmPassword}
                                    />
                                </div>
                                <button type="submit">Register</button>
                            </form>
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="link-button">
           Login
        </Link>
                            </p>
                        </section>
                    </div>
                </Background>
            </div>
        </>
    );
}
