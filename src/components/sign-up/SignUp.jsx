import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signUpStart } from "../../redux/user/user.action";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            comfirmPassword: "",
        };
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, comfirmPassword } = this.state;

        if (password !== comfirmPassword) {
            alert("password does not match");
            return;
        }

        signUpStart({ email, password, displayName });
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">Don't Have a Account!</h2>
                <span className="text">
                    Sign Up with your email and password
                </span>
                <form className="sign-up-form" onSubmit={this.onSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        onChange={this.onChange}
                        required
                        label="Display Name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                        label="Password"
                    />
                    <FormInput
                        type="password"
                        name="comfirmPassword"
                        value={this.state.comfirmPassword}
                        onChange={this.onChange}
                        required
                        label="comfirm password"
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
