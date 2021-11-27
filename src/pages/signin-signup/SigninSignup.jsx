import React from "react";

import "./signin-signup.styles.scss";
import Signin from "../../components/signin/Signin";
import SignUp from "../../components/sign-up/SignUp";

const SigninSignup = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <SignUp />
        </div>
    );
};

export default SigninSignup;
