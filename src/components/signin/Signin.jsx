import React from "react";
import { connect } from "react-redux";

import "./signin.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {
    googleSignInStart,
    emailSignInStart,
} from "../../redux/user/user.action";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmit}>
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),

    // Sign in with email and password
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Signin);
