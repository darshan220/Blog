import React from 'react';
import { Link } from "react-router-dom";
import "./Register.css"

function Register(props) {
    return (
        <div>
            <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label>UserName</label>
                <input className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"> 
            <Link className="link" to="/Login">
                LOGIN
            </Link></button>
        </div>
        </div>
    );
}

export default Register;