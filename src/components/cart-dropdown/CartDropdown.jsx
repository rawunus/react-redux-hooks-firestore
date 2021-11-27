import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";

import "./cartdropdown.styles.scss";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push("Checkout");
                    dispatch(toggleCartHidden());
                }}
            >
                CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
