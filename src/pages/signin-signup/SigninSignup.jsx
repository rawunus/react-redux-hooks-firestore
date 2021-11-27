import React from "react";

import "./signin-signup.styles.scss";

import Signin from "../../components/signin/Signin";
import SignUp from "../../components/sign-up/SignUp";

import { SignInAndSignUp } from "./signinsignup.styles";

const SigninSignup = () => {
    return (
        <SignInAndSignUp>
            <Signin />
            <SignUp />
        </SignInAndSignUp>
    );
};

export default SigninSignup;
