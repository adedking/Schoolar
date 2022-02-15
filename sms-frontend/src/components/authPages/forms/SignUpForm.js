import React from 'react';
import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
        <div>
            <form id="signup-form">
                <h1 className="form-header">Register</h1>
                <input type="text" placeholder="First Name" className="auth-form-input"></input>
                <input type="text" placeholder="Last Name" className="auth-form-input"></input>
                <input type="text" placeholder="School Name" className="auth-form-input"></input>
                <input type="email" placeholder="Email/Username" className="auth-form-input"></input>
                <input type="text" placeholder="Phone Number" className="auth-form-input"></input>
                <input type="password" placeholder="Enter Password" className="auth-form-input"></input>
                <input type="password" placeholder="Confirm Password" className="auth-form-input"></input>
                <button className="login-button">Register</button>
            </form>
            <div className="auth-text-group">
                <div className="auth-text">Already Have An Account? <Link to="/login">Login</Link></div>
                <div className="auth-text">Forget Password? <Link to="/forgot-password">Click Here</Link></div>
            </div>
        </div>
    );
};

export default SignUpForm;