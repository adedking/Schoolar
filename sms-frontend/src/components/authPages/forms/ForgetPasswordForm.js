import React from 'react';
import { Link } from "react-router-dom";

const ForgetPasswordForm = () => {
    return (
        <div>
            <form id="login-form">
                <h1 className="form-header">Forgot Password</h1>
                <input type="email" placeholder="Enter Your Email" className="auth-form-input"></input>
                <button className="login-button">Reset Password</button>
            </form>
            <div className="auth-text-group">
                <div className="auth-text">Don't Have An Account? <Link to="/signup">Register</Link></div>
                <div className="auth-text">Already Have An Account? <Link to="/login">Login</Link></div>   
            </div>
        </div>
    );
};

export default ForgetPasswordForm;