import React from 'react';
import '../Auth.scss';
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            <form id="login-form">
                <h1 className="form-header">Login</h1>
                <input type="email" placeholder="Username or Email" className="auth-form-input"></input>
                <input type="password" placeholder="Enter Password" className="auth-form-input"></input>
                <button className="login-button">Login</button>
            </form>
            <div className="auth-text-group">
                <div className="auth-text">Don't Have An Account? <Link to="/signup">Register</Link></div>
                <div className="auth-text">Forget Password? <Link to="/forgot-password">Click Here</Link></div>
            </div>

        </div>
    );
};

export default LoginForm;

