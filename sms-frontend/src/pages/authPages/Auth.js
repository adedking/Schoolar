import React from 'react'
import './Auth.scss';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ForgetPasswordForm from './forms/ForgetPasswordForm';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import loginImage from "../../assets/images/auth-image.jpg";

export const Auth = (props) => {
    return (
        <div id="auth-page">
            <div id="auth-left">
                <img src={loginImage} alt="Login" />
            </div>
            <div id="auth-right">
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            <LoginForm />
                        </Route>
                        <Route exact path="/signup">
                            <SignUpForm />
                        </Route>
                        <Route exact path="/forgot-password">
                            <ForgetPasswordForm />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
