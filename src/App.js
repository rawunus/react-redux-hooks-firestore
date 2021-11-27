import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../src/redux/user/userSelector";

import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SigninSignup from "./pages/signin-signup/SigninSignup";
import Checkout from "./pages/checkout/Checkout";
import { checkUserSession } from "./redux/user/user.action";

const App = () => {
    // this is equivalent to mapStateToProps method in redux
    const currentUser = useSelector(selectCurrentUser);

    // this is equivalent to mapDispatchToProps method in redux dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/signin">
                    {currentUser ? <Redirect to="/" /> : <SigninSignup />}
                </Route>
            </Switch>
        </div>
    );
};

// createStructuredSelector replaces with useSelector hook
// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
// });

// this Method replace with useDispatch hooks
// const mapDispatchToProps = (dispatch) => ({
//     checkUserSession: () => dispatch(checkUserSession()),
// });

export default App;
