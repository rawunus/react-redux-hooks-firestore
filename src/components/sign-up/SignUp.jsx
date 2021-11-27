import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: "",
    });
    const { displayName, email, password, comfirmPassword } = userCredentials;
    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== comfirmPassword) {
            alert("password does not match");
            return;
        }

        signUpStart({ email, password, displayName });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">Don't Have a Account!</h2>
            <span className="text">Sign Up with your email and password</span>
            <form className="sign-up-form" onSubmit={onSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={onChange}
                    required
                    label="Display Name"
                />
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
                <FormInput
                    type="password"
                    name="comfirmPassword"
                    value={comfirmPassword}
                    onChange={onChange}
                    required
                    label="comfirm password"
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
