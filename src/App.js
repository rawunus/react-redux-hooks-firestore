import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../src/redux/user/userSelector";

import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SigninSignup from "./pages/signin-signup/SigninSignup";
import Checkout from "./pages/checkout/Checkout";
import { checkUserSession } from "./redux/user/user.action";

class App extends React.Component {
    unsubscribeFromAuth = null;
    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
        // const { setCurrentUser, collectionArry } = this.props;
        // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        //     if (userAuth) {
        //         const useRef = await createUserProfileDocument(userAuth);
        //         useRef.onSnapshot((snapShot) => {
        //             setCurrentUser({
        //                 id: snapShot.id,
        //                 ...snapShot.data(),
        //             });
        //         });
        //     }
        //     setCurrentUser(userAuth);
        //     // importing the collection items and catagories from json file into firestroe
        //     // addCollectionAndDocuments(
        //     //     "collections",
        //     //     collectionArry.map(({ title, items }) => ({ title, items }))
        //     // );
        // });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/signin">
                        {this.props.currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <SigninSignup />
                        )}
                    </Route>
                </Switch>
            </div>
        );
    }
}

// createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    //collectionArry: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
