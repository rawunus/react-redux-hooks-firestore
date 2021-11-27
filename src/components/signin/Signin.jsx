import React, { useState } from "react";
import { connect } from "react-redux";

import "./signin.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
    googleSignInStart,
    emailSignInStart,
} from "../../redux/user/user.action";

const Signin = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userCredentials;
    const onSubmit = async (e) => {
        e.preventDefault();

        emailSignInStart(email, password);
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={onSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    label="Email"
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                    label="Password"
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoggleSignIn
                    >
                        {" "}
                        Signin With Google{" "}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),

    // Sign in with email and password
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Signin);
